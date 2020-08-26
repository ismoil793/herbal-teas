import React, { Component } from 'react';
import { addPost, clearPost } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

class AddPostDetails extends Component {

   state = {
      productName: "",
      description: "",
      properties: "",
      structure: "",
      making: ""
   };

   UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
      if (nextProps.post && nextProps.post.newPost && nextProps.post.newPost.post) {
         setTimeout(() => {
            nextProps.history.push('/products')
         }, 1000)
      }

   }

   componentWillUnmount() {
      this.props.dispatch(clearPost())
   }

   handleDescriptionChange = (e) => {
      this.setState({
         description: e.target.value
      })
   };

   handleProductChange = (e) => {
      this.setState({
         productName: e.target.value
      })
   };

   handlePropertiesChange = (e) => {
      this.setState({
         properties: e.target.value
      })
   };

   handleStructureChange = (e) => {
      this.setState({
         structure: e.target.value
      })
   };

   handleMakingChange = (e) => {
      this.setState({
         making: e.target.value
      })
   };


   submitForm = (e) => {
      e.preventDefault();

      const formData = {
         productName: this.state.productName,
         description: this.state.description,
         productProperties: this.state.properties,
         productStructure: this.state.structure,
         productMaking: this.state.making,
         imagePathName: this.props.filePath,
         imageName: this.props.fileName,
         ownerId: this.props.user.authLogin.id
      };

      this.props.dispatch(addPost(formData));

      this.setState({
         productName: "",
         description: "",
         properties: "",
         structure: "",
         making: ""
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
                  name="product" type="text"
                  placeholder="Описание товара"
                  value={this.state.description}
                  required={true}
                  onChange={e => this.handleDescriptionChange(e)}
               />
               <input
                  className="form-control mt-4"
                  name="description" type="text"
                  placeholder="Свойства"
                  value={this.state.properties}
                  required={true}
                  onChange={e => this.handlePropertiesChange(e)}
               />
               <input
                  className="form-control mt-4"
                  name="description" type="text"
                  placeholder="Состав"
                  value={this.state.structure}
                  required={true}
                  onChange={e => this.handleStructureChange(e)}
               />
               <input
                  className="form-control mt-4"
                  name="description" type="text"
                  placeholder="Приготовление"
                  value={this.state.making}
                  required={true}
                  onChange={e => this.handleMakingChange(e)}
               />

               <input type="submit" className="form-control mt-4" value="Добавить пост" />
            </form>

            {
               this.props.post && this.props.post.newPost && this.props.post.newPost.post ?
                  <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                     Пост успешно добавлен!
                       <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  : <div>Запотните все поля</div>
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

export default withRouter(connect(mapStateToProps)(AddPostDetails))