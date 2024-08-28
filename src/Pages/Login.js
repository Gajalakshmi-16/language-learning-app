import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login process
    if (formData.email === 'test@example.com' && formData.password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <h2>Login</h2>
          </div>
          {isLoggedIn ? (
            <Alert variant="success">Login successful! Welcome back.</Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Login
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
