import "./footer.scss"
import {Link} from "react-router-dom";

export default function Footer() {
    return(
        <footer className={"padding"}>
            <div className={"newsletter"}>
                <h4>NEWSLETTER SUBSCRIPTION</h4>
                <p>
                    Subscribe to our newsletter and we will inform you about newest projects
                    and promotions.
                </p>
                <div>
                    <input type={"email"}/>
                    <button>Send</button>
                </div>
            </div>

            <div className={"quick-links"}>
                <h4>QUICK LINKS</h4>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"about"}>About</Link></li>
                    <li><Link to={"service"}>Home</Link></li>
                    <li><Link to={"contact"}>Contact</Link></li>
                </ul>
            </div>

            <div className={"industry-solution"}>
                <h4>INDUSTRY SOLUTIONS</h4>
                <ul>
                    <li>Air/Sea Charters</li>
                    <li>Freight forwarding</li>
                    <li>LCL/LTL Services</li>
                    <li>Road Transport</li>
                    <li>Heavy-lifts</li>
                    <li>Global Relocation</li>
                    <li>Office moving</li>
                    <li>Auto Transportation</li>
                </ul>
            </div>

            <div className={"contact-us"}>
                <h4>Contact us</h4>
                <p><span>South Africa:</span> 4 Albert Street, Eastern Cape, Republic of South Africa</p>
                <p><span>Nigeria:</span> 55, Odudwa Cresent, Ikeja Lagos Nigeria</p>
                <p>+27604437346</p>
                <p>+2349160759821</p>
            </div>
            
        </footer>
    )
}