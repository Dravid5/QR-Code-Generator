const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const qrcode = require("qrcode");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/scan",(req,res)=>{
    let gettingdatafrombrowser = req.body.text;
    qrcode.toDataURL(gettingdatafrombrowser,(err,data)=>{
        res.render("scan",{name:data})
    })
})
app.listen(1505,()=>{
    console.log("port connected")
})