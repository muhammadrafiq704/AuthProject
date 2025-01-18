import React from "react";
import SignInHead from "../../components/SignInHead";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent, Navlink } from "./styled";
import { Button } from "../../components/Button/styled";
import { CircularProgress } from "@mui/material";
// import { NavLink } from "react-router-dom";

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onChange", defaultValues: { email: "", password: "" } });


  React.useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful, reset]);

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
                placeholder="Enter your email"
                label="Email"
                defaultValue=""
                rules={{ required: "Email is required" }}
              />
              <InputField
                control={control}
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
                defaultValue=""
                rules={{ required: "Password is required" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Navlink to={"/forgot-password"}>Forgot Password?</Navlink>
              </div>
            </InputContent>

            <Button
              type="submit"
              // disabled={!isValid}
            >
              {isSubmitting ? (
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
