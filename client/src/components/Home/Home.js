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


             <section className="ftco-section contact-section bg-light pb-5">
                <div className="container mb-5">
                   <div className="row block-9">
                      <div className="col-md-6 order-md-last">
                         <form action="https://submit-form.com/9_ZvOMAd2jMWED29dz8u-" target="_self" className="bg-white p-4 contact-form">
                            <h3 style={{color: "#88AD3F"}}>Свяжитесь с нами</h3>
                            <div className="form-group">
                               <input type="text" name="Name" required={true} className="form-control" placeholder="Ваше имя"/>
                            </div>
                            <div className="form-group">
                               <input type="email" name="Email" required={true} className="form-control" placeholder="Ваш Email"/>
                            </div>
                            <div className="form-group">
                               <input type="text" name="Subject" required={true} className="form-control" placeholder="Тема"/>
                            </div>
                            <div className="form-group">
                            <textarea name="Message" id="" required={true} cols="30" rows="7" className="form-control"
                                      placeholder="Сообщение" />
                            </div>
                            <div className="form-group">
                               <input type="submit" value="Отправить" className="btn btn-primary py-3 px-5"/>
                            </div>
                         </form>

                      </div>

                      <div className="col-md-6 d-flex">
                         <div id="map" className="bg-white">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A47b3a7f5b12aade7b9c0e4c6ea787b5d8628eab99c555635b3019ed6c6ef0b33&amp;source=constructor"
                                frameBorder="0"
                                width="100%"
                                height="572"
                            >
                            </iframe>
                         </div>
                      </div>
                   </div>
                </div>
             </section>

          </section>
       </main>
   )
};


export default Home;