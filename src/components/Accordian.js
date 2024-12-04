import React from 'react';
import '../styles/accordianstyle.css'; // Make sure to include your custom CSS file

const Accordian = () => {
  return (
    <>
      <div className='bg-black text-center text-white py-4' style={{fontFamily:'fantasy'}}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the Chatbot feature?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Chatbot feature</strong> provides instant support and answers user queries about the app. It uses AI to understand and respond to user questions, offering an engaging and interactive way to get help and information.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How does the Student Analyzer work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Student Analyzer</strong> assesses student performance through various metrics such as grades, participation, and assignments. It provides insights into academic strengths and areas needing improvement, helping educators tailor support to each student's needs. It does not calculate attendance.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What can I do with the Quiz feature?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Quiz feature</strong> allows users to create and participate in quizzes on various subjects. It is designed to test and enhance knowledge in a fun and interactive manner. AI is used to adapt quiz difficulty based on user performance and provide personalized feedback.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              How does the Image-to-Text Converter work?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>The Image-to-Text Converter feature</strong> uses optical character recognition (OCR) to convert text from images into editable digital text. This tool is useful for extracting information from scanned documents, images of notes, or any other text-containing visuals.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
