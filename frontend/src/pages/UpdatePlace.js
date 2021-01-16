import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import TextFieldInput from "../components/form/TextFieldInput";
import TextAreaInput from "../components/form/TextAreaInput";
import Loading from "../components/shared/Loading";

const placeData = [
  {
    id: "p1",
    title: "Empire State Building 1",
    description: "One of the tallest building",
    imgUrl:
      "https://www.tripsavvy.com/thmb/ReFZGQNAplVtAoqej_A4kt44bxo=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/empire-state-building-at-dusk-new-york-city-usa-668600131-590f0a5b5f9b5864701d53f4.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building 2",
    description: "One of the tallest building",
    imgUrl:
      "https://www.tripsavvy.com/thmb/ReFZGQNAplVtAoqej_A4kt44bxo=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/empire-state-building-at-dusk-new-york-city-usa-668600131-590f0a5b5f9b5864701d53f4.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const { placeId } = useParams();

  const { control, handleSubmit, errors } = useForm();

  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const indentifiedPlace = placeData.find((p) => p.id === placeId);

  const onSubmit = (data) => {
    setSubmitting(true);
    setIsLoading(true);

    console.log("submit", data);

    setSubmitting(false);
    setIsLoading(false);
  };

  console.log(errors);

  if (!indentifiedPlace) {
    return (
      <Card style={{ maxWidth: "30rem", margin: "2rem auto" }}>
        <Card.Body>Could not find place!</Card.Body>
      </Card>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='new-form'>
      <Card style={{ width: "30rem", marginTop: "4rem" }}>
        <Card.Title className='text-center' style={{ marginTop: "2rem" }}>
          <h2>Update Place</h2>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId='formBasicTitle'>
              <Form.Label>Title</Form.Label>
              <TextFieldInput
                name='title'
                control={control}
                defaultValue={indentifiedPlace.title}
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
                defaultValue={indentifiedPlace.description}
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
                defaultValue={indentifiedPlace.address}
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
              Update Place
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdatePlace;
