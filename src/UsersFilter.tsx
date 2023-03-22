import { useState } from "react"
import { useAppDispatch } from "./app/hooks"
import { resetFilter, usersFilter } from "./redux/actions"
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import "./styles.scss"

export const UserFilter = () => {
const [value,setValue] = useState<string>("");
const dispatch = useAppDispatch();
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
dispatch(usersFilter(e.target.value))
}
    return (
      <div className="wrapperInput"> 
        <RestartAltIcon className="resetFilter" onClick={() => dispatch(resetFilter())}/>
      <input type="text" value={value} placeholder={"Search user"} onChange={(e)=>handleChange(e)}/>
<SearchIcon className="usersFilter"/>
      </div>
    )  
  }