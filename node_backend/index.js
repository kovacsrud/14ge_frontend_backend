const express=require('express');
const app=express();
const Ember=require('./ember');
let emberek=[];

let ember=new Ember(1,"Ubul",19);
emberek.push(ember);
let ember2=new Ember(2,"Zénó",27);
emberek.push(ember2);
let ember3=new Ember(3,"Elek",48);
emberek.push(ember3);
console.log(emberek);


app.listen(8000,()=>{console.log("Fut a szerver")});

app.get('/',(req,res)=>{
    res.send("<H1>Node szerver vagyok!</H1>");
});

app.get('/about',(req,res)=>{
    res.send("A szerver szolgáltatásai");
});

app.get('/emberek',(req,res)=>{
    res.json(emberek);
});

//app get        