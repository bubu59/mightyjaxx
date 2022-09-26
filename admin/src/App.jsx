// import styled from "styled-components";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/NewProduct";
import Product from "./pages/Product";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {admin && (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </>
        )}
      </Switch>
    </Router>

  );
};

export default App;
