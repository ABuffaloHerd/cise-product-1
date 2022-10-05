import React from "react";
import Base from "../components/Base";

// const Search = () =>
// {
//     return(
//         <div>
//             <h1>I HATE YOU</h1>
//             <h2>This is also the search page</h2>
//         </div>
//     );
// }

class Search extends Base
{
    render()
    {
        return(
            <div>
                <h2>SearchS</h2>
                {super.getBaseComponents()}
            </div>
        );  
    }
}

export default Search;