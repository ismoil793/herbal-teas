import React from 'react';
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom";

const About = () => {
   return (

       <section className="about-company">


          <div className="hero-wrap hero-bread" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
             <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                   <div className="col-md-12 text-center">
                      <h1 className="mb-0 bread">О нас</h1>
                   </div>
                </div>
             </div>
          </div>


          <div className="container mt-5">
             <div className="row">

                <div className="col-md-6">
                   <iframe
                       src="https://www.youtube.com/embed/YMwyLeyFecE" frameBorder="0"
                       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                       width="100%"
                       height="300"
                       title="about our company"
                   >
                   </iframe>
                </div>

                <div className="col-md-6">
                   <div className="text-center">
                      <img className="sd-farm-logo" src="/images/SD-Farm.png" alt="Herbal teas logo"/>
                      <h3>Soft Darmon Farm</h3>
                      <h5>Herbal Tea Products</h5>
                   </div>
                   <div>
                      <div className="p-3">
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta esse
                         quidem tenetur vitae, voluptate. Aperiam blanditiis deserunt, iure libero quo sed suscipit
                         tempora.
                         <div className="mt-3">
                            <Link to="/products" className="btn btn-success">Наши продукты</Link>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="col-md-6 mt-5">
                   <h3>Где нас найти?</h3>
                   <div className="pt-3 pr-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta esse
                      quidem tenetur vitae, voluptate. Aperiam blanditiis deserunt, iure libero quo sed suscipit
                      tempora.
                      <div className="mt-3">
                         <Link to="/contacts" className="btn btn-success">Связаться с нами</Link>
                      </div>
                   </div>
                </div>

                <div className="col-md-6 mt-5">
                   <iframe
                       src="https://yandex.ru/map-widget/v1/?um=constructor%3A47b3a7f5b12aade7b9c0e4c6ea787b5d8628eab99c555635b3019ed6c6ef0b33&amp;source=constructor"
                       frameBorder="0"
                       width="100%"
                       height="300"
                       title="map"
                   >
                   </iframe>
                </div>

             </div>
          </div>

          <div className="ftco-section mt-5" style={{backgroundColor: "#F7F6F2"}}>
             <div className="container">
                <div className="row no-gutters ftco-services">
                   <div className="col-md-3 text-center d-flex align-self-stretch ">
                      <div className="media block-6 services mb-md-0 mb-4">
                         <div
                             className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                            <FontAwesome name="truck"/>
                         </div>
                         <div className="media-body">
                            <h3 className="heading">Быстрая работа с партнерами</h3>
                            <span>Сработаемся</span>
                         </div>
                      </div>
                   </div>
                   <div className="col-md-3 text-center d-flex align-self-stretch ">
                      <div className="media block-6 services mb-md-0 mb-4">
                         <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                            <FontAwesome name="leaf"/>
                         </div>
                         <div className="media-body">
                            <h3 className="heading">Из лечебных растений</h3>
                            <span>Природные растения</span>
                         </div>
                      </div>
                   </div>
                   <div className="col-md-3 text-center d-flex align-self-stretch ">
                      <div className="media block-6 services mb-md-0 mb-4">
                         <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                            <FontAwesome name="certificate"/>
                         </div>
                         <div className="media-body">
                            <h3 className="heading">Высокое качество</h3>
                            <span>Качественные продукты</span>
                         </div>
                      </div>
                   </div>
                   <div className="col-md-3 text-center d-flex align-self-stretch ">
                      <div className="media block-6 services mb-md-0 mb-4">
                         <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                            <FontAwesome name="phone"/>
                         </div>
                         <div className="media-body">
                            <h3 className="heading">Обратная связь</h3>
                            <span>Служба 24/7</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>


       </section>
   );
};

export default About;