
const express = require('express');
const path = require('path');
const {engine} = require('express-edge');

const app = new express();

app.use(express.static('public'));
app.use(engine);

app.set('views',`${__dirname}/views`);

app.get('/', (req, res) => {

    //res.sendFile(path.resolve(__dirname, 'pages/index.html')); //initial way without rendering
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


app.listen(4000, (req, res)=> {
    console.log("App is listening on port 4000");
})