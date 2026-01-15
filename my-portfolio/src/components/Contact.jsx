// src/components/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate with EmailJS, Formspree, or backend
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="text-gray-300">
            I’m open to job offers, freelance projects, or collaborations.
          </p>
          <div className="flex flex-col gap-3 text-gray-300">
            <a
              href="mailto:phenilinejerono@example.com"
              className="hover:text-purple-400 transition"
            >
              📧 phenilinejerono@example.com
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              💻 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-md"
        >
          {submitted && (
            <p className="text-green-400 font-semibold text-center">
              Message sent! I’ll get back to you soon.
            </p>
          )}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
