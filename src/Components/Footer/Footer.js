import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
         <footer className="py-4">
             <div className="container">
                 <div className="row">
                     <div className="col-md-12">
                         <div className="footer">
                             <div className="row">
                                 <div className="col-md-4 col-lg-4 mb-4">
                                     <div className="footer-box">
                                         <h2>Medix-Dude</h2>
                                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus illo nihil necessitatibus, autem nisi rem? Blanditiis aliquam alias expedita nesciunt.</p>
                                     </div>
                                 </div>
                                 <div className="col-md-4 col-lg-4 mb-4">
                                     <div className="footer-box">
                                         <h2>Services</h2>
                                         <ul className="p-0 m-0">
                                             <li>Surgery</li>
                                             <li>Outpatient</li>
                                             <li>Respiratory</li>
                                             <li>Cardiac</li>
                                             <li>Laryngological</li>
                                         </ul>
                                     </div>
                                 </div>
                                 <div className="col-md-4 col-lg-4 mb-4">
                                     <div className="footer-box">
                                         <div className="mb-2">
                                             <h2>Contact Us</h2>
                                             <div className="my-3">
                                                 <input type="text" className="form-control" placeholder="Enter Your E-mail" />
                                             </div>
                                             <div className="my-3">
                                                 <input type="submit" className="btn btn-block btn-outline-light" />
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </footer>
    );
};

export default Footer;