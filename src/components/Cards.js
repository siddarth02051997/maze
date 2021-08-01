import React, { useEffect } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import AOS from "aos";
import "aos/dist/aos.css";

function Cards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="cards">
      <h1 style={{ textDecoration: "underline" }} data-aos="fade-up">
        Reasons why would you choose us
      </h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" data-aos="fade-up">
            <CardItem
              src="images/img-9.jpg"
              text="Reason 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Tag 1"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Reason 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Tag 2"
              path="/services"
            />
          </ul>
          <ul className="cards__items" data-aos="fade-up">
            <CardItem
              src="images/img-3.jpg"
              text="Reason 3 : Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Tag 3"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Reason 4 : Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Tag 4"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Reason 5 : Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Tag 5"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
