import React, { useState } from "react"
import {
    PriceSection,
    PriceSectionCards,
    PriceSolutionCards,
    PriceFooter,
} from "../components/Pricing/styles.js"
import Nav from "../components/Landing/Nav"
import Clints from "../components/Landing/Clints"
import Footer from "../components/Landing/Footer/index"

const Pricing = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <PriceSection>
                <Nav />
                <div id="Price_container">
                    <h1>
                        Start for free.
                        Cancel any time.
                    </h1>
                    <h2>
                        Billing is monthly and you don’t need a credit card to sign up.
                        You'll only be charged once you've paid your new team member.
                    </h2>
                </div>
            </PriceSection>
            <PriceSectionCards>
                <div id="cards_container">
                    <div id="cards">
                        <h1>Hire contractors</h1>
                        <p>Stay compliant with local laws and reduce the time it takes to hire, pay and take care of your team.</p>
                        <div id="card_price">
                            <p><span>$49</span> per</p>
                            <p>contractor / month</p>
                        </div>
                        <button>Speak To Sales</button>
                        {
                            open ?
                                <>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                </>
                                :
                                ("")
                        }
                    </div>
                    <div id="cards">
                        <h1>Hire contractors</h1>
                        <p>Stay compliant with local laws and reduce the time it takes to hire, pay and take care of your team.</p>
                        <div id="card_price">
                            <p><span>$49</span> per</p>
                            <p>contractor / month</p>
                        </div>
                        <button>Speak To Sales</button>
                        {
                            open ?
                                <>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                    <h2><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/602d80b9d603ec46c635ccb3_blue%20tick.svg" alt="img" className="icon" />Hire contractors from 150 countries in minutes</h2>
                                </>
                                :
                                ("")
                        }
                    </div>
                </div>
                {
                    open ?
                        <button id="link" onClick={() => setOpen(false)}>+ Learn more</button>
                        :
                        <button id="link" onClick={() => setOpen(true)}>+ Learn more</button>
                }
            </PriceSectionCards>
            <PriceSolutionCards>
                <div id="solutionCards">
                    <div id="cards">
                        <div id="cards_matter">
                            <h1>Enterprise Solutions</h1>
                            <p>We offer enterprise solutions for large businesses with custom pricing and bespoke functionality</p>
                        </div>
                        <button>Speakes To Sales</button>
                    </div>
                    <div id="cards">
                        <div id="cards_matter">
                            <h1>Enterprise Solutions</h1>
                            <p>We offer enterprise solutions for large businesses with custom pricing and bespoke functionality</p>
                        </div>
                        <button>Apply here</button>
                    </div>
                </div>
                <div id="matter">
                    <h1>Whether you want to hire a new team member as a contractor or an employee, we’re here to help.</h1>
                    <button>Request a demo</button>
                </div>
            </PriceSolutionCards>
            <Clints />
            <PriceFooter>
                <div id="PriceFooter">
                    <Footer />
                </div>
            </PriceFooter>
        </>
    )
}
export default Pricing
