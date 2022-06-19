import React from "react";
import Login from "../Login";
import Label from "../../component/base/Label";
import Button from "../../component/base/Button";
import Input from "../../component/base/Input";
import styles from "./register.module.css";

const Register = () => {
  return (
    <Login>
      <div className="col-6 text-center">
        <p className={styles.title + " fs-4"}>Let's Get Started</p>
        <p>Create new account to access all features</p>
        <Label width="100%" className="text-start" title="Name"></Label>
        <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="Name"></Input>
        <Label width="100%" className="text-start" title="Email Address*"></Label>
        <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="Enter Email Address"></Input>
        <Label width="100%" className="text-start" title="Phone Number"></Label>
        <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="081xxxxxx"></Input>
        <Label width="100%" className="text-start" title="Create New Password"></Label>
        <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="Create New Password"></Input>
        <Label width="100%" className="text-start" title="New Password"></Label>
        <Input className="p-3" width="100%" border="1px solid #EFC81A" placeholder="New Password"></Input>
        <div className="mt-4">
          <td>
            <input className="form-check-input text-start" type="checkbox" value="" id="flexCheckDefault" />
          </td>
          <td>
            <p className="ms-2">I agree to term condition</p>
          </td>
        </div>
        <Button color="white" width="100%" backgroundColor="#EFC81A" className="p-2">
          Register Account
        </Button>
        <p className="mt-5">Already have account? Log in here</p>
      </div>
    </Login>
  );
};

export default Register;
