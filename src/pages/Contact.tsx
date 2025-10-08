import React from 'react';

import { useState } from "react";
import "./Contact.css";

const ContactForm06: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement send logic here
    alert("Message Sent!");
  };

  return (
    <div className="cf06-wrapper">
       <div className="Cf06-hero">
        <h1>
          <span className="Cf06-hero-main">Contact </span>
          <span className="Cf06-hero-accent">Form</span>
        </h1>
        
      </div>
      <div className="cf06-main">
        <div className="cf06-form-side">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="cf06-row">
              <div className="cf06-field">
                <label>FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="cf06-field">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="cf06-field">
              <label>SUBJECT</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="cf06-field">
              <label>MESSAGE</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={4}
              />
            </div>
            <button className="cf06-btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="cf06-map-side">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Garg+House,+11A%2F1D,+E+Topsia+Rd,+Mirania+Gardens,+East+Topsia,+Topsia,+Kolkata,+West+Bengal+700046&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
      <div className="cf06-contact-details">
        <div className="cf06-contact-item">
          <div className="cf06-icon"><i className="fa-solid fa-location-dot"></i></div>
          <div>
            <b>Address:</b> Simtrak Solutions,<br />
             JBS Haldane Avenue, Kolkata 700046
          </div>
        </div>
        <div className="cf06-contact-item">
          <div className="cf06-icon"><i className="fa-solid fa-phone"></i></div>
          <div>
            <b>Phone:</b>{" "}
            <a href="tel:1235235598">+91 9883585647</a>
          </div>
        </div>
        <div className="cf06-contact-item">
          <div className="cf06-icon"><i className="fa-solid fa-envelope"></i></div>
          <div>
            <b>Email:</b>{" "}
            <a href="contact@simtrak.in">contact@simtrak.in</a>
          </div>
        </div>
        <div className="cf06-contact-item">
          <div className="cf06-icon"><i className="fa-solid fa-earth-americas"></i></div>
          <div>
            <b>Website:</b>{" "}
            <a href="https://simtrak.in/">simtrak.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm06;