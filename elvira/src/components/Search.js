import {useState} from 'react';
import {Link} from 'react-router-dom';

function Search() {
    const [honnan,setHonnan]=useState("");
    const [hova,setHova]=useState("");
    const [vonatok,setVonatok]=useState([]);
    

    const trainSearch=()=>{
      fetch(`https://apiv2.oroszi.net/elvira?from=${honnan}&to=${hova}`)
    .then(res=>res.json())
    .then(adatok=>{
      console.log(adatok.message);
      if(typeof(adatok.message)=="undefined"){
        setVonatok(adatok.timetable);
      } else {
        setVonatok([]);
      }
      })
    .catch(err=>console.log(err)) 
    }

    


  return (
    <div className="container">
      <div className="mb-3">
        <label for="honnan" className="form-label">
          Honnan:
        </label>
        <input
          type="text"
          className="form-control"
          id="honnan"
          name="honnan"
          placeholder="honnan"
          value={honnan}
          onChange={(e)=>setHonnan(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="hova" className="form-label">
          Hova:
        </label>
        <input
          type="text"
          className="form-control"
          id="hova"
          name="hova"
          placeholder="hova"
          value={hova}
          onChange={(e)=>setHova(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={()=>trainSearch()}>Keresés</button>
      <p>Adatok:{typeof(vonatok)!=="undefined" ? vonatok.length:"Nincs találat"}</p>
      <div>
        {vonatok.length>0 && typeof(vonatok)!=="undefined" ?
          vonatok.map((elem,index)=>(<p>Indulás:{elem.starttime} Érkezés:{elem.destinationtime}</p>))
          :
          <p>Nincs találat!</p>
        }
      </div>
      <div><Link to={'/'} className='nav-link'>Főoldal</Link></div>
      
    </div>
    
  );
}

export default Search;
