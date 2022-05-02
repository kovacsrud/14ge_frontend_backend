console.log("Modulok");

const alapmuveletek=require('./func');
const Ember=require('./ember');
const Auto=require('./auto');

let ember=new Ember(1,"Zénó",29);
let auto=new Auto('ABM-211','Skoda',14);

let osszeg=alapmuveletek.osszeadas(200,333);
let egyesitett=Object.assign(ember,auto);

console.log(osszeg);
console.log(ember);
console.log(auto);
console.log(egyesitett);