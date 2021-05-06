import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import {useState } from "react"
import {useEffect} from "react"

import {Link} from "react-router-dom"

import "../../../../App.css"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
    },
    div:{
        display:"flex" , 
        justifyContent:"center" , 
        alignItems:"center"
    }
  }));




const Login = ({N , Clear}) => {
    const classes = useStyles();

    const [Name, setName] = useState("");
    useEffect(() => {
        setName("");
        Clear("")
    },[]);

    return (
        <div className="dashboard">
            <h1>Sign In</h1>
            <h2> Please fill All feilds to Get Login</h2>
            
    <div  className={classes.div}>

   <form className={classes.root}noValidate autoComplete="off"  >

<TextField className="feilds" id="standard-basic" label="Name" value={Name}          onChange={(e)=>setName(e.target.value)}/>
<TextField className="feilds" id="standard-basic" label="Email" />
<TextField className="feilds" id="standard-basic" label="Password"/>
<Link to="./Dashboard"><Button variant="contained" color="primary" onClick={()=>N(Name , false)}>Confirm</Button></Link>

</form>
</div>
        </div>
    );
}

export default Login;
