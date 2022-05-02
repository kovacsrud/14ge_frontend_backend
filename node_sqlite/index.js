const express=require('express');
const app=express();
const cors=require('cors');
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./autok.db');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(8000,()=>{
    console.log("Fut a szerver");
});

app.get('/',(req,res)=>{
    res.send("<H1>Autó adatbázis</H1>");
});

app.get('/alldata',(req,res)=>{
    db.all("select * from autok",(error,rows)=>{
        if(error){
            res.send(error);
        } else {
            res.json(rows);
        }
    });
});

app.post('/ujauto',(req,res)=>{
    db.run("insert into autok values(?,?,?,?,?)",
    [req.body.rendszam,
    req.body.marka,
    req.body.tipus,
    req.body.szin,
    req.body.gyartasiev],
    error=>{
        if(error){
            res.send(error);
        } else {
            res.status(200).json({status:"Ok",message:"Adat beszúrva"});
        }
    }
    );
});

app.put('/updateauto',(req,res)=>{
    db.run("update autok set marka=?,tipus=?,szin=?,gyartasiev=? where rendszam=?",
    [req.body.marka,
    req.body.tipus,
    req.body.szin,
    req.body.gyartasiev,
    req.body.rendszam],
    error=>{
        if(error){
            res.send(error);
        } else {
            res.status(200).json({status:'Ok',message:'Módosítás rendben'});
        }
    });
});

app.delete('/deleteauto',(req,res)=>{
    db.run("delete from autok where rendszam=?",[req.body.rendszam],error=>{
            if(error){
                res.send(error);
            }else {
                res.status(200).json({status:'Ok',message:'Autó törölve!'});
            }

    });
});