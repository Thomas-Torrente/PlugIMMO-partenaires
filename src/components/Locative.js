import React from "react"

import Sng from "../assets/images/sng-immo.png"
import Estim from "../assets/images/lead-value.jpg"



const Locative = () => {
    return (
        <>
<div>
        <h2 className="color-red">Gestion Locative</h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Sng} alt="Gestionnaire National SNG IMMOBILIER:" />
              <p>Gestionnaire National SNG :</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Estim}
                alt="Estimateur de valeur locative "
              />
              <p>Estimateur de valeur locative </p>
            </a>
          </div>

          
         
        </div>
      </div>
        </>
    )
}


export default Locative