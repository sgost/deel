import React, { useRef } from "react"
import {
  ClintSection,
  ClintImage,
  ClintMatter,
  ClintImageBlock,
  ClintSectionmain,
} from "./styles.js"
import img1 from "../../../data/assets/carousal.png"
import img2 from "../../../data/assets/download.png"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import right from "../../../data/assets/r-arrow.svg"
import left from "../../../data/assets/l-arrow.svg"

const Clints = () => {
  const ClintsData = [
    {
      description:
        "“Being able to hire people wherever they are without worrying about compliance is a godsend. We focus on talent and look for the right people, and know that Deel will take care of the rest for us.”",
      organisation: "Emmanuel Straschnov · Co-CEO Bubble",
      Backgroundcolor: "#a041ff",
      ImageBackground: "rgba(255, 255, 255, 0.5)",
    },
    {
      description:
        "“Being able to hire people wherever they are without worrying about compliance is a godsend. We focus on talent and look for the right people, and know that Deel will take care of the rest for us.”",
      organisation: "Emmanuel Straschnov · Co-CEO Bubble",
      Backgroundcolor: "#4ac7d3",
      ImageBackground: "rgba(255, 255, 255, 0.5)",
    },
  ]
  const slider = useRef(null)
  return (
    <ClintSectionmain>
      <Carousel
        interval={1000000}
        id="main_carousal_control"
        ref={slider}
        fade="true"
      >
        {ClintsData &&
          ClintsData.map((ClintsDatas, i) => (
            <Carousel.Item key={i}>
              <ClintSection
                style={{ backgroundColor: ClintsDatas.Backgroundcolor }}
              >
                <ClintImage>
                  <ClintImageBlock
                    style={{ backgroundColor: ClintsDatas.ImageBackground }}
                  >
                    <img src={img1} alt="img" />
                  </ClintImageBlock>
                </ClintImage>
                <ClintMatter>
                  <img src={img2} alt="img" />
                  <h1>{ClintsDatas.description}</h1>
                  <p>{ClintsDatas.organisation}</p>
                </ClintMatter>
              </ClintSection>
            </Carousel.Item>
          ))}
      </Carousel>
      <div id="Clints_btn">
        <button
          aria-hidden="true"
          className="carousel-control-prev-icon"
          onClick={() => slider.current.prev()}
        >
          <img src={left} alt="img" />
        </button>
        <button
          aria-hidden="true"
          className="carousel-control-next-icon"
          onClick={() => slider.current.next()}
        >
          <img src={right} alt="img" />
        </button>
      </div>
    </ClintSectionmain>
  )
}
export default Clints
