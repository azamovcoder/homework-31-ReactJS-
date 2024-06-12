import "./footer.scss";

import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import img1 from "../../../assets/images/foo.png";
import img2 from "../../../assets/images/foo1.png";
import img3 from "../../../assets/images/foo2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__data container">
        <div className="footer__left">
          <div className="footer__left__icon">
            <div className="footer__left__item">
              <img src={img1} alt="" />
              <p>Готовим вручную и любовью</p>
            </div>
            <div className="footer__left__item">
              <img src={img2} alt="" />
              <p>Готовим вручную и любовью</p>
            </div>
            <div className="footer__left__item">
              <img src={img3} alt="" />
              <p>Готовим вручную и любовью</p>
            </div>
          </div>
          <p className="footer__left__item__text">
            © 2021 МакароншопООО "Квантум", Санкт-Петербург, улица Маршала
            Тухачевского, дом 22
          </p>
        </div>
        <ul className="footer__list">
          <h3>Информация</h3>
          <li className="footer__item">
            <a href="#">компании</a>
          </li>
          <li className="footer__item">
            <a href="#">Гарантии вкуса и свежести</a>
          </li>
          <li className="footer__item">
            <a href="#">Доставка и оплата</a>
          </li>
          <li className="footer__item">
            <a href="#">Контакты</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3>Каталог</h3>
          <li className="footer__item">
            <a href="#">Каталог десертов</a>
          </li>
          <li className="footer__item">
            <a href="#">Готовые наборы</a>
          </li>
          <li className="footer__item">
            <a href="#">Собрать свой набор</a>
          </li>
          <li className="footer__item">
            <a href="#">Наборы печатью</a>
          </li>
          <li className="footer__item">
            <a href="#">Свадебные предложения</a>
          </li>
          <li className="footer__item">
            <a href="#">Акции</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3>ДЛЯ БИЗНЕСА</h3>
          <li className="footer__item">
            <a href="#">Корпоративные подарки</a>
          </li>
          <li className="footer__item">
            <a href="#">Для юридических лиц</a>
          </li>
          <li className="footer__item">
            <a href="#">Оповикам</a>
          </li>
        </ul>
        <div className="footer__contact">
          <h3>+7 309 82 88</h3>
          <p> 9:00 до 21:00</p>
          <div className="footer__contact__btns">
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <RiLinkedinFill />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
