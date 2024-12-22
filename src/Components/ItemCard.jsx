import React, { useState } from 'react';

function ItemCard({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setIsAdded(true); // Show quantity controls after adding to cart
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart(item, 1); // Increment quantity in the cart by 1
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      addToCart(item, -1); // Decrement quantity in the cart by 1
    } else {
      setIsAdded(false); // Show "Add to Cart" button when quantity is 1 and "-" is clicked
      setQuantity(1); // Reset quantity to 1
    }
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card h-100">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Price: Rs.{item.price}</p>
          {isAdded ? (
            <div className="d-flex justify-content-between align-items-center">
              <button
                className="btn btn-outline-secondary border border-dark btn-sm rounded"style={{fontSize:"20px",lineHeight:"1"}}
                onClick={decreaseQuantity}
              >
                 <strong>-</strong>
              </button>
              <div className="quantity-color border-top text-white flex-grow-1 rounded-1 text-center"><strong>{quantity}</strong></div>
              <button
                className="btn btn-outline-secondary border border-dark btn-sm rounded" style={{fontSize:"20px",lineHeight:"1"}}
                onClick={increaseQuantity}
              >
                <strong>+</strong>
              </button>
            </div>
          ) : (
            <button className="btn" style={{background:"#48271a",color:"white"}} onClick={handleAddToCart}>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
