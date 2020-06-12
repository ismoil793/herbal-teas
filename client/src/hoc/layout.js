import React from 'react';
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import "./layout.css";


class Layout extends React.Component {

   render() {
      return (
          <React.Fragment>

             <Header/>

             {
                this.props.children
             }

             <Footer/>


          </React.Fragment>
      )
   }
}

export default Layout;