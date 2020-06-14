import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux"

// import "../../js/jquery-3.2.1.min"

// import "../../js/range"


class Header extends Component {


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
                               <a href="mailto:abdulazizsh0360@gmail.com" className="text">abdulazizsh0360@gmail.com</a>
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
                   <Link to="/" className="navbar-brand"><img className="sd-farm-logo" src="/images/SD-Farm.png"
                                                              alt="Herbal teas logo"/></Link>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                           aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                      <FontAwesome name="bars"/>&nbsp;Меню
                   </button>

                   <div className="collapse navbar-collapse" id="ftco-nav">


                      {
                         this.props.user &&
                         this.props.user.authLogin &&
                         this.props.user.authLogin.isAuth ?

                             <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><Link to="/list/products" className="nav-link">Список товаров</Link></li>
                                <li className="nav-item"><Link to="/addPost" className="nav-link">Добавить пост</Link>
                                </li>
                                <li className="nav-item"><Link to="/logout" className="nav-link">Выйти</Link></li>
                             </ul>
                             :
                             <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><Link to="/products" className="nav-link">Продукты</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">О нас</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Контакты</Link></li>
                                {/*<li className="nav-item"><Link to="/login" className="nav-link">авторизоваться</Link>*/}
                                {/*</li>*/}
                             </ul>
                      }


                   </div>
                </div>
             </nav>

          </header>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r
   }
}

export default withRouter(connect(mapStateToProps)(Header));