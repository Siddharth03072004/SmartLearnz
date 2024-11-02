import React, { useState } from 'react';
// Make sure to include the Google Generative AI import
import { GoogleGenerativeAI } from "@google/generative-ai";

const Help = () => {
  // State to manage the input and the chatbot's response
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [heading, setHeading] = useState('Chatbot Response');

  // Initialize the GoogleGenerativeAI instance
  const genAI = new GoogleGenerativeAI("AIzaSyB62R90mQ3GbJE-W8-Ghw1a6SD8aIvOm8w");

  // Function to handle API call to Gemini
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Make sure the input isn't empty
    if (!input.trim()) {
      setResponse('Please enter a valid query.');
      return;
    }

    try {
      // Call Gemini API using GoogleGenerativeAI
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      
      // Update response state with the generated text
      setResponse(result.response.text());

    } catch (error) {
      console.error('Error:', error);
      setResponse('There was an error processing your request. Please try again later.');
    }
  };

  return (
    <div className="container my-5">
      <div className="mb-4">
        <label htmlFor="exampleFormControlInput1" className="form-label bg-light">Ask your question:</label>
        <input 
          type="text" 
          className="form-control form-control-lg" 
          id="exampleFormControlInput1" 
          placeholder="Enter text here"
          style={{border:'2px solid'}}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className='text-center mb-4'>
        <button 
          type="button" 
          className="btn btn-primary btn-lg px-4 py-2" 
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className="card mx-auto my-4" style={{ maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div className="card-body">
          <h5 className="card-title">{heading}</h5>
          <hr />
          <p className="card-text" style={{ color: 'black', fontSize: '1.1rem' }}>{response}</p> 
        </div>
      </div>
    </div>
  );
};

export default Help;
