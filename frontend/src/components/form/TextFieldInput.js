import React from "react";
import { Form } from "react-bootstrap";
import { useController } from "react-hook-form";

const TextFieldInput = ({ name, control, defaultValue }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    rules: {
      required: "Required !",
    },
    // For update, fill value in the field
    defaultValue: defaultValue ? defaultValue : "",
  });

  return <Form.Control {...inputProps} inputref={ref} />;
};

export default TextFieldInput;
