import React from "react";
import { useLocation } from "react-router";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const locationLink = useLocation();

  const linkSwitch = () =>
    locationLink.pathname === "/sign-in" ? (
      <Link className="header__text" to="/sign-up">
        Регистрация
      </Link>
    ) : (
      <Link className="header__text" to="/sign-in">
        Войти
      </Link>
    );

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место"></img>
      {linkSwitch()}
    </header>
  );
}
export default Header;
