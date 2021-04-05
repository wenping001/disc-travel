import React from "react";
import "./Login.css";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 400,
    marginBottom: 20,
  },
  link: {
    color: "dodgerblue",
  },
});
const Login = () => {
  const classes = useStyles();
  return (
    <div className="login">
      <h3>用户登录</h3>
      <form noValidate autoComplete="off">
        <TextField
          className={classes.root}
          id="standard-basic"
          label="手机号"
        />
        <br />
        <TextField className={classes.root} id="standard-basic" label="密码" />
        <br />
        <Button className={classes.link} color="link">
          忘记密码？
        </Button>
        <Button color="link" className={`${classes.link} ${classes.btn_float}`}>
          注册
        </Button>
        <br />
        <Button className={classes.btn} variant="contained" color="primary">
          登录
        </Button>
      </form>
    </div>
  );
};

export default Login;
