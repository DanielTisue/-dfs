import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ProductButtonContainer, CartButtonContainer } from './Button';
import { Link } from 'react-router-dom';


export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {modalOpen, closeModal} = value;
          const {img, title, price} = value.modalProduct;

          if(!modalOpen){
            return null;
          } else {
            return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                    <p className=" alert alert-success">{title} is in your cart!</p>
                    <img src={img} className="img-fluid" alt="product" />
                    <h6>{title}</h6>
                    <h5 className="text-muted text-capitalize">price : ${price}</h5>
                    <Link to='/' >
                      <ProductButtonContainer onClick={()=> closeModal()}>
                        Continue Shopping
                      </ProductButtonContainer>
                    </Link>
                    <Link to='/cart' >
                      <CartButtonContainer onClick={() => closeModal()}>
                        Go to cart
                    </CartButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
            );
          } 
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div `
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
  background: var(--mainWhite);
  border-radius: 5px;
}
`;