import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Define interface for props
interface SearchTextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width: string;
  height: string;
}

const SearchTextField: React.FC<SearchTextFieldProps> = ({
  value,
  onChange,
  placeholder = "Search",
  width,
  height,
}) => {
  return (
    <TextField
      id="standard-search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{ 
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width ? width : "30ch",
        height: height ? height : "6ch",
        backgroundColor: "#ffff",
        borderRadius: "50px",
        "& .MuiInputBase-root": {
          border: "none",
          boxShadow: "none",
        },
        "& .MuiInputBase-input": {
          fontSize: "14px",
        },
        "& .MuiInputBase-input::placeholder": {
          fontSize: "14px",
          color: "#888",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: "20px" }} />
          </InputAdornment>
        ),
      }}
      // variant="standard"
    />
  );
};

export default SearchTextField;
