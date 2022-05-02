import {useState,useEffect} from 'react';
import Breed from './Breed';

function Breeds() {
  const [breeds,setBreeds]=useState([]);

  useEffect(()=>{
    fetch('https://catfact.ninja/breeds')
    .then(res=>res.json())
    .then(adat=>setBreeds(adat.data))
    .catch(err=>console.log(err));
  },[]);


  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch'>
    {
      breeds.map((elem,index)=>(
        <Breed key={index} elem={elem} />
        
      ))
    }

  </div>
  )
}

export default Breeds