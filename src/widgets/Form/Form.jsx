import React, { useState, useEffect } from 'react';
import './Form.css'

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка данных:', formData);
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="m_feedback-form">
      {/* <h2>Форма обратной связи</h2> */}
      <form onSubmit={handleSubmit}>
        <label>
          Ваше имя:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Ваш email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Ваше сообщение:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default FeedbackForm;