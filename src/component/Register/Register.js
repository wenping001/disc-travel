import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Register.css";
import { Checkbox } from "@material-ui/core";
function Input(props) {
  return (
    <TextField
      id="standard-full-width"
      label={props.label}
      style={{ margin: 8, marginRight: "2rem" }}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default function Register() {
  return (
    <div className="register">
      <main>
        <h3>注册</h3>
        <div className="input-container">
          <Input label="真实姓名" />
          <Input label="手机号" />
          <Input label="邮箱" />
          <Input label="密码" />
          <Input label="确认密码" />
          <Input />
        </div>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          id="licence"
        />
        <label>
          注册账号即代表您同意圆盘旅行的
          <span>《服务条款》</span>、<span>《隐私政策》</span> 、
          <span>《免责声明》</span>、 <span>《保障计划条款》</span>。
        </label>
        <button>注册</button>
        {/*<p>*/}
        {/*  已有账户?<span>登录</span>*/}
        {/*</p>*/}
      </main>
    </div>
  );
}
