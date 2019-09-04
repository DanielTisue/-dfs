import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ProductButtonContainer, CartButtonContainer } from './Button';


export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
         const {id, img, info, price, title, inCart} = value.detailProduct;
         return (
           <div className="container py-5">
             {/* title */}
             <div className="row">
               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                 <h1>{title}</h1>
               </div>
             </div>
             {/* end title */}
             {/* product info */}
             <div className="row">
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product" />
               </div>
               {/* product text */}
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2> style : {title} </h2>
                <h6 className="text-lowercase text-muted mt-3 mb-2">
                   <em>limited stock left</em>
                </h6>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>{price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  more info
                </p>
                <p className="text-muted">
                {info}
                </p>
                
                  <div>
                    <Link to='/'>
                     <ProductButtonContainer>
                       back to products
                     </ProductButtonContainer>
                    </Link>
                    <CartButtonContainer 
                    // cart
                    disabled={inCart ? true : false} onClick={() => {
                       value.addToCart(id);
                       value.openModal(id);
                     }}>
                       {inCart ? "inCart" : "add to cart"}
                    </CartButtonContainer>
                  </div>
               </div>
             </div>
           </div>
         )
        }}
      </ProductConsumer>
    )
  }
}
