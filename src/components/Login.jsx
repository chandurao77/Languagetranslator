import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location = window.location + 'text-translate';
        // axios
        //   .post('/api/login', { username, password })
        //   .then((response) => {
        //     // Handle successful login
        //   })
        //   .catch((error) => {
        //     // Handle login error
        //   });
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <div className="text-center">
                        <img src={logo} alt="Logo" className="mb-4" width="150" />
                        <h1 className="h3 mb-3">Sign in to your account</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </Form.Group>

                        <Button className='mt-3 mb-3' variant="primary" type="submit" block>
                            Sign In
                        </Button>
                        <Nav >
                            <Nav.Item>
                                <Link to="/register" className="nav-link">Signup</Link>
                            </Nav.Item>
                        </Nav>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
