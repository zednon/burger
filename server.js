var express = require("express");
var app = express()
var expresshandlebars = require("express-handlebars")
var connection = require("./config/connection" )


app.engine("handlebars" , expresshandlebars ({
    defaultLayout: "main"
}))

app.set("view engine" , "handlebars")

app.get("/" , function( req, res){
    connection.query("select * from burgers" , function(error, result){
        res.render("index" , {data: result})
        
    })
    // res.render("index")
}) 



app.listen(3000)