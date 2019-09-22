let express = require('express');
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.PORT || 8080;



app.use(express.static("public"));
app.set("view engine", "ejs")

let teaList = [];

app.get('/', function(req, res){
    res.render("MilenaTea")
});

app.get("/tea", function(req, res){
    res.render("tea", {teaList: teaList})
});

app.get("/food", function(req, res) {
    res.render("food")
});

app.get("/about", about = (req, res) => {
    res.render("about");
});

app.post("/addTea", function(req, res) {
    let newTea = req.body.teas;
    console.log(newTea);
    teaList.push(newTea);
    res.redirect("/tea");
});


//Must be last one, or it will catch every route
app.get("*", function(req, res) {
    res.send("not a page")
});

app.listen(port, function() {
    console.log('Server is running on port:', port)
});


// app.get("r/:subredditName", function(req, res){
//     res.send("need : for variable")
// })
