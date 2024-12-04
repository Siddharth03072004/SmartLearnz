import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

const topics = [
  'Introduction ',
  'Data Types ',
  'operators ',
  'Control Structures',
  'Functions ',
  'Arrays',
  'Structures',
  'File Handling',
  'Looping Statements',
  'Libraries',
  'Strings',
  'Linked list',
  'Double linked list',
  'trees',
  'graphs',
  'Char',
  'recursion',
  'bit manipulation',
  'java math',
  'vector',
  'hashing',
  'packages',
  'jframe',
  'applets',
  'swing'
  
];

const Java = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [content, setContent] = useState('');
  
  // Initialize the GoogleGenerativeAI instance
  const genAI = new GoogleGenerativeAI("AIzaSyB62R90mQ3GbJE-W8-Ghw1a6SD8aIvOm8w");

  const handleTopicClick = async (topic) => {
    setSelectedTopic(topic);

    try {
      // Prepare the prompt related to the selected topic
      const prompt = `Generate a learning resource for the topic: ${topic} in java`;
      
      // Call Gemini API using GoogleGenerativeAI
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      
      // Update content state with the generated text
      setContent(result.response.text());

    } catch (error) {
      console.error('Error:', error);
      setContent('There was an error processing your request. Please try again later.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="list-group">
            {topics.map((topic, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action ${selectedTopic === topic ? 'active' : ''}`}
                onClick={() => handleTopicClick(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{selectedTopic}</h5>
              <hr />
              <div 
                className="card-text" 
                style={{ color: 'black' }} 
                dangerouslySetInnerHTML={{ __html: formatContent(content) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to format content with line breaks and paragraphs
const formatContent = (text) => {
  // Convert new lines into <br> and split paragraphs by double new lines
  return text
    .replace(/\n\n/g, '<p></p>') // Add paragraphs
    .replace(/\n/g, '<br>');    // Add line breaks
};

export default Java;
