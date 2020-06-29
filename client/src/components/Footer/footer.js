import React from 'react';
import FontAwesome from "react-fontawesome"
import {Link} from "react-router-dom";

const Footer = () => {
   return (
       <footer className="ftco-footer ftco-section">
          <div className="container">
             <div className="row">
                <div className="mouse">
                   <a href="#" className="mouse-icon">
                      <div className="mouse-wheel"><FontAwesome name="arrow-up"/></div>
                   </a>
                </div>
             </div>
             <div className="row mb-5">
                <div className="col-md">
                   <div className="ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">SD Farm</h2>
                      <p>Soft Darmon Farm. Производство высококачественных травяных чаев.</p>
                      <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                         <li className="">
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                               <FontAwesome name="telegram"/>
                            </a></li>
                         <li className="">
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                               <FontAwesome name="facebook"/>
                            </a>
                         </li>
                         <li className="">
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                               <FontAwesome name="instagram"/>
                            </a>
                         </li>
                      </ul>
                   </div>
                </div>
                <div className="col-md">
                   <div className="ftco-footer-widget mb-4 ml-md-5">
                      <h2 className="ftco-heading-2">Меню</h2>
                      <ul className="list-unstyled">
                         <li><Link to="/products" className="py-2 d-block">Продукты</Link></li>
                         <li><Link to="/about" className="py-2 d-block">О нас</Link></li>
                         <li><Link to="/contacts" className="py-2 d-block">Контакты</Link></li>
                         <li><Link to="/login" className="py-2 d-block">Авторизоваться</Link></li>
                      </ul>
                   </div>
                </div>

                <div className="col-md">
                   <div className="ftco-footer-widget mb-4">
                      <h2 className="ftco-heading-2">У вас есть вопросы?</h2>
                      <div className="block-23 mb-3">
                         <ul>
                            <li><FontAwesome name="map-marker" className="f-icon" />
                               <span className="text pl-3 pb-2">
                                  Ташкентская область, Ташкентский район, Кызгалдок, Минг Булок дом 25
                               </span>
                            </li>
                            <li><a href="tel:+998909710360"><FontAwesome name="phone" className="f-icon" /><span
                                className="text pl-3">+998 90 9710360</span></a>
                            </li>
                            <li><a href="mailto:abdulazizsh0360@gmail.com"><FontAwesome name="envelope" className="f-icon" /><span
                                className="text pl-3">abdulazizsh0360@gmail.com</span></a></li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
             <div className="row">
                <div className="col-md-12 text-center">

                   <p className="switch-case">
                      Копирайт &copy;
                      {new Date().getFullYear()}<br/>
                      Сделано с <FontAwesome name="heart"/> командой <a
                       href="https://ismoil793.github.io" target="_blank">switch-case</a>
                   </p>
                </div>
             </div>
          </div>
       </footer>
   );
};

export default Footer;