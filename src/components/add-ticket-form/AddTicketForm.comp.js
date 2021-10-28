import React from "react";
import { Form, Jumbotron, Col, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./add-ticket-form.style.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const AddTicketForm = ({handleOnSubmit, handleOnChange, handleOnSelect, formDt}) => {

    const options = [
        'Weighbridge module', 'Farm module', 'Factory module', 'Scale'
      ];
    const defaultOption = options[0];
    console.log(formDt);
    return(
        <Jumbotron className= "mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <Form>
            <Form autoComplete= "off" onSubmit= {handleOnSubmit}>
                <Form.Group>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                    <Dropdown
                    options={options} 
                    onChange={handleOnSelect} 
                    value={defaultOption} 
                    placeholder="Select an option"
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
    handleOnSelect: PropTypes.func.isRequired, 
    formDt: PropTypes.object.isRequired
}