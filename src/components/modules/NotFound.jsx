import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../partials/BreadCrumb';

function NotFound() {
  return (
    <>
      {/* <BreadCrumb title={'Page Not Found'} /> */}
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="text-center px-4 py-5">
          {/* Professional Icon/Graphic */}
          <div className="mb-4">
            <div className="display-1 fw-bold text-primary opacity-75 mb-3">404</div>
            <div className="border-bottom mx-auto" style={{width: '80px', borderColor: '#dee2e6'}}></div>
          </div>
          
          {/* Main Content */}
          <div className="mb-5">
            <h1 className="h2 fw-semibold text-dark mb-3">Page Not Found</h1>
            <p className="text-muted fs-6 mb-4 mx-auto" style={{maxWidth: '500px', lineHeight: '1.6'}}>
              We apologize, but the page you are looking for cannot be found. 
              This may be due to an outdated link, a typographical error, or the page 
              may have been moved or archived.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link 
              to="/" 
              className="btn btn-primary btn-lg px-4 py-2 fw-semibold shadow-sm"
            >
              Return to Dashboard
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline-secondary btn-lg px-4 py-2 fw-semibold"
            >
              Go Back
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-5 pt-4 border-top">
            <p className="text-muted small mb-2">Need further assistance?</p>
            <Link to="/help" className="text-decoration-none small fw-semibold">
              Contact Support ›
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;