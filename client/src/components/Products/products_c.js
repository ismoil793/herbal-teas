import React from 'react';
import Products from "../Home/Products";
import ProductTypes from "../Home/ProductTypes";

const Products_c = () => {
   return (
       <section className="products-component">
          <ProductTypes/>
          <Products/>
       </section>
   );
};

export default Products_c;