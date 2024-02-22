const express=require('express');


const app=express();



app.listen(8000,(req,res)=>{
    console.log("App is listeing ")
})

app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage babyyyyy</h1>`);
  });
