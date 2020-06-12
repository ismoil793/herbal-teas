import React, {Component} from 'react';
import axios from "axios";
import Message from "./Message";
import AddPostDetails from "./addPostDetails";

class AddPost extends Component {

   state = {
      file: "",
      fileName: "Выберите фото",
      uploadedFile: {},
      msg: ""
   };

   inputHandler = (e) => {
      this.setState({
         file: e.target.files[0],
         fileName: e.target.files[0].name
      })
   };

   submitForm = async e => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("file", this.state.file);

      try {
         const res = await axios.post("/api/upload", formData, {
            headers: {
               "Content-Type": "multipart/form-data"
            }
         });

         this.setState({
            uploadedFile: res.data,
            msg: "Файл загружен"
         });
      } catch (err) {
         console.log(err)
      }

   };

   render() {
      return (
          <section className="container admin-add-post">
             <div className="row">

                <div className="col-md-12">

                   {this.state.msg ? <Message msg={this.state.msg}/> : null}

                   <form onSubmit={e => this.submitForm(e)}>
                      <div className="custom-file">
                         <input type="file" className="custom-file-input" id="customFile"
                                onChange={e => this.inputHandler(e)}/>
                         <label className="custom-file-label" htmlFor="customFile">{this.state.fileName}</label>
                      </div>


                      <input type="submit" value="Загрузить фото" className="btn btn-primary btn-block mt-4 mb-5"/>

                   </form>

                   {Object.keys(this.state.uploadedFile).length !== 0 ?
                       <div className="row mt-5">
                          <div className="col-md-3 m-auto">
                             <h3 className="text-center">{this.state.uploadedFile.fileName}</h3>
                             <img width="100%" src={this.state.uploadedFile.filePath} alt="No file"/>
                          </div>

                          <div className="col-md-9 m-auto">
                             <AddPostDetails filePath={this.state.uploadedFile.filePath} />
                          </div>

                       </div>
                       : null
                   }

                </div>

             </div>
          </section>
      );
   }
}

export default AddPost;