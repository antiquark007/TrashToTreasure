import React from 'react';
import './Homepage.css';
import Footer from './Footer';

const Homepage = ({ email, fname }) => {
  return (
    <>
    <div className="homepage-container">
      <h1>Welcome, {fname}!</h1>
      <p>Your email: {email}</p>
      <p>
        Welcome to our platform! We are thrilled to have you here. Explore our features and enjoy your stay.
      </p>
      <p>
        If you have any questions or need assistance, feel free to reach out to our support team.
      </p>
    </div>
    <Footer />
    </>

  );
}

export default Homepage;