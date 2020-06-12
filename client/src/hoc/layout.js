import React from 'react';
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import "./layout.css";


// import $ from "jquery"
// import jquery from 'jquery';
// import ScriptTag from "react-script-tag"
//
// window.$ = window.jQuery = jquery;


class Layout extends React.Component {

   state = {
      loading: false
   };


   render() {

      setTimeout(() => {

         this.setState({
            loading: false
         })

      }, 1000)


      if (this.state.loading) {

         return (
             <div className="preloader">
                <div className="pulse"></div>
             </div>
         )
      }
      return (
          <div>

             <Header/>

             {this.props.children}

             <Footer/>


             {/*<ScriptTag type="text/javascript" src="/js/jquery-3.2.1.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery-migrate-3.0.1.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/popper.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/bootstrap.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery.easing.1.3.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery.waypoints.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery.stellar.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/owl.carousel.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery.magnific-popup.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/aos.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/jquery.animateNumber.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/bootstrap-datepicker.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/scrollax.min.js"/>*/}
             {/*<ScriptTag type="text/javascript" src="/js/main.js"/>*/}
             {/*<ScriptTag type="text/javascript"*/}
             {/*           src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"/>*/}


          </div>
      )
   }
}

export default Layout;