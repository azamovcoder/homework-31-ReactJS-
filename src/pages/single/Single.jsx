import "./single.scss";

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { IoStarSharp } from "react-icons/io5";
import axios from "axios";

const API_URL = "https://dummyjson.com";

function Single() {
  const [single, setSingle] = useState(null);
  let { id } = useParams();
  console.log(id);
  console.log(single);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((res) => setSingle(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(single);

  return (
    <div className="single container">
      <div className="single__card">
        <div className="single__card__img">
          <img src={single?.images[0]} alt="" />
        </div>
        <div className="single__card__info">
          <h2 className="single__card__info">{single?.title}</h2>
          <h4>Brand: {single?.brand}</h4>
          <p className="single__card__info">
            Description: {single?.description}
          </p>
          <p className="single__card__info">Price: {single?.price} $</p>
          <p>
            Rating:
            {single?.rating}
            <IoStarSharp />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Single;
