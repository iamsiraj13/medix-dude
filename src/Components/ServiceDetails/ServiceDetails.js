import React, { useEffect, useState } from 'react';

const ServiceDetails = () => {
 

    const [cars , setCars ] = useState([]);

    useEffect(()=>{
        fetch('./service.json')
        .then(res => res.json())
        .then(data => console.data(data))
    },[]);
    

    return (
        <div>
            <h2>Service Details comming soon-- </h2> 
        </div>
    );
};

export default ServiceDetails;