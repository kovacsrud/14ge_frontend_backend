const express=require('express');
const cors=require('cors');
const mysql=require('mysql');
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const conn=mysql.createConnection({
    host:"localhost",
    database:"ingatlan2",
    user:"root",
    password:""

});

app.listen(8000,()=>{console.log("Running...")});

app.get('/',(req,res)=>{
    res.send("Vizsga");
});

app.get('/api/ingatlan',(req,res)=>{
    conn.query("select ingatlanok.id,kategoriak.nev as kategoria,leiras,hirdetesDatuma,tehermentes,ar,kepUrl from ingatlanok,kategoriak where ingatlanok.kategoria=kategoriak.id"
    ,(error,rows)=>{
        if(error){
            res.json(error);
        } else {
            res.status(200).json(rows);
        }
    }
    );
});

app.post('/api/ingatlan',(req,res)=>{
    const {kategoria,leiras,hirdetesDatuma,tehermentes,ar,kepUrl}=req.body;
    conn.query("insert into ingatlanok (kategoria,leiras,hirdetesDatuma,tehermentes,ar,kepUrl) values(?,?,?,?,?,?)"
    ,[kategoria,leiras,hirdetesDatuma,tehermentes,ar,kepUrl]
    ,(error,result)=>{
        if(error){
            res.status(400).json({message:"Hiányos adatok!"});
        }
        if(result){
            res.status(201).json({message:result.insertId});
        }

    });

});

app.delete('/api/ingatlan/:id',(req,res)=>{
    const id=req.params.id;
    conn.query("delete from ingatlanok where id=?"
    ,[id]
    ,(error,result)=>{
        if(error){res.send(error)};
        if(result.affectedRows==1){res.status(204).send()};
        if(result.affectedRows==0){res.status(404).json({message:"Nincs ilyen ingatlan!"})};

    });

});