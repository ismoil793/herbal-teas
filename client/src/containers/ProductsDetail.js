import React, {Component} from 'react';
import {getPost, postClear} from "../actions";
import {connect} from "react-redux";
import FontAwesome from "react-fontawesome"
import {Link} from "react-router-dom";

class ProductsDetail extends Component {

   componentDidMount() {
      this.props.dispatch(getPost(this.props.match.params.id))
   }

   componentWillUnmount() {
      this.props.dispatch(postClear())
   }

   renderPost = (post) => {
      if (post.productName) {
         return (
             <React.Fragment>
                <div className="container">
                   <div className="row">
                      <div className="col-lg-12 p-0">
                         <div className="text-center mb-5">
                            <span>#Товар</span>
                            <h1>{post.productName}</h1>
                            <hr/>
                         </div>
                      </div>
                   </div>
                   <div className="row">
                      <div className="col-lg-6 p-2">
                         <img className="img-fluid prod-img" src={`${post.imagePathName}`} alt={post.imageName}/>
                      </div>
                      <div className="col-lg-6 p-2 product-details pl-md-5">
                         <h3>{post.productName}</h3>
                         <h5><span><FontAwesome name="align-left"/></span>&nbsp;&nbsp;Описание:</h5>
                         <p>{post.description}</p>
                         <h5><span>
                      <FontAwesome name="book"/></span>&nbsp;&nbsp;Свойста:</h5>
                         <p>{post.productProperties}</p>
                      </div>
                   </div>
                   <div className="row mt-5">
                      <div className="col-lg-6 p-2">
                         <img className="img-fluid prod-img" src={`/images/category-2.jpg`} alt={post.imageName}/>
                      </div>
                      <div className="col-lg-6 p-2 product-details pl-md-5">
                         <h5><span><FontAwesome name="adjust"/></span>&nbsp;&nbsp;Состав:</h5>
                         <p>{post.productStructure}</p>
                         <h5><span><FontAwesome name="spinner"/></span>&nbsp;&nbsp;Приготовление:</h5>
                         <p>{post.productMaking}</p>
                         <Link to="/contacts" className="btn btn-success">Узнать подробности</Link>
                      </div>
                   </div>
                </div>
             </React.Fragment>
         )
      }
      return null
   };


   render() {

      return (
          <section className="product-detail-page">
             <div className="container">
                <div className="row">
                   <div className="col-lg-12 p-0">

                      {
                         this.props.post && this.props.post.post ?
                             this.renderPost(this.props.post.post)
                             : <div className="preloader">
                                <div className="pulse"></div>
                             </div>
                      }

                   </div>
                </div>
             </div>
          </section>
      );
   }
}

function mapStateToProps(state) {
   return {
      post: state.post_r
   }
}

export default connect(mapStateToProps)(ProductsDetail);