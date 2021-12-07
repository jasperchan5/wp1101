import express from 'express'
import Post from '../models/post.js'
import moment from 'moment'

const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)
router.get('/api/allPosts',async(req,res) => {
    const postList = Post.find({}).sort('timestamp').exec()
    console.log(postList);
    if(postList.length > 0){
        res.status(200).send({msg: "success",postList: postList});
    }
    else{
        res.status(403).send({msg: "error",postList: null});
    }
    
})
// TODO 3-(1): create the 2nd API (/api/postDetail)
router.get('/api/postDetail',async(req,res) => {
    const post = Post.findOne({id: req.query.pid})
    if(post){
        res.status(200).send({message: "success",post: post})
    }
    else{
        res.status(403).send({message: "error",post: null})
    }
})
// TODO 4-(1): create the 3rd API (/api/newPost)

// TODO 5-(1): create the 4th API (/api/post)

export default router