import "./products.scss";

import { NavLink, useSearchParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

import { FaRegWindowClose } from "react-icons/fa";
import HBag from "../../assets/bag.svg";
import Module from "../Module/Module";
import axios from "axios";

let API_URL = "https://dummyjson.com";

function Products() {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [detail, setDetail] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  let id = searchParams.get("detail");
  let limit = searchParams.get("limit") || 1;
  let count = 6;

  document.body.style.overflow = id ? "hidden" : "auto";

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, {
        params: {
          limit: count * limit,
        },
      })
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [limit]);

  useEffect(() => {
    let id = searchParams.get("detail");
    if (id) {
      setDetailsLoading(true);
      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => setDetail(res.data))
        .finally(() => setDetailsLoading(false));
    }
  }, [searchParams]);

  const closeDetails = useCallback(() => {
    setDetail(null);
    setSearchParams({});
  }, []);

  const productData = data?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="products__card__img">
        <img
          onClick={() => setSearchParams({ detail: product.id })}
          src={product?.images[0]}
          alt=""
        />
      </div>
      <div className="products__card__info__oll">
        <div className="products__card__info">
          <NavLink to={`/single/${product.id}`}>
            <h3 className="products__card__info__title">
              Name: {product?.title}
            </h3>
          </NavLink>
          <h4>Brand: {product?.brand}</h4>
          <p className="products__card__info__text">
            Description: {product?.description}
          </p>
        </div>
        <div className="products__card__info__shop">
          <p className="products__card__info__desc">{product?.price} руб</p>
          <button>
            <img src={HBag} alt="" />
            <p>В корзину</p>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="products">
      <h1 className="products__title">Готовые наборы</h1>
      <div className="products__cards container">{productData}</div>
      {searchParams.get("detail") ? (
        <Module width={"60%"} close={closeDetails}>
          {detailsLoading ? (
            <h2 className="products__module__loading">Loading...</h2>
          ) : (
            <div className="products__module">
              <button
                className="products__module__close__btn"
                onClick={closeDetails}
              >
                <FaRegWindowClose />
              </button>
              <img src={detail?.images[0]} width={400} alt="" />
              <div className="products__module__info">
                <h2>{detail?.title}</h2>
                <h4>{detail?.brand}</h4>
                <p>{detail?.description}</p>
              </div>
            </div>
          )}
        </Module>
      ) : (
        <></>
      )}
      <button
        onClick={() => setSearchParams({ limit: +limit + 1 })}
        className="products__button__see-more"
      >
        See More
      </button>
    </section>
  );
}

export default Products;
