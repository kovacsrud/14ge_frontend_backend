let nevek=["Géza","Ubul","Ágnes","Ella","Zénó","Margit"];
let lakhelyek=["Gyula","Győr","Orosháza","Lenti","Miskolc","Debrecen"];
let kepek=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

let adatok=[];

//Véletlen számok Javascript-ben
//Math.random() -> 0 és 1 közötti float értéket ad 
//Math.floor(Math.random()*10) -> 0 és 10 közötti egész szám
//Math.floor(Math.random()*10)+1 -> 1 és 10 közötti

function rnd(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

for(i=0;i<200;i++){
    let ember=new Ember(
        nevek[rnd(0,nevek.length)],
        lakhelyek[rnd(0,lakhelyek.length)],
        rnd(1,99),
        kepek[rnd(0,kepek.length)],
        "pics"
    );

    adatok.push(ember);
}

console.log(adatok);