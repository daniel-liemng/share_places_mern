import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";

const EmailInput = ({ name, control, className }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
      required: "Required !",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email format",
      },
    },
    defaultValue: "",
  });

  return (
    <Form.Control
      {...inputProps}
      inputref={ref}
      autoComplete='off'
      className={className}
    />
  );
};

export default EmailInput;
