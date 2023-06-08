import { useState } from "react";
import { deleteUser } from "./redux/actions";
import { User } from "./interfaces";
import { ModalWindow } from "./ModalWindow";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import "./styles.scss";
import CloseIcon from "@mui/icons-material/Close";

interface UsersProps {
  user: User;
}

export const UserList = ({ user }: UsersProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const str = useAppSelector((state) => state.data.strState);
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const getContent = (str: string, userProperty: string) => {
    let content: any;
    if (str && userProperty.startsWith(str)) {
      content = (
        <div className="userDescription">
          <span className="usersSearchMarch">
            {userProperty.slice(0, str.length)}
          </span>
          <span className="userDescription">
            {userProperty.slice(str.length)}
          </span>
        </div>
      );
    } else {
      content = <span className="userDescription">{userProperty}</span>;
    }
    return content;
  };

  return (
    <>
      <li onClick={handleOpen}>
        {getContent(str.nameStr, user.name)}
        {getContent(str.usernameStr, user.username)}

        {getContent(str.emailStr, user.email)}

        <CloseIcon
          className="deleteUser"
          onClick={() => handleDelete(user.id)}
        />
      </li>

      <ModalWindow
        open={open}
        onClose={handleClose}
        company={user.company}
        address={user.address}
      />
    </>
  );
};
