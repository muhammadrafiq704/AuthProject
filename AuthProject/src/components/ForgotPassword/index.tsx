import React from "react";
import { Head } from "./styled";
import { Typography } from "../Typography/styled";

const SignInHead: React.FC = () => {
  return (
    <Head>
      <Typography>
        <span>Forgot your</span> Password
      </Typography>
      <span>
        Please, enter your email address. You will receive a link to create a{" "}
        <br /> new password viw email.
      </span>
    </Head>
  );
};

export default SignInHead;
