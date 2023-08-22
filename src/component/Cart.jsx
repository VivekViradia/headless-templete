import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiMinusSm } from "react-icons/hi";

const Cart = () => {
  return (
    <div className='row g-0'>
      <div className='col-lg-8'>
        <div className='p-5'>
          <div className='d-flex justify-content-between align-items-center mb-5'>
            <h1 className='fw-bold mb-0 text-black'>Shopping Cart</h1>
          </div>
          <hr className='my-4' />

          <div className='row mb-4 d-flex justify-content-between align-items-center'>
            <div className='col-md-2 col-lg-2 col-xl-2'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp'
                className='img-fluid rounded-3'
                alt='Cotton T-shirt'
              />
            </div>
            <div className='col-md-3 col-lg-3 col-xl-3'>
              <h6 className='text-muted'>Shirt</h6>
              <h6 className='text-black mb-0'>Cotton T-shirt</h6>
            </div>
            <div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
              <button
                className='btn btn-link px-2'
                // onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
                <HiMinusSm />
              </button>

              <input
                id='form1'
                min='0'
                name='quantity'
                value='1'
                type='number'
                className='form-control form-control-sm'
              />

              <button
                className='btn btn-link px-2'
                // onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              >
                <FiPlus />
              </button>
            </div>
            <div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
              <h6 className='mb-0'>€ 44.00</h6>
            </div>
            <div className='col-md-1 col-lg-1 col-xl-1 text-end'>
              <a href='#!' className='text-muted'>
                <FaTrashAlt />
              </a>
            </div>
          </div>

          <hr className='my-4' />

          <div className='pt-5'>
            <h6 className='mb-0'>
              <a href='/' className='text-body'>
                <i className='fas fa-long-arrow-alt-left me-2'></i>
                Back to shop
              </a>
            </h6>
          </div>
        </div>
      </div>
      <div className='col-lg-4 bg-grey'>
        <div className='p-5'>
          <h3 className='fw-bold mb-5 mt-2 pt-1'>Summary</h3>
          <hr className='my-4' />

          <div className='d-flex justify-content-between mb-5'>
            <h5 className='text-uppercase'>Total Items 3</h5>
          </div>

          <button
            type='button'
            className='btn btn-dark btn-block btn-lg'
            data-mdb-ripple-color='dark'
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
