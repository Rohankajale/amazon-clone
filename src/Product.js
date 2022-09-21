import React from "react";
import "./Product.css";


function Product({ id, title, image, price, rating }) {
 
  return (
    <div className="product">
      <div className="product_info">
        <div class="product_title">{title}</div>
        <div className="product_price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;