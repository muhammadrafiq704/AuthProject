import React from "react";
import { Head } from "./styled";
import { Typography } from "../Typography/styled";

const SignInHead: React.FC = () => {
  return (
    <Head>
      <Typography>
        <span>Reset</span> Password?
      </Typography>
      <span>Enter your new password to rest it!!</span>
    </Head>
  );
};

export default SignInHead;
