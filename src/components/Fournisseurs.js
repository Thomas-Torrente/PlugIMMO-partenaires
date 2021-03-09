import React from "react"

import Zen from "../assets/images/finazen.jpg"
import Value from "../assets/images/lead-value.jpg"
import Lidi from "../assets/images/lidimo.png"
import Elexis from "../assets/images/Elexis.png"
import Immo from "../assets/images/lead-immobilier.jpg"


const Fournisseurs = () => {
    return (
        <>
<div>
        <h2 className="color-red">Fournisseurs de Leads et Rdv Qualifié</h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Zen} alt="Finanzen" />
              <p>Finanzen</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Elexis}
                alt="Elexis"
              />
              <p>Elexis</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Lidi}
                alt="Lidimo"
              />
              <p>Lidimo</p>
            </a>
          </div>

         

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Value}
                alt="Lead Value"
              />
              <p>Lead Value</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Immo}
                alt="Lead Immobilier Neuf"
              />
              <p>Lead Immobilier Neuf</p>
            </a>
          </div>

         
        </div>
      </div>
        </>
    )
}


export default Fournisseurs