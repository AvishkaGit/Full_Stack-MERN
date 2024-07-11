import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable';
import { Box } from '@mui/material';
import Axios from "axios";
import { useEffect,useState} from "react";



export default function Users() {
  
   const [users, setUsers] = useState([]);

   useEffect(() => {
     getUsers();
   },[]);

   const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
       .then(response => {
        setUsers(response?.data?.response);
       })
   }



  return (
    <Box
       sx={{
        width:'calc(100% - 100px)',
        margin: 'auto',
        marginTop : '100px',
       }}
    >
      <UserForm/>
      <UserTable rows={users}/>
    </Box>
  )
}
