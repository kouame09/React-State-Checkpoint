import React from 'react';
import './App.css';


const PersonComponent = ({ person }) => (
  <div className='person-card'>
    <h1>{person.fullName}</h1>
    <p>{person.bio}</p>
    <img src={person.imgSrc} alt="Person" />
    <p>{person.profession}</p>
  </div>
);

export default PersonComponent;
