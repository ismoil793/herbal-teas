import React, {Component} from 'react';
import axios from "axios"

class Logout extends Component {

   logOut = () => {
      let request = axios.get(`/api/logout`)
          .then(request => {
             this.props.history.push('/')
          });
   };

   render() {

      return (
          <section className="pt-5 pb-5">
             <div className="container pt-5 pb-5">
                <div className="row">
                   <div className="col-lg-12">

                      <div className="logout_container">
                         <h1>Sorry to see you go :(</h1>
                         <button className="mt-5 w-100 button btn btn-danger" onClick={this.logOut}>Log out!</button>
                      </div>

                   </div>
                </div>
             </div>
          </section>
      );
   }
}

export default Logout;