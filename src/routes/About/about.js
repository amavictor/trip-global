import "./about.scss"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import {useEffect} from "react";
import AOS from "aos";

export default function About(){

    useEffect(()=>{
        AOS.init()
    },[])

    return(
        <>
            <header>
                <div className={"about-head"}>
                    <Navbar className={"nav-shade"}/>
                    <div className={"shade"}>
                        <h2
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration={"1500"}
                        >About us</h2>
                    </div>

                </div>
            </header>

            <section className={"first"}>
                <div className={"profile padding"}
                     data-aos="fade-up"
                     data-aos-anchor-placement="center-bottom"
                     data-aos-duration={"1500"}
                >
                    <h3>Company profile</h3>
                    <p>Established in 2012, Achievers Logistics is one of the fastest growing Clearing and
                        forwarding company in Ghana. Our hallmark has being agile and responsive to our client needs.
                        This culture has served us well and has become the cornerstone of our service strategy.
                        Achievers logistics develops comprehensive freight forwarding, project logistics and relocation
                        service plans tailored to meet specific requirements of customers. This is accomplished by learning
                        customers' exact objectives with regards to their internal and external requirements, thus ensuring
                        that Achievers logistics will provide quality services more consistently <br/> than any other service
                        provider in the market.</p>
                </div>

                <div className={"mission-vision padding"}>
                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration={"1500"}
                    >
                        <h3>Our Mission</h3>
                        <p>To see positive growth in all our stake holders through hard work, effective communication,
                            honesty and perseverance
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration={"1500"}
                    >
                        <h3>Our Vision</h3>
                        <p>To see positive growth in all our stake holders through hard work, effective communication,
                            honesty and perseverance
                        </p>
                    </div>
                </div>

                <div className={"market-position padding"}>
                    <div>
                        <h3
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration={"1500"}
                        >Market position</h3>
                        <p
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration={"1500"}
                            data-aos-delay={"500"}
                        >Since establishment in 2012, Achievers logistics has been recognized as one of the most
                            successful independent freight forwarding, removal and relocation and project logistics
                            companies in Ghana. In the Ghanaian transport and logistics market, Achievers logistics ranks
                            among the “top three”. With officers in all the customs entries points in Ghana, and with a
                            vision to established officers in all our neighboring countries, Achievers logistics planned
                            to be rank as one of the largest and (in terms of number of offices, employees and wide-ranging
                            service portfolio) – most reliable companies in the Ghanaian and west African market.
                        </p>
                        <hr/>
                    </div>

                </div>

            </section>
            <Footer/>
        </>
    )
}