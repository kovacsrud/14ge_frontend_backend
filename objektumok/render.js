let root=document.getElementById('root');


for(i=0;i<adatok.length;i++){

    let div=document.createElement('div');
    div.setAttribute('class','elem');

    let nev=document.createElement('p');
    nev.textContent=adatok[i].nev;
    div.appendChild(nev);


    let lakhely=document.createElement('p');
    lakhely.textContent=adatok[i].lakhely;
    div.appendChild(lakhely);

    let kor=document.createElement('p');
    kor.textContent=adatok[i].kor;
    div.appendChild(kor);

    let kep=document.createElement('img');
    kep.src=adatok[i].kep;
    kep.width=80;
    div.appendChild(kep);

    root.appendChild(div);

}