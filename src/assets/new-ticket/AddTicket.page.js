import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumbs/Breadcrumb.comp";

const initFormDt = {
    subject: "",
    issueDate: null,
    details: "",
};

export const AddTicket = () => {
    const [formDt, setFormDt] = useState(initFormDt); 
    useEffect(() => {}, [formDt]);

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFormDt({
            formDt,
            [name]: value,
        });
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()

        console.log("Submit request received", formDt)
    }
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="New Ticket" />
          </Col>
        </Row>
  
        <Row>
          <Col>
          <AddTicketForm handleOnChange={handleOnChange}
          handleOnSubmit= {handleOnSubmit}
          formDt= {formDt}
          />
          </Col>
        </Row>
      </Container>
    );
  };