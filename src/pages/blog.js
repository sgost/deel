import React from "react"
import Nav from "../components/Landing/Nav/index"
import {
  BlogSection,
  BlogSectionMain,
} from "../components/Resources/Blog/styles.js"
// import Footer from "../components/Landing/Footer/index"
import { SearchOutlined } from "@ant-design/icons"
import { Link } from "gatsby"
import Footer from "../components/Landing/Footer/index"

const Blog = () => {
  const sectionCard = [
    {
      title: "ma of the person in the",
      description: "ma of the person in the",
      color: "#ACDDDE",
    },
    {
      title: "ma of the person in the",
      description: "ma of the person in the",
      color: "#CAF1DE",
    },
    {
      title: "ma of the person in the",
      description: "ma of the person in the",
      color: "#FFE7C7",
    },
    {
      title: "ma of the person in the",
      description: "ma of the person in the",
      color: "#C0C6ED",
    },
  ]

  return (
    <>
      <BlogSection>
        <Nav />
        <div id="BlogSection">
          <h1>Deel Blog & Resources</h1>
          <div id="search">
            <input type="search" id="search_bar" placeholder="search..." />
            <SearchOutlined className="search_logo" />
          </div>
          <div id="search_links">
            <Link id="Links">Compaliance</Link>
            <Link id="Links">Compaliance</Link>
            <Link id="Links">Compaliance</Link>
            <Link id="Links">Compaliance</Link>
            <Link id="Links">Compaliance</Link>
          </div>
        </div>
      </BlogSection>
      <BlogSectionMain>
        <div id="BlogSectionMain">
          <div id="section_top">
            <h1 id="section_top_title">Compliance</h1>
            <Link id="Links">View all</Link>
          </div>
          <div id="section_middle">
            {sectionCard &&
              sectionCard.map(sectionCards => (
                <div id="section_middle_card" key={sectionCards.title}>
                  <div
                    id="section_middle_card_top"
                    style={{ backgroundColor: sectionCards.color }}
                  >
                    <p id="card_title">{sectionCards.title}</p>
                  </div>
                  <h1 id="card_desc">{sectionCards.description}</h1>
                </div>
              ))}
          </div>
        </div>
        <div id="BlogSectionMain">
          <div id="section_top">
            <h1 id="section_top_title">Compliance</h1>
            <Link id="Links">View all</Link>
          </div>
          <div id="section_middle">
            {sectionCard &&
              sectionCard.map(sectionCards => (
                <div id="section_middle_card" key={sectionCards.title}>
                  <div
                    id="section_middle_card_top"
                    style={{ backgroundColor: sectionCards.color }}
                  >
                    <p id="card_title">{sectionCards.title}</p>
                  </div>
                  <h1 id="card_desc">{sectionCards.description}</h1>
                </div>
              ))}
          </div>
        </div>
        <div id="BlogSectionMain">
          <div id="section_top">
            <h1 id="section_top_title">Compliance</h1>
            <Link id="Links">View all</Link>
          </div>
          <div id="section_middle">
            {sectionCard &&
              sectionCard.map(sectionCards => (
                <div id="section_middle_card" key={sectionCards.title}>
                  <div
                    id="section_middle_card_top"
                    style={{ backgroundColor: sectionCards.color }}
                  >
                    <p id="card_title">{sectionCards.title}</p>
                  </div>
                  <h1 id="card_desc">{sectionCards.description}</h1>
                </div>
              ))}
          </div>
        </div>
        <div id="BlogSectionMain">
          <div id="section_top">
            <h1 id="section_top_title">Compliance</h1>
            <Link id="Links">View all</Link>
          </div>
          <div id="section_middle">
            {sectionCard &&
              sectionCard.map(sectionCards => (
                <div id="section_middle_card" key={sectionCards.title}>
                  <div
                    id="section_middle_card_top"
                    style={{ backgroundColor: sectionCards.color }}
                  >
                    <p id="card_title">{sectionCards.title}</p>
                  </div>
                  <h1 id="card_desc">{sectionCards.description}</h1>
                </div>
              ))}
          </div>
        </div>
        <div id="BlogSectionMain">
          <div id="section_top">
            <h1 id="section_top_title">Compliance</h1>
            <Link id="Links">View all</Link>
          </div>
          <div id="section_middle">
            {sectionCard &&
              sectionCard.map(sectionCards => (
                <div id="section_middle_card" key={sectionCards.title}>
                  <div
                    id="section_middle_card_top"
                    style={{ backgroundColor: sectionCards.color }}
                  >
                    <p id="card_title">{sectionCards.title}</p>
                  </div>
                  <h1 id="card_desc">{sectionCards.description}</h1>
                </div>
              ))}
          </div>
        </div>
        <div id="BlogSectionMain">
          <div id="section_top">
            <h1 id="section_top_title">Compliance</h1>
            <Link id="Links">View all</Link>
          </div>
          <div id="section_middle">
            {sectionCard &&
              sectionCard.map(sectionCards => (
                <div id="section_middle_card" key={sectionCards.title}>
                  <div
                    id="section_middle_card_top"
                    style={{ backgroundColor: sectionCards.color }}
                  >
                    <p id="card_title">{sectionCards.title}</p>
                  </div>
                  <h1 id="card_desc">{sectionCards.description}</h1>
                </div>
              ))}
          </div>
        </div>
      </BlogSectionMain>
      <Footer />
    </>
  )
}
export default Blog
