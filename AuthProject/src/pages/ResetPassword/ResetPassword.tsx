import React from "react";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent, Navlink } from "./ui";
import { Button } from "../../components/Button";
// or
import { CircularProgress } from "@mui/material";
import ResetPassHead from "../../components/ResetPassHead";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitSuccessful, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { new_password: "", confirm_password: "" },
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    reset({
      new_password: "",
      confirm_password: "",
    });
  }, [isSubmitSuccessful, reset]);

  console.log("errors", errors);

  return (
    <>
      <LoginContent>
        <ResetPassHead />
        <form onSubmit={handleSubmit((data) => console.log(data))} action="">
          <FormContent>
            <InputContent>
              <InputField
                control={control}
                name="new_password"
                type="password"
                placeholder="Enter new password"
                label="New Password"
                defaultValue=""
                rules={{ required: "New password is required" }}
              />
              <InputField
                control={control}
                name="confirm_password"
                type="password"
                placeholder="Enter confirm password"
                label="Confirm Password"
                defaultValue=""
                rules={{ required: "Confirm password is required" }}
              />
              {/* <Navlink to={"/reset-password"}>Forgot Password?</Navlink> */}
            </InputContent>

            <Button
              type="submit"
              disabled={!isValid}
              onClick={() => navigate("/")}
            >
              {isSubmitSuccessful ? (
                <CircularProgress size={10} color="inherit" />
              ) : (
                "Reset Password"
              )}
            </Button>
          </FormContent>
        </form>
        <Navlink to={"/forgot-password"}>
          Back to <span>Forgot password</span>
        </Navlink>
      </LoginContent>
    </>
  );
};

export default ResetPassword;
