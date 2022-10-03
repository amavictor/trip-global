import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/button/button";
import Plane from "../../assets/icons/airplane.png"
import Truck from "../../assets/icons/delivery.png"
import Warehouse from "../../assets/icons/warehouse.png"
import Img8 from "../../assets/img8.jpg"
import Img9 from "../../assets/img9.jpg"

import AutoPlay from "../../components/sliders/slider1/slider1";
import SimpleSlider from "../../components/sliders/slider2/sluder2";
import Footer from "../../components/footer/footer";
export default function Home () {
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
                                <h1>TRIP GLOBAL</h1>
                                <div className={"description"}>
                                    <p>Special logistics services</p>
                                    <p>Take the complexity out of custom freight solutions with custom brokerage services</p>
                                </div>
                                <div className={"glass-box"}>
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
                            <div className={"card"}>
                                <div className={"img-card"}>
                                    <img src={Plane}/>
                                </div>

                                <h4>International Air Freight</h4>
                                <p>
                                    We provide full supply network management package including economical and fast sea freight.
                                    You can also combine this package with other means of transportation.
                                </p>
                            </div>

                            <div className={"card"}>

                                <div className={"img-card"}>
                                    <img src={Warehouse}/>
                              </div>

                                <h4>International Air Freight</h4>
                                <p>
                                    We provide full supply network management package including economical and fast sea freight.
                                    You can also combine this package with other means of transportation.
                                </p>

                            </div>

                            <div className={"card"}>

                                <div className={"img-card"}>
                                    <img src={Truck}/>
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
                        <div className={"sliders"}>
                            <AutoPlay/>
                        </div>

                        <div className={ "second-text"}>
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
                    <div className={"third"}>
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
                            <img src={Img8}/>
                            <img src={Img9}/>
                        </div>
                    </div>

                </section>

                <section className={"padding"}>
                    <div className={"fourth"}>
                        <h3>Industry sectors coverage</h3>
                        <p>We extend over different industry sectors, from food and
                            beverage, chemical, retails, durable goods, amd more. Check out our list</p>

                        <div className={"coverage-and-list"}>

                            <div className={"lists"}>
                                <ul>
                                    <li><p>Chemical goods</p></li>
                                    <li><p>Food and beverages</p></li>
                                    <li><p>Consumer packaged goods</p></li>
                                    <li><p>Energy oil and gas</p></li>
                                    <li><p>Retail goods</p></li>
                                </ul>

                            </div>

                            <div className={"coverage"}>
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
                        <div>
                            <h3>Why chose us?</h3>
                            <p>
                                Successful freight forwarding, relocation and project logistics management services in
                                challenging markets like Ghana and Africa require expertise, inside knowledge, and reputation
                                businesses can trust. This is why Achievers Logistics is the preferred choice of many companies
                                in the region. Our in-depth knowledge of all the customs entries points in Nigeria and South Africa,
                                coupled with our regional and international service network makes Trip Global investment LTD a leading
                                service provider in the region.
                                Trip Global investment Ltd provides “one-stop-solution” to meet all of your logistics requirements.
                                Whether you are looking to relocate household goods across the region, clearing and forwarding,
                                move an offshore drilling platform across the seal etc.,
                            </p>

                        </div>
                        <div className={"carousel-card"}>

                        </div>
                    </div>
                </section>
            </main>

            <Footer/>



        </>
    )
}