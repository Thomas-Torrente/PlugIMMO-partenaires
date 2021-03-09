import React from "react"

import ameu from "../assets/images/ameublys.png"
import socoo from "../assets/images/socoo.jpg"



const Cuisine = () => {
    return (
        <>
<div>
        <h2 className="color-red">Cuisiniste et ameublement</h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={socoo} alt=" SoCoo’C" />
              <p> SoCoo’C</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ameu}
                alt="Ameublys"
              />
              <p>Ameublys</p>
            </a>
          </div>

          
         
        </div>
      </div>
        </>
    )
}


export default Cuisine