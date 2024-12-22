import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';

function Home() {
  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Bowl 1",
      price: 20,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Bowl 2",
      price: 30,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Bowl 3",
      price: 40,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Bowl 4",
      price: 50,
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Bowl 5",
      price: 60,
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      name: "Bowl 6",
      price: 70,
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      name: "Bowl 7",
      price: 80,
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150",
      name: "Bowl 8",
      price: 90,
    },
    {
      id: 9,
      image: "https://via.placeholder.com/150",
      name: "Bowl 9",
      price: 100,
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists in cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                totalPrice: (cartItem.quantity + quantity) * cartItem.price,
              }
            : cartItem
        )
      );
    } else {
      // If item doesn't exist, add it to cart
      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity, totalPrice: item.price * quantity },
      ]);
    }
  };

  return (
    <div className="container "style={{marginTop:"150px"}}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Place Order Button */}
      <div className="text-center mt-4 ">
        <Link to="/order" state={{ cart }}>
          <button className="btn btn-success btn-lg mb-5">Place Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;