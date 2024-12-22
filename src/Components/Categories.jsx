import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return (
    <div
      className=" my-5 position-fixed" 
      style={{
        zIndex: 1040,
        top: '70px', 
        left: 0,    
        right: 0,  
        width: '100%', 
        background: "#f8f9fa",
      }}
    >
      <h2 className="text-center mb-4" >Explore Our Categories</h2>

      {/* Bootstrap Navigation */}
      <nav className="nav justify-content-center">
        {/* Bowls Category */}
        <Link to="/" className="nav-link text-secondary mx-2">
          BOWLS
        </Link>

        {/* Meals Category */}
        <Link to="/meals" className="nav-link text-secondary mx-2">
          MEALS
        </Link>

        {/* Curries Category */}
        <Link to="/curries" className="nav-link text-secondary mx-2">
          CURRIES
        </Link>
      </nav>
    </div>
  );
}

export default Categories;
