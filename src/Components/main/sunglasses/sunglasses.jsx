import React, { useState } from "react";
import initialGlassesItems from "../../../../glassesitems.js";
import "./sunglasses.css";

export default function Sunglasses({ addTheCartItem }) {
  const [glasses, setGlasses] = useState(initialGlassesItems);

  return (
    <div className="sunglasses_container" id ="Sunglasses">
        <h1 className="shades">Sunglasses</h1>
        
        <p></p>
      {glasses.map((item, index) => (
        <div className="sunglasses_item" key={index}>
          <img
            className="sunglasses_image"
            src={`assets/glasses/${item.id}.jpg`}
            alt="Sunglasses"
            onError={(e) => console.error("Error loading image:", e)}
          />
          <div className="sunglasses_details">
            <span className="sunglasses_price">{item.price}naira</span>
            <div className= "button">
            <button
              className="addtocart"
              onClick={() => {
                addTheCartItem(item);
              }}
            >
              Add to Cart
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
