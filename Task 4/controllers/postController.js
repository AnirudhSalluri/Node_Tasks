const mongoose = require('mongoose');
const Post = require('../models/Post')
const validating = require('../validators/postValidator')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected")
}).catch(err=>{
    console.log(err)
})

const FetchallPosts = async (req,res)=>{
    const data = await Post.find();
    res.status(200).json(data)
}

const CreatePost = async (req,res)=>{
    const error = validating(req.body)
    if(error){
        res.status(500).json(error)
    }
    else{
    const {title,content,author} = req.body;
    const newPost = new Post({
        title,
        content,
        author
    })

    const saving = await newPost.save();
    res.status(200).json(saving)
}
}

 const Editpost = async(req,res)=>{
        
        const {title,content,author} = req.body;
        const editPost =await Post.findById(req.params.id)
        const editedOne = {
            title : title || editPost.title,
            content : content || editPost.content,
            author : author || editPost.author 
        }
        console.log(editedOne);
      const updated=  await Post.findByIdAndUpdate(req.params.id,editedOne,{new:true});
        res.status(200).json("Edited Succesfully")
    }

    const Getpost  = async(req,res)=>{
    const {id} = req.params
    const post = await Post.findById(id);
    res.status(200).json(post)
    }   

    const Deletepost = async (req,res)=>{
        const {id} = req.params;
        const deletion = await Post.findByIdAndDelete(id);
        res.status(200).json(deletion)
    }



module.exports = {
    FetchallPosts,
    CreatePost,
    Editpost,
    Getpost,
    Deletepost
}