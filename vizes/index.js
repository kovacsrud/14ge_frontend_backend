const express=require('express');
const cors=require('cors');
const sqlite3=require('sqlite3');
const db=new sqlite3.Database('./vizes.db');
const {open}=require('sqlite');

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dbconn=async () => {
    // open the database
    return(
      await open({
      filename: './vizes.db',
      driver: sqlite3.Database
    }));
};



app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.json({"program":"Vizes db","verzió":"1.0.7"});
});

app.get('/igazgatosagok',(req,res)=>{
    db.all('select * from igazgatosag',
    (err,rows)=>{
        if(err){
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

app.get('/varosok',(req,res)=>{
    db.all('select varos,ksz1,ksz2,ksz3 from vizmerce',
    (err,rows)=>{
        if(err){
            res.json(err);
        } else {
            res.json(rows);
        }
    }
    );
});

app.get('/varosok2',async (req,res)=>{
    const db=await dbconn();
    const adat=await db.all('select varos,ksz1,ksz2,ksz3 from vizmerce');
    res.json(adat);
});

app.get('/varosok/:varos',(req,res)=>{
    const varos=req.params.varos;
    db.all('select varos,ksz1,ksz2,ksz3 from vizmerce where varos=?'
    ,[varos]
    ,(err,rows)=>{
        if(err){
            res.json(err);
        } else {
            if(rows.length>0){
            res.json(rows);
            } else {
                res.status(404).json({message:"Nincs ilyen város az adatbázisban!"});
            }
        }
    }
    );
});

app.get('/vizallas/:varos',async(req,res)=>{
    const varos=req.params.varos;
    const db=await dbconn();
    const adat=await db.all('select vmId,nap,ido,vizallas,varos from meres,vizmerce where meres.vmId=vizmerce.id and vizmerce.varos=?',[varos]);
    
    db.close();
    res.json(adat);


});