import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import TextFieldInput from "../components/form/TextFieldInput";
import TextAreaInput from "../components/form/TextAreaInput";

const NewPlace = () => {
  const { control, handleSubmit, errors } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
    setIsLoading(true);

    console.log("submit", data);

    setSubmitting(false);
    setIsLoading(false);
  };

  console.log(errors);

  return (
    <div className='new-form'>
      <Card style={{ width: "30rem", marginTop: "4rem" }}>
        <Card.Title className='text-center' style={{ marginTop: "2rem" }}>
          <h2>Add New Place</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId='formBasicTitle'>
              <Form.Label>Title</Form.Label>
              <TextFieldInput name='title' control={control} />
              {errors.title && (
                <Form.Text className='text-danger'>
                  {errors.title.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Label>Description</Form.Label>
              <TextAreaInput name='description' control={control} />
              {errors.description && (
                <Form.Text className='text-danger'>
                  {errors.description.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='formBasicAddress'>
              <Form.Label>Address</Form.Label>
              <TextFieldInput name='address' control={control} />
              {errors.address && (
                <Form.Text className='text-danger'>
                  {errors.address.message}
                </Form.Text>
              )}
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              disabled={submitting || isLoading}
            >
              Add Place
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewPlace;
