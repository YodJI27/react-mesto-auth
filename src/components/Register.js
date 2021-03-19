import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <form className="register__form">
        <h2 className="register__title">Регистрация</h2>
        <input
          placeholder="Email"
          type="email"
          className="register__input"
          name="email"
        ></input>
        <input
          placeholder="Пароль"
          type="password"
          className="register__input"
          name="password"
        ></input>
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
        <span className="register__text">
          Уже зарегистированы?{" "}
          <Link className="register__link" to="/sign-in">
            Войти
          </Link>
        </span>
      </form>
    </section>
  );
}
export default Register;
