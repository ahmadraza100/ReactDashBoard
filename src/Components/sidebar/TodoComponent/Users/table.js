import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'

export default function Tab({Fdata , cll , E}) {
  return (
    <Table style={{textAlign:"center"}}>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Roles</Th>
          <Th>Permission</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
      {Fdata.map((val ,index)=>{
          return(
            <Tr key={index}>
          <Td>{index+1}</Td>
          <Td>{val.name}</Td>
          <Td>{val.email}</Td>
          <Td>{val.roles}</Td>
          <Td>{val.permission}</Td>
          <Td ><EditIcon onClick={()=>E(val, index)} style={{fontSize:"2.5em" , color:"green"}} />
           <DeleteIcon onClick={()=>cll(val , index+1)} style={{fontSize:"2.5em", color:"red" }}/></Td>
        </Tr>)
      
    })}
      </Tbody>
    </Table>
  );
}