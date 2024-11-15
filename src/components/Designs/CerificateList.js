import React from 'react';

const certificates = [
  {
    name: 'Machine Learning Certificate',
    image: 'https://m.media-amazon.com/images/I/71hI16-vr6L._AC_UF1000,1000_QL80_.jpg', // Replace with actual image URL
  },
  {
    name: 'Python Certificate',
    image: 'https://m.media-amazon.com/images/I/71hI16-vr6L._AC_UF1000,1000_QL80_.jpg', // Replace with actual image URL
  },
  {
    name: 'Java Certificate',
    image: 'https://sertifier.com/blog/wp-content/uploads/2020/10/certificate-text-samples.jpg', // Replace with actual image URL
  },
  {
    name: 'Tableau Certificate',
    image: 'https://i.pinimg.com/originals/63/4e/b3/634eb3ba024051c2faaa165e8c4b8abc.jpg', // Replace with actual image URL
  },
];

const CertificateCard = ({ name, image }) => (
  <div style={styles.card}>
    <img src={image} alt={name} style={styles.image} />
    <h3 style={styles.name}>{name}</h3>
  </div>
);

const CertificateList = () => {
  return (
    <div style={styles.container}>
      {certificates.map((cert, index) => (
        <CertificateCard key={index} name={cert.name} image={cert.image} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    padding: '16px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    padding: '16px',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
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
};

export default CertificateList;
