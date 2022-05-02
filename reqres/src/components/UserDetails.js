
function UserDetails({user}) {
  return (
    <div className="row justify-content-center" style={{backgroundColor:"#A11A22"}}>
        <div className="col-3 d-flex align-items-center">
            <p>{user.email}</p>
        </div>
        <div className="col-3 d-flex align-items-center">
            <img src={user.avatar} />
        </div>
        
    </div>
  )
}

export default UserDetails;