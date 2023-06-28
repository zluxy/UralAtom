/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import {NavItem, NavLink, Nav} from 'reactstrap';
import {Link} from 'react-router-dom';
import "./style.css";

export const Header = ({ style, overlapGroupStyle }) => {
  return (
    <div className="header" style={style}>
      <div className="overlap-group" style={overlapGroupStyle}>
        <div className="div" />
          <Nav>
            <NavLink tag={Link} to="/home">
              <img
                className="ural-atom-logo"
                alt="Ural atom logo"
                src="https://generation-sessions.s3.amazonaws.com/dadeebc3682d51bc898173f141933a92/img/uralatomlogo-1@2x.png"
              />
            </NavLink>
          </Nav>
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
        <Nav className="frame">
          <NavItem>
             <NavLink tag={Link} className="element-2" to="/about">О нас</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="element-3" to="/products">Каталог продукции</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="element-4" to="/news">Новости</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="element-5" to="/contacts">Контактная информация</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};
