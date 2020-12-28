import React from "react";
import "./TileWp.css";
const TileWp = () => {
  return (
    <div className="tile-wp">
      <div className="tile-wp-dp">
        <i class="fas fa-user-circle"></i>
      </div>
      <div className="tile-wp-msginfo">
        <p className="tile-wp-name">Someone 🖤</p>
        <p className="tile-wp-message">Something...</p>
      </div>
      <p className="tile-wp-time">9:24 pm</p>
    </div>
  );
};

export default TileWp;
