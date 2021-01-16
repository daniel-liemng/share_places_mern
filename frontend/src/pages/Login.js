import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";
import TextFieldInput from "../components/form/TextFieldInput";

const Login = () => {
  const { control, handleSubmit, errors } = useForm();

  // Switch between Login and Register
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const switchModeHandle = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  console.log("error", errors);

  return (
    <div className='new-form'>
      <Card style={{ width: "30rem", marginTop: "4rem" }}>
        <Card.Title className='text-center' style={{ marginTop: "2rem" }}>
          <h2>{isLoginMode ? "Login" : "Register"}</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {!isLoginMode && (
              <Form.Group controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <TextFieldInput
                  name='name'
                  control={control}
                  className={errors.name ? "error" : null}
                />
                {errors.name && (
                  <Form.Text className='text-danger'>
                    {errors.name.message}
                  </Form.Text>
                )}
              </Form.Group>
            )}

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <EmailInput
                name='email'
                control={control}
                className={errors.email ? "error" : null}
              />
              {errors.email && (
                <Form.Text className='text-danger'>
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <PasswordInput
                name='password'
                control={control}
                className={errors.password ? "error" : null}
              />
              {errors.password && (
                <Form.Text className='text-danger'>
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              disabled={submitting || isLoading}
            >
              {isLoginMode ? "Login" : "Register"}
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          {isLoginMode ? "Don't have an account" : "Already have an account"}
          <Button
            variant='secondary'
            onClick={switchModeHandle}
            style={{ marginLeft: "2rem" }}
          >
            {isLoginMode ? "Switch To Register" : "Switch To Login"}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
