import React from "react"

import Agirela from "../assets/images/agirela.png"
import Cnasim from "../assets/images/cnasim.jpg"


const Assurance = ( ) => {

    return (
        <>
       <div>
        <h2 className="color-red">Assurance RCP </h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Agirela} alt="Agirela" />
              <p>Agirela</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Cnasim}
                alt="Cnasim"
              />
              <p>Cnasim</p>
            </a>
          </div>

         
        </div>
      </div>
        </>
    )
}

export default Assurance