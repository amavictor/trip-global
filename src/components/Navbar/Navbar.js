import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.png"
import Button from "../button/button";

export default function Navbar () {
    return(
        <>
            <nav className={"padding nav-shade"}>
                {/*<img src={Logo}/>*/}
                <h3>Trip <span>Global</span></h3>
                <ul>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"about"}>About</NavLink>
                    <NavLink to={"service"}>Services</NavLink>
                    <NavLink to={"contact"}>Contact</NavLink>
                </ul>
            </nav>
        </>
    )
}