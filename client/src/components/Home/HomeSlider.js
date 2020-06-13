import React from 'react';
import FontAwesome from "react-fontawesome";

const HomeSlider = () => {
   return (

       <div>

          <div id="home-section" className="hero">


             <div>
                <div className="home-slider owl-carousel">
                   <div className="slider-item" style={{backgroundImage: "url(images/bg_1.jpg)"}}>
                      <div className="overlay"></div>
                      <div className="container">
                         <div className="row slider-text justify-content-center align-items-center"
                              data-scrollax-parent="true">

                            <div className="col-md-12 text-center">
                               <h1 className="mb-2">Натуральные травяные чаи</h1>
                               {/*<h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>*/}
                               <p><a href="#watch-products" className="btn btn-primary">Посмотреть</a></p>
                            </div>

                         </div>
                      </div>
                   </div>

                   {/*<div className="slider-item" style={{backgroundImage: "url(images/bg_2.jpg)"}}>*/}
                   {/*   <div className="overlay"></div>*/}
                   {/*   <div className="container">*/}
                   {/*      <div className="row slider-text justify-content-center align-items-center"*/}
                   {/*           data-scrollax-parent="true">*/}

                   {/*         <div className="col-sm-12  text-center">*/}
                   {/*            <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>*/}
                   {/*            /!*<h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>*!/*/}
                   {/*            <p><a href="#" className="btn btn-primary">View Details</a></p>*/}
                   {/*         </div>*/}

                   {/*      </div>*/}
                   {/*   </div>*/}
                   {/*</div>*/}
                </div>
             </div>


          </div>


          <div className="ftco-section">
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
       </div>
   );
};

export default HomeSlider;