import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.css";  //to import only bootstrap

//mongodb://talhahassan:talhahassan@cluster0-shard-00-00.90kgp.mongodb.net:27017,cluster0-shard-00-01.90kgp.mongodb.net:27017,cluster0-shard-00-02.90kgp.mongodb.net:27017/react?ssl=true&replicaSet=atlas-j5onaq-shard-0&authSource=admin&retryWrites=true&w=majority

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from './components/menu';
import LandingPage from './components/landPage'
import Products from './components/pro'
import ContactUs from './components/contact'
import NotFound from './components/notfound'
import NewProducts from "./components/addNewProduct";
import updateProducts from "./components/updateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Second from "./components/secondPage";
/* <Menu />
      <Search />
      <Carasol />
      <Collection />
      <Sale />
      <Brand />
      <Footer /> */
function App(){
  return(
    <Router>
    <div>
    <ToastContainer />
   

      <div className="c2">
      <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/second" exact component={Second} />
          <Route path="/product/new" component={NewProducts} />
          <Route path="/product/update/:id" component={updateProducts} />
          <Route path="/product/:page?" component={Products} />      
          <Route path="/product" component={Products} />      
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/not-found" />
        </Switch>
        </div>
    </div>
    </Router>
  );
}


export default App;
