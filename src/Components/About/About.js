import React from 'react';
import about from '../../img/clinic.jpg';
import './About.css';


const About = () => {
    return (
        <div className="container py-5">
            <div className="about-title text-center">
                <h2>About Us</h2>
            </div>
            <div className="about-content">
                <img src={about} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet ullam alias necessitatibus minima, laboriosam quae numquam delectus cum illo qui placeat tempore corrupti fugit illum rerum officiis, et sequi adipisci provident amet. Quibusdam perferendis dolore rerum delectus explicabo blanditiis totam, sunt laudantium, cupiditate nam voluptate quas? Ut, aliquid officia consectetur tempore praesentium error ea autem doloribus quas labore, nam quidem eveniet architecto iste quibusdam natus accusantium corporis cumque, aspernatur nisi qui. Veritatis ducimus officiis dolor, unde, repudiandae, quaerat fugiat necessitatibus cumque ex dolores fuga voluptatum minus velit? Dicta, pariatur? Dolor, exercitationem? Itaque corporis nihil eveniet asperiores nesciunt doloribus mollitia!
                </p>
            </div>
        </div>
    );
};

export default About;