import React from "react";
import SignInHead from "../../components/SignInHead";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent } from "./styled";
import { Button } from "../../components/Button/styled";
import { CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
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
                id="1"
                control={control}
                name="email"
                type="email"
                variant="filled"
                placeholder="Enter your email"
                label="Enter your email"
                rules={{ required: "Email is required" }}
              />
              <InputField
                id="2"
                control={control}
                name="password"
                type="password"
                variant="filled"
                placeholder="Enter your password"
                label="Enter your password"
                rules={{ required: "Password is required" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                {/* local pending navigation in NavLink */}
                {/* <Navlink to={"/forgot-password"}>Forgot Password?</Navlink> */}
                <NavLink
                  to={"/forgot-password"}
                  style={{ textDecoration: "none", fontSize: "14px" }}
                >
                  {({ isPending }) => (
                    <span>
                      {isPending ? "loading..." : "Forgot Password? "}
                    </span>
                  )}
                </NavLink>
                {/* <NavLink
                  to={"/dashboard"}
                  style={{ textDecoration: "none", fontSize: "14px" }}
                >
                  {({ isPending }) => (
                    <span>
                      {isPending ? "loading..." : "Dashboard? "}
                    </span>
                  )}
                </NavLink> */}
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
