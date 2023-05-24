import * as React from 'react';
import { Link } from 'react-router-dom';
import Style from "./index.module.css"
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import style from "./index.module.css"
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
  
    marginRight: -drawerWidth,
    ...(open && {

    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export default function Navbar() {


  return (
    <Box sx={{ display: 'flex' }} style={{display:"flex"}}>
      <CssBaseline />
      <AppBar position="fixed" style={{"backgroundColor":"#fff"}} >
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          <ul className={style.nav}>
           
            <div className={style.right }>
            <li>
      <Link className= {style.links} to='/'>Home</Link>
    </li>
    <li>
      <Link className= {style.links} to='#'>About </Link>
    </li>
    <li>
      <Link className= {Style.links} to='#'>Immigration</Link>
    </li>
    <li>
      <Link className= {Style.links} to='/blog'>Cours</Link>
    </li>
    
    <li>
      <Link className= {Style.links} to='#'>Country</Link>

    </li>
    <li>
      <Link className= {Style.links} to='#'>Contact</Link>
      
    </li>
    <li>
      <Link className= {Style.links} to='#'>Elements</Link>
      
    </li>
            </div>
  
    </ul>
    
          </Typography>
    
        </Toolbar>
      </AppBar>
      <Main >
        <DrawerHeader />

      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
      
      >
      
        <Divider />
        <List>
        <ul className={Style.burger}>
     <li>
      <Link  className={Style.lists} to='/'>Home</Link>
    </li>
    <li>
      <Link  className={Style.lists} to='/about'>About</Link>
    </li>
    <li>
      <Link className={Style.lists}  to='/contact'>Contact</Link>
    </li>
    <li>
      <Link  className={Style.lists} to='/services'>Services</Link>
    </li>
    <li>
      <Link  className={Style.lists} to='/register'>Register</Link>
    </li>
    </ul>
    
        </List>
        <Divider />
   
      </Drawer>
    </Box>
  );
}