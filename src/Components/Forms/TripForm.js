import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button } from 'react-bootstrap'
import { DatePickerField } from "../Subcomponents/DatePickerField";
import { TimePickerField } from "../Subcomponents/TimePickerField";

export default function TripForm({handleClose}) {
  return (
    <>
      <Formik
        initialValues={{ eventName: '', eventDate: '', eventTime: '', }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          handleClose()
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Row>
              <h2>Event Information</h2>
              <Col>
                <label>
                  Event Name
                  <Field type="text" name="eventName" label='Event Name' />
                  <ErrorMessage name="eventName" component="div" />
                </label>
              </Col>
              <Col>
                <label>
                  Event Date
                </label>
                <DatePickerField name="eventDate" />
                <ErrorMessage name="eventDate" component="div" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>
                  Local Start Time
                  <TimePickerField name="startTime" />
                  <ErrorMessage name="startTime" component="div" />
                </label>
              </Col>
              <Col>
                <label>
                  Store Name
                  <Field type="text" name="store" />
                  <ErrorMessage name="store" component="div" />
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <label>
                  Format
                  <Field type="text" name="format" />
                  <ErrorMessage name="format" component="div" />
                </label>
              </Col>
              <Col>
                <label>
                  Event Cap
                  <Field type="number" name="format" />
                  <ErrorMessage name="cap" component="div" />
                </label>
              </Col>
            </Row>
            <Row>
              <h3>Address</h3>
              <Col>
                <label>
                  Street Address
                  <Field type="text" name="street" />
                  <ErrorMessage name="street" component="div" />
                </label>
              </Col>
              </Row>
              <Row>
              <Col>
                <label>
                  City Name
                  <Field type="text" name="city" />
                  <ErrorMessage name="city" component="div" />
                </label>
              </Col>
              <Col>
              <label>
                  State
                  <Field type="text" name="state" />
                  <ErrorMessage name="state" component="div" />
                </label>
              </Col>
            </Row>
            {/* <Row>
              <h2>Vehicle Information</h2>
              <Col>
                <label>
                  Passengers
                  <Field name='passengers' as='select'>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5">5 Passengers</option>
                    <option value="6">6 Passengers</option>
                  </Field>
                </label>
              </Col>
              <Col>
              <Row>
              <Col>
              <label>
                  Start Time
                  <Field type="text" name="startTime" />
                  <ErrorMessage name="Event Name" component="div" />
                </label>
              </Col>
              <Col>
              <label>
                  Vehicle Milage
                  <Field type="text" name="milage" />
                  <ErrorMessage name="milage" component="div" />
                </label>
              </Col>
            </Row>
              </Col>
            </Row>
            <Row>
              <h2>Lodging Information</h2>
              <Col>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    Are you planning to split a hotel or AirBnb?
                    <Field type="radio" name="picked" value="Yes" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="No" />
                    No
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <h2>Payment Information</h2>
              <Col>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    Is everyone splitting gas?
                    <Field type="radio" name="picked" value="Yes" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="No" />
                    No
                  </label>
                </div>
              </Col>
            </Row> */}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}