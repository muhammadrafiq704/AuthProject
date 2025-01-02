import React from "react";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent, Navlink } from "./ui";
import { Button } from "../../components/Button";
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
    formState: { isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({ mode: "onChange", defaultValues: { email: "" } });

  const navigate = useNavigate();

  console.log("isSubmitting", isSubmitting);
  console.log("isValid", isValid);

  React.useEffect(() => {
    reset({
      email: "",
    });
  }, [isSubmitSuccessful, reset]);

  console.log("isSubmitSuccessful", isSubmitSuccessful);

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
              disabled={!isValid}
              onClick={() => navigate("/reset-password")}
            >
              {isSubmitSuccessful ? (
                <CircularProgress size={10} color="inherit" />
              ) : (
                "Send"
              )}
            </Button>
          </FormContent>
        </form>
        <Navlink to={"/"}>
          Back to <span>Login</span>
        </Navlink>
      </LoginContent>
    </>
  );
};

export default ForgotPassword;
