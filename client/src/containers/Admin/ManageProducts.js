import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllPosts, deletePost} from "../../actions";
import moment from "moment-js";
import {storage} from "../../firebase";

class ManageProducts extends Component {

   state = {
      msg: ""
   };

   componentDidMount() {
      this.props.dispatch(getAllPosts())
   }

   deletePost = async (post) => {

      let flag = false;
      // Create a reference to the file to delete
      let desertRef = storage.ref('uploads/').child(`${post.imageName}`);
      // Delete the file
      await desertRef.delete().then(function () {
         flag = true
      }).catch(function (error) {
         console.log(error)
      });

      await this.props.dispatch(deletePost(post._id));


      if(flag && this.props.post && this.props.post.postDeleted) {
         this.state.msg = "Deleted"
      }

      this.props.dispatch(getAllPosts())

   };

   showUserPosts = (post) => (
       post.allPosts ?
           post.allPosts.map(item => (
               <tr key={item._id}>
                  <td>{item.productName}</td>
                  <td>{item.description}</td>
                  <td>{moment(item.createdAt).format("MM/DD/YY")}</td>
                  <td>{item.imageName}</td>
                  <td>
                     <button className="btn btn-danger" onClick={e => this.deletePost(item)}>Удалить</button>
                  </td>
               </tr>
           ))
           : null
   );

   render() {
      return (
          <div className="container pb-5 pt-5">
             <div className="raw">
                <div className="col-lg-12">

                   <div className="user_posts">
                      <h4>Ваши продукты:</h4>

                      {this.state.msg ?
                          <div className="alert alert-info">
                             {this.state.msg}
                          </div>
                          : null
                      }

                      <table className="table table-striped">
                         <thead>
                         <tr>
                            <th>Имя</th>
                            <th>Описание</th>
                            <th>Дата</th>
                            <th>Дата</th>
                            <th>Удалить</th>
                         </tr>
                         </thead>
                         <tbody>
                         {this.showUserPosts(this.props.post)}
                         </tbody>
                      </table>
                   </div>

                </div>
             </div>
          </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      post: state.post_r
   }
}

export default connect(mapStateToProps)(ManageProducts);