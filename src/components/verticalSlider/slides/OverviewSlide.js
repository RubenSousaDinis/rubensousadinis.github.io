import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import { Image, Header } from 'semantic-ui-react'

export default class OverviewSlide extends React.Component {

  render() {
    
    const title = "Rúben Sousa Dinis"
    const description = "Full Stack Web Developer"
    const background = "img/covers/section001.jpg"
    
    const { active, next, prevDotClick, href, refTitle } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
      	<div>
          <div>
            <Header as='h1'>{ title }</Header>
            <Image src='img/foto_perfil.jpg' size='small' circular centered />
            <Header as='h3'>{ description }</Header>
            <a className={classNames("hover-underline")} href={ href }>{ refTitle }</a>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
