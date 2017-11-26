import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import { Image, Header } from 'semantic-ui-react'

export default class OverviewSlide extends React.Component {

  render() {
    
    const title = "Rúben Sousa Dinis"
    const description = "I'm a Full Stack Web Developer at Runtime Revolution"
    const refTitle = "Scroll down to know more about me."
    const background = "img/section_1.jpeg"
    
    const { active, next, prevDotClick, href } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
      	<div>
          <div>
            <Header as='h1'>{ title }</Header>
            <Image src='img/foto_perfil.jpg' size='small' circular centered />
            <Header as='h3'>{ description }</Header>
            <Header as='h4'>{ refTitle }</Header>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
