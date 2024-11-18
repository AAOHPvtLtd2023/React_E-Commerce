import React from 'react';
import "./CertificateList.css";

import ISOBAJARANGi from "../../assets/ISOBAJARANGI.jpg";
import IECBAJARANGI from "../../assets/IECBAJARANGI.jpg";
import GSTBAJARANGI from "../../assets/GSTBAJARANGI.jpg";
import UDYAMBAJARANGI from "../../assets/UDYAMBAJARANGI.jpg";

const certificates = [
  {
    name: 'GST Certificate',
    image:GSTBAJARANGI
  },
  {
    name: 'IEC Certificate',
    image: IECBAJARANGI
  },
  {
    name: 'ISO Certificate',
    image: ISOBAJARANGi
  },
  {
    name: 'UDYAM REGISTRATION Certificate',
    image:UDYAMBAJARANGI
  },
];

const CertificateCard = ({ name, image }) => (
  <div className='certifiacte-card'>
    <img src={image} alt={name} className='certifiacte-image' />
    <h3 className='certifiacte-name'>{name}</h3>
  </div>
);

const CertificateList = () => {
  return (
    <div className='certifiacte-container'>
      {certificates.map((cert, index) => (
        <CertificateCard key={index} name={cert.name} image={cert.image} />
      ))}
    </div>
  );
};



export default CertificateList;
