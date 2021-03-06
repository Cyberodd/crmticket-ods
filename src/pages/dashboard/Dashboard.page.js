import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json'
import { PageBreadcrumb } from '../../components/breadcrumbs/Breadcrumb.comp';

export const Dashboard = () =>{
    return(
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page= "Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className= "text-center mt-5 mb-2">
                <Link to= "/add-ticket">
                <Button variant= "info" style= {{'fontSize': '2rem', padding:"10px 30px"}}>Add a New Ticket</Button>
                </Link>
                </Col>
            </Row>
            <Row>
                <Col className= "text-center mt-5 mb-2">
                <div>Pending tickets: 6</div>
                <div>Total tickets: 63</div>
                </Col>
            </Row>
            <Row>
                <Col className= "mt-2">
                Recently added tickets
                </Col>
            </Row>
            <br />
            <Row>
                <Col className= "recent-tickets">
                    <TicketTable tickets= {tickets} />
                </Col>
            </Row>

        </Container>
    )
}