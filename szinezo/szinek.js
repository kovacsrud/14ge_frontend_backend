let root=document.getElementById('root');
//let p=document.createElement('p');
//p.textContent="Javascript és frontend";
//root.appendChild(p);
function szinkod(red,green,blue){

    return "#"+red.toString(16)+green.toString(16)+blue.toString(16);
}

function katt(){
    let elem=event.target;
    let kivalasztott=document.getElementById('kivalasztott');
    kivalasztott.setAttribute('style','background-color:'+elem.style.backgroundColor);
}


for(i=0;i<255;i++){
    let d=document.createElement('div');
    d.textContent=szinkod(255,i,i);
    d.setAttribute('class','elem');
    d.setAttribute('style','background-color:'+szinkod(255,i,i));
    d.addEventListener('click',katt);
    root.appendChild(d);
}

