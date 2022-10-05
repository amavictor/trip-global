import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import AOS from "aos";
import Logo from "../../assets/logo.png"

export default function Navbar () {

    useEffect(()=>{
        AOS.init()
    },[])

    return(
        <>
            <nav className={"padding nav-shade"}>
                <img
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration={"500"}
                    src={Logo}
                    alt={Logo}
                />
                <ul
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration={"500"}
                >
                    <li><NavLink to={"/"}
                                 className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                    >Home</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/service"}>Services</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}