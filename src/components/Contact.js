import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost/api/contact.php', new URLSearchParams(formData), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const { data } = response;
      if (data.success) {
        setStatus('Message sent successfully!');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error sending message. Please try again later.');
    }
  };

  return (
    <div id='contact'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Full Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='xyz@gmail.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Write Here...............'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" value='Send' />
      </form>
      {status && <p style={{ color: 'green' }}>{status}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Contact;
