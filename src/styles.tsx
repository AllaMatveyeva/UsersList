import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


export const WrraperApp = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const WrraperUsers = styled.li`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
padding: 5px;
`;

export const Users = styled.span`
width: 200px;
word-break: break-all; 

    margin-right: 20px;
    &&:last-child{
        margin-right: 0px;
    }
    @media (max-width: 670px) {
      width: 55px;
      margin-right: 25px;
      font-size: 10px;
    }
`;

export const DeleteUser = styled(CloseIcon)`
  cursor: pointer;  
`

export const List = styled.ul`
  max-width: 800px;
  margin: 0px;
    padding: 0px;
`;

export const WrapperInput = styled.div`
border: 1px solid black;
text-align: center;
display: flex;
justify-content: flex-end;
align-items: center;
 margin: 10px;
 padding: 0px 20px;
`;

export const InputFilter = styled.input`
  padding: 20px 40px;
  border: none;
  width: 100%;
 text-align: center;
 &&:focus{
    outline: none;
}
`;

export const FilterIcon = styled(SearchIcon)`

`;

export const ResetIcon = styled(RestartAltIcon)`
  
`;

export const UsersearchMatch = styled(Users)`
  margin: 0;
  color: rgb(233, 0, 100);
`


