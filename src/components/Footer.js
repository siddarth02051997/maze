import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to recieve updates on offers and services
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button className="input-areas-btn">Subscribe</Button>
          </form>
        </div>
      </section>

      <section className="footer-quicklinks">
        <span className="footer-quicklink clickable-footer-link">
          Privacy Policy
        </span>
        <span className="footer-quicklink">|</span>
        <span className="footer-quicklink clickable-footer-link">
          Customer Testimonials
        </span>
        <span className="footer-quicklink">|</span>
        <span className="footer-quicklink clickable-footer-link">
          Terms Of Service
        </span>
        <span className="footer-quicklink">|</span>
        <span className="footer-quicklink clickable-footer-link">
          Contact Us
        </span>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Maze
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">
            Copyright © 2021. Maze Constructions India Pvt. Ltd. All rights
            reserved. CIN: U24219TG1996PTC02533
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
