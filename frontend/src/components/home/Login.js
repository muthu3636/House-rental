// // src/Login.js
// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
  
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             value={dateOfBirth}
//             onChange={(e) => setDateOfBirth(e.target.value)}
//             required
//           />
//         </div> */}
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// // src/Login.js
// import React, { useState } from 'react';
// import './Login.css';



// const Login = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   try {
//   //     const response = await fetch('/login', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify({ name, email, password })
//   //     });

//   //     if (response.ok) {
//   //       console.log('User registered successfully');
//   //       // Optionally, you can redirect the user to another page after successful registration
//   //     } else {
//   //       console.error('Failed to register user');
//   //       // Handle error appropriately
//   //     }
//   //   } catch (error) {
//   //     console.error('Error registering user:', error);
//   //     // Handle error appropriately
//   //   }
//   // };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     try {
//       const response = await fetch('http://localhost:3000/login', { // Update URL here
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, email, password })
//       });
  
//       if (response.ok) {
//         console.log('User registered successfully');
//         // Optionally, you can redirect the user to another page after successful registration
//       } else {
//         console.error('Failed to register user');
//         // Handle error appropriately
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//       // Handle error appropriately
//     }
//   };
  


//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom'; // Import useHistory hook

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory hook

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/login', { // Ensure the correct URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if (response.ok) {
        console.log('User registered successfully');
        // Redirect to admin page if login successful
        history.push('/admin');
      } else {
        console.error('Failed to register user');
        // Handle error appropriately
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;




