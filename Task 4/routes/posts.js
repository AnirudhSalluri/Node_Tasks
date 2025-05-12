const express = require('express')
const {FetchallPosts,CreatePost,Editpost,Getpost, Deletepost} = require('../controllers/postController')

const router = express.Router();

router.get('/posts',FetchallPosts);
router.post('/createpost',CreatePost);
router.put('/editpost/:id',Editpost);
router.get('/getpost/:id',Getpost);
router.delete('/deletepost/:id',Deletepost)


module.exports=router