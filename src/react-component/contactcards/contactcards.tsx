import React from 'react';
import './contactcards.css'
import Email from '../icon/at.svg'
import Location from '../icon//location-dot.svg'
import Phone from '../icon/phone.svg'

interface ContactCardProps {
  region?: string;
  city?: string;
  phone?: string;
  email?: string;
  address?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  region,
  city,
  phone,
  email,
  address,
}) => {
  return (
    <div className="contact-card">
        <div style={{display:'flex', alignItems:'flex-start'}}>
        <span className="region" >{region}</span>
        </div>
     
      <div className="card-header">
        
        <h2 className="city">{city}</h2>
      </div>
      <div className="card-details" style={{fontFamily:'Montserrat'}}>
       {phone ? (<div className="detail-item">
          <span role="img" aria-label="phone"><img src={Phone} alt="Phone"  /></span>
          <p style={{textAlign:'left'}}>{phone}</p>
        </div>) : null} 
       {email ? (<div className="detail-item">
          <span role="img" aria-label="email"><img src={Email} alt="Email"  /></span>
          <p style={{textAlign:'left'}}>{email}</p>
        </div>) : null} 
        <div className="detail-item" style={{display:'flex', alignContent:'flex-start'}}>
          <span role="img" aria-label="location"> <img src={Location} alt="Location"  /></span>
          <p style={{textAlign:'left'}}>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;