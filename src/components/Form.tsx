import { Box, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import TypeInterface from '../model/typeInterface';

interface Prosps {
  setTodos: TypeInterface;
  todos: TypeInterface;
}

const Form = ({setTodos, todos}:Prosps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handlesubmit = () => {
    console.log(inputRef)
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "300px" },
      }}
      noValidate
      autoComplete="off"
    >
      <input className="input" ref={inputRef} type="text" />
      <Button onClick={() => handlesubmit} variant="contained">Contained</Button>
    </Box>
  );
};

export default Form;
