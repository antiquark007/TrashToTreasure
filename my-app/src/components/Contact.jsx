import React from "react";
import "./Contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="overlay">
        <h1 className="title">
          Get <span className="highlight">in touch</span>
        </h1>

        <div className="contact-box">
          {/* Left Side - Contact Form */}
          <div className="form-container">
            <h2 className="form-title">Join the Recycling Revolution</h2>
            <p className="form-subtext">
              Fill in the details below and let’s transform trash into treasure!
            </p>

            <form className="contact-form">
              <input type="text" placeholder="Name" className="input-field" />
              <input type="email" placeholder="Email ID" className="input-field" />
              <input type="tel" placeholder="Phone Number" className="input-field" />
              <input type="text" placeholder="Address" className="input-field" />

              {/* Waste Type Dropdown */}
              <select className="input-field">
                <option value="" disabled selected>Choose Waste Type</option>
                <option value="Plastic">Plastic</option>
                <option value="Paper">Paper</option>
                <option value="Metal">Metal</option>
                <option value="Electronics">Electronics</option>
                <option value="Other">Other</option>
              </select>

              <button className="submit-button">Submit</button>
            </form>
          </div>

          {/* Right Side - Customer Support */}
          <div className="right-container">
            <div className="support-info">
              <p className="support-heading">Need Help? Contact Us! 📞</p>
              <p className="support-text">We are available 24/7 for your queries.</p>

              <div className="support-details">
                <p>✉️ <span className="support-email">
                  <a href="mailto:support@trashtotreasure.com">support@trashtotreasure.com</a>
                </span></p>
                <p>📞 <span className="support-phone">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
