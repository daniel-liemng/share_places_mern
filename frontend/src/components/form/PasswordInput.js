import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";

const PasswordInput = ({ name, control, className }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
      required: "Required !",
      minLength: {
        value: 6,
        message: "Password contains at least 6 characters",
      },
      validate: (value) => {
        return (
          [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
            pattern.test(value)
          ) || "Password must include lower, upper, number, special char"
        );
      },
    },
    defaultValue: "",
  });

  return (
    <Form.Control
      {...inputProps}
      inputref={ref}
      type='password'
      className={className}
    />
  );
};

export default PasswordInput;
