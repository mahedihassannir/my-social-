import React from 'react';
import Header from '../../pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col>lg={3}
                        left side
                    </Col>
                    <Col>lg={6}
                        main
                    </Col>
                    <Col>lg={3}
                        left side
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;