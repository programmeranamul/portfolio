import "./App.css";
import Home from "./Components/HomePage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/AboutPage/About";
import Service from "./Components/ServicesPage/Service";
import ContactPage from "./Components/ContactPage/ContactPage";
import Portfolio from "./Components/PortfolioPage/Portfolio";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./Components/MediaQuery/MediaQuery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MouseParticles from "react-mouse-particles";

function App() {
  const [iseToggoled, setIsToggoled] = useState(false);
  const handelToggole = () => {
    setIsToggoled(!iseToggoled);
  };

  return (
    <Router>
      <div className="d-flex">
        <div
          className={`sidebar-container position-fixed ${
            iseToggoled ? "nav__toggle" : ""
          }`}
        >
          <Sidebar />
        </div>
        <div className="main-content">
          <FontAwesomeIcon
            icon={faBars}
            className="toggole__menu"
            onClick={handelToggole}
          />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
        <MouseParticles
          g={1}
          num={6}
          color="random"
          cull="col,image-wrapper"
          level={6}
        />
      </div>
    </Router>
  );
}

export default App;
