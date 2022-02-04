const express = require('express');
const app = new express();

app.use(express.static('public'));
app.listen(4000, (req, res)=> {
    console.log("App is listening on port 4000");
})