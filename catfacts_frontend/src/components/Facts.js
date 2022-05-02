import {useState,useEffect} from 'react';
import Fact from './Fact';

function Facts() {
  const[facts,setFacts]=useState([]);

  useEffect(()=>{
    fetch('https://catfact.ninja/facts?limit=100')
    .then(res=>res.json())
    .then(adat=>setFacts(adat.data))
    .catch(err=>console.log(err));
  },[]);

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-stretch'>
      {
        facts.map((elem,index)=>(
          <Fact key={index} elem={elem} index={index}/>
          
        ))
      }

    </div>
  )
}

export default Facts