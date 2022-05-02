let apidata=document.getElementById('apidata');

fetch('https://randomuser.me/api/?results=20').
then(res=>res.json()).
then(data=>{
    data.results.forEach(x => {
        let div=document.createElement('div');
        let nev=document.createElement('p');
        let kep=document.createElement('img');

        nev.textContent=x.name.first+" "+x.name.last;
        kep.src=x.picture.large;
        div.appendChild(nev);
        div.appendChild(kep);
        apidata.appendChild(div);

    });
});