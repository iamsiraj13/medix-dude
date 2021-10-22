import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = (props) => {
    console.log(props.service)
    const [serviceDetails, setServiceDetails] = useState({});

    const {serviceId} = useParams();
   
    const url = `./service.json/${serviceId}`;

 
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>setServiceDetails(data))
    },[]);
 

    return (
        <div>
            <h2>Service Details comming soon-- {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;