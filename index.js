const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const postRoutes = require('./routes/posts');
const bodyParser = require('body-parser');
const { populate } = require("./models/Post");
const cors = require('cors')

// cors 
app.use(cors())

app.use(bodyParser.json())

app.use('/posts',postRoutes)

app.get("/", (req, res) => {
  res.send("Home pageeee");
});


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to db")
);

app.listen(3001);
