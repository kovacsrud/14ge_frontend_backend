import {useState,useEffect} from 'react';
import Varos from './Varos';

function Varosok() {
  const [varosok,setVarosok]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/varosok')
    .then(res=>res.json())
    .then(adat=>setVarosok(adat));
  },[]);


  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-sky-100 justify-items-stretch py-4'>
      {
        varosok.map((elem,index)=>(<Varos key={index} elem={elem} />))
      }
    </div>
  )
}

export default Varosok;