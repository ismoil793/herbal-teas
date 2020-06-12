import React, {Component} from 'react';
import HomeSlider from "./HomeSlider";
import Products from "./Products";
import jQuery from 'jquery';
window.jQuery = jQuery;
// require 'bootstrap/js/affix.js';


class Home extends Component {
   render() {

      return (
          <main className="main">

             <HomeSlider/>

             <Products/>

          </main>
      )
   }
}


export default Home;