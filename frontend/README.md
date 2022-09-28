# LISTEN UP FUCKERS

## Adding a new page

To add a new page consider the following 20 000 steps, and 100 000 dependency packages.

1. Create js file in pages folder.
2. Use class architecture and extend the Base class. The following code is a sample
```
import React, { Component } from "react";

import Base from "../components/Base";

class Tosser extends Base
{
    render()
    {
        return(
            <div>
                <!--I don't care what you put here but this super.getBaseComponents is needed if you want the navbar. -->
                {super.getBaseComponents()}
            </div>
        );  
    }
}

export default Tosser;
```

3. Open Navbar.js. Add Name of page to const links array. Don't forget leading slash.
4. Open index.js. This has the router. Within the createBrowserRouter function add a new object. <br> Set path attribute to the same one you set in the navbar. Set element attribute to the new class. Make sure to import.
5. magic.

## Troubleshooting
When googling inevitably fails you, defensestrate computer.