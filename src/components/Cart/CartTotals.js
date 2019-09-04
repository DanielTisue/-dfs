import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';



export default function CartTotals({ value, history }) {
  const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/cart">
              <button className="btn btn-outline-danger btn small text-capitalize mb-3 px-5" type="button" onClick={() => clearCart()} >
                clear cart
              </button>
            </Link>
            <h6 className="text-muted text-lowercase"><em>....free shipping!</em></h6>
            <h6><span className="text-title">subtotal :</span><strong>${cartSubtotal}</strong></h6>
            <h6><span className="text-title">tax :</span><strong>${cartTax}</strong></h6>
            <h5><span className="text-title"><strong>total :</strong></span><strong>${cartTotal}</strong></h5>
            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
