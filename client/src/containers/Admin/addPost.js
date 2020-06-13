import React, {Component} from 'react';
// import axios from "axios";
import Message from "./Message";
import AddPostDetails from "./addPostDetails";
import {storage} from "../../firebase";

class AddPost extends Component {

   state = {
      file: "",
      fileName: "Выберите фото",
      uploadedFile: "",
      msg: "",
      progress: 0
   };

   inputHandler = (e) => {

      let randStr = Math.round(Math.random() * 10000).toString();

      this.setState({
         file: e.target.files[0],
         fileName: `${randStr}${e.target.files[0].name}`
      })
   };

   submitForm = e => {
      e.preventDefault();

      // const formData = new FormData();
      // formData.append("file", this.state.file);

      // const res = await axios.post("/api/upload", formData, {
      //    headers: {
      //       "Content-Type": "multipart/form-data"
      //    }
      // });

      // this.setState({
      //    uploadedFile: res.data,
      //    msg: "Файл загружен"
      // });


      try {

         const res = storage.ref(`uploads/${this.state.fileName}`).put(this.state.file);

         res.on(
             "state_changed",
             snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({progress})
             },
             error => {
                console.log(error)
             },
             () => {
                storage
                    .ref("uploads")
                    .child(this.state.fileName)
                    .getDownloadURL()
                    .then(url => {
                       this.setState({
                          uploadedFile: url,
                          msg: "Файл загружен"
                       })
                    })
             }
         )


      } catch (err) {
         console.log(err)
      }

   };

   render() {
      return (
          <section className="admin-add-post">
             <div className="container">

                <div className="row">

                   <div className="col-md-12">

                      {this.state.msg ? <Message msg={this.state.msg}/> : null}

                      <form onSubmit={e => this.submitForm(e)}>
                         <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile"
                                   onChange={e => this.inputHandler(e)}/>

                            <progress className="progress progress-bar mt-3 w-100" value={this.state.progress}
                                      max="100"/>

                            <label className="custom-file-label" htmlFor="customFile">{this.state.fileName}</label>
                         </div>


                         <input type="submit" value="Загрузить фото" className="btn btn-primary btn-block mt-4 mb-5"/>

                      </form>

                      {this.state.uploadedFile ?
                          <div className="row mt-5">
                             <div className="col-md-3 m-auto">
                                <h3 className="text-center">{this.state.fileName}</h3>
                                <img width="100%" src={this.state.uploadedFile} alt="No file"/>
                             </div>

                             <div className="col-md-9 m-auto">
                                <AddPostDetails
                                    filePath={this.state.uploadedFile}
                                    user={this.props.user}
                                    fileName={this.state.fileName}
                                />
                             </div>

                          </div>
                          : null
                      }

                   </div>

                </div>
             </div>
          </section>
      );
   }
}

export default AddPost;