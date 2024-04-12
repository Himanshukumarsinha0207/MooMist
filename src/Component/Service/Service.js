import React from 'react';
import { Component } from 'react';
import './Service.css'
import ico1 from '../../Images/icon1.png'
import ico2 from '../../Images/icon2.png'
import ico3 from '../../Images/icon3.png'
class Service extends Component {
    render() {
        let service = [{ icon: ico1, title: "Farm Fresh Milk", cont: "Indulge in the creamy goodness of our farm-fresh milk, straight from our pasture-grazing cows." },
        { icon: ico2, title: "Artisanal Cheese", cont: "Delight your taste buds with our artisanal cheeses, handcrafted with care using traditional methods." },
        { icon: ico3, title: "Farm Tours", cont: "Experience the charm of rural life with a guided tour of our dairy farm." }
        ]
        return (
            <div>
                <div className="services" id="services">
                    <div className="main-services">
                        <div className="services-row">
                            <div className="services-topic">
                                <h2>Services</h2>
                                <p>
                                
"We take pride in offering a range of services that cater to both dairy enthusiasts and those seeking high-quality dairy products straight from the farm."
                                </p>
                            </div>
                            <div className="services-related">
                                {
                                    service.map((value, i) => {
                                        return (
                                            <div className="services-col" key={i}>
                                                <img src={value.icon} alt="" />
                                                <h4>{value.title}</h4>
                                                <p>{value.cont}</p>
                                                <a href="#" className="servbtn">READ MORE</a>
                                            </div>

                                        )

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        )

    }
}
export default Service;