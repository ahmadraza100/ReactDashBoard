import {React, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import AddTodo from './Todo/AddTodo';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Breadcrumbs } from '@material-ui/core';
import RecipeReviewCard from "./sidebarcard"
import SpeedTwoToneIcon from '@material-ui/icons/SpeedTwoTone';
import NestedList from "./dropdown"
import NoteIcon from '@material-ui/icons/Note';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      light: '#3f4491',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#3d3d40",
    color:"#d1cfcf"


  },
  divider: {
    // Theme Color, or use css color in quote
    background: palette.primary,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  




  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
       
      <div  />
      <List style={{backgroundColor:"#3f4491" , width:"100%" , height:"3.6em" , display:"flex"
      , justifyContent:"center" , alignItems:"center" , fontSize:"1rem"}}>Ahmad Raza</List>
      <List>
        <RecipeReviewCard/>
      </List>
      <List style={{backgroundColor:"#2b2929" ,color:"#d1cfcf" , padding:"20px" , marginTop:"0px" , fontWeight:"bold" , textAlign:"left"}}>
        Adiminstration
      </List>

      <List>
        {/* ['DashBoard', 'Users,Roles', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItem button key={"Dashboard"}>
            <ListItemIcon><SpeedTwoToneIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Dashobard"} />
          </ListItem>
          <ListItem>

          <NestedList/>
          </ListItem>
          <ListItem button key={"News"}>
            <ListItemIcon><NoteIcon style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"News"} />
          </ListItem>
          <ListItem button key={"Pages"}>
            <ListItemIcon><ReceiptIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Pages"} />
          </ListItem>
          <ListItem button key={"Menu"}>
            <ListItemIcon><ListIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Menu"} />
          </ListItem>
       

      </List>
      <List style={{backgroundColor:"#2b2929" ,color:"#d1cfcf" , padding:"20px" , marginTop:"0px" , fontWeight:"bold" , textAlign:"left"}}>
          Logout
      </List>
      <ListItem button key={"Logout"}>
            <ListItemIcon><ExitToAppIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
   
        <Toolbar>
        <ListItem style={{width:"10vw" , height:"100%", position:"absolute" , right:"0em", top:"0em"}}button key={"Logout"} >
            <ListItemIcon><ExitToAppIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden >
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >

            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
            <h1 style={{color:"blue"}}>DashBoard</h1>
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
          <Typography align="left" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <Box p={1}><h2 >Users</h2></Box>
            <p style={{ color: "gray" }} >All users are in Database</p>

          </Typography>
          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href=">" >
                Album
            </Link>
              <Link color="textPrimary" href="/getting-started/installation/" >
                Users
             </Link>
              <Typography color="inherit">List</Typography>
            </Breadcrumbs>
          </Box>
        </Box>
        <AddTodo />

      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;