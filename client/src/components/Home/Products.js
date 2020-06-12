import React from 'react';

const Products = () => {
   return (
       <section className="ftco-section">
          <div className="container">
             <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ftco-animate">
                   <span className="subheading">Нектороые продукты</span>
                   <h2 className="mb-4">Наши продукты</h2>
                   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
             </div>
          </div>
          <div className="container">
             <div className="row">
                <div className="col-md-6 col-lg-3 ftco-animate">
                   <div className="product">
                      <div className="img-prod">


                            <img className="img-fluid" src="images/product-1.jpg"
                                 alt="Colorlib Template"/>
                            <span className="status">30%</span>
                            <div className="overlay"></div>

                         <div className="cover">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum impedit iusto.
                         </div>

                      </div>
                      <div className="text py-3 pb-4 px-3 text-center">
                         <h3>Bell Pepper</h3>
                         <div className="d-flex">
                            <div className="pricing">
                               <p className="price"><span className="mr-2 price-dc">$120.00</span><span
                                   className="price-sale">$80.00</span></p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                   <div className="product">
                      <div className="img-prod">
                         <img className="img-fluid" src="images/product-2.jpg"
                                                     alt="Colorlib Template"/>
                         <div className="overlay"></div>
                         <div className="cover">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum impedit iusto.
                         </div>
                      </div>
                      <div className="text py-3 pb-4 px-3 text-center">
                         <h3>Strawberry</h3>
                         <div className="d-flex">
                            <div className="pricing">
                               <p className="price"><span>$120.00</span></p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="col-md-6 col-lg-3 ftco-animate">
                   <div className="product">
                      <div className="img-prod">

                         <img className="img-fluid" src="images/product-3.jpg"
                                                     alt="Colorlib Template"/>
                         <div className="overlay"></div>
                         <div className="cover">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eum impedit iusto.
                         </div>

                      </div>
                      <div className="text py-3 pb-4 px-3 text-center">
                         <h3>Green Beans</h3>
                         <div className="d-flex">
                            <div className="pricing">
                               <p className="price"><span>$120.00</span></p>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

             </div>
          </div>
       </section>
   );
};

export default Products;