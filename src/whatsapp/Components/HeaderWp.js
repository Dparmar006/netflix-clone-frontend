import React from "react";
import "./HeaderWp.css";
const HeaderWp = () => {
  return (
    <header className="header-wp">
      <h3 className="title-wp">Whatsapp</h3>

      <div className="buttons-wp">
        <button className="icon-button-wp">
          <i class="fas fa-search"></i>
        </button>
        <button className="icon-button-wp">
          <i class="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </header>
  );
};

export default HeaderWp;
