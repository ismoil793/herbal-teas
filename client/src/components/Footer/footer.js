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
                      <h2 className="ftco-heading-2">Vegefoods</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                      <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                         <li className=""><a href="#"><FontAwesome name="twitter" /></a></li>
                         <li className=""><a href="#"><FontAwesome name="facebook" /></a></li>
                         <li className=""><a href="#"><FontAwesome name="instagram" /></a></li>
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
                      <h2 className="ftco-heading-2">Have a Questions?</h2>
                      <div className="block-23 mb-3">
                         <ul>
                            <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                            </li>
                            <li><a href="tel:+998909710360"><span className="icon icon-phone"></span><span className="text">+998 90 9710360</span></a>
                            </li>
                            <li><a href="mailto:someone@yoursite.com"><span className="icon icon-envelope"></span><span
                                className="text">info@yourdomain.com</span></a></li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
             <div className="row">
                <div className="col-md-12 text-center">

                   <p>
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>
                      All rights reserved | made with <FontAwesome name="heart"/> by <a
                          href="https://ismoil793.github.io" target="_blank">switch-case</a>
                   </p>
                </div>
             </div>
          </div>
       </footer>
   );
};

export default Footer;