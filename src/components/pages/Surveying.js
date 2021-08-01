import React, { useEffect } from "react";
import "../../App.css";

export default function Surveying() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="services">SURVEYING</h1>
      <div className="coming-soon">
        <i className="fas fa-pencil-ruler" />
        <h1>Coming Soon</h1>
        <h3>
          Subscribe to our newsletter to get benefitted from our welcome offers.
        </h3>
      </div>
    </>
  );
}
