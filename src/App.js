import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example1 from "pages/ExampleInputNumber";
import Example2 from "pages/ExampleInputDate";
import Example3 from "pages/ExampleBreadcrumb";

import "react-toastify/dist/ReactToastify.css";
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/example1" component={Example1} />
        <Route path="/example2" component={Example2} />
        <Route path="/example3" component={Example3} />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
