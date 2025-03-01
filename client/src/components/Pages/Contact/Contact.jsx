import React, { useState } from "react";
import "./Contact.css";
import Nav from "../../Header2/nav";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    wasteType: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to the backend API
    try {
      const response = await fetch("http://localhost:5175/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.status === 201) {
        console.log("Form submitted successfully:", result);
        // Optionally, reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          wasteType: ""
        });
      } else {
        console.error("Failed to submit form:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Nav />
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
                Fill in the details below and let's transform trash into treasure!
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input-field"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <select
                  name="wasteType"
                  className="input-field"
                  value={formData.wasteType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Choose Waste Type</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Paper">Paper</option>
                  <option value="Metal">Metal</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Other">Other</option>
                </select>

                <button type="submit" className="submit-button">Submit</button>
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
    </>
  );
}