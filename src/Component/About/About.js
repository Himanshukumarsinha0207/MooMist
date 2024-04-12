import React from 'react';
import { Component } from 'react';
import about from '../../Images/about-img.png'
import './About.css'
class About extends Component {
    render() {
        return (
            <div>
                <section className="aboutus" id="aboutus">
                    <div className="main-row">
                        <div className="col-1">
                            <h2>About Us</h2>
                            <p>
                        
                            Welcome to MooMist, where passion for dairy excellence meets the purity of nature.
                            </p>
                            <p>At MooMist, we believe in crafting dairy products that not only nourish the body but also delight the senses. Nestled in the heart of lush pastures, our dairy farm is a sanctuary where happy cows graze freely, producing milk that's as wholesome as it is delicious.</p>
                            <p>"From creamy milk to velvety cheese and decadent butter, each MooMist product is a testament to our unwavering pursuit of excellence. With every sip and bite, we invite you to experience the essence of nature's bounty, lovingly crafted for your enjoyment."
                            </p>
                            <p>Join us on our quest to savor the goodness of dairy in its purest form. Discover MooMist and taste the difference that passion, care, and quality make.</p>
                            <p>Experience the magic of MooMist today.</p>
                            <button className="btn">Read More</button>
                        </div>

                        <div className="col-1">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </section>

            </div>
        )

    }

}
export default About