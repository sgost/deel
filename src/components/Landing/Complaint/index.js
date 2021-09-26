import React from "react";
import { ComplaintSection, ComplaintContainerMain, ComplaintContainerCards, ComplaintContainerIcon, ComplaintContainerMatter } from "./styles.js"
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
    </>
    )
}
export default Complaint;