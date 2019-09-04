import React from 'react'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-muted text-lowercase">
          <em>
            <h3>...your cart is currently empty</h3>
          </em>
        </div>
      </div>  
    </div>
  );
}
