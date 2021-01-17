import React, { useState, useMemo } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import TextFieldInput from "../components/form/TextFieldInput";
import TextAreaInput from "../components/form/TextAreaInput";
import useYupValidationResolver from "../utils/YupValidationResolver";

const NewPlace = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object({
        title: Yup.string().required("Required !!!**"),
        description: Yup.string().min(
          5,
          "Description is at least 5 characters long"
        ),
        address: Yup.string().required("Required !!!**"),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);

  const { control, handleSubmit, errors } = useForm({ resolver });

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
              <TextFieldInput
                name='title'
                control={control}
                className={errors.title ? "error" : null}
              />
              {errors.title && (
                <Form.Text className='text-danger'>
                  {errors.title.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Label>Description</Form.Label>
              <TextAreaInput
                name='description'
                control={control}
                className={errors.description ? "error" : null}
              />
              {errors.description && (
                <Form.Text className='text-danger'>
                  {errors.description.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId='formBasicAddress'>
              <Form.Label>Address</Form.Label>
              <TextFieldInput
                name='address'
                control={control}
                className={errors.address ? "error" : null}
              />
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
