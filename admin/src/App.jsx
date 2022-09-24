import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/productList/ProductList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Product from "./pages/Product";


const Container = styled.div``;

function App() {
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Product />
        </Route>
        <Route exact path="/products/:productsId">
          <Product />
        </Route>
        <Route exact path="/newproduct">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
};

export default App;
