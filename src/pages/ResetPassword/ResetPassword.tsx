import React from "react";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { FormContent, InputContent, LoginContent, Navlink } from "./styled";
import { Button } from "../../components/Button/styled";
// or
import { CircularProgress } from "@mui/material";
import ResetPassHead from "../../components/ResetPassHead";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {  isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: { new_password: "", confirm_password: "" },
  });
  // const navigate = useNavigate();

  React.useEffect(() => {
    reset({
      new_password: "",
      confirm_password: "",
    });
  }, [isSubmitSuccessful, reset]);


  return (
    <>
      <LoginContent>
        <ResetPassHead />
        <form onSubmit={handleSubmit((data) => console.log(data))} action="">
          <FormContent>
            <InputContent>
              <InputField
                control={control}
                id="1"
                name="new_password"
                type="password"
                variant="filled"
                placeholder="Enter new password"
                label="New Password"
                rules={{ required: "New password is required" }}
              />
              <InputField
                control={control}
                id="2"
                name="confirm_password"
                type="password"
                variant="filled"
                placeholder="Enter confirm password"
                label="Confirm Password"
                rules={{ required: "Confirm password is required" }}
              />
              {/* <Navlink to={"/reset-password"}>Forgot Password?</Navlink> */}
            </InputContent>

            <Button
              type="submit"
              // disabled={!isValid}
              // onClick={() => navigate("/")}
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
