import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import InteriorDesigning from "./components/pages/InteriorDesigning";
import Construction from "./components/pages/Construction";
import Surveying from "./components/pages/Surveying";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/services" component={Services} />
                  <Route path="/contact-us" component={ContactUs} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route
                    path="/interior-designing"
                    component={InteriorDesigning}
                  />
                  <Route path="/construction" component={Construction} />
                  <Route path="/surveying" component={Surveying} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </Router>
    </>
  );
}
