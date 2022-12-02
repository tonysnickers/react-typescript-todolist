import { Box, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "300px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="add your list" variant="filled" />
    </Box>
  );
};

export default Form;
