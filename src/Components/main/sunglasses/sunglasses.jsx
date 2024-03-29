import React, { useState } from "react";
import initialGlassesItems from "../../../../glassesitems.js";
import "./sunglasses.css";

export default function Sunglasses({ addTheCartItem }) {
  const [glasses, setGlasses] = useState(initialGlassesItems);

  return (
    <div className="sunglasses-container">
      {glasses.map((item, index) => (
        <div className="sunglasses-item" key={index}>
          <img
            className="sunglasses-image"
            src={`assets/glasses/${item.id}.jpg`}
            alt="Sunglasses"
            onError={(e) => console.error("Error loading image:", e)}
          />
          <div className="sunglasses-details">
            <span className="sunglasses-price">{item.price}</span>
            <button
              className="add-to-cart-button"
              onClick={() => {
                addTheCartItem(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
