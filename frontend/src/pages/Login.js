import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";

const Login = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("submit", data);
  };

  return (
    <div className='new-form'>
      <Card style={{ width: "30rem", marginTop: "4rem" }}>
        <Card.Title className='text-center' style={{ marginTop: "2rem" }}>
          <h2>Login</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
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

            <Button variant='primary' type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
