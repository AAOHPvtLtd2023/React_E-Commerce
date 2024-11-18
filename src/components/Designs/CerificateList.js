import React from 'react';

import ISOBAJARANGi from "../../assets/ISOBAJARANGI.jpg";
import IECBAJARANGI from "../../assets/IECBAJARANGI.jpg";
import GSTBAJARANGI from "../../assets/GSTBAJARANGI.jpg";
import UDYAMBAJARANGI from "../../assets/UDYAMBAJARANGI.jpg";

const certificates = [
  {
    name: 'GST Certificate',
    image:{GSTBAJARANGI}
  },
  {
    name: 'IEC Certificate',
    image: {IECBAJARANGI}
  },
  {
    name: 'ISO Certificate',
    image: {ISOBAJARANGi}
  },
  {
    name: 'UDYAM REGISTRATION Certificate',
    image:{UDYAMBAJARANGI}
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
