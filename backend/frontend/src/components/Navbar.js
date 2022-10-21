import { Component, React } from 'react';
import { NavLink } from "react-router-dom";

import "./styles/Nav.css";

class Navbar extends Component
{
    render()
    {   
        // New page? Add to this json.
        // TODO: replace with json so that custom names can be shown

        const links =
        [
            {
                to: "/",
                label: "Home"
            },
            {
                to: "/Search",
                label: "search"
            },
            {
                to: "/Submit",
                label: "Submit an article"
            },
            {
                to: "/ShowAll",
                label: "Show all articles"
            }
        ]

        return(
            <div class="navbar">
                {
                    links.map((link, i) =>
                    {
                        return(<NavLink exact to={link.to}>{link.label}</NavLink>);
                    })
                }
            </div>

        );
    }
}

export default Navbar;