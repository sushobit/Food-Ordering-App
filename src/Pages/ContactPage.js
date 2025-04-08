import React from 'react';
import './ContactPage.css';

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h4>Get in Touch</h4>
        <h1>Contact Our Delicious World 🍽️</h1>
        <p>We're always here to spice up your day! Reach out to us with your questions, feedback, or if you're just craving something amazing.</p>
      </div>

      <div className="contact-content">
        {/* LEFT SIDE - DETAILS */}
        <div className="contact-details">
          <div className="contact-card">
            <div className="emoji">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>456 Spice Street,<br /> Gourmet Nagar,<br /> Nagpur, Maharashtra – 440034</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="emoji">📧</div>
            <div>
              <h3>Email Us</h3>
              <p>sushobitdhara@gmail.com</p>
              <p>shusdhara.sd@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="emoji">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 9876543210</p>
              <p>+91 1234567899</p>
            </div>
          </div>

                  <div className="contact-card">
                      <div className="emoji">🌐</div>
                      <div>
                          <h3>Our Websites</h3>
                          <p style={{textDecoration: 'none'}}>
                              <a href="https://portfolio-sushobhit.vercel.app/" target="_blank" rel="noopener noreferrer">
                                  portfolio-sushobhit
                              </a>
                          </p>
                          <p>
                              <a href="https://food-ordering-app-sushobhit.vercel.app/" target="_blank" rel="noopener noreferrer">
                                  food-ordering-app
                              </a>
                          </p>
                      </div>
                  </div>


          <div className="contact-card">
            <div className="emoji">👨‍🍳</div>
            <div>
              <h3>Chef’s Desk</h3>
              <p>Want to collaborate with our chefs or host an event? We’d love to make your moment special!</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-box">
          <h2>Send Us a Message ✉️</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message..." rows="6"></textarea>
            <button type="submit">📨 Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
