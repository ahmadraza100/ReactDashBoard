import{useState} from "react"
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import "../../../App.css"





const AddTodo = () => {

  const [Add, setAdd] = useState(false);
  const [Data, setData] = useState([]);
  const [Position , SetPosition] = useState(0);
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Roles, setRoles] = useState();
  const [Permission, setPermission] = useState();
  const [Flag, setFlag] = useState(false);
  let submit = ()=>{

    if(Name!=="" && Email!==""  && Roles!==""  && Permission!==""){
    let obj = {
      name:Name,
      email:Email,
      roles:Roles,
      permission:Permission
    }
    setData([...Data , obj ]);
    setName("");
    setEmail("")
    setRoles("");
    setPermission("")
    setAdd(false);
}
    else{
        alert("Please Enter all feilds")
    }
  }

  let click =()=>{
    setAdd(true);
  }
  
  const del=(id)=>{
        const dell = Data.filter((elem , index)=>{
            return index+1!==id;
        }) 
        setData(dell);
  }

  const edit=(id, index)=>{
      SetPosition(index)
    
      setAdd(true);
      setFlag(true);
      setName(id.name);
    setEmail(id.email)
    setRoles(id.roles);
    setPermission(id.permission)
    
  
}

const update= ()=>{
    if(Name!=="" && Email!==""  && Roles!==""  && Permission!==""){
        let obj = {
          name:Name,
          email:Email,
          roles:Roles,
          permission:Permission
        }

        let updateStudent = Data.map((vall , ind)=>{
            if(ind===Position){
                return obj;
            }
            else{
                return vall;
            }
        })
        setData([...updateStudent ]);
        setName("");
        setEmail("")
        setRoles("");
        setPermission("")
        setAdd(false);
        setFlag(false);
    }
        else{
            alert("Please Enter all feilds")
        }
}
 
  if(Add===true){
      
    return (
        <>

    <div className="form" >

    <Box mx="auto"><form noValidate autoComplete="off" style={{width:"100%"}} >

<TextField className="feilds" id="standard-basic" label="Name" value={Name}          onChange={(e)=>setName(e.target.value)}/>
<TextField className="feilds" id="standard-basic" label="Email" value={Email}            onChange={(e)=>setEmail(e.target.value)}/>
<TextField className="feilds" id="standard-basic" label="Roles" value={Roles}            onChange={(e)=>setRoles(e.target.value)}/>
<TextField className="feilds" id="standard-basic" label="Permission" value={Permission}  onChange={(e)=>setPermission(e.target.value)}/>
{(Flag===true)?
<Button variant="contained" color="primary" onClick={update}>Update</Button>:
<Button variant="contained" color="primary" onClick={submit}>Add</Button>
  }
</form>
</Box>

</div>
<Box mx="auto">
<Table style={{textAlign:"center"}}>
      <Thead>
        <Tr>
          
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Roles</Th>
          <Th>Extra Permissions</Th>
          <Th  >Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Data.map((val ,index)=>{
          return(
            <Tr key={index}>
          <Td>{index+1}</Td>
          <Td>{val.name}</Td>
          <Td>{val.email}</Td>
          <Td>{val.roles}</Td>
          <Td>{val.permission}</Td>
          
          <Td ><Button variant="contained" color="primary"onClick={()=>{edit(val,index)}}><EditIcon style={{fontSize:"13px"}} />Edit</Button>
          <Button variant="contained" color="secondary" onClick={()=>{del(index+1)}}><DeleteIcon style={{fontSize:"13px"} } />Delete</Button></Td>
        </Tr>)
      
    })}
        
      </Tbody>
    </Table>
    </Box>

</>)
  }
   
    return (
            <>
       

        <div style={{ display: "flex", marginBottom: "3em" }}>

            <Button variant="contained" color="primary" onClick={click}><AddIcon /> Add User</Button>

        </div>
        
        
        <Box mx="auto">
        <Table style={{textAlign:"center"}}>
      <Thead>
        <Tr>
          
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Roles</Th>
          <Th>Extra Permissions</Th>
          <Th  >Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Data.map((val ,index)=>{
          return(
            <Tr>
          <Td>{index+1}</Td>
          <Td>{val.name}</Td>
          <Td>{val.email}</Td>
          <Td>{val.roles}</Td>
          <Td>{val.permission}</Td>
          <Td ><Button style={{marginRight:".5em"}}variant="contained" color="primary"onClick={()=>{edit(val, index)}}><EditIcon style={{fontSize:"13px"}} />Edit</Button>
          <Button variant="contained" color="secondary" onClick={()=>{del(index+1)}}><DeleteIcon style={{fontSize:"13px"} } />Delete</Button></Td>
        </Tr>)
      
    })}
        
      </Tbody>
    </Table>
    </Box>

</>
    );
}


export default AddTodo;
