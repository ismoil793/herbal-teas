import React, {Component} from 'react';
import HomeSlider from "./HomeSlider";
import Products from "./Products";

class Home extends Component {
   render() {

      return (
          <main className="main">

             <HomeSlider/>

             <Products/>

          </main>
      )
   }
}


export default Home;