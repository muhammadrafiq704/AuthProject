import React from "react";
import { Head } from "./styled";
import { Typography } from "../Typography/styled";


// const HeadData = [
//   {
//     id: 1,
//     title: "Sign In",
//     desc: "Hey, Enter you details to get sign into your account",
//   },
//   {
//     id: 2,
//     title: "Forgot your",
//     desc: "Please, enter your email address. You will receive a link to create a new password viw email.",
//   },
//   {
//     id: 3,
//     title: "Reset",
//     desc: "Enter your new password to reset it!!",
//   },
// ];

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
