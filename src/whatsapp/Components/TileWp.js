import React from "react";
import "./TileWp.css";
const TileWp = ({
  senderName = "Someone 🖤",
  msg = "Invalid message",
  time = "12:00 AM",
  senderDp,
  msgStatus = "far fa-check-circle",
}) => {
  return (
    <div className="tile-wp">
      <div className="tile-wp-dp">
        <i class="fas fa-user-circle"></i>
      </div>
      <div className="tile-wp-msginfo">
        <p className="tile-wp-name">{senderName}</p>
        <p className="tile-wp-message">
          <i class={msgStatus}></i>
          {msg}
        </p>
      </div>
      <p className="tile-wp-time">{time}</p>
    </div>
  );
};

export default TileWp;
