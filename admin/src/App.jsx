import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// const Container = styled.div``;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" >
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
