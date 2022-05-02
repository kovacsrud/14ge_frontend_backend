const fetch=require('cross-fetch');

const ujauto={
    rendszam:"ckt-556",
    marka:"Kia",
    tipus:"Ceed",
    szin:"kék",
    gyartasiev:2009
}

const modauto={
    rendszam:"ckt-556",
    marka:"Kia",
    tipus:"Rio",
    szin:"fekete",
    gyartasiev:2008
}

async function ujadat(){

    const res=await fetch('http://127.0.0.1:8000/ujauto',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(ujauto)

    });

    const valasz=await res.json();
    console.log(valasz);

}

async function adatModositas(){
    const res=await fetch('http://127.0.0.1:8000/updateauto',{
        method:"put",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(modauto)
    });
    const valasz=await res.json();
    console.log(valasz);
}

async function adatTorles(){
    const res=await fetch('http://127.0.0.1:8000/deleteauto',{
        method:"delete",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(modauto)
    });
    const valasz=await res.json();
    console.log(valasz);
}

adatTorles();
//adatModositas();
//ujadat();