import { Component, React } from 'react';
import { NavLink } from "react-router-dom";

import "./styles/Nav.css";

class Navbar extends Component
{
    render()
    {   
        // New page? Add to this list. Add leading slash (thanks nathan)
        const links = ["/Home", "/Search", "/Submit"];
        //console.log("tosser");

        return(
            <div class="navbar">
                {
                    links.map((link, i) =>
                    {
                        if(i === 0)
                        {
                            return(<NavLink exact to="/">Home</NavLink>)
                        }
                        else
                            return(<NavLink exact to={link}>{link.substring(1)}</NavLink>); // substring to remove leading slash
                    })
                }
            </div>

        );
    }
}

export default Navbar;