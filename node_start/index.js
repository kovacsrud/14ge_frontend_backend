const express=require('express');
const app=express();

app.listen(8000,()=>{
    console.log("Fut a szerver!");
});

app.get('/',(req,res)=>{
    res.send("<H1>Üdvözöllek!</H1>");
});