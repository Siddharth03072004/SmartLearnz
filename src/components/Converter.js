import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleConvert = () => {
    if (!image) {
      setError('Please upload an image.');
      return;
    }

    setLoading(true);
    setError('');
    Tesseract.recognize(
      image,
      'eng',
      {
        logger: info => console.log(info) // Optionally log progress
      }
    ).then(({ data: { text } }) => {
      setText(text);
      setLoading(false);
    }).catch(err => {
      setError('Error occurred while processing the image.');
      setLoading(false);
    });
  };

  return (
    <Container>
      <Row className="my-5 bg-light">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center" style={{color:'black'}}>Image to Text Converter</h1>
          <Form className="mt-4">
            <Form.Group controlId="formFile">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleConvert} disabled={loading}>
              {loading ? 'Converting...' : 'Convert to Text'}
            </Button>
          </Form>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          {text && (
            <div className="mt-4">
              <h4>Extracted Text:</h4>
              <pre>{text}</pre>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ImageToText;