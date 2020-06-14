import React, {Component} from 'react';
import {getPost, postClear} from "../actions";
import {connect} from "react-redux";

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
             <div>
                <div className="row">
                   <div className="col-lg-6">
                      <img className="img-fluid prod-img" src={`${post.imagePathName}`} alt={post.imageName}/>
                   </div>
                   <div className="col-lg-6 product-details pl-md-5">
                      <h3>{post.productName}</h3>
                      <h5><span>Описание:</span></h5>
                      <p>{post.description}</p>
                      <h5><span>Свойста:</span></h5>
                      <p>{post.productProperties}</p>
                   </div>
                </div>
                <div className="row mt-5">
                   <div className="col-lg-6">
                      <img className="img-fluid prod-img" src={`/images/category-2.jpg`} alt={post.imageName}/>
                   </div>
                   <div className="col-lg-6 product-details pl-md-5">
                      <h5><span>Состав:</span></h5>
                      <p>{post.productStructure}</p>
                      <h5><span>Приготовление:</span></h5>
                      <p>{post.productMaking}</p>
                   </div>
                </div>
             </div>
         )
      }
      return null
   };


   render() {

      return (
          <section className="container product-detail-page">
             <div className="row">
                <div className="col-lg-12">

                   {
                      this.props.post && this.props.post.post ?
                          this.renderPost(this.props.post.post)
                          : <div className="preloader">
                             <div className="pulse"></div>
                          </div>
                   }

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