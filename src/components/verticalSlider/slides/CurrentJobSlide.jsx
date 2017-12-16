import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import { Image, Header } from 'semantic-ui-react'
import background from '../../../img/section_3.jpeg'
import runtimeLogo from '../../../img/runtime_logo.png'

export default class CurrentJobSlide extends React.Component {

  render() {
    const description = "I'm a Full Stack Web Developer at "
    const refTitle = "Scroll down to contact me"
    
    const { active, next, prevDotClick } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
      	<div>
          <div>
            <a href={'http://www.runtime-revolution.com/'} target='_blank'>
                <Image src={runtimeLogo} size='medium'  centered />
            </a>
            <Header as='h3'>
              {description}
            </Header>
            <Header as='h4'>{ refTitle }</Header>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
