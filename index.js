var express = require("express");
var bodyparser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");


var app = express();

app.use(express.static("assets"));

mongoose.connect("mongodb://localhost:27017/e-commerce");
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.on("open", () => console.log("Connection Establised"));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST,GET, PUT, DELETE,PATCH");
        return res.status(200).json({});
    }
    next();

});

app.get("/", function (req, res) {
    res.send("Hello Welcom to Resume buliding");
    res.end();
});

app.get("/hello", function (req, res) {
    res.send("This is hello page");
    res.end();
});


app.use("/admin", require("./routes/admin"));
app.use("/product", require("./routes/product"));
app.use("/order", require("./routes/order"));
app.use("/subscription", require("./routes/subscription"));


app.listen(8081, function () {
    console.log("Node Server Started");
});  