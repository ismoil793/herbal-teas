import React from 'react';

const ProductTypes = () => {
   return (
       <div className="ftco-section ftco-category ftco-no-pt pb-0">
          <div className="container">
             <div className="row">
                <div className="col-md-8">
                   <div className="row">
                      <div className="col-md-6 order-md-last align-items-stretch d-flex">
                         <div className="category-wrap-2 img align-self-stretch d-flex"
                              style={{backgroundImage: "url(images/category.jpg)"}}>
                            <div className="text text-center">
                               <div className="title-wrap">
                                  <h2>Травяные чаи</h2>
                                  <p>Защитят ваше здоровье</p>
                               </div>
                               <p><a href="#watch-products" className="btn btn-primary">Посмотреть продукты</a></p>
                            </div>
                         </div>
                      </div>
                      <div className="col-md-6">
                         <div className="category-wrap img mb-4 d-flex align-items-end"
                              style={{backgroundImage: "url(images/category-1.jpg)"}}>
                            <div className="text px-3 py-1">
                               <h2 className="mb-0"><a>Fruits</a></h2>
                            </div>
                         </div>
                         <div className="category-wrap img d-flex align-items-end"
                              style={{backgroundImage: "url(images/category-2.jpg)"}}>
                            <div className="text px-3 py-1">
                               <h2 className="mb-0"><a>Vegetables</a></h2>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="col-md-4">
                   <div className="category-wrap img mb-4 d-flex align-items-end"
                        style={{backgroundImage: "url(images/category-3.jpg)"}}>
                      <div className="text px-3 py-1">
                         <h2 className="mb-0"><a>Juices</a></h2>
                      </div>
                   </div>
                   <div className="category-wrap img d-flex align-items-end"
                        style={{backgroundImage: "url(images/category-4.jpeg)"}}>
                      <div className="text px-3 py-1">
                         <h2 className="mb-0"><a>Dried</a></h2>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default ProductTypes;