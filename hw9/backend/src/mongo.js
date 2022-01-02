import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';

export default () => {
    dotenv.config();
    const url = process.env.MONGO_URL;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongo db connection created"));

    const db = mongoose.connection;
    db.once("open", () => {
        console.log("Mongo database connected!");
    })
}
