import React, {Component} from 'react';
import {addPost} from "../../actions";
import {connect} from "react-redux";

class AddPostDetails extends Component {

   state = {
      productName: "",
      description: ""
   };

   handleProductChange = (e) => {
      this.setState({
         productName: e.target.value
      })
   };

   handleDescriptionChange = (e) => {
      this.setState({
         description: e.target.value
      })
   };


   submitForm = (e) => {
      e.preventDefault();

      const formData = {
         productName: this.state.productName,
         description: this.state.description,
         imagePathName: this.props.filePath,
         ownerId: this.props.user.authLogin.id
      };

      this.props.dispatch(addPost(formData))

      this.setState({
         productName: "",
         description: ""
      })

   };


   render() {

      return (
          <div>

             <form onSubmit={e => this.submitForm(e)}>
                <input
                    className="form-control mt-4"
                    name="product" type="text"
                    placeholder="Имя товара"
                    value={this.state.productName}
                    required={true}
                    onChange={e => this.handleProductChange(e)}
                />
                <input
                    className="form-control mt-4"
                    name="description" type="text"
                    placeholder="Описание товара"
                    value={this.state.description}
                    required={true}
                    onChange={e => this.handleDescriptionChange(e)}
                />

                <input type="submit" className="form-control mt-4" value="Добавить пост"/>
             </form>

             {
                this.props.post && this.props.post.newPost && this.props.post.newPost.post ?
                    <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                       Пост успешно добавлен!
                       <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                       </button>
                    </div>
                    : null
             }

          </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      post: state.post_r
   }
}

export default connect(mapStateToProps)(AddPostDetails);