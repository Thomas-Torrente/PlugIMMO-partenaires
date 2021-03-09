import React from "react"

// IMPORTS DES COMPOSANTS 
import Assurance from "../components/Assurance"
import Cif from "../components/Cif"
import Cuisine from "../components/Cuisine"
import Formation from "../components/Formation"
import Fournisseurs from "../components/Fournisseurs"
import Garantie from "../components/Garantie"
import Juridique from "../components/Juridique"
import Locative from "../components/Locative"
import Simulation from "../components/Simulation"


const Home = () => {

    return (
        <>
<div>
    <h1 className="flex-center color-red ">Nos Partenaires</h1>
    <Juridique/>
    <Assurance/>
    <Formation/>
   <Simulation/>
   <Fournisseurs/>
   <Locative/>
   <Cif/>
   <Cuisine/>
   <Garantie/>
</div>
        </>
    )
}

export default Home