const mongoose = require('mongoose');
require("dotenv/config")

mongoose
  .connect(
    `mongodb+srv://${process.env.MG_USERNAME}:${process.env.MG_PWD}@cluster0.wgkvi.mongodb.net/books_class?retryWrites=true&w=majority`
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
