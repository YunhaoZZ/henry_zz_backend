const express = require("express");
const app = express();

app.use("/hz", (req, res)=>{
    console.log("hey this is hz url");
})

app.listen("5000", ()=> {
    console.log("Backend is running");
})

