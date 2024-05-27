// src/components/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/admin/houses')
      .then((response) => response.json())
      .then((data) => setHouses(data))
      .catch((error) => console.error('Error fetching house details:', error));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>House Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Square Feet</th>
            <th>Amount</th>
            <th>Rent</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house.id}>
              <td>{house.name}</td>
              <td>{house.type}</td>
              <td>{house.squareFeet}</td>
              <td>{house.amount}</td>
              <td>{house.rent}</td>
              <td>{house.location}</td>
              <td>{house.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
