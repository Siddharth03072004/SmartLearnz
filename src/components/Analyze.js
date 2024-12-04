import React from 'react';

const Analyze = () => {
  // URL of the external site to navigate to
  const externalURL = 'https://studentperformanceanalyzer-lhdndphfhphvyfltd5ujze.streamlit.app/';

  return (
    <div className="container my-5 bg-light">
      <h1 className="text-center mb-4" style={{ color: '#343a40', fontFamily: 'cursive', fontWeight: 'bold' }}>
        Student Performance Analyzer
      </h1>
      <p className="text-center mb-4" style={{ color: '#495057', fontSize: '1.1rem', lineHeight: '1.6' }}>
        The Student Performance Analyzer is a comprehensive tool designed to assess and enhance student achievement.
        By leveraging various data points, such as grades, attendance, and participation, this analyzer provides valuable
        insights into student performance trends and areas for improvement. Educators and administrators can use the tool to
        identify students who may need additional support, track progress over time, and make informed decisions to improve
        educational outcomes. The analyzer typically features interactive dashboards and visualizations, enabling users to quickly
        interpret data and develop targeted strategies to foster student success. Whether used for individual assessments or broader
        academic evaluations, the Student Performance Analyzer plays a crucial role in optimizing learning environments and supporting student growth.
      </p>
      <h4 className="text-center mb-4" style={{ color: '#343a40' }}>
        Click the button below to navigate to the analyzer page
      </h4>
      <div className="text-center">
        {/* Use <a> tag to handle external navigation */}
        <a href={externalURL} 
           className="btn btn-primary btn-lg px-4 py-2" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{
             textDecoration: 'none', 
             fontWeight: 'bold', 
             borderRadius: '5px', 
             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
           }}>
          Analyze
        </a>
      </div>
    </div>
  );
};

export default Analyze;
