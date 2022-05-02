import Username from "./Username";
import UserDetails from "./UserDetails";
import {useState} from "react";

function User({user}) {
  const [details,setDetails]=useState(false);

  if(!details){
    return (<Username user={user} setDetails={setDetails} />);
  }

  return ( <div>
    <Username user={user} setDetails={setDetails} />
    <UserDetails user={user} />
    </div>);

  {/*return (
    <div>
      {
        !details ?
        <Username user={user} setDetails={setDetails} /> 
        :
        <div>
        <Username user={user} setDetails={setDetails} />
        <UserDetails user={user} />
        </div>
      }
       
    </div>
    )*/}
}

export default User;