import React, { useEffect } from "react";
import "../../App.css";
import Cards from "../Cards";
export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1 className="services">SERVICES</h1>
      <Cards />
    </>
  );
}
