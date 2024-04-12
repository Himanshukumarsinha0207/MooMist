import React from 'react'
import './Footer.css'
import { FaLocationPin } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Footer=()=> {
        return (
            <div>
                <div className="footer">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>About</h4>
                            <p className="paragraph">
                            "Join us on our quest to savor the goodness of dairy in its purest form. Discover MooMist and taste the difference that passion, care, and quality make."
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Menu</h4>
                            <div className="footer-links">
                                <a href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Gallery</a>
                                <a href="#">Services</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>

                        

                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <div className="location-links">
                                <p><FaLocationPin /><span>Address: Alaniya, Kota</span></p>
                                <p><MdCall /><span>Call: +91-91422 98969</span></p>
                                <p><FiMail /><span>Email: raj818799@gmail.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )

}
export default Footer;