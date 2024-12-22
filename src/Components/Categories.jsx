import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function Categories() {
  return (
    <div className="categories-nav">
      <h2 className="text-center mb-4">Explore Our Categories</h2>

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
