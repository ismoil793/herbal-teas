import React from 'react';
import Products from "../Home/Products";
import ProductTypes from "../Home/ProductTypes";

const Products_c = () => {
   return (
       <section className="products-component">

          <div className="hero-wrap hero-bread mb-5" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
             <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                   <div className="col-md-12 text-center">
                      <h1 className="mb-0 bread">Продукты</h1>
                   </div>
                </div>
             </div>
          </div>

          <ProductTypes/>
          <Products/>
       </section>
   );
};

export default Products_c;