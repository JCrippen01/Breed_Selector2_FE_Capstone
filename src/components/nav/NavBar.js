import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/breeds">Breeds</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/users">Users</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/selectedBreeds">Breeds you have Selected</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/login" onClick={
                    () => localStorage.removeItem("selector_users")
                }>Logout</Link>
            </li>
        </ul>
    )
}
