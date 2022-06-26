const express = require('express');
const path = require('path');

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
// console.log(__dirname);
// console.log(publicDirectory);

app.set('view engine', 'hbs');

app.get("/", (req,res) => {
    res.render("index")
})

app.get("/pages/contact", (req,res) => {
    res.render("pages/contact")
})

app.get("/single", (req,res) => {
    res.render("pages/single_page")
})

app.get("/404", (req,res) => {
    res.render("pages/404")
})

app.listen(3001,() => {
    console.log("server listening on port 3001")
})
