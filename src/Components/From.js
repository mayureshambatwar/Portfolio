import React, { useState } from 'react';
import './from.css';

const From = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />

        <label>Message</label>
        <textarea rows="6" name="message" placeholder='Type your message here' value={formData.message} onChange={handleChange}></textarea>

        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default From;
