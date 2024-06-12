import "./header.scss";

import HBag from "../../../assets/bag.svg";
import HLoc from "../../../assets/place.svg";
import HPhone from "../../../assets/phone.svg";
import { NavLink } from "react-router-dom";
import React from "react";
import img from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header__top">
        <div className="header__top__row container">
          <ul className="header__top__row__list">
            <li className="header__top__row__item">Гарантия свежести</li>
            <li className="header__top__row__item">Доставка и оплата</li>
            <li className="header__top__row__item">Оптовые поставки</li>
            <li className="header__top__row__item">Контакты</li>
          </ul>
          <div className="header__top__row__right">
            <a href="#" className="header__top__row__right__icons">
              <img src={HLoc} alt="" />
              <p>Санкт-Петербург</p>
            </a>
            <a href="#" className="header__top__row__right__icons">
              <img src={HPhone} alt="phone.svg" />
              <p>8 812 309-82-88</p>
            </a>
            <a href="#" className="header__top__row__right__icons">
              <img src={HBag} alt="" />
              <p>В корзине (4 товара)</p>
            </a>
          </div>
        </div>
      </div>
      <header className="header container">
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__left__item">СЛАДКИЕ ДНИ</li>
            <li className="header__nav__left__item">подарочные наборы</li>
            <li className="header__nav__left__item">Собрать набор</li>
          </ul>
          <div className="header__nav__img">
            <NavLink to={"/"}>
              <img src={img} alt="" />
            </NavLink>
          </div>
          <ul className="header__nav__list">
            <li className="header__nav__left__item">Создать дизайн</li>
            <li className="header__nav__left__item">КОМПАНИЯМ</li>
            <li className="header__nav__left__item">ВЕСЬ КАТАЛОГ</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
