import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {

    state = { clicked: false }

    render() {
        return (
            <nav id="menu-h">
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar