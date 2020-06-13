import React from 'react';
import {getPosts, getPostsCount} from "../../actions";
import {connect} from "react-redux";


class Products extends React.Component {

   count = 0;
   flag = false;


   componentDidMount() {
      this.props.dispatch(getPosts(8, 0, "desc"));
      this.props.dispatch(getPostsCount());
   }

   renderProducts = (posts) => {

      if(posts.list && posts.list.length > 0) {
         return posts.list.map((item, i) =>(
             <div key={i} className="col-md-6 col-lg-3">
                <div className="product">
                   <div className="img-prod">

                      <img className="img-fluid" src={item.imagePathName}
                           alt={item.imagePathName}/>
                      <div className="overlay"></div>
                      <div className="cover">
                         {item.description}
                      </div>

                   </div>
                   <div className="text py-3 pb-4 px-3 text-center">
                      <h3>{item.productName}</h3>
                      <div className="d-flex">
                         <div className="pricing">
                         </div>
                      </div>
                   </div>
                </div>
             </div>
         ))
      }
   };

   renderWarning = () => (
       this.flag ?
           <div className="alert alert-info alert-dismissible fade show" role="alert">
              Больше продуктов нет
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
              </button>
           </div>
           : null
   );


   loadMore = () => {
      let count = this.props.posts.list.length;
      this.props.dispatch(getPosts(1, count, "desc", this.props.posts.list));

      console.log(this.count)

      if (this.count) {
         if (count === this.count) {
            this.flag = true;
         }
      }
   };

   render() {

      if (this.props.posts && this.props.posts.count) {
         this.count = this.props.posts.count;
      }

      return (
          <div className="ftco-section main-products">
             <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                   <div className="col-md-12 heading-section text-center">
                      <span id="watch-products" className="subheading"> <strong>#Продукция</strong></span>
                      <h2 className="mb-4">Наши продукты</h2>
                      <p>100% натуральное растительное происхождение.
                         Гарантированное качество и безопасность.</p>
                   </div>
                </div>
             </div>
             <div className="container">
                <div className="row">


                   {this.renderProducts(this.props.posts)}

                </div>

                {this.renderWarning()}


                {
                   this.count > 8 ?
                       <div className="row">
                          <button className="btn btn-info loadmore-btn" onClick={this.loadMore}>
                             Load More
                          </button>
                       </div>
                       : null
                }



             </div>
          </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      posts: state.post_r
   }
}

export default connect(mapStateToProps)(Products);