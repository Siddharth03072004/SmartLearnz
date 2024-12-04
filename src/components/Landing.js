// src/components/LandingPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/LandingPage.css'; // Import the CSS file

const Landing = () => {
  return (
    <Container
      fluid
      className="landing-page d-flex align-items-center justify-content-center text-center p-0 m-0"
    >
      <Row className="justify-content-center align-items-center g-0" style={{ height: '100%' }}>
        <Col md={8}>
          {/* Animate the header text */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <h1 className="display-4 fw-bold text-white" style={{fontFamily:'monospace'}}>Welcome to Our Learning Platform</h1>
            <p className="lead text-white" style={{fontFamily:'cursive'}}>
              Learn new skills online with top educators. Learn anything, anytime, anywhere.
            </p>
          </motion.div>

          {/* Animate the button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Button variant="primary" size="lg" className="mt-4">
              Get Started
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
