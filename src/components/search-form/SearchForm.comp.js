import React from 'react'
import { Form, FormGroup, FormLabel, Row, Col, FormControl } from "react-bootstrap";
import PropTypes  from "prop-types";

export const SearchForm = ({handleOnChange, str}) => {
    console.log(str);
    return (
        <div>
            <Form>
                <FormGroup as= {Row}>
                        <FormLabel column sm= "2">Search:{""}</FormLabel>
                        <Col sm="11">
                            <FormControl 
                            name= "SearchStr"
                            onChange= {handleOnChange}
                            value= {str}
                            placeholder= "Search..." />
                        </Col>
                </FormGroup>
            </Form>

        </div>
        )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}
