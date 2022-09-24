import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/NewProduct";
import Product from "./pages/Product";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



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
          <ProductList />
        </Route>
        <Route exact path="/products/:productsId">
          <Product />
        </Route>
        <Route exact path="/newproduct">
          <NewProduct />
        </Route>
      </Switch>
    </Router>

  );
};

export default App;
