import React from 'react'
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit})=> {
    return (
        <Form onSubmit= {handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please enter reply here</Form.Text>
            <Form.Control name="" value={msg} onChange= {handleOnChange} as= "textarea" row= "5" name="detail" />
            <div className= "text-right mt-4 mb-5">
            <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}

UpdateTicket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}
