import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components/breadcrumbs/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from "../../assets/data/dummy-tickets.json";


export const TicketList = () => {
    
    const [str, setStr] = useState(" ");
    const [dispTicket, setDispTicket] = useState(tickets)

    useEffect(() => {  }, [str, dispTicket]); 

    const handleOnChange = (e) => {
      const { value } = e.target;
      console.log(value)
      setStr(value);
      searchTicket(value);
    };

    const searchTicket = (sttr) =>{
      const displayTickets = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase())
      );
      setDispTicket(displayTickets);
    };
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket List" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Link to= "/add-ticket">
              <Button variant="info">Add New Ticket</Button>
            </Link>
          </Col>
          <Col className="text-right">
            <SearchForm handleOnChange= {handleOnChange} str= {str}/>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col className= "recent-tickets">
            <TicketTable tickets= {dispTicket}/>
          </Col>
        </Row>
      </Container>
    );
  }