import React from "react";
import Cover from "../../../component/module/Cover";
import RegisForm from "../../../component/module/Form/regis";

const Register = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Cover></Cover>
          <RegisForm></RegisForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
