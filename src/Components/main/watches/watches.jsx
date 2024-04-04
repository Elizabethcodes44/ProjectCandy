import { useState } from "react";
import initialWatchesItems from "../../../../watches.js";
import "./watches.css";

export default function Watches({ addToCart }) {
  const [watches, setWatches] = useState(initialWatchesItems);

  return (
    <div className="watches_container" id="Watches">
  <h1 className="watches">Wrist Watches</h1>
  <div className="watches_items">
    {watches.map((item, index) => (
      <div className="watches_item" key={index}>
        <img
          className="watches_image"
          src={`assets/watches/${item.id}.jpg`}
          alt="Watches"
          onError={(e) => console.error("Error loading image:", e)}
        />
        <div className="watches_details">
          <span className="watches_price">{item.price} naira</span>
          <button 
            className="watchescart"
            onClick={() => {
              addToCart(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
