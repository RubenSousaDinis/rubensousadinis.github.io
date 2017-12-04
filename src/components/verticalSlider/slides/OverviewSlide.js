import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import { Image, Header } from 'semantic-ui-react'
import background from './section_1.jpeg'
import logo from './foto_perfil.jpg'

export default class OverviewSlide extends React.Component {

  render() {
    
    const title = "Rúben Sousa Dinis"
    const description = "I'm a Full Stack Web Developer at "
    const refTitle = "Scroll down to know more about me."
    
    const { active, next, prevDotClick } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
      	<div>
          <div>
            <Header as='h1'>{ title }</Header>
            <Image src={logo} size='small' circular centered />
            <Header as='h3'>
              {description}
              <a href={'http://www.runtime-revolution.com/'} target='_blank'>
                Runtime Revolution
              </a>
            </Header>
            <Header as='h4'>{ refTitle }</Header>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
