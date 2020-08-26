const config = {
   production: {
      SECRET: process.env.SECRET,
      DATABASE: 'mongodb+srv://Ismoil:InvRCwEfCaJfBCmB@cluster-4k7j7lsk.ntezb.mongodb.net/heroku_4k7j7lsk?retryWrites=true&w=majority'
   },
   default: {
      SECRET: "SUPERSECRETPASSWORD123",
      DATABASE: "mongodb://localhost:27017/herbalTeas"
   }
};

exports.get = function get(env) {
   return config[env] || config.default
};