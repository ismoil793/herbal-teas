const express = require("express");
const bodyParser = require("body-parser");
const cookiesParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/config").get(process.env.NODE_ENV); // in heroku it will be production ENV
const app = express();
const path = require("path");
const fileUpload = require('express-fileupload');


mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useFindAndModify: false,
   useCreateIndex: true
});


const {User} = require("./models/user");
const {Post} = require("./models/post");
const {auth} = require("./middleware/auth");

app.use(bodyParser.json());
app.use(cookiesParser());
app.use(fileUpload());

// app.use(express.static("client/build"));  // needed for: production


//-------------------------------------------------------------------------- FILES //
// upload endpoint
app.post("/api/upload", (req, res) => {
   if (req.files === null) {
      return res.status(400).json({
         msg: "No file uploaded"
      })
   }

   let randStr = Math.round(Math.random() * 10000).toString();
   const file = req.files.file;


   if(process.env.NODE_ENV === "production") {
      file.mv(`${__dirname}/../client/build/uploads/${randStr}${file.name}`, err => {
         if (err) {
            console.error(err);
            return res.status(500).send(err)
         }

         res.json({
            fileName: randStr + file.name,
            filePath: `/uploads/${randStr + file.name}`
         })
      })
   }

   else {
      file.mv(`${__dirname}/../client/public/uploads/${randStr}${file.name}`, err => {
         if (err) {
            console.error(err);
            return res.status(500).send(err)
         }

         res.json({
            fileName: randStr + file.name,
            filePath: `/uploads/${randStr + file.name}`
         })
      })
   }

});

//-------------------------------------------------------------------------- GET //

app.get("/api/auth", auth, (req, res) => {
   res.json({
      isAuth: true,
      id: req.user._id,
      email: req.user.email,
      name: req.user.name
   })
});

app.get("/api/getPost", (req, res) => {
   //www.com?id=""
   let id = req.query.id;

   Post.findById(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.send(doc);
   })
});


app.get("/api/posts", (req, res) => {
   // localhost:3000/api/posts?skip=3&limit=10&order=asc
   let skip = parseInt(req.query.skip);
   let limit = parseInt(req.query.limit);
   let order = req.query.order;

   //order = asc || desc
   Post.find().skip(skip).limit(limit).sort({_id: order})
       .exec(
           (err, doc) => {
              if (err) return res.status(400).send(err);
              res.send(doc)

           })
});


app.get("/api/postsCount", (req, res) => {

   Post.countDocuments({}, function (err, count) {
      if (err) return res.sendStatus(400).send(err);
      res.json(count);
   });

});


app.get("/api/getReviewer", (req, res) => {
   let id = req.query.id;

   User.findById(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json({
         name: doc.name,
         lastname: doc.lastname
      })
   })
});


app.get("/api/users", (req, res) => {

   User.find({}, (err, users) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(users);
   })

});


app.get("/api/user_posts", (req, res) => {

   Post.find({ownerId: req.query.user}).exec((err, docs) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(docs)
   })

});


app.get("/api/logout", auth, (req, res) => {
   req.user.deleteToken(req.token, (err, user) => {
      if (err) return res.status(400).send(err);
      res.sendStatus(200);
   })
});

//-------------------------------------------------------------------------- POST //
app.post("/api/post", (req, res) => {
   const post = new Post(req.body);

   post.save((err, doc) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({
         post: true,
         postId: doc._id
      })
   })
});

app.post("/api/register", (req, res) => {
   const user = new User(req.body);

   user.save((err, doc) => {
      if (err) return res.json({success: false});
      res.status(200).json({
         success: true,
         user: doc
      })
   })
});

app.post("/api/login", (req, res) => {

   User.findOne({"email": req.body.email}, (err, user) => {
      if (!user) return res.json({isAuth: false, message: "Auth failed email not found"});

      user.comparePassword(req.body.password, (err, isMatch) => {
         if (!isMatch) return res.json({
            isAuth: false,
            message: "Wrong password"
         });

         user.generateToken((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("auth", user.token).send({
               isAuth: true,
               id: user._id,
               email: user.email
            })
         })

      })
   })
});

//-------------------------------------------------------------------------- UPDATE //

app.post("/api/post_update", (req, res) => {
   Post.findByIdAndUpdate(
       req.body._id, req.body, {new: true}, (err, doc) => {
          if (err) return res.status(400).send(err);
          res.json({
             success: true,
             doc
          })
       })
});


//-------------------------------------------------------------------------- DELETE //

app.delete("/api/delete_post", (req, res) => {
   let id = req.query.id;

   Post.findByIdAndDelete(id, (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json(true)
   })
});

// Development

if (process.env.NODE_ENV === 'development') {
   app.use(express.static(path.join(__dirname, '/../client/public')));

   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/../client/public/index.html'));
   });
}


// Following is needed for Production:

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '/../client/build')));

   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/../client/build/index.html'));
   });
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
   console.log("server is running")
});