import {React, useState} from 'react';
import { Route, Switch  , Link} from 'react-router-dom';
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
import AddTodoo from '../TodoComponent/Users/add';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import RecipeReviewCard from "./sidebarcard"
import SpeedTwoToneIcon from '@material-ui/icons/SpeedTwoTone';
import NestedList from "./dropdown"
import NoteIcon from '@material-ui/icons/Note';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashBoard from "../TodoComponent/dashboard/DashBoard"
import News from "../TodoComponent/News/News"
import "../../../App.css"
import Login from  "../TodoComponent/login/login"
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
  const [Name, setName] = useState("Dashboard");
  const [Logout, setLogout] = useState(false);

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const clear = ()=>{
    setName("");
    setLogout(true)
  }
  

  const N = (params , val)=>{
      setName(params)
      setLogout(val);
  }

  const Clear = (param)=>{
    setName(param);
    setLogout(true);
  }



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    
    <div>
      <List style={{backgroundColor:"#3f4491" , width:"100%" , height:"3.6em" , display:"flex"
      , justifyContent:"center" , alignItems:"center" , fontSize:"1rem"}}>DashBoard By Ahmad</List>
      {(Name!=="")?
      <div> <List>
        <RecipeReviewCard Name={Name}/>
      </List>
      <List style={{backgroundColor:"#2b2929" ,color:"#d1cfcf" , padding:"20px" , marginTop:"0px" , fontWeight:"bold" , textAlign:"left"}}>
        Adiminstration
      </List>

      <List>
        {/* ['DashBoard', 'Users,Roles', 'Send email', 'Drafts'].map((text, index) => ( */}
         <Link className="link" to="/Dashboard"><ListItem button key={"Dashboard"}>
            <ListItemIcon><SpeedTwoToneIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItem>
          </Link >
          
          <Link activeClassName='is-active' className="link" to="/Users"><ListItem>

          <NestedList/>
          </ListItem>
          </Link>
          <Link activeClassName='is-active' className="link" to="/News"><ListItem button key={"News"}>
            <ListItemIcon><NoteIcon style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"News"} />
          </ListItem>
          </Link>
          <ListItem button key={"Pages"}>
            <ListItemIcon><ReceiptIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Pages"} />
          </ListItem>
          <ListItem button key={"Menu"}>
            <ListItemIcon><ListIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Menu"} />
          </ListItem>
       

      </List>
      
      <>
     <List style={{backgroundColor:"#2b2929" ,color:"#d1cfcf" , padding:"20px" , marginTop:"0px" , fontWeight:"bold" , textAlign:"left"}}>
          Logout
      </List>
      <Link to="/" onClick={clear}> <ListItem button key={"Logout"}>
            <ListItemIcon><ExitToAppIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
          </Link></>
          </div>
    :<div style={{textAlign:"center"}} >
      <h1>Please Login to Access all options</h1>
      </div>}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
   
        <Toolbar>
        {(Logout!==true)?
        <Link  to="/" onClick={clear} className="link" ><ListItem style={{width:"10vw" , height:"100%", position:"absolute" , right:"0em", top:"0em"}}button key={"Logout"} >
            <ListItemIcon><ExitToAppIcon  style={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem></Link>:""}
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
        
          <Switch>
            <Route exact path="/"><Login N={N} Clear={Clear}/></Route>
            <Route path="/Dashboard" onClick={()=>setLogout(false)}><DashBoard Name = {Name}/></Route>
          <Route  exact path="/Users"><AddTodoo /></Route>
            <Route path="/News"><News/></Route>
        </Switch>
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