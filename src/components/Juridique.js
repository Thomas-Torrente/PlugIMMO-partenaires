import React from "react";
import Edc from "../assets/images/edc.png"
import Jurisconsulting from "../assets/images/jurisconsulting.jpg"
import Portail from "../assets/images/portail-entrepreneur.jpg"

const Juridique = () => {
  return (
    <>
      <div>
        <h2 className="color-red">Juridique</h2>
        <div class="carrousel flex-center">
          <div class="one-partnership">
            <a
              href="https://www.edcparis.edu/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Edc} alt="EDC" />
              <p>EDC</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.jurisconsulting.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Jurisconsulting}
                alt="Jurisconsulting"
              />
              <p>Jurisconsulting</p>
            </a>
          </div>

          <div class="one-partnership">
            <a
              href="https://www.portail-autoentrepreneur.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Portail}
                alt="Portail Entrepreneur"
              />
              <p>Portail Entrepreneur</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Juridique;
