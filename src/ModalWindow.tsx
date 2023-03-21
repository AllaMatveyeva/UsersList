import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppSelector } from './app/hooks';
import { Address, Company, Geo, User } from './redux/reducer';


interface ModalWindowProps {
    open: boolean,
    onClose: () => void
    company: Company
    address: Address
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const ModalWindow = ({open, onClose, company, address}: ModalWindowProps) => {
const users = useAppSelector (state => state.users.users);

const companyProperty: Array<string> = [`name: ${company.name}`, `catchPhrase: ${company.catchPhrase}`, `bs: ${company.bs}`];
const addressProperty: Array<string> = [`city: ${address.city}`, `geo: ${address.geo.lat}`, `street: ${address.street}`, `suite: ${address.suite}`, `zipcode: ${address.zipcode}`] 

const getBoxContent = (name: string, content: Array<string>) => {
return (
    <>
        <Typography id="modal-modal-title" variant="h6" component="h2">
       {name}
          </Typography>
          <ul id="modal-modal-description" >
            {content.map((cont,index)=> (
<li key={index}>{cont}</li>
            ))}
            </ul>
        </>
)
}
    return (
<div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {getBoxContent("Company:",companyProperty)}
        {getBoxContent("Address:", addressProperty)}
        </Box>
      </Modal>
    </div>

    )
}