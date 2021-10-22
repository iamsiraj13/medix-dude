import React from 'react'; 
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container row">
                <div className=" col-md-6 banner-content">
                    <h2>We Care for Your Health Every Moment</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolores quidem perspiciatis omnis qui consequatur consequuntur. Iste corrupti officiis iure.</p>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;