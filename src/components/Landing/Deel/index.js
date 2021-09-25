import React from "react";
import { DeelSection, DeelSectionContainer, Mattercontainer, ImageContainer, DeelSectionContainerMain } from "./styles.js"
import img from "../../../data/assets/9.jpg"

const Deel = () => {
    const Deeldata = [
        {
            "description": "Bring on contractors around the world",
        },
        {
            "description": "Hire employees abroad without opening an entity",
        },
        {
            "description": "Run global payroll for your new entites",
        },
    ]
    console.log(Deeldata);
    return(
        <DeelSection>
            <h1>Do it all with Deel</h1>
            <p>Whether you want to hire a contractor in Germany or twenty employees in Brazil, you can manage contractors and employees together all from your Deel account.</p>
            <DeelSectionContainerMain>
                {Deeldata.map((Deeldatas, i) =>
            <DeelSectionContainer key={i}>
                <ImageContainer>
                    <img src={img} alt="img"/>
                </ImageContainer>
                <Mattercontainer>
                    <h2>{Deeldatas.description}</h2>
                </Mattercontainer>
            </DeelSectionContainer>
                )}
            </DeelSectionContainerMain>
        </DeelSection>
    )
}
export default Deel;