import { Component, React } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component
{
    render()
    {   
        // New page? Add to this list.
        const links = ["Home", "Search"];
        //console.log("tosser");

        return(
            <div id="navbar">
                {
                    links.map((link, i) =>
                    {
                        return(<NavLink to={link}>{link}</NavLink>);
                    })
                }
            </div>

        );
    }
}

export default Navbar;