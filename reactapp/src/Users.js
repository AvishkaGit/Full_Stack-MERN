import React from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable';
import { Box } from '@mui/material';

const users =[
  {
    id: 1,
    name: 'Avishka',
  },
  {
    id: 2,
    name: 'prasad',
  }
];


export default function Users() {
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
