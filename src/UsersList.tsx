import { MouseEvent, MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, reseteFilter } from "./redux/actions";
import { User, userDelete } from "./redux/reducer"
import { DeleteUser, Users, WrraperUsers } from "./styles"
import { ModalWindow } from "./ModalWindow";

interface UsersProps {
  user: User,
}

export const UserList = ({user}: UsersProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const dispatch = useDispatch ();
  
  const handleDelete = (id:number) => {
dispatch(userDelete(id))
  };

 

    

  return (
    <>
    <WrraperUsers onClick={handleOpen}>
    
              <Users>
                
                  {user.name}
                
              </Users>
              <Users >
                
                  {user.username}
               
              </Users>
              <Users >
                
                  {user.email}
                
              </Users>
              
              
                
              <DeleteUser onClick={() => handleDelete(user.id)}/>
            </WrraperUsers>
            <ModalWindow open={open} onClose = {handleClose} company={user.company} address={user.address}/>
            </>
  //   <WrraperUsers>
      
  //   <Users>{user.name}</Users>
  //   <Users>{user.username}</Users>
  //   <Users>{user.email}</Users>
  //  <DeleteUser/>
  //   </WrraperUsers>
  )  
}