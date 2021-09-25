import React from "react";
import { QuoteContainer, QuoteContainerSectionCards, QuoteContainerSection } from "./styles.js"

const Growing = () => {

    return(
        <>
        <QuoteContainer>
        <h1>Deel makes growing remote and international teams effortless. Ready to get started?</h1>
        <button>Request a demo</button>
        <QuoteContainerSection>
            <QuoteContainerSectionCards>
            <h1>150 +</h1>
            <p>Countries</p>
            </QuoteContainerSectionCards>
            <QuoteContainerSectionCards>
            <h1>150 +</h1>
            <p>Countries</p>
            </QuoteContainerSectionCards>
            <QuoteContainerSectionCards>
            <h1>150 +</h1>
            <p>Countries</p>
            </QuoteContainerSectionCards>
            <QuoteContainerSectionCards>
            <h1>150 +</h1>
            <p>Countries</p>
            </QuoteContainerSectionCards>
        </QuoteContainerSection>
    </QuoteContainer>
    </>
    )
}
export default Growing;