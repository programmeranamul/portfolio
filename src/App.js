import './App.css';
import Home from './Components/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './Components/AboutPage/About';
import Service from './Components/ServicesPage/Service';
import ContactPage from './Components/ContactPage/ContactPage';
import Portfolio from './Components/PortfolioPage/Portfolio';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="main-content">
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
      </div>
    </Router>
  );
}

export default App;
