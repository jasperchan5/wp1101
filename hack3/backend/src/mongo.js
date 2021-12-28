import mongoose from "mongoose";
import { dataInit } from "./upload.js";

import "dotenv-defaults/config.js";

async function connect() {
  // TODO 1.1 Connect your MongoDB
  const url = process.env.MONGO_URL;
  mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
  .then(() => console.log("mongo db connection created"));
  const db = mongoose.connection;
  db.once('open',() => {
    console.log("Open database and init data");
    dataInit();
  });
}

export default { connect };