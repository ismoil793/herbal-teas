import React, {Component} from 'react';
import {connect} from "react-redux"
import {loginUser} from "../actions";

class Login extends Component {

   state = {
      email: "",
      password: "",
      error: "",
      success: false
   };


   submitForm = (e) => {
      e.preventDefault();
      this.props.dispatch(loginUser(this.state));
   };

   handleInputEmail = (e) => {
      this.setState({
         email: e.target.value
      })
   };

   handleInputPassword = (e) => {
      this.setState({
         password: e.target.value
      })
   };

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.user && nextProps.user.login && nextProps.user.login.isAuth) {
         this.props.history.push("/addPost")
      }
   }

   render() {

      let user = this.props.user;

      return (
          <section className="login-user">
             <div className="container">
                <div className="row">
                   <div className="col-md-12">

                      <form onSubmit={this.submitForm} autoComplete="on">

                         <h2>Log in here</h2>

                         <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your e-mail"
                                value={this.state.email}
                                onChange={this.handleInputEmail}
                            />
                         </div>

                         <div className="form-group">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.handleInputPassword}
                            />
                         </div>

                         <button className="btn btn-primary form-control" type="submit">Log in</button>


                         {
                            user.login ?
                                <div className="error alert alert-danger mt-3">
                                   <div>{user.login.message}</div>
                                </div>
                                : null
                         }

                      </form>

                   </div>
                </div>
             </div>
          </section>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.user_r
   }
}

export default connect(mapStateToProps)(Login);