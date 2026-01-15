import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <a href="mailto:phenilinejer@gmail.com">Email</a>
          <a
            href="https://github.com/Pheniline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/pheniline-jerono"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <p className="submitted-msg">Message sent!</p>}
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            value={form.message}
            placeholder="Your Message"
            rows="5"
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
