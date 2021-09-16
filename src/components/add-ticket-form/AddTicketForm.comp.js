import React from "react";
import { Form, Jumbotron, Col, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./add-ticket-form.style.css"

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formDt}) => {

    console.log(formDt);
    return(
        <Jumbotron className= "mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <Form>
            <Form autoComplete= "off" onSubmit= {handleOnSubmit}>
                <Form.Group>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name= "subject"
                    value= {formDt.subject}
                    onChange={handleOnChange}
                    placeholder= "Subject"
                    required
                    /></Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label column sm={3}>Issue Found on(Date):</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                    type= "date"
                    name= "issueDate"
                    value= {formDt.issueDate}
                    onChange={handleOnChange}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label column sm={3}>Details</Form.Label>
                    <Col sm={9}>
                    <Form.Control 
                    as= "textarea"
                    name= "details"
                    rows= "5"
                    value= {formDt.details}
                    onChange={handleOnChange}
                    required
                    /></Col>
                </Form.Group>

            <Button type= "submit" variant="info" block>Submit</Button>
            </Form>
            </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired, 
    handleOnChange: PropTypes.func.isRequired, 
    formDt: PropTypes.object.isRequired
}