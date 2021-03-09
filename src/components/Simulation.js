import React from "react"

import Kochise from "../assets/images/kochise.jpg"
import Big from "../assets/images/bigistinvest.jpg"
import Top from "../assets/images/topinvest.jpg"
import Simul from "../assets/images/simulateur.png"
import Easy from "../assets/images/easy.png"


const Simulation = () => {
    return (
        <>
<div>
        <h2 className="color-red"G>Simulateurs Simulations fiscales et PTZ</h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Kochise} alt="Kochise" />
              <p>Kochise</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Big}
                alt="Big Invest"
              />
              <p>Big Invest</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Top}
                alt="Top Invest"
              />
              <p>Top Invest</p>
            </a>
          </div>

         

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Easy}
                alt="Easydéfisc"
              />
              <p>Easydéfisc</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Simul}
                alt="Simulateur Prêt à Taux Zéro gratuit"
              />
              <p>Simulateur Prêt à Taux Zéro gratuit</p>
            </a>
          </div>

         
        </div>
      </div>
        </>
    )
}


export default Simulation