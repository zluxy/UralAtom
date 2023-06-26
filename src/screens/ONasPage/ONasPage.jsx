import React from "react";
import { Header } from "../../components/Header";
import "./style.css";

export const ONasPage = () => {
  return (
    <div className="o-nas-page">
      <div className="div-2">
        <div className="overlap">
          <img
            className="img"
            alt="Frame"
            src="https://generation-sessions.s3.amazonaws.com/84c5535e177856a4d12a0066e4d57849/img/frame.svg"
          />
          <img
            className="frame-2"
            alt="Frame"
            src="https://generation-sessions.s3.amazonaws.com/84c5535e177856a4d12a0066e4d57849/img/frame-4.svg"
          />
          <div className="overlap-2">
            <img
              className="frame-3"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/84c5535e177856a4d12a0066e4d57849/img/frame-3.svg"
            />
            <img
              className="frame-4"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/84c5535e177856a4d12a0066e4d57849/img/frame-2.svg"
            />
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://generation-sessions.s3.amazonaws.com/84c5535e177856a4d12a0066e4d57849/img/ellipse-1238@2x.png"
            />
          </div>
          <div className="text">
            <div className="group">
              <h1 className="h-1">Поднимите свой бизнес на новую высоту</h1>
              <p className="p">
                <span className="text-wrapper-2">
                  По отношению к покупателям Промышленная группа «Уралатом» выполняет все действия, необходимые для
                  покупки и дальнейшей бесперебойной эксплуатации продукции:
                  <br />
                </span>
                <span className="text-wrapper-3">
                  — согласование технических условий в рамках преддоговорной работы
                  <br />— организация отгрузки и доставки продукции
                  <br />— подготовка договора и всех необходимых платежных и отгрузочных документов
                  <br />— организация технических консультаций;
                  <br />— организация предпродажной подготовки продукции, гарантийного и постгарантийного ремонта,
                  снабжения запасными частями.
                </span>
              </p>
            </div>
            <img
              className="frame-5"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/84c5535e177856a4d12a0066e4d57849/img/frame-1.svg"
            />
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
