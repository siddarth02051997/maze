import React from "react";
import { Link } from "react-router-dom";

function AddressCard(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <iframe
            title="location map"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyDqkEneuBvSCv5aWdMiKi5N7ljQHuSOc6s&output=embed"
          ></iframe>
          <div className="cards__item__info">
            <h5 className="cards__item__text">HYDERABAD OFFICE ADDRESS</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default AddressCard;
