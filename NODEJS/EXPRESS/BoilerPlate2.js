//third party
const express = require('express');
const app = express();

//using middleware functions //these functions 
//will be running for every incoming requests 
//next=funtion: used as a bridge to further code
app.use((req, res, next) => {
    next();
    console.log('middleware intercept!')
});

app.use((req, res, next) => {
    res.send('<h1>Express!!!!!</h1>')
});

app.listen(3000);
