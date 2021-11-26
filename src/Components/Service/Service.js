import React, { useEffect, useState , useHistory} from 'react';
import './Service.css';

const Service = () => {

    const [services, setService] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        fetch('./service.json')
        .then(res => res.json())
        .then(data =>setService(data))
    },[]);

    const sd = (id)=>{
        history.push(`/service-details/${id}`)
    }
console.log(services)
    return (
        <div className="service-area py-5"> 
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit maiores quod totam est?</p>
                </div>
                <div className="row">
                    {services.map(service =>
                    <div key={service.id} className="col-lg-4 col-sm-6 mb-4">
                        <div className="service-box text-center">
                            <img src={service.thumb} alt="" />
                            <h3>{service.title}</h3>
                            <p>{service.sortDesc}</p>
                             <button className="btn btn-info" onClick={()=> sd(id)}>Read More</button> 
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;