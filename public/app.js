const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

var items = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    var day = today.toLocaleDateString("en-US", options);


    res.render("list", { kindOfDay: day, newListItems : items })

});

app.post('/', function (req, res) {
    items.push(req.body.newItem);

    res.redirect('/');
});








app.listen(3000, function (req, res) {
    console.log('Sever Running in Port 3000!')
})