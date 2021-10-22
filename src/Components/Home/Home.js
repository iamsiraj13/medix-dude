import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import Service from '../Service/Service';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Service></Service>
            <Doctor></Doctor>
        </main>
    );
};

export default Home;