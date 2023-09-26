import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav';

const NewsLayout = () => {
    return (
        <div className="container">
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}> <Outlet>
            </Outlet></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
    </div>
    );
};

export default NewsLayout;