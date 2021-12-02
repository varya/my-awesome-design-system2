import React from "react";
import ReactDOM from "react-dom";
// We will use HashRouter instead of BrowserRouter to simplify deploy to Github Pages
import { HashRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
/*
 * Each page has its own file in the "product" folder. By default, it is the Home
 * page. The code for it is in the home.js file.
 */
import Home from "./pages/home";
import Details from "./pages/details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { GlobalStyle } from "design-system";

const StyledContainer = styled.div`
  width: 375px;
  margin: 0 auto;
  background: #fff;
  min-height: 800px;
`;

/*
 * Navigation panel fo easy navigation between pages.
 * It is meant to render only in development mode
 */
const DevelopmentNav = () => (
  <div
    style={{ height: "50px", display: "flex", justifyContent: "space-around" }}
  >
    <Link to="/">Home</Link>
    <Link to="/details/item1">Details</Link>
    <Link to="/cart/item1">Cart</Link>
    <Link to="/checkout">Checkout</Link>
  </div>
);
/*
 * The router says which path correspond to which page.
 */
const App = () => (
  <Router>
    {process.env.NODE_ENV === "development" && <DevelopmentNav />}
    <StyledContainer>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" render={(props) => <Details {...props} />} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/cart/:id" render={(props) => <Cart {...props} />} />
    </StyledContainer>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
