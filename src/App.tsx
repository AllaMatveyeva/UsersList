import { useEffect } from "react";
import { UserFilter } from "./UsersFilter";
import { UserList } from "./UsersList";
import { getUsers } from "./api";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { errorStatus, makeUsers, successStatus } from "./redux/actions";
import "./styles.scss"

const App = () => {
  
  const users = useAppSelector ( state => state.users)
  const usersStatus = useAppSelector  ( state => state.status)
  const error = useAppSelector ( state => state.error)
  const dispatch = useAppDispatch ();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUsers();
        dispatch(makeUsers(response.data));
        dispatch (successStatus("succeeded"))
      } catch {
        console.log(error);
        dispatch(errorStatus("failed"))
      } 
    }
    if (usersStatus === 'idle') {

fetchUser()
 }
  }, [usersStatus, dispatch]);

  let content:any;
  

   if (usersStatus === 'succeeded') {
    
    content =<ul> {users.map((user, index) => (
      <UserList key={user.id} user={user} />
    ))}
    </ul>
  } else if (usersStatus === 'failed') {
    content = <div>{error}</div>
  }

return (
    
   <div className="wrrapperApp">
    <UserFilter/>
    
        {content}
   </div>
    
     
  );
}

export default App;
