import "./css/Nav.css"
import logo from "../utils/symbol.png"
import { useState, useEffect } from "react"

function Nav() {
    const [showNav, setShowNav] = useState(false)
    const handleScroll = () => window.scrollY > 100 ? setShowNav(true) : setShowNav(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        // use effect clean up
        return () => window.removeEventListener("scroll", handleScroll)
    }, [showNav])

    return (
        <div className={`nav ${showNav && "nav__black"}`}>
            <div class="nav__contents">
                <img className="nav__logo" src={logo} alt="Movie Streaming Application" />
                <img className="nav__avatar" src={"https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"} alt="" />
            </div>
        </div>
    )
}

export default Nav