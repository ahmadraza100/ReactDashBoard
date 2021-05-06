import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: "#3d3d40",
    padding:"0px",  
    margin:"0px"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
        

    <Box width={1}>   
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PeopleAltIcon  style={{color:"white"}}/>
        </ListItemIcon>
        <ListItemText primary="Users,Roles" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PersonIcon  style={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PersonIcon  style={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Roles" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <PersonIcon  style={{color:"white"}} />
            </ListItemIcon>
            <ListItemText primary="Permissions" />
          </ListItem>
        </List>

      </Collapse>
    </Box>
    </List>
  );
}

export default NestedList;