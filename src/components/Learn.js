import React from 'react';

const Learn = () => {
  const cardStyle = {
    width: '20rem',
    boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '12px 12px 24px rgba(0, 0, 0, 0.3)',
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src="/c.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming </h5>
                <p className="card-text" style={{ color: 'black' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="\c" className="btn btn-primary">Learn Course</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src="/java.cms" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Java Programming </h5>
                <p className="card-text" style={{ color: 'black' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="\java" className="btn btn-primary">Learn Course</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src="/python.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Python Programming </h5>
                <p className="card-text" style={{ color: 'black' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="\python" className="btn btn-primary">Learn Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/* Card 4 */}
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src="/maths.avif" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Maths</h5>
                <p className="card-text" style={{ color: 'black' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Learn Course</a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src="/eee.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">EEE</h5>
                <p className="card-text" style={{ color: 'black' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Learn Course</a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4 mb-4">
            <div
              className="card"
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src="/chem.avif" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Chemistry</h5>
                <p className="card-text" style={{ color: 'black' }}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">Learn Course</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
