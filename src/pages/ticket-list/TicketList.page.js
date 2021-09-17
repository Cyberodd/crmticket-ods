import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumbs/Breadcrumb.comp";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";


export const TicketList = () => {
    
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket List" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
              <Button variant="info">Add New Ticket</Button>
          </Col>
          <Col className="text-right">
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TicketTable />
          </Col>
        </Row>
      </Container>
    )
  }