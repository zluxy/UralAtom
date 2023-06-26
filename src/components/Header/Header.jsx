/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Header = ({ style, overlapGroupStyle }) => {
  return (
    <div className="header" style={style}>
      <div className="overlap-group" style={overlapGroupStyle}>
        <div className="div" />
        <img
          className="ural-atom-logo"
          alt="Ural atom logo"
          src="https://generation-sessions.s3.amazonaws.com/dadeebc3682d51bc898173f141933a92/img/uralatomlogo-1@2x.png"
        />
        <p className="element">
          <span className="text-wrapper">
            Наши телефоны:
            <br />
          </span>
          <span className="span">
            +7 (343) 389-03-75
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;　 389-03-76
          </span>
        </p>
        <div className="frame">
          <div className="element-2">О нас</div>
          <div className="element-3">Каталог продукции</div>
          <div className="element-4">Новости</div>
          <div className="element-5">Контактная информация</div>
        </div>
      </div>
    </div>
  );
};
