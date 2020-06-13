import React, {Component} from 'react';
import HomeSlider from "./HomeSlider";
import Products from "./Products";
import ProductTypes from "./ProductTypes";

import jQuery from 'jquery';

window.jQuery = jQuery;
// require 'bootstrap/js/affix.js';


const Home = () => {

   return (
       <main className="main">

          <section>
             <HomeSlider/>

             <ProductTypes/>

             <Products/>
          </section>
       </main>
   )
};


export default Home;