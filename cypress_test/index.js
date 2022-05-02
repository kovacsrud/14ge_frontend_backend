const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let tesztadat=[
    {
        id:1,
        adat:"Szöveg1"
    },
    {
        id:2,
        adat:"Szöveg2"
    },
    {
        id:3,
        adat:"Szöveg3"
    }
];


app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Cypress teszt");
});

app.get('/tesztadat',(req,res)=>{
    res.json(tesztadat);
});

app.post('/ujadat',(req,res)=>{
    const ujadat={
        id:req.body.id,
        adat:req.body.adat
    }
    tesztadat.push(ujadat);
    res.status(201).json({message:"Adat beszúrva!"});

});

app.delete('/torles',(req,res)=>{
    const torolni=req.body.id;
    tesztadat=tesztadat.filter(x=>x.id!=torolni);
    res.status(200).json({message:"Adat törölve!"});

});