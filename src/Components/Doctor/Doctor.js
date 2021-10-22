import React, { useEffect, useState } from 'react';
import './Doctor.css'

const Doctor = () => {

    const [doctors, setDoctors] = useState([]);
    

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/BlogsData.json')
        .then(res => res.json())
        .then(data =>setDoctors(data))
    },[]);

    return (
        <div className="doctor-area py-5"> 
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Our Expets Doctors</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatibus ullam in obcaecati. Vel.</p>
                </div>
                <div className="row">
                    {doctors.map(doctor =>
                    <div key={doctor.id} className="col-lg-3 col-sm-6 mb-4">
                        <div className="doctor-box text-center">
                            <img src={doctor.image} alt="" />
                            <h3>{doctor.name}</h3>
                             
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctor;