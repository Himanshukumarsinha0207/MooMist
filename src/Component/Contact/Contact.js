import React from 'react'
import './Contact.css'
import { Component } from 'react'
import about from '../../Images/contact1.jpg'
class Contact extends Component{
    render() {
        return (
            <div>
                <div className="contactus" id="contactus">
                    <h2>Contact Us</h2>
                    <div className="contact-row">
                        <div className="contact-form">
                            <form action="" class="form">
                                
                            
                                <input type="text" placeholder="Name" required></input>
                                <input type="email" placeholder="Email" required></input>
                                <input type="text" placeholder="Phone Number" required></input>
                                <textarea name="" id="" cols="1" rows="5" placeholder="Message"></textarea>
                            </form>

                            <div className="contact-button">
                                <button className="contact-btn">SEND</button>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
export default Contact;
