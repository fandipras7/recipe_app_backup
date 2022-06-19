import React from "react";
import styles from "./login.module.css";
import Label from "../../component/base/Label";
import Input from "../../component/base/Input";

const Login = () => {
  return (
    <div>
      <div className="container-fluid vh-100">
        <div className="row d-flex h-100">
          <div className={"col-6 h-100"}>
            <div className={styles.bg + " position-relative"}>
              <img className="" src="/assets/img/bg_login.png" alt="" />
              <div className={styles.logo}>
                <img src="/assets/img/logo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <div className="col-6 text-center">
              <h6>Welcome</h6>
              <p>Log in into your exiting account</p>
              <Label width="100%" className="text-start" title="E-mail"></Label>
              <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="examplexxx@gmail.com"></Input>
              <Label width="100%" className="text-start" title="Password"></Label>
              <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="examplexxx@gmail.com"></Input>
              <div className="mt-4">
                <td>
                  <input className="form-check-input text-start" type="checkbox" value="" id="flexCheckDefault" />
                </td>
                <td>
                  <p className="ms-2">I agree to term & condition</p>
                </td>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
