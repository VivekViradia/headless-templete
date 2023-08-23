

export async function ShopifyData(query) {

  try {
    const response = await fetch('https://hydrogen-storefront-ec.myshopify.com/api/2023-07/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '614cfb3168b5b9ae186388e295f1edf0',
      },
      body: JSON.stringify({
        query
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { data } = await response.json();
    console.log("Shopify response data", data)

    if (!data) {
      throw new Error('No data received from Shopify API');
    }

    return data;
  } catch (error) {
    throw new Error(`Error fetching from Shopify API: ${error.message}`);
  }

}

export async function getAllProducts() {
  const query = `{
    productByHandle(first: 10) {
      edges {
        node {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
      }`;

  const response = await ShopifyData(query);
  // console.log('response', response)
  const products = response ? response : 'Products Not Fetched';
  // console.log('products bhu', products)

  return products
}

export async function getCollections() {
  const query = `{
    collections(first: 3) {
      nodes {
        id
        title
        products(first: 3) {
          edges {
            node {
              title
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                nodes {
                  altText
                  id
                  url
                }
              }
              handle
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)
  const collections = response ? response : "Collection Not Fetched"
  return collections
}

export async function getProductByHandle(productHandle) {
  // console.log()
  const query = `{
  product(handle: "${productHandle}") {
    id
    title
    description
    productType
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 5) {
      edges {
        node {
          url
          altText
        }
      }
    }
    variants(first: 10) {
      nodes {
        id
        title
      }
    }
  }
}`

  const response = await ShopifyData(query)
  const product = response ? response : "ProductByHandle Not Fetched"
  return product
}

export async function createCartMutation(quantity, id) {
  // console.log('quantity', quantity, 'id', id)
  const gql = String.raw
  const query = gql`
  mutation{
    cartCreate(
      input: {lines: [{quantity: ${quantity}, merchandiseId: "${id}"}]}
    ) {
      cart {
        id
        createdAt
        updatedAt
        checkoutUrl
      }
    }
  }`;

  const response = await ShopifyData(query);
  // console.log('response', response)
  const checkout = response
    ? response
    : [];
  // console.log("checkoutCreate shopifyDAta", checkout)

  return checkout;
}

export async function updateCartMutation(cartId, lines) {
  const lineItems = lines.map((item) => {
    return `{
      merchandiseId: "${item.merchandiseId}",
      quantity:  ${item.quantity}
    }`;
  });
  // console.log('lineItems', lineItems)
  // console.log('lineItems cartID', cartId)
  const query = `
  mutation {
    cartLinesAdd(cartId: "${cartId}", lines: [${lineItems}]) {
      cart {
        id
      }
    }
  }`;

  const response = await ShopifyData(query);
  // console.log('response Update query', response)
  const checkout = response
    ? response
    : "updateCartMutation Not Fetched";

  return checkout;
}

export async function getCartProducts() {
  const query = `
  cart(id: $id) {
    id
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              image {
                url
                altText
                width
                height
              }
              product {
                id
                title
                handle
              }
            }
          }
        }
      }
    }
    cost {
      totalAmount {
        amount
        currencyCode
      }
    }
    checkoutUrl
  }`

  const response = await ShopifyData(query)
  console.log('response getCartProducts query', response)
  const data = response ? response : [];
  return data
}