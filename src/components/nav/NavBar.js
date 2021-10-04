import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="#" onClick={
                    () => window.location.reload(false)}>Reset</Link>
            </li>
                      
            <li className="navbar__item active">
                <Link className="navbar__link" to="/login" onClick={
                    () => localStorage.removeItem("selector_users")
                }>Logout</Link>
            </li>
        </ul>
    )
}
