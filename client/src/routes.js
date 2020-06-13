import React from 'react';
import {Switch, Route} from "react-router-dom";

import NotFound from "./components/404/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/about";
import AddPost from "./containers/Admin/addPost";
import Layout from "./hoc/layout";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Products_c from "./components/Products/products_c";
import ManageProducts from "./containers/Admin/ManageProducts";

import Auth from "./hoc/auth"

// Auth(Component, reload)

// reload true means that if user is not authenticated it will be redirected to login page
// if reload is false it means user is already logged in and redirected to his dashboard
// if there is no reload user can access those pages without authentication


const Routes = () => {
   return (
       <Layout>
          <Switch>
             <Route path="/login" exact component={Auth(Login, false)} />
             <Route path="/logout" exact component={Auth(Logout, true)} />
             <Route path="/addPost" exact component={Auth(AddPost, true)} />
             <Route path="/list/products" exact component={Auth(ManageProducts, true)} />
             <Route path="/products" exact component={Auth(Products_c, null)} />
             <Route path="/about" exact component={Auth(About, null)} />
             <Route path="/" exact component={Auth(Home, null)} />
             <Route path="*" component={Auth(NotFound, null)}/>
          </Switch>
       </Layout>
   );
};

export default Routes;