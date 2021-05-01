import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    position:"absolute" , 
    top:"15vh" , 
    right:"3vw",
    fontSize:"2em",
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success" style={{fontSize:"24px" ,color:"green"}}>Component Added</Alert>
    </div>
  );
}


export default Alerts;