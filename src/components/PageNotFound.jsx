import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageNotFound = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>404 Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
