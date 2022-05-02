
function Username({user,setDetails}) {
  return (
    <div className="row justify-content-center m-2">
      <div className="col-2 d-flex align-items-center">
      <p>{user.first_name} {user.last_name}
       <i onClick={()=>setDetails(prev=>!prev)} className="bi bi-arrow-right-square-fill"></i>
       </p>
      </div>
      </div>
  )
}

export default Username;