import React, { useMemo, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { LinkContainer } from "react-router-bootstrap";

import TextFieldInput from "../components/form/TextFieldInput";
import TextAreaInput from "../components/form/TextAreaInput";
import Loading from "../components/shared/Loading";
import MessageCard from "../components/shared/MessageCard";
import useYupValidationResolver from "../utils/YupValidationResolver";
import { useAppContext } from "../context/AppContext";

const UpdatePlace = () => {
  const validationSchema = useMemo(
    () =>
      Yup.object({
        title: Yup.string().required("Required"),
        description: Yup.string().min(
          5,
          "Description is at least 5 characters long"
        ),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);

  const { placeId } = useParams();

  const history = useHistory();

  const {
    loading,
    error,
    getPlaceById,
    place,
    updatePlace,
    userId,
  } = useAppContext();

  const { control, handleSubmit, errors } = useForm({ resolver });

  // Fetch place data to fill in the fields
  useEffect(() => {
    getPlaceById(placeId);
  }, [placeId]);

  const onSubmit = (data) => {
    updatePlace(data, placeId, userId, history);
  };

  if (loading) {
    return <Loading />;
  }

  if (!place) {
    return <MessageCard message=' Could not find place!' />;
  }

  if (error) {
    return <MessageCard message={error} />;
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
                defaultValue={place.title}
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
                defaultValue={place.description}
                className={errors.description ? "error" : null}
              />
              {errors.description && (
                <Form.Text className='text-danger'>
                  {errors.description.message}
                </Form.Text>
              )}
            </Form.Group>
            <div className='d-flex'>
              <Button variant='primary' type='submit' disabled={loading}>
                {loading ? (
                  <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                  />
                ) : (
                  "Edit Place"
                )}
              </Button>
              <LinkContainer to={`/${userId}/places`}>
                <Button variant='secondary' className='ml-2'>
                  Cancel
                </Button>
              </LinkContainer>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdatePlace;
