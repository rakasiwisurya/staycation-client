import React from "react";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example1 from "pages/ExampleInputNumber";
import Example2 from "pages/ExampleInputDate";
import Example3 from "pages/ExampleBreadcrumb";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/example1" component={Example1} />
        <Route path="/example2" component={Example2} />
        <Route path="/example3" component={Example3} />
      </Router>
    </div>
  );
}

export default App;
