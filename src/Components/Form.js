import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import Swal from "sweetalert2";

import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message || !formData.phone) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "All fields are required!",
      });
      return;
    }

    // Validate phone number
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(formData.phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number!",
        text: "Please enter a valid phone number.",
      });
      return;
    }

    // WhatsApp integration
    const message = `Hello! My name is ${formData.name}. Here are my details:
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/9284631083?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    // Show success message
    Swal.fire({
      icon: "success",
      title: `Thank you, ${formData.name}!`,
      text: "Your message has been sent successfully via WhatsApp.",
      confirmButtonText: "Okay",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <PhoneInput
          country={"in"} 
          value={formData.phone}
          onChange={handlePhoneChange}
          inputProps={{
            name: "phone",
            required: true,
            placeholder: "Enter phone number",
          }}
          inputStyle={{
            color: "#000",
            fontWeight: "bold",
            width: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom:"5px"
          }}
        />

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter the subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
