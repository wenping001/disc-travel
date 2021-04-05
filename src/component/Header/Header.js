import React from "react";
import "./Header.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  appBar: {
    backgroundColor: "#fff",
    padding: "1rem",
  },
  navLink: {
    color: "black",
    marginRight: 20,
    transition: "color 200ms ease-in-out",
    "&:hover": {
      color: "orange",
      borderBottom: "2px solid orange",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HashRouter>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <NavLink to="/" className={classes.navLink}>
              <Typography variant="h6">圆盘旅行</Typography>
            </NavLink>
            <div className="navBar">
              <NavLink to="/login" className={classes.navLink}>
                登录
              </NavLink>
              <NavLink to="/register" className={classes.navLink}>
                注册
              </NavLink>
              <NavLink to="/indigent" className={classes.navLink}>
                我是当地人
              </NavLink>
              <NavLink to="/about-us" className={classes.navLink}>
                关于我们
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </HashRouter>
    </div>
  );
};

export default Header;
