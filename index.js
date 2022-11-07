import express from "express";
const app = express();


app.get('/',(req,res)=>{
    res.send({
        "ok":"hmmmmmmmmm"
    });
})

app.listen(9000);