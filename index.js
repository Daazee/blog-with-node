const express = require('express');
const path = require('path');

const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.listen(4000, (req, res)=> {
    console.log("App is listening on port 4000");
})