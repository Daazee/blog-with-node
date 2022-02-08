const mongoose = require('mongoose');
const Post = require('./database/models/Post');


mongoose.connect('mongodb://localhost/node-js-test-blog');

//create
// Post.create({
// title: "Blog 2",
// description:"Test Blog 2",
// content: "Lorem Ipsum 2"
// }, (error, post)=> {

//     console.log(error, post);
// })

//find all
// Post.find({}, (error, post)=>{
//     console.log(error, post);
// })


// Post.find({
//     title: 'Blog 2'
// }, (error, post)=>{
//     console.log(error, post);
//     console.log(post.length)
// })

// Post.findById("u12345d", (error, post)=>{
// console.log(error, post);
// })

Post.findByIdAndUpdate("6200333ea182b1899265c123", {
    title:"Blog 3",
    description: 'Test Blog 3',
    content: "Lorem Ipsum 3"
}, (error, post)=>{
    console.log(error, post);
})