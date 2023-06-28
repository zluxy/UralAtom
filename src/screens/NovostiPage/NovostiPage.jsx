import React from "react";
import { Header } from "../../components/Header";
import "./style.css";

export default function NovostiPage(){
  return (
    <div className="novosti-page">
      <div className="div-2">
        <div className="overlap">
          <div className="blogs">
            <div className="group">
              <h1 className="h-1">Новости Компании</h1>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <img className="rectangle" alt="Rectangle" src="/img/rectangle-2285.png" />
                <div className="rectangle-2" />
                <div className="component">
                  <div className="text-wrapper-2">comments</div>
                  <div className="text-wrapper-3">Комментариев (05)</div>
                </div>
                <div className="component-2">
                  <div className="text-wrapper-4">user</div>
                  <div className="text-wrapper-5">Админ</div>
                </div>
                <div className="rectangle-3" />
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-6">30</div>
                      <div className="text-wrapper-7">Июня</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-3">
                <img className="img" alt="Rectangle" src="/img/rectangle-2921-1.png" />
                <div className="rectangle-4" />
                <div className="component-3">
                  <div className="text-wrapper-8">comments</div>
                  <div className="text-wrapper-9">Комментариев (05)</div>
                </div>
                <div className="component-4">
                  <div className="text-wrapper-10">user</div>
                  <div className="text-wrapper-11">Админ</div>
                </div>
                <div className="rectangle-5" />
                <div className="group-2">
                  <div className="group-3">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-12">30</div>
                      <div className="text-wrapper-13">Июня</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-6">
              <div className="overlap-4">
                <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-2921.png" />
                <div className="rectangle-7" />
                <div className="component-5">
                  <div className="text-wrapper-14">comments</div>
                  <div className="text-wrapper-15">Комментариев (05)</div>
                </div>
                <div className="component-6">
                  <div className="text-wrapper-16">user</div>
                  <div className="text-wrapper-17">Админ</div>
                </div>
                <div className="rectangle-8" />
                <div className="group-4">
                  <div className="group-5">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-18">30</div>
                      <div className="text-wrapper-19">Июня</div>
                    </div>
                  </div>
                </div>
              </div>
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
