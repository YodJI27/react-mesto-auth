import React from "react";

function Login() {
  return (
    <section className="login">
      <form className="login__form">
        <h2 className="login__title">Вход</h2>
        <input
          placeholder="Email"
          type="email"
          className="login__input"
          name="email"
        ></input>
        <input
          placeholder="Пароль"
          type="password"
          className="login__input"
          name="password"
        ></input>
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </section>
  );
}
export default Login;
