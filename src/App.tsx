import { ElementType, JSXElementConstructor, useEffect, useState,  } from "react";
import { UserFilter } from "./UsersFilter";
import { UserList } from "./UsersList";
import { List, WrraperApp } from "./styles";
import { getUsers } from "./api";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from "./redux/reducer";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { CircularIndeterminate } from "./CircularIndeterminate";




const App = () => {
  
  const users = useAppSelector ( state => state.users.users)

  const usersStatus = useAppSelector  ( state => state.users.status)
  const error = useAppSelector ( state => state.users.error)
  const dispatch = useAppDispatch ();

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [usersStatus, dispatch]);

  let content:any;

  if (usersStatus === 'loading') {
    content = <CircularIndeterminate/>;
    
  } else if (usersStatus === 'succeeded') {
    
    content =<List> {users.map((user, index) => (
      <UserList key={user.id} user={user} />
    ))}
    </List>
  } else if (usersStatus === 'failed') {
    content = <div>{error}</div>
  }


  return (
    
   <WrraperApp>
    <UserFilter/>
    
        {content}
   </WrraperApp>
    
     
  );
}



export default App;
