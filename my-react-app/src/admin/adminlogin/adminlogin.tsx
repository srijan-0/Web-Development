import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'; // Changed to useHistory hook
import axios from 'axios';
import "../adminlogin/adminlogin.css";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Changed to useHistory hook
//   useEffect(() => {
//     if (!localStorage.getItem("accessToken")) {
//         //   alert('PLEASE LOGIN')
//         navigate('/adminlogin', { replace: true })
//     }
// }, [])
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('http://localhost:8082/authenticate', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('name', response.data.name);
        // history.push("/createcard"); // Navigate programmatically
        window.location.href="/createcard"      }
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      window.alert('Invalid username and password');
    }
  };

  return (
    <div className="body2">
      <div className="login-page1">
        <div className="form1">
          <form className="login-form1" onSubmit={handleLogin}>
            <input type="text" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
