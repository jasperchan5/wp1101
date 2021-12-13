import express from 'express'
import Post from '../models/post.js'
import moment from 'moment'


const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)
router.get('/allPosts',async(_,res) => {
    console.log("bbb");
    try{
        const postList = await Post.find({}).sort('timestamp').exec()
        if(postList.length > 0){
            res.status(200).send({message: "success",data: postList});
        }
        else{
            res.status(403).send({message: "error",data: null});
        }
    }
    catch{
        res.status(403).send({message: "error",data: null});
    }
    
    
})
// TODO 3-(1): create the 2nd API (/api/postDetail)
router.get('/api/postDetail',async(req,res) => {
    const post = await Post.findOne({id: req.query.pid})
    if(post){
        res.status(200).send({message: "success",post: post})
    }
    else{
        res.status(403).send({message: "error",post: null})
    }
})
// TODO 4-(1): create the 3rd API (/api/newPost)
router.post('/api/newPost',(req,res) => {
    const postId = req.body.postId, title = req.body.title
    const newPost = new Post({})
})
// TODO 5-(1): create the 4th API (/api/post)
router.delete('/api/post', (req,res) => {
    Post.deleteOne({id:req.query.pid})
    res.status(200).send({message: "success"})
})

export default router