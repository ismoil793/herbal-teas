import React from 'react';
import {Switch, Route} from "react-router-dom";

import NotFound from "./components/404/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/about";
import AddPost from "./containers/Admin/addPost";
import Layout from "./hoc/layout";

const Routes = () => {
   return (
       <Layout>
          <Switch>
             <Route path="/about" exact component={About} />
             <Route path="/addPost" exact component={AddPost} />
             <Route path="/" exact component={Home} />
             <Route path="*" component={NotFound}/>
          </Switch>
       </Layout>
   );
};

export default Routes;