import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Order.css';

function Order() {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const totalAmount = cart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="container "style={{marginTop:"150px"}}>
      <Link
        to="/"
        className="btn text-white fixed-top top-0 start-0 ms-0"
        style={{
          width: "50px",
          zIndex: 1030, 
          marginTop: "20px"
        }}
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </Link>

      <h2 className="text-center">Place Order</h2>

      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <h3>Order Summary:</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>Rs.{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>Rs.{item.totalPrice}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-right"><strong>Total:</strong></td>
                <td><strong>Rs.{totalAmount}</strong></td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn btn-success mb-5">Confirm Order</button>
        </form>
      </div>
    </div>
  );
}

export default Order;
