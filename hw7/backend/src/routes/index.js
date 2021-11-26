import express from 'express'
import {saveStudent,deleteDB,exist} from '../main.js';
import Student from '../models/ScoreCard.js';

const router = express.Router();

router.post('/',async(req,res) => {
    try{
        const name = req.body.name, subject = req.body.subject, score = req.body.score;
        // console.log(name,subject,score);
        await saveStudent(name,subject,score);
        // console.log("End adding");
        if(exist){
            res.status(200).send({message: "Updating ("+ name + "," + subject + "," + score +")",card: true});
        }
        else{
            res.status(200).send({message: "Adding ("+ name + "," + subject + "," + score +")",card: true});
        }
    }
    catch(error){
        res.status(200).send({message: error,card: false});
    }
})

router.get('/',async(req,res) => {
    try{
        const queryType = req.query.type, queryString = req.query.queryString;
        console.log(queryType);
        if(queryType === "name"){
            console.log("Searching in name");
            existing = await Student.find({queryString});
        }
        else if(queryType === "subject"){
            console.log("Searching in subject");
            existing = await Student.find({queryString});
        }
        const exist = existing?true:false;
        console.log(exist);
        if(exist){
            // console.log(queryType,queryString," found!");
            res.status(200).send({messages: "- Name:"+ queryType +"("+ queryString +") found!",message: "Query error"});
        }
        else{
            // console.log(queryType,queryString," not found!");
            res.status(200).send({messages: "- "+ queryType +"("+ queryString +") not found!",message: "Query error"});
        }
    }
    catch(error){
        res.status(200).send({messages: 0,message: error});
    }
})

router.delete('/',(_,res) => {
    try{
        deleteDB();
        res.status(200).send({message: "Database cleared"});
    }
    catch(error){
        res.status(200).send({message: error});
    }
})

export default router;