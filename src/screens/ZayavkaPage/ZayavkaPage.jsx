import React from "react";
import { Header } from "../../components/Header";
import "./style.css";

export default function ZayavkaPage(){
  return (
    <div className="zayavka-page">
      <div className="div-2">
        <div className="group">
          <div
            className="overlap"
            style={{
              backgroundImage: "url(/img/frame.svg)",
            }}
          >
            <div className="group-2">
              <img className="email-free-social" alt="Email free social" src="/img/email-free-social-icons-2-2.svg" />
              <div className="group-3">
                <div className="overlap-group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">Введите сюда ваш телефон</div>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-2">
                    <div className="group-4">
                      <div className="overlap-group-2">
                        <div className="rectangle-wrapper">
                          <div className="rectangle" />
                        </div>
                        <div className="group-5">
                          <div className="text-wrapper-3">Отправить</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-wrapper-4">Введите сюда ваш e-mail</div>
                  </div>
                </div>
                <div className="group-6">
                  <h1 className="h-1">Отправьте Заявку</h1>
                  <div className="group-7">
                    <div className="text-wrapper-5">Связь</div>
                    <img className="img" alt="Rectangle" src="/img/rectangle-2889.svg" />
                    <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-2889.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header
          frameStyle={{
            alignItems: "center",
            gap: "unset",
            height: "20px",
            justifyContent: "space-between",
            width: "657px",
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
