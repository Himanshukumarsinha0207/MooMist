import React from 'react';
import './Home.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSearch } from "react-icons/bi";
const Home = () => {

    return (
        <div>
            <div className="header">
                <nav>
                    <div className="left">
                        <a href="#">MooMist</a>
                    </div>
                    <div className="right">
                        <label for="toggle" id="check"><GiHamburgerMenu className="bars" /></label>
                        <input type="checkbox" name="toggle" id="toggle"></input>
                        <ul className="list">
                            <li><a href="#" class="active">Home</a></li>
                            <li><a href="#aboutus">About Us</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contactus">Contact Us</a></li>
                            <li><BiSearch className="listbutton" /></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="main-header">
                <div className="content">
                    <span>MooMist</span>
                    <h1>Dairy Shop</h1>
                    <p>"Where Every Sip Embraces the Freshness of Pasture and the Warmth of Home, Crafting Moments of Creamy Delight"
                    </p>

                    <button className="btn">LEARN MORE</button>
                </div>


            </div>





        </div >
    )
}
export default Home;