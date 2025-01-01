import React from "react";
import { Head } from "./ui";
import { Typography } from "../Typography";

const SignInHead: React.FC = () => {
  return (
    <Head>
      <Typography>
        <span>Let's</span> Sign In
      </Typography>
      <span>
        Hey, Enter your details to get sign in <br /> into your account
      </span>
    </Head>
  );
};

export default SignInHead;
