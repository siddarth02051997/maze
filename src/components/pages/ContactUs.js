import React, { useEffect } from "react";
import "../../App.css";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contact-us">
      Contact Us
      {/* <AddressCard /> */}
    </div>
  );
}
