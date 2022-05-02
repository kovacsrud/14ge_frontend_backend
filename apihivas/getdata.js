let apidata=document.getElementById('apidata');
let request=new XMLHttpRequest();
request.open('GET','https://randomuser.me/api/?results=20',true);
request.onload=function(){
    //az eredményeket itt kapjuk és dolgozzuk fel
    var data=JSON.parse(this.response);
    if(request.status>=200 && request.status<=400){

        console.log(data);
        data.results.forEach(elem => {
            document.write(elem.name.first+","+elem.name.last+"<BR>");
        });

    } else {
        console.log("Hiba");
    }
}
request.send();