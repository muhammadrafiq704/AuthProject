import React from "react";
import SignInHead from "../../components/SignInHead";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent, Navlink } from "./ui";
import { Button } from "../../components/Button";
// or
import { CircularProgress } from "@mui/material";
// import { NavLink } from "react-router-dom";

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ defaultValues: { email: "", password: "" } });

  console.log("isSubmitting", isSubmitting);
  console.log("isValid", isValid);

  React.useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful, reset]);

  console.log("isSubmitSuccessful", isSubmitSuccessful);
  return (
    <>
      <LoginContent>
        <SignInHead />
        <form onSubmit={handleSubmit((data) => console.log(data))} action="">
          <FormContent>
            <InputContent>
              <InputField
                control={control}
                name="email"
                type="email"
                placeholder="Enter email"
                label="Email"
                defaultValue=""
                rules={{ required: "Email is required" }}
              />
              <InputField
                control={control}
                name="password"
                type="password"
                placeholder="Enter password"
                label="Password"
                defaultValue=""
                rules={{ required: "Password is required" }}
              />
              <Navlink to={"/reset-password"}>Forgot Password?</Navlink>
            </InputContent>

            <Button type="submit" disabled={!isValid}>
              {isSubmitSuccessful ? (
                <CircularProgress size={10} color="inherit" />
              ) : (
                "Submit"
              )}
            </Button>
          </FormContent>
        </form>
      </LoginContent>
    </>
  );
};

export default SignIn;
