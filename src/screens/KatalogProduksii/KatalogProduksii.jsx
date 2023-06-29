import React from "react";
import { Header } from "../../components/Header";
import "./style.css";

export default function KatalogProduksii(){
  return (
    <div className="katalog-produksii">
      <div className="div-2">
        <div className="overlap">
          <div className="rectangle" />
          <div className="element-6">
            <h1 className="h-1">Каталог продукции</h1>
            <p className="p">
              Поставка, обслуживание и ремонт криогенного оборудования различного назначения является одним из двух
              основных направлений деятельности нашей компании. Мы предлагаем большой выбор воздухоразделительных
              установок, газификаторов, а также всевозможных емкостей для хранения криопродуктов. Обратившись в нашу
              компанию, вы получите исчерпывающие консультации по выбору криогенного оборудования и работе с ним
            </p>
            <img className="img" alt="Frame" src="https://raw.githubusercontent.com/artyr9602/UralAtom/d7880e4865e90d0041ff4d68e186f6558cfed71a/static/img/frame.svg" />
            <img className="frame-2" alt="Frame" src="https://raw.githubusercontent.com/artyr9602/UralAtom/d7880e4865e90d0041ff4d68e186f6558cfed71a/static/img/frame-1.svg" />
          </div>
          <img className="rectangle-2" alt="Rectangle" src="https://github.com/artyr9602/UralAtom/blob/main/static/img/rectangle-37285.png?raw=true" />
          <img className="rectangle-3" alt="Rectangle" src="https://github.com/artyr9602/UralAtom/blob/main/static/img/rectangle-37286.png?raw=true" />
          <div className="text-wrapper-2">Компрессорное оборудование</div>
          <div className="text-wrapper-3">Криогенное оборудование</div>
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
