import React, { useRef, Fragment } from "react"
import { PeopleSection } from "./styles.js"
import img from "../../../data/assets/8.jpg"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons';

const People = () => {
  const PeopleData = [
    {
      "id": 0,
      "head": "Pay an entire team in minutes (not days)",
      "description": "We handle payroll, invoice generation, payslips, and taxes so you can pay the whole team with a click. Plus, you can integrate your favorite accounting software.", 
    },
    {
      "id": 1,
      "head": "Pay an entire team in minutes (not days)",
      "description": "We handle payroll, invoice generation, payslips, and taxes so you can pay the whole team with a click. Plus, you can integrate your favorite accounting software.", 
    },
    {
      "id": 2,
      "head": "Pay an entire team in minutes (not days)",
      "description": "We handle payroll, invoice generation, payslips, and taxes so you can pay the whole team with a click. Plus, you can integrate your favorite accounting software.", 
    },
  ]
  const PeopleMenu = [
    {
      "name": "Finance"
    },
    {
      "name": "Hiring Managers"
    },
    {
      "name": "Leagal Teams"
    },
  ]
  const slider = useRef(null)
  return (
    <PeopleSection>
      <h1>Loved by everyone from Finance teams to People Ops</h1>
      <Carousel interval={1000000} id="main_carousal_control" ref={slider} fade="true">
        {PeopleData && PeopleData.map((PeopleDatas, i) => 
      <Carousel.Item  key={i}>
        <div id="PeopleContainer">
          <div id="PeopleNames">
            {PeopleMenu && PeopleMenu.map((PeopleMenus, i) => 
            <Fragment key={i}>
            {(PeopleDatas.id === i) ? (<h1 id="people_menu2" className="bold" key={i}>{PeopleMenus.name}</h1>) : (<h1 id="people_menu" key={i}>{PeopleMenus.name}</h1>)}
            </Fragment>
            )}
          </div>
          <div id="PeopleContent">
            <div id="image_container">
              <img src={img} alt="img" />
            </div>
            <div id="image_matter">
              <h1>{PeopleDatas.head}</h1>
              <p>{PeopleDatas.description}</p>
              <Link id="Link">Learn more<ArrowRightOutlined className="icon" /></Link>
            </div>
          </div>
        </div>
        </Carousel.Item>
                )}
      </Carousel>
      <div id="btn">
        <span aria-hidden="true" className="carousel-control-prev-icon" id="l" onClick={() => slider.current.prev()}><LeftOutlined style={{ fontSize: '20px', fontWeight: `bold`, color: `#15357a` }} /></span>
        <span aria-hidden="true" className="carousel-control-next-icon" onClick={() => slider.current.next()}><RightOutlined style={{ fontSize: '20px', fontWeight: `bold`, color: `#15357a`, marginLeft: `50px` }}/></span>
        </div>
    </PeopleSection>
  )
}
export default People;