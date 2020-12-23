import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../Styles/headerstyle"
import AlanIcon from "./../Images/alan-icon.png"

const Header=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span className={classes.firstCap} >A</span>lan News
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className={classes.img} src={AlanIcon} alt=""/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;