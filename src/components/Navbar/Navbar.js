import "./Navbar.scss"
import {NavLink} from "react-router-dom";
import {useContext, useEffect, useRef} from "react";
import AOS from "aos";
import Logo from "../../assets/logo.png"
import Ham from "../../assets/menu.png"
import {NavContext} from "../../context/navContext";

export default function Navbar () {
    const navRef = useRef()
    useEffect(()=>{
        AOS.init()
    },[])
    const {setNavState} = useContext(NavContext)
    const mobile = ()=>{
        navRef.current.classList.toggle("mobile")
        return setNavState(true)
    }

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

                <img
                    className={"ham"}
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration={"500"}
                    src={Ham}
                    alt={"Hamburger"}
                    onClick={mobile}
                />

                <ul
                    data-aos="fade-down"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration={"500"}
                    ref={navRef}
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