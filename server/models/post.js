const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   productName: {
      type: String,
      required: true,
      maxlength: 100
   },
   description: {
      type: String,
      required: true
   },
   productProperties: {
      type: String,
      required: true
   },
   productStructure: {
     type: String,
      required: true
   },
   productMaking: {
      type: String,
      required: true
   },
   imagePathName: {
      type: String,
      required: true
   },
   imageName: {
      type: String,
      required: true,
      maxlength: 400
   },
   ownerId: {
      type: String,
      required: false
   }
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);

module.exports = {Post};