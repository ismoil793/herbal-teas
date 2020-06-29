import React, {Component} from "react";
import {connect} from "react-redux";
import {auth} from "../actions";
import Loader from "../UI/Preloader/loader";

export default function (ComposedClass, reload) {

   class AuthenticationCheck extends Component {

      state = {
         loading: true,
      };

      //// checking if user is authenticated

      componentDidMount() {
         this.props.dispatch(auth());
      }

      UNSAFE_componentWillReceiveProps(nextProps) {
         this.setState({loading: false});

         if (!nextProps.user.authLogin.isAuth) {
            if (reload) {
               this.props.history.push("/login");
            }
         } else {
            if (reload === false) {
               this.props.history.push("/addPost")
            }
         }
      }


      render() {
         if (this.state.loading) {
            return <Loader />
         }
         return (
             <ComposedClass {...this.props} user={this.props.user}/>
         )
      }
   }

   function mapStateToProps(state) {
      return {
         user: state.user_r
      }
   }

   return connect(mapStateToProps)(AuthenticationCheck);

}