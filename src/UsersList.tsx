import { MouseEvent, MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, reseteFilter } from "./redux/actions";
import { User, userDelete } from "./redux/reducer"
import { DeleteUser, Users, UsersearchMatch, WrraperUsers } from "./styles"
import { ModalWindow } from "./ModalWindow";
import { useAppDispatch, useAppSelector } from "./app/hooks";

interface UsersProps {
  user: User,
}

export const UserList = ({user}: UsersProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const str = useAppSelector ( state => state.users.strState)
  const dispatch = useAppDispatch ();
  
  const handleDelete = (id:number) => {
dispatch(userDelete(id))
  };

  const getContent = (str:string, userProperty: string) => {
    let content:any;
if (str && userProperty.startsWith(str)) {
      content = (
        <>
         <UsersearchMatch>{userProperty.slice(0, str.length)}</UsersearchMatch>
         <Users>{userProperty.slice(str.length)}</Users>
         </>
         )
    } else {
content = <Users>{userProperty}</Users>
    }
    return content
  };

 return (
    <>
    <WrraperUsers onClick={handleOpen}>
    
              <Users>
                
                  {getContent(str.nameStr, user.name)}
                
              </Users>
              <Users >
                
               {getContent(str.usernameStr, user.username)}
               
              </Users>
              <Users >
                
              {getContent(str.emailStr, user.email)}
                
              </Users>
              
              
                
              <DeleteUser onClick={() => handleDelete(user.id)}/>
            </WrraperUsers>
            <ModalWindow open={open} onClose = {handleClose} company={user.company} address={user.address}/>
            </>
   )  
}