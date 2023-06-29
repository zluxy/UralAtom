import React from "react";
import { Header } from "../../components/Header";
import "./style.css";

export default function Kontaktnaya(){
  return (
    <div className="kontaktnaya">
      <div className="div-2">
        <div className="about">
          <div className="overlap">
            <img className="rectangle" alt="Rectangle" src="https://github.com/artyr9602/UralAtom/blob/main/static/img/rectangle-2850.png?raw=true" />
            <div className="rectangle-2" />
            <div className="about-design">
              <div className="overlap-group-2">
                <img className="group" alt="Group" src="https://github.com/artyr9602/UralAtom/blob/main/static/img/group-8581.png?raw=true" />
                <img className="img" alt="Rectangle" src="https://github.com/artyr9602/UralAtom/blob/main/static/img/rectangle-2717.png?raw=true" />
                <img className="rectangle-3" alt="Rectangle" src="https://github.com/artyr9602/UralAtom/blob/main/static/img/rectangle-2716.png?raw=true" />
                <div className="rectangle-4" />
                <div className="element-6">25</div>
                <div className="years-of-experience">Лет опыта</div>
              </div>
            </div>
            <div className="about-2">
              <h1 className="h-1">Контактная Информация</h1>
              <p className="p">
                <span className="text-wrapper-2">
                  Наш адрес: 620030, Россия, г. Екатеринбург, пер. Волчанский д.11, офис 1<br />
                </span>
                <span className="text-wrapper-3">
                  Телефон: +7 (343) 389-03-75
                  <br />
                  Факс: +7 (343) 389-03-76
                  <br />
                  E-mail: pgatom@pgatom.ru
                </span>
              </p>
            </div>
          </div>
        </div>
        <Header
          frameStyle={{
            left: "390px",
          }}
          overlapGroupStyle={{
            width: "1440px",
          }}
          style={{
            backgroundColor: "transparent",
            left: "0",
            position: "fixed",
            top: "-29px",
          }}
        />
      </div>
    </div>
  );
};
