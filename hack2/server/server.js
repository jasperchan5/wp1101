import express from 'express'
import postRoute from './routes/post.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
// import bodyParser from 'body-parser'
import { dataInit } from './upload.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
// app.use('/api', postRoute)
app.use('/api/allPosts', postRoute)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const dboptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// TODO 1: connect to your mongodb here
const url = process.env.MONGO_URL;

mongoose.connect(
  url, dboptions)
  .then(() => {
    console.log("mongo db connection created")
    // if(process.env.MODE === 'EXAM'){
    //   dataInit()
    // }
  });

// const db = mongoose.connection;
// db.on("error", (err) => console.log("err"));
// db.once("open", async() => {
//     console.log("Mongo db open");
// })

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
