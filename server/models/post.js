const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   productName: {
      type: String,
      required: true,
      maxlength: 100
   },
   description: {
      type: String,
      maxlength: 100,
      default: "n/a"
   },
   imagePathName: {
      type: String,
      required: true,
      maxlength: 400
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