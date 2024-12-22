import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{background: '#3bab5a', color: 'white'}}>
      <footer className="text-center text-lg-start">
        {/* Grid container */}
        <div className="container p-4">
          {/* Grid row */}
          <div className="row">
            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <img src="/images/logo.png" alt="Logo" style={{height:"200px"}} />
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="text-uppercase text-decoration-underline">Categories</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className='text-decoration-none text-white'>Bowls</Link>
                </li>
                <li>
                  <Link to="/meals" className='text-decoration-none text-white'>Meals</Link>
                </li>
                <li>
                  <Link to="/curries" className='text-decoration-none text-white'>Curries</Link>
                </li>
              </ul>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="text-uppercase text-decoration-underline">Address</h4>
              <p >
                Flat no. 302, 3rd floor, Maruti's Jubilee enclave, Maple homes gated community, Street No 11, Virat Nagar Colony, Kapra, Hyderabad, Secunderabad, Telangana 500062
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4481608566343!2d78.567878874178!3d17.486107299955613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9fc2b1fdad7d%3A0x439ac773bc0d7b11!2sIvaturi&#39;s%20Veg%20Home%20Kitchen!5e0!3m2!1sen!2sin!4v1734859205909!5m2!1sen!2sin"
                width="150"
                height="150"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="text-uppercase mb-3 text-decoration-underline">Contact</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="tel:7989774096" className="text-decoration-none text-white">
                    <h6 className="text-white">Phone:</h6> +91 7989774096
                  </a>
                </li>
                <li className="mb-2">
                  <a href="mailto:ivaturisvegkitchen@gmail.com" className="text-decoration-none text-white">
                    <h6 className="text-white">Mail:</h6> ivaturisvegkitchen@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3">
          © 2024 Copyright :
          <span className="text-white"> Ivaturi's Veg Kitchen</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
