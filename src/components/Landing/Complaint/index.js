import React from "react";
import { ComplaintSection, ComplaintContainerMain, ComplaintContainerCards, ComplaintContainerIcon, ComplaintContainerMatter, QuoteContainer, QuoteContainerSectionCards, QuoteContainerSection } from "./styles.js"
import img from "../../../data/assets/book.svg"

const Complaint = () => {

    // const ComplaintData = [
    //     {
    //         "title": "It's Our Liability, Not Yours",
    //         "name": "When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws."
    //     }
    // ]

    return(
        <>
        <ComplaintSection>
            <h1>Reliable. Secure. Compliant.</h1>
            <ComplaintContainerMain>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src={img} alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src={img} alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src={img} alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src={img} alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
            </ComplaintContainerMain>
        </ComplaintSection>
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
export default Complaint;