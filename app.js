let express = require('express');

let app = express();

let port = process.env.PORT || 8080;

app.use(express.static("public"));
app.set("view engine", "ejs")

app.get('/', function(req, res){
    res.render("MilenaTea")
});

app.get("/tea", function(req, res){
    res.render("tea")
});

app.get("/food", function(req, res) {
    res.render("food")
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
