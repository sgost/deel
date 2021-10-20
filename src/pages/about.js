import React from "react"
import Nav from "../components/Landing/Nav/index"
import {
    TrustSection,
    HelloContainer,
    Gallery,
} from "../components/Resources/about/styles.js"
import Footer from "../components/Landing/Footer/index"

const About = () => {

    return (
        <>
            <TrustSection>
                <Nav />
                <div id="CardsContainer">
                    <div id="Cards">
                        <div id="cardData">
                            <p>2019</p>
                            <h1>What’s the deal with Deel?</h1>
                            <h2>
                                How we work has changed. In real-time, we can collaborate on Zoom, design new products, and attend (virtual) events from anywhere in the world.
                            </h2>
                            <h2>The one big issue? Tools to hire and pay international teams haven't kept up. International hiring can be messy. With confusing local laws, complicated taxes, and even hefty fines (if you don't get it right).</h2>
                        </div>
                        <div id="cardImage">
                            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/60344fc1c5bacf97a6759905_about-img1-p-500.png" alt="img" />
                        </div>
                    </div>
                    <div id="Cards">
                        <div id="cardData">
                            <p>2019</p>
                            <h1>What’s the deal with Deel?</h1>
                            <h2>
                                How we work has changed. In real-time, we can collaborate on Zoom, design new products, and attend (virtual) events from anywhere in the world.
                            </h2>
                            <h2>The one big issue? Tools to hire and pay international teams haven't kept up. International hiring can be messy. With confusing local laws, complicated taxes, and even hefty fines (if you don't get it right).</h2>
                        </div>
                        <div id="cardImage">
                            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/6034529b9aeb9434116a1aa4_about-img2-p-500.png" alt="img" />
                        </div>
                    </div>
                    <div id="Cards">
                        <div id="cardData">
                            <p>2019</p>
                            <h1>What’s the deal with Deel?</h1>
                            <h2>
                                How we work has changed. In real-time, we can collaborate on Zoom, design new products, and attend (virtual) events from anywhere in the world.
                            </h2>
                            <h2>The one big issue? Tools to hire and pay international teams haven't kept up. International hiring can be messy. With confusing local laws, complicated taxes, and even hefty fines (if you don't get it right).</h2>
                        </div>
                        <div id="cardImage">
                            <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/616d5524b28e39f23c49f0ed_Group%2012626-p-800.png" alt="img" />
                        </div>
                    </div>
                </div>
            </TrustSection>

            <HelloContainer>
                <div id="helloContainerText">
                    <h1>Say hello to</h1>
                    <p>A seamless dashboard to hire and pay your international team.</p>
                </div>
                <div id="helloContainerBanner">
                    <img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/60314cd43286ab5a374ca7a4_dashboard.png" alt="img"/>
                </div>
            </HelloContainer>

            <Gallery>
            <div id="GalleryText">
            <h1>There's no "I" in team or Deel</h1>
                    <p>As a global collective of entrepreneurs, we love to build and solve problems. Our self-driven team of 90+ spans over 25+ countries, unified by technology, but our diverse culture keeps us always learning and improving.</p>
            </div>
            <div id="GalleryImages">
                <div id="img"><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/603476f6f7370682783884bf_Group%2012585.jpg" alt="img"/></div>
                <div id="img"><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/607ecd541cc49b5c3a54725c_image%201.png" alt="img"/></div>
                <div id="img"><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/603476f6ceb46b81a2d10826_Group%2012589.jpg" alt="img"/></div>
                <div id="img"><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/603476f66cdb36448dab734e_Group%2012590.jpg" alt="img"/></div>
                <div id="img"><img src="https://assets.website-files.com/601ac25738ddfb7beea0c682/603476f63a3da4306d3779ba_Mask%20Group.jpg" alt="img"/></div>
            </div>
            </Gallery>
            <Footer/>
        </>
    )
}
export default About
