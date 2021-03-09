import React from "react"

import forma360 from "../assets/images/360.png"
import Ola from "../assets/images/ola-formation.png"
import Orica from "../assets/images/orica-logo.png"
import Cnasim from "../assets/images/cnasim.jpg"
import  Juris from "../assets/images/juris-campus.png"
import Easy from "../assets/images/easy.png"


const Formation = () => {
    return (
        <>
<div>
        <h2 className="color-red">Formations</h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={forma360} alt="360 Formation" />
              <p>360 Formation</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Ola}
                alt="Ola Formation"
              />
              <p>Ola Formation</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Orica}
                alt="•	Orica Formation"
              />
              <p>Orica Formation</p>
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

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Juris}
                alt="Juriscampus"
              />
              <p>Juriscampus</p>
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
                alt="Easysolution"
              />
              <p>Easysolution</p>
            </a>
          </div>

         
        </div>
      </div>
        </>
    )
}


export default Formation