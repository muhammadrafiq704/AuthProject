import React from "react";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent, Navlink } from "./styled";
import { Button } from "../../components/Button/styled";
// or
import { CircularProgress } from "@mui/material";
// import { NavLink } from "react-router-dom";
import ForgotPassHead from "../../components/ForgotPassHead";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onChange", defaultValues: { email: "" } });

  const navigate = useNavigate();


  React.useEffect(() => {
    reset({
      email: "",
    });
  }, [isSubmitSuccessful, reset]);


  return (
    <>
      <LoginContent>
        <ForgotPassHead />
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
            </InputContent>
            <Button
              type="submit"
              // disabled={!isValid}
              onClick={() => navigate("/reset-password")}
            >
              {isSubmitting ? (
                <CircularProgress size={10} color="inherit" />
              ) : (
                "Send"
              )}
            </Button>
          </FormContent>
        </form>
        <div style={{ display: "flex", width: "100%" }}>
          <Navlink to={"/"}>
            Back to <span>Login</span>
          </Navlink>
        </div>
      </LoginContent>
    </>
  );
};

export default ForgotPassword;
