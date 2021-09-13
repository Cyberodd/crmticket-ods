import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from "react-bootstrap";


export const ResetPassword = ({handleOnChange, handleOnResetSubmit, formSwitcher, email}) =>{
    return (
    <Container>
        <Row>
            <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <br />
            <Form onSubmit= {handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    type= "email"
                    name= "email"
                    value= {email}
                    onChange={handleOnChange}
                    placeholder= "Please enter your email address"
                    required
                    />
                </Form.Group>
                

            <Button type= "submit">Reset Password</Button>
            </Form>
            <br />
            </Col>
        </Row>  
        <Row>
            <Col>
            <a href="#!" onClick= {() => formSwitcher('login')}>Log in?</a>
            </Col>
        </Row>      
    </Container>)
};

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}