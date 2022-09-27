import { Component, React } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component
{
    render()
    {   
        // New page? Add to this list. Add leading slash (thanks nathan)
        const links = ["/Home", "/Search"];
        //console.log("tosser");

        return(
            <div id="navbar">
                {
                    links.map((link, i) =>
                    {
                        return(<NavLink exact to={link}>{link.substring(1)}</NavLink>); // substring to remove leading slash
                    })
                }
            </div>

        );
    }
}

export default Navbar;