

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

export default async function getAllProducts() {
  const query = `{
    products(first: 10) {
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
  console.log('response', response)
  const products = response ? response : 'Products Not Fetched';
  console.log('products bhu', products)

  return products
}


