import React, { useState } from 'react';
import axios from 'axios';

const CustomerDetails = ({ totalCost }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobilenumber: '',
    email: '',
    address: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit form data to the backend
      const response = await axios.post('http://localhost:7000/api/customers', {
        customerName: formData.name,
        customerMobileNumber: formData.mobilenumber,
        customerEmail: formData.email,
        customerAddress: formData.address,
        customerState: formData.state,
        totalCost,  // Pass the total cost from the parent component
      });
      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error submitting order');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Customer Details</h3>

      <label style={styles.label}>Enter name:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        style={styles.input}
      />

      <label style={styles.label}>Enter mobile number:</label>
      <input
        name="mobilenumber"
        value={formData.mobilenumber}
        onChange={handleChange}
        placeholder="Mobile Number"
        required
        style={styles.input}
      />

      <label style={styles.label}>Enter email:</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        style={styles.input}
      />

      <label style={styles.label}>Enter address:</label>
      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        required
        style={styles.input}
      />

      <label style={styles.label}>Enter state:</label>
      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        required
        style={styles.input}
      />

      <p style={styles.totalCost}>Total Cost: ₹{totalCost}</p>
      <button type="submit" style={styles.button}>Submit Order</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: 'orange',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  totalCost: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default CustomerDetails;
