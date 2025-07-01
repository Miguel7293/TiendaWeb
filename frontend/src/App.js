// src/App.js
import React, { useState, useEffect } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [error, setError] = useState('');

  const testBackend = async () => {
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setBackendMessage(data.message);
    } catch (err) {
      setError('Error conectando al backend');
    }
  };

  return (
    <Container className="mt-5">
      <h1>Mi Proyecto React + Render</h1>
      
      <Button 
        variant="primary" 
        onClick={testBackend}
        className="my-3"
      >
        Probar Backend
      </Button>

      {backendMessage && (
        <Alert variant="success">{backendMessage}</Alert>
      )}
      
      {error && (
        <Alert variant="danger">{error}</Alert>
      )}
    </Container>
  );
}

export default App;