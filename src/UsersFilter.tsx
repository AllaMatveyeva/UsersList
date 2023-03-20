import { useState } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { userFilter,filterReset } from "./redux/reducer"
import { FilterIcon, InputFilter, ResetIcon, WrapperInput } from "./styles"


export const UserFilter = () => {
const [value,setValue] = useState<string>("");
const dispatch = useAppDispatch();
const handleChange = (e:any) => {
  setValue(e.target.value);
dispatch(userFilter(e.target.value))
}
    return (
      <WrapperInput> 
        <ResetIcon onClick={() => dispatch(filterReset())}/>
      <InputFilter type="text" value={value} placeholder={"Search user"} onChange={(e)=>handleChange(e)}/>
<FilterIcon/>
      </WrapperInput>
    )  
  }