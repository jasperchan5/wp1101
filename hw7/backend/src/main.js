import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/ScoreCard.js';
import dotenv from 'dotenv-defaults';
dotenv.config();

const app = express();

// init middleware
app.use(cors());

// define routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/create-card', router);
app.use('/api/query-cards', router);
app.use('/api/clear-db', router);

const url = process.env.MONGO_URL;
console.log(url);

mongoose.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongo db connection created"));

var exist = false;
const saveStudent = async(name,subject,score) => {
    // console.log("Start searching");
    const existing = await Student.findOne({name,subject}).exec();
    // console.log("End searching");
    exist = existing?true:false;
    if(exist){
        try{
            Student.findOneAndUpdate({name,subject},{score:score},{new:true}).exec();
            console.log("Updating ",{name,subject,score});
            return "Update";
        }
        catch(e){
            throw new Error("Student updating error: " + e);
        }
    }
    else{
        try{
            const newStudent = new Student({name,subject,score});
            // console.log("Adding ",{name,subject,score});
            newStudent.save();
            return "Add";
        }
        catch(e){
            throw new Error("Student creation error: " + e);
        }
    }
};

const deleteDB = async () => {
    try{
        await Student.deleteMany({});
        // console.log("Database deleted");
    }
    catch(e){
        throw new Error("Database deletion failed");
    }
};

const db = mongoose.connection;
db.on("error", (err) => console.log("err"));
db.once("open", async() => {
    console.log("Mongo db open");
})

// define server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}.`)
})

export {saveStudent,deleteDB,exist};