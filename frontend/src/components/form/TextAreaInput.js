import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";

const TextAreaInput = ({ name, control, defaultValue, className }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
      // required: "Required !",
    },
    // For update, fill value in the field
    defaultValue: defaultValue ? defaultValue : "",
  });
  return (
    <Form.Control
      as='textarea'
      rows={3}
      {...inputProps}
      inputref={ref}
      className={className}
    />
  );
};

export default TextAreaInput;
