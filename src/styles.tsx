import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import exp from "constants";

export const WrraperApp = styled.div`
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */


`;

export const WrraperUsers = styled.li`

display: flex;
justify-content: center;
align-items: center;
border: 2px solid black;

`;

export const Users = styled.span`
width: 200px;
padding: 10px;
    margin-right: 20px;
    &&:last-child{
        margin-right: 0px;
    }
`;

export const DeleteUser = styled(CloseIcon)`
  cursor: pointer;  
`

export const List = styled.ul`
  max-width: 800px;
`


