import React, { useState } from "react";
import InputField from "../../components/InputFields";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const Test: React.FC = () => {
const [value, setValue] = useState('')

  const { control, reset } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
  });

  React.useEffect(() => {
    reset({
      email: "",
    });
  }, [ reset]);
  return (
    <>
    <InputField
      id="1"
      control={control}
      name="email"
      type="email"
      variant="outlined"
      placeholder="Enter your email"
      label="Enter your email"
      rules={{ required: "Email is required" }}
    />
    <div style={{border:'1px solid red', padding:'20px'}}>

    <TextField
      fullWidth
      variant="outlined"
      name="test"
      label="Test Field"
      value={value} // Ensure it is controlled
      onChange={(e) => setValue(e.target.value)} // Handle change properly
      />
      </div>
    </>
  );
};

export default Test;
