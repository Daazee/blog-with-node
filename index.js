
const express = require('express');
const path = require('path');
const { engine } = require('express-edge');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');
const PORT = process.env.PORT || 5000

const app = new express();

app.use(express.static('public'));
app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

/*mongoose.connect("mongodb://localhost/node-js-blog");*/

app.get('/', async (req, res) => {

    //res.sendFile(path.resolve(__dirname, 'pages/index.html')); //initial way without rendering
  
  /*  const posts = await Post.find({});
    console.log("retrieved post => "+ posts);
    res.render('index', { posts:posts });*/
    res.render('index');
    
})

app.get('/about', (req, res) => {

    // res.sendFile(path.resolve(__dirname, 'pages/about.html'));
    res.render('about');
})

app.get('/contact', (req, res) => {

    // res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    res.render('contact');
})


app.get('/post', (req, res) => {

    // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('post');
})

app.get('/posts/new', (req, res) => {

    // res.sendFile(path.resolve(__dirname, 'pages/post.html'));
    res.render('create');
})

app.post('/posts/store', (req, res) => {
    console.log(req.body);

    Post.create(req.body, (error, response) => {

        res.redirect('/');
    })
})

app.listen(PORT, (req, res) => {
    console.log("App is listening on port " +   PORT);
})