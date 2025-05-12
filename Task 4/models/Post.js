const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{type:String , required:true},
    content:{type:String, required:true},
    author: {type:String , required:true},
},
{
    timestamps : true
}
)

const Post = mongoose.model('Book',BookSchema);

module.exports=Post;