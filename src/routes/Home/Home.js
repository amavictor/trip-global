import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/button";
import Plane from "../../assets/icons/airplane.png"
import Truck from "../../assets/icons/delivery.png"
import Warehouse from "../../assets/icons/warehouse.png"
import Img8 from "../../assets/img8.jpg"
import Img9 from "../../assets/img9.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


import AutoPlay from "../../components/sliders/slider1/slider1";
import Footer from "../../components/footer/footer";
import {useEffect} from "react";

export default function Home () {
    useEffect(()=>{
        AOS.init()
    },[])
    return(
        <>
            <section>
                <header>
                    <div className={"slider"}>
                        <Navbar className={"nav-shade"}/>
                        <div className={"load"}>
                        </div>
                        <div className={"content"}>
                            <div className={"principal"}>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration={"1500"}
                                >TRIP GLOBAL</h1>
                                <div className={"description"}
                                     data-aos="fade-up"
                                     data-aos-anchor-placement="center-bottom"
                                     data-aos-duration={"1500"}
                                     data-aos-delay={"500"}
                                >
                                    <p>Special logistics services</p>
                                    <p>Take the complexity out of custom freight solutions with custom brokerage services</p>
                                </div>
                                <div className={"glass-box"}
                                     data-aos="fade-up"
                                     data-aos-anchor-placement="center-bottom"
                                     data-aos-duration={"1500"}
                                     data-aos-delay={"1000"}
                                >
                                    <p>Enter your tracking number</p>
                                    <div className={"search"}>
                                        <input type={"text"}/>
                                        <Button>Search</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>


            <main>
                <section className={"center"}>
                    <div>
                        <h3 className={"services"}>We guarantee fast and safe delivery of your packages</h3>
                        <div className={"cards"}>
                            <div className={"card"}
                                 data-aos={"fade-up"}
                                 data-aos-duration={"500"}
                            >
                                <div className={"img-card"}>
                                    <img src={Plane}
                                        alt={"Plane"}
                                    />
                                </div>

                                <h4>International Air Freight</h4>
                                <p>
                                    We provide full supply network management package including economical and fast sea freight.
                                    You can also combine this package with other means of transportation.
                                </p>
                            </div>

                            <div className={"card"}
                                 data-aos={"fade-up"}
                                 data-aos-duration={"500"}
                                 data-aos-delay={"500"}
                            >

                                <div className={"img-card"}>
                                    <img src={Warehouse}
                                        alt={"warehouse"}
                                    />
                              </div>

                                <h4>International Air Freight</h4>
                                <p>
                                    We provide full supply network management package including economical and fast sea freight.
                                    You can also combine this package with other means of transportation.
                                </p>

                            </div>

                            <div className={"card"}
                                 data-aos={"fade-up"}
                                 data-aos-duration={"500"}
                                 data-aos-delay={"1000"}
                            >

                                <div className={"img-card"}>
                                    <img src={Truck}
                                        alt={"truck"}
                                    />
                                </div>

                                <h4>International Air Freight</h4>
                                <p>
                                    We provide full supply network management package including economical and fast sea freight.
                                    You can also combine this package with other means of transportation.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                <section className={"padding center"}>
                    <div className={"second"}>
                        <div className={"sliders"}
                            data-aos={"fade-right"}
                             data-aos-easing={"linear"}
                        >
                            <AutoPlay/>
                        </div>

                        <div className={ "second-text"}
                            data-aos={"fade-down"}
                             data-aos-easing={"ease-in-back"}
                        >
                            <h3>Reliable Logistic and Transportation Solutions</h3>
                            <p>Trip Global Investment LTD is a representative logistics operator providing full
                                range of service in the sphere of customs clearance transportation world wide for any cargo.
                            </p>
                            <p></p>

                            <Button>LEARN MORE</Button>

                            <hr/>
                        </div>
                    </div>
                </section>

                <section className={"padding"}>
                    <div className={"third"}
                         data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom"
                         data-aos-duration={"1500"}
                         data-aos-easing={"linear"}
                    >
                        <div>
                            <h3>Between the point of departure and destination there is Trip Global</h3>
                            <h5>Trip Global transport & logistics keeps your business in motion and your cargo on track</h5>
                            <p>
                                We offer dedicated transport, logistics and warehousing solution in Nigeria and in
                                South Africa with customised personal services and guaranteed quality.
                                Privately owned since it's founding in 2018 with branches in Lagos, Nigeria and Johannesburg,
                                South Africa. We are one of the leading transport and logistics companies.
                            </p>

                            <hr/>
                            <div className={"details"}>
                                <div>
                                    <h4>100% Safe Delivery</h4>
                                    <p>All packages are 100% safe and secure. You an trust us to keep
                                        your parcels intact
                                    </p>
                                </div>
                                <div>
                                    <h4>Weather Insurance</h4>
                                    <p>Whatever the weather is like, we got you covered. If it gets wet,
                                        we'll get you a new one.</p>
                                </div>
                                <div>
                                    <h4>Fast and on time</h4>
                                    <p>We deliver on or before the deadline. We hate to keep our customers waiting.
                                        Its bad for business.</p>
                                </div>
                            </div>
                        </div>


                        <div className={"img-container"}>
                            <img src={Img8} alt={"Image8"}/>
                            <img src={Img9} alt={"Image9"}/>
                        </div>
                    </div>

                </section>

                <section className={"padding"}>
                    <div className={"fourth"}>
                        <h3>Industry sectors coverage</h3>
                        <p>We extend over different industry sectors, from food and
                            beverage, chemical, retails, durable goods, amd more. Check out our list</p>

                        <div className={"coverage-and-list"}>

                            <div className={"lists"}
                                 data-aos="fade-up"
                                 data-aos-anchor-placement="center-bottom"
                                 data-aos-duration={"1500"}
                            >
                                <ul>
                                    <li><p>Chemical goods</p></li>
                                    <li><p>Food and beverages</p></li>
                                    <li><p>Consumer packaged goods</p></li>
                                    <li><p>Energy oil and gas</p></li>
                                    <li><p>Retail goods</p></li>
                                </ul>

                            </div>

                            <div className={"coverage"}
                                 data-aos="fade-up"
                                 data-aos-anchor-placement="center-center"
                                 data-aos-duration={"1000"}
                            >
                                <div className={"item"}>
                                    <div className={"dark"}>
                                        <p>Chemical goods</p>
                                    </div>
                                </div>

                                <div className={"item"}>
                                    <div className={"dark"}>
                                        <p>Food and beverages</p>
                                    </div>
                                </div>

                                <div className={"item"}>
                                    <div className={"dark"}>
                                        <p>Consumer packaged goods</p>
                                    </div>
                                </div>

                                <div  className={"item"}>
                                    <div className={"dark"}>
                                        <p>Energy oil and gas</p>
                                    </div>
                                </div>

                                <div className={"item"}>
                                    <div className={"dark"}>
                                        <p>Retail goods</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className={"padding center"}>
                    <div className={"fifth"}>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration={"1500"}
                        >
                            <h3>Why chose us?...Where to find us?</h3>
                            <p>
                                Successful freight forwarding, relocation and project logistics management services in
                                challenging markets like Nigeria and Africa require expertise, inside knowledge, and reputation
                                businesses can trust. This is why Achievers Logistics is the preferred choice of many companies
                                in the region. Our in-depth knowledge of all the customs entries points in Nigeria and South Africa,
                                coupled with our regional and international service network makes Trip Global investment LTD a leading
                                service provider in the region.
                                Trip Global investment Ltd provides “one-stop-solution” to meet all of your logistics requirements.
                                Whether you are looking to relocate household goods across the region, clearing and forwarding,
                                move an offshore drilling platform across the seal etc.
                            </p>

                        </div>

                        <div>
                                <div className="map map1"
                                     data-aos="fade-up"
                                     data-aos-anchor-placement="center-bottom"
                                     data-aos-duration={"2000"}
                                >
                                    <div className="map_canvas">
                                        <iframe width="400" height="280" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=55,%20Odudwa%20Cresent,%20Ikeja%20Lagos%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                                title={"map1"}
                                        >
                                        </iframe>
                                    </div>
                                </div>

                                <div className="map map2 "
                                     data-aos="fade-up"
                                     data-aos-anchor-placement="center-bottom"
                                     data-aos-duration={"2300"}
                                >
                                    <div className="map_canvas">
                                        <iframe width="391" height="330" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=4%20Albert%20Street,%20Eastern%20Cape,%20Republic%20of%20South%20Africa&t=&z=7&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0"
                                                marginWidth="0"
                                                title={"map2"}
                                        >

                                        </iframe>

                                    </div>
                                </div>
                        </div>



                    </div>
                </section>
            </main>

            <Footer/>



        </>
    )
}