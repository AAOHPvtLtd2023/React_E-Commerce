import React from 'react';

const products = [
  {
    name: 'Product 1',
    image: 'https://via.placeholder.com/150?text=Product+1', // Replace with actual image URL
    price: '$10',
  },
  {
    name: 'Product 2',
    image: 'https://via.placeholder.com/150?text=Product+2', // Replace with actual image URL
    price: '$20',
  },
  {
    name: 'Product 3',
    image: 'https://via.placeholder.com/150?text=Product+3', // Replace with actual image URL
    price: '$30',
  },
  {
    name: 'Product 4',
    image: 'https://via.placeholder.com/150?text=Product+4', // Replace with actual image URL
    price: '$40',
  },
];

const ProductCard = ({ name, image, price }) => (
  <div style={styles.card}>
    <img src={image} alt={name} style={styles.image} />
    <h3 style={styles.name}>{name}</h3>
    <p style={styles.price}>{price}</p>
    <button style={styles.button}>Whats'App</button>
  </div>
);

const DieProduct = () => {
  return (
    <div style={styles.container}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    overflowX: 'auto', // Enables horizontal scrolling
    gap: '16px',
    padding: '16px',
    scrollbarWidth: 'thin', // For modern browsers
    scrollSnapType: 'x mandatory', // Snap cards into view
  },
  card: {
    minWidth: '300px',
    height:'400px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
    padding: '16px',
    backgroundColor: '#fff',
    flexShrink: 0, // Prevents shrinking in a scrollable container
    scrollSnapAlign: 'start', // Aligns card with container edge when scrolling
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: '14px',
    color: '#555',
    margin: '8px 0',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#B2130D',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width:'100%',
    transition: 'background-color 0.2s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default DieProduct;
