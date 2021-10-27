import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
   useEffect(()=>{

    fetch(`https://whispering-reef-91006.herokuapp.com/service/${serviceId}`)
    .then(res => res.json())
    .then(data =>setService(data))
   },[]);

    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <h3>name: {service.name}</h3>
            <img src={service.img} alt="service"/>
        </div>
    );
};

export default Booking;