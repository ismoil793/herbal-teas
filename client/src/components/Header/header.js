import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom";

// import "../../js/jquery-3.2.1.min"

// import "../../js/range"



class Header extends Component {

   componentDidMount() {
   }


   render() {
      return (
          <header>

             <div className="py-1 bg-primary">
                <div className="container">
                   <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                      <div className="col-lg-12 d-block">
                         <div className="row d-flex">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                               <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                  <FontAwesome name="phone"/>
                               </div>
                               <a href="tel:+998909710360" className="text">+998 90 971 03 60</a>
                            </div>
                            <div className="col-md pr-4 d-flex topper align-items-center">
                               <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                  <FontAwesome name="envelope"/>
                               </div>
                               <a href="mailto:someone@yoursite.com" className="text">youremail@email.com</a>
                            </div>

                            <div className="col-md pr-4 d-flex topper align-items-center">
                               <div className="icon mr-2 d-flex justify-content-center align-items-center">
                               </div>
                               <div id="google_translate_element">
                               </div>
                            </div>


                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                  id="ftco-navbar">
                <div className="container">
                   <Link to="/" className="navbar-brand">Vegefoods</Link>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                           aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                      <FontAwesome name="bars"/>&nbsp;Меню
                   </button>

                   <div className="collapse navbar-collapse" id="ftco-nav">
                      <ul className="navbar-nav ml-auto">
                         <li className="nav-item"><a href="/products" className="nav-link">Продукты</a></li>
                         <li className="nav-item"><a href="/about" className="nav-link">О нас</a></li>
                         <li className="nav-item"><a href="/contact" className="nav-link">Контакты</a></li>
                         <li className="nav-item"><a href="/login" className="nav-link">авторизоваться</a></li>
                      </ul>
                   </div>
                </div>
             </nav>

          </header>
      );
   }
}

export default Header;