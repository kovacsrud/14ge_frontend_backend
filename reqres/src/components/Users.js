import {useState,useEffect} from 'react';
import User from './User';

function Users() {
    const [users,setUsers]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(0);

    const Elore=()=>{
        if(page<totalPages){
            setPage(prev=>prev+1);
        }
    }

    const Vissza=()=>{
        if(page>1){
            setPage(prev=>prev-1);
        }
    }
    
    useEffect(()=>{
        fetch(`https://reqres.in/api/users?page=${page}`)
        .then(res=>res.json())
        .then(adatok=>{
            setTotalPages(adatok.total_pages);
            setUsers(adatok.data);
        })
        .catch(err=>console.log(err))
    },[page]);

  return (
    <div>
        <div><h2 className='text-center'><i onClick={()=>Vissza()} className="bi bi-chevron-double-left"></i><span>{page}/{totalPages}</span><i onClick={()=>Elore()} className="bi bi-chevron-double-right"></i></h2></div>
        {
            users.map((elem,index)=>(<User key={index} user={elem} />))
        }
        <div><h2 className='text-center'><i onClick={()=>Vissza()} className="bi bi-chevron-double-left"></i><span>{page}/{totalPages}</span><i onClick={()=>Elore()} className="bi bi-chevron-double-right"></i></h2></div>

    </div>
  )
}

export default Users;