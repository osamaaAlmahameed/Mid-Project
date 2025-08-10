import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs    // EmailJS Web Site to send message to email
      .send(
        "service_k85ojuo", // Service ID
        "template_alq8tfi", // Template ID
        formData,
        "RvXcvqi_HUrJFCcLi" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-t from-[#080B1C] via-[#1D125B] py-10 px-4" id="Contact" >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a3d] p-6 rounded-lg shadow-lg space-y-4 border border-blue-600 shadow-md shadow-blue-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-600 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-600 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-blue-600 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-800 rounded"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-lg">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
