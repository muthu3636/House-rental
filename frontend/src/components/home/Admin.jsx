
import React, { useState } from 'react';
import './Admin.css';
const Admin = () => {
  const [houseDetails, setHouseDetails] = useState({
    name: '',
    type: '',
    squareFeet: '',
    amount: '',
    rent: '',
    location: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHouseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/admin/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(houseDetails)
      });
      if (response.ok) {
        console.log('House details submitted successfully:', houseDetails);
        setHouseDetails({
          name: '',
          type: '',
          squareFeet: '',
          amount: '',
          rent: '',
          location: '',
          price: ''
        });
      } else {
        console.error('Failed to submit house details');
      }
    } catch (error) {
      console.error('Error submitting house details:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="house-form">
        <div className="form-group">
          <label>House Name:</label>
          <input
            type="text"
            name="name"
            value={houseDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>House Type:</label>
          <input
            type="text"
            name="type"
            value={houseDetails.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Square Feet:</label>
          <input
            type="text"
            name="squareFeet"
            value={houseDetails.squareFeet}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={houseDetails.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rent:</label>
          <input
            type="text"
            name="rent"
            value={houseDetails.rent}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={houseDetails.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={houseDetails.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Admin;
