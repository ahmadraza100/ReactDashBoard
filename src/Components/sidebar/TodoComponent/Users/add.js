import React from 'react';
import { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modaal from "./Modal"
import Tab from "./table"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: "1em"
    },
  },
}));

export default function AddTodoo() {
  const [Add, setAdd] = useState(0);
  const classes = useStyles();
  const [Fdata, setFdata] = useState([]);
  const [Edit, setEdit] = useState([]);
  const [Op, setOp] = useState(false);
  const [Pos, setPos] = useState(0);
  const t = true;
  const final = (param) => {
    setFdata([...Fdata, param])

  }

  const open = () => {
    setAdd(true);
    setOp(false)
    setEdit("")
  }

  const close = (param) => {
    setAdd(param)
  }
  const cll = (p, i) => {
    let final = Fdata.filter((val, index) => {
      return index + 1 !== i;
    })
    setFdata(final);
  }
  const E = (val, index) => {
    setAdd(t);
    setEdit(val)
    setOp(t);
    setPos(index)

  }
  const Update = (obj) => {
    console.log(obj);
    let update = Fdata.map((val, index) => {
      if (index === Pos) {
        return obj
      }
      else {
        return val;
      }
    })
    setFdata([...update])
  }

  return (
          
    (Add === true) ?
      <div>

        <Modaal cll={cll} close={close} final={final} Edit={Edit} Op={Op} Update={Update} /> 
        <h1 style={{fontSize:"2em"}}>Users</h1>
        <Tab Fdata={Fdata} cll={cll} E={E} />

        
      </div>:

      <div className={classes.root}>
        <h1 style={{fontSize:"2em"}}>Users</h1>
        <Button variant="contained" color="primary" onClick={open}><AddIcon /> ADD TODO</Button>
        <Tab Fdata={Fdata} cll={cll} E={E} />
      </div>

  );
}