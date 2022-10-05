import "./service.scss"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

export default function Services (){
    return(
        <>
            <section>
                <header>
                    <div className={"parallax"}>
                        <Navbar className={"nav-shade"}/>
                        <div className={"shade padding"}>
                            <div className={"text"}
                                 data-aos="zoom-in-up"
                                 data-aos-duration={"500"}
                            >
                                <h3
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration={"1500"}
                                >Our Services</h3>
                                <p
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration={"1500"}
                                    data-aos-delay={"500"}
                                >Achievers logistics provides “one-stop-solution” to meet all of your logistics requirements.
                                    Whether you are looking to relocate household goods across the region,
                                    clearing and forwarding, move an offshore drilling platform across the seal etc.
                                    Achievers logistics has the level of service, expertise and experience to make it happen.
                                    You will get personalized service at every level with Achievers logistics because we are
                                    truly independent, make our own decisions and specialize in our home market.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={"topic"}>
                        <h3>Clearing and Freight forwarding</h3>
                    </div>
                    <div className={"parallax2"}>
                        <div className={"shade padding"}>
                            <div className={"text"}
                                 data-aos="zoom-in-up"
                                 data-aos-duration={"500"}
                            >
                                <div className={"list-div"}>
                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"500"}
                                    >
                                        <li><p>Air Freight</p></li>
                                        <li><p>Sea Freight</p></li>
                                    </ul>

                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"600"}
                                    >
                                        <li><p>Road Transport</p></li>
                                        <li><p>Air/Sea Charters</p></li>
                                    </ul>

                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"700"}
                                    >
                                        <li><p>LCL/LTL Services</p></li>
                                        <li><p>Customs Brokerage Services</p></li>
                                    </ul>

                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"800"}
                                    >
                                        <li><p>Dangerous Goods Management</p></li>
                                        <li><p>Dry Bulk & Liquid Transportation</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={"topic"}>
                        <h3>Project Logistics</h3>
                    </div>
                    <div className={"parallax3"}>
                        <div className={"shade padding"}>
                            <div className={"text"}
                                 data-aos="zoom-in-up"
                                 data-aos-duration={"500"}
                            >
                                <div className={"list-div"}>
                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"500"}
                                    >
                                        <li><p>Heavy-Lifts</p></li>
                                        <li><p>Oversize Cargo</p></li>
                                    </ul>

                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"600"}
                                    >
                                        <li><p>Sea/River Barges</p></li>
                                        <li><p>Module Movements</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={"topic"}>
                        <h3>Removal and relocation</h3>
                    </div>
                    <div className={"parallax4"}>
                        <div className={"shade padding"}>
                            <div className={"text"}
                                 data-aos="zoom-in-up"
                                 data-aos-duration={"500"}
                            >
                                <div className={"list-div"}>
                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"500"}
                                    >
                                        <li><p>International Removal Services</p></li>
                                        <li><p>Global Relocation Services</p></li>
                                    </ul>

                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"600"}
                                    >
                                        <li><p>Office Moving</p></li>
                                        <li><p>Auto Transportation</p></li>
                                    </ul>
                                    <ul
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={"1500"}
                                        data-aos-delay={"700"}
                                    >
                                        <li><p>Pet Transportation</p></li>
                                        <li><p>Events & Exhibition Handling</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </header>
            </section>


        </>
    )
}