const express = require("express");
const  jsonwebtoken = require("jsonwebtoken");
const app = express();



app.get("/", async(req,res) => {
    let token =await jsonwebtoken.sign({
        date : new Date
    },"hahahahahahahahahaha")
    console.log(token);
    res.json({
        message : "sucess",
        token
    })
})


app.listen(3000,() => {
    console.log("server listening in port 3000")

})