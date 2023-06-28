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
            <img className="img" alt="Frame" src="/img/frame.svg" />
            <img className="frame-2" alt="Frame" src="/img/frame-1.svg" />
          </div>
          <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-37285.png" />
          <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-37286.png" />
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
