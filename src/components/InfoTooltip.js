import React from "react";
import ok from "../images/ok.svg";
import cancel from "../images/cancel.svg";

function InfoTooltip(props) {
  return (
    <section className={`tool ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="tool__container">
        <button
          className="tool__button"
          type="reset"
          onClick={props.onClose}
        ></button>

        <div className="tool__image">
          {props.loadingOk ? (
            <img src={ok} alt="ok" />
          ) : (
            <img src={cancel} alt="error" />
          )}
        </div>
        <span className="tool__text">
          {props.loadingOk
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </span>
      </div>
    </section>
  );
}

export default InfoTooltip;
