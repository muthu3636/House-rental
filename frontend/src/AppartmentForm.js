
// import React, { useState } from 'react';
// import './AppartmentForm.css';

// const ApartmentForm = ({ onSubmit }) => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     userType: 'Tenant',
//     houseType: 'Apartment',
//     address: '',
//     moveInDate: '',
//     stayDuration: '',
//     paymentMode: 'Credit Card', // Default payment mode
//   });

//   const [isPaymentBoxVisible, setIsPaymentBoxVisible] = useState(false);
//   const [isSuccessBoxVisible, setIsSuccessBoxVisible] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//     if (name === 'paymentMode') {
//       setIsPaymentBoxVisible(true);
//     }
//   };

//   const handlePay = () => {
//     setIsSuccessBoxVisible(true);
//     // Optionally, you can hide the success box after a few seconds
//     setTimeout(() => {
//       setIsSuccessBoxVisible(false);
//     }, 3000);
//   };

//   return (
//     <div className="form-container">
//       <form>
//         <h2>User Details</h2>
//         <label>
//           Name:
//           <input type="text" name="name" value={formState.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formState.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Phone:
//           <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required />
//         </label>
//         <label>
//           User Type:
//           <select name="userType" value={formState.userType} onChange={handleChange}>
//             <option value="Tenant">Tenant</option>
//             <option value="Landlord">Landlord</option>
//           </select>
//         </label>

//         <h2>House Details</h2>
//         <label>
//           Type of House:
//           <select name="houseType" value={formState.houseType} onChange={handleChange}>
//             <option value="Apartment">Apartment</option>
//             <option value="House">House</option>
//             <option value="Condo">Condo</option>
//           </select>
//         </label>
//         <label>
//           Address:
//           <input type="text" name="address" value={formState.address} onChange={handleChange} required />
//         </label>
//         <label>
//           Move-in Date:
//           <input type="date" name="moveInDate" value={formState.moveInDate} onChange={handleChange} required />
//         </label>
//         <label>
//           Duration of Stay (months):
//           <input type="number" name="stayDuration" value={formState.stayDuration} onChange={handleChange} required min="1" />
//         </label>

//         <h2>Payment Details</h2>
//         <label>
//           Payment Mode:
//           <select name="paymentMode" value={formState.paymentMode} onChange={handleChange}>
//             <option value="Credit Card">Credit Card</option>
//             <option value="Debit Card">Debit Card</option>
//             <option value="PayPal">PayPal</option>
//             <option value="Bank Transfer">Bank Transfer</option>
//           </select>
//         </label>

//         {isPaymentBoxVisible && (
//           <div className="payment-box">
//             <button type="button" onClick={handlePay}>Pay</button>
//           </div>
//         )}

//         <div className={`success-box ${isSuccessBoxVisible ? '' : 'hidden'}`}>
//           <span className="tick-mark">✔</span>
//           <p>Successfully booked!</p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApartmentForm;

import React, { useState } from 'react';
import './AppartmentForm.css';
const ApartmentForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'Tenant',
    houseType: 'Apartment',
    address: '',
    moveInDate: '',
    stayDuration: '',
    paymentMode: 'Credit Card',
  });
  const [isPaymentBoxVisible, setIsPaymentBoxVisible] = useState(false);
  const [isSuccessBoxVisible, setIsSuccessBoxVisible] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    if (name === 'paymentMode') {
      setIsPaymentBoxVisible(true);
    }
  };
  const handlePay = () => {
    setIsSuccessBoxVisible(true);
    setTimeout(() => {
      setIsSuccessBoxVisible(false);
    }, 3000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/submit-apartment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>User Details</h2>
        <label>
          Name:
          <input type="text" name="name" value={formState.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formState.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} required />
        </label>
        <label>
          User Type:
          <select name="userType" value={formState.userType} onChange={handleChange}>
            <option value="Tenant">Tenant</option>
            <option value="Landlord">Landlord</option>
          </select>
        </label>
        <h2>House Details</h2>
        <label>
          Type of House:
          <select name="houseType" value={formState.houseType} onChange={handleChange}>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formState.address} onChange={handleChange} required />
        </label>
        <label>
          Move-in Date:
          <input type="date" name="moveInDate" value={formState.moveInDate} onChange={handleChange} required />
        </label>
        <label>
          Duration of Stay (months):
          <input type="date" name="stayDuration" value={formState.stayDuration} onChange={handleChange} required min="1" />
        </label>
        <h2>Payment Details</h2>
        <label>
          Payment Mode:
          <select name="paymentMode" value={formState.paymentMode} onChange={handleChange}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </label>
        {isPaymentBoxVisible && (
          <div className="payment-box">
            <button type="button" onClick={handlePay}>Pay</button>
          </div>
        )}
        {isSuccessBoxVisible && (
          <div className="success-box">
            <span className="tick-mark">✔</span>
            <p>Successfully booked!</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default ApartmentForm;