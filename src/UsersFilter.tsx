import { useState } from "react"
import { useAppDispatch } from "./app/hooks"
import { resetFilter, usersFilter } from "./redux/actions"
import { FilterIcon, InputFilter, ResetIcon, WrapperInput } from "./styles"


export const UserFilter = () => {
const [value,setValue] = useState<string>("");
const dispatch = useAppDispatch();
const handleChange = (e:any) => {
  setValue(e.target.value);
dispatch(usersFilter(e.target.value))
}
    return (
      <WrapperInput> 
        <ResetIcon onClick={() => dispatch(resetFilter())}/>
      <InputFilter type="text" value={value} placeholder={"Search user"} onChange={(e)=>handleChange(e)}/>
<FilterIcon/>
      </WrapperInput>
    )  
  }