import React from "react";
import { ComplaintSection, ComplaintContainerMain, ComplaintContainerCards, ComplaintContainerIcon, ComplaintContainerMatter } from "./styles.js"

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
                        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6113cddaffbf7c3eccd0ca16_its-our-liability.svg" alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6113cd85a9ad5e4ed249aecd_GDPR-icon.svg" alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6113cdda5cd7a24983ae0cb2_always-on.svg" alt="img"/>
                    </ComplaintContainerIcon>
                    <ComplaintContainerMatter>
                        <h1>It's Our Liability, Not Yours</h1>
                        <h2>When you hire employees with Deel, we take on all employment liability to make sure you’re compliant with local laws.</h2>
                    </ComplaintContainerMatter>
                </ComplaintContainerCards>
                <ComplaintContainerCards>
                    <ComplaintContainerIcon>
                        <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6113cd86a7cb92770ec9df71_your-ip-safe.svg" alt="img"/>
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