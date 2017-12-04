import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import { Header } from 'semantic-ui-react'
import background from './section_2.jpg'

export default class AboutMeSlide extends React.Component {

  render() {
    
    const title = "About Me"
    const refTitle = "Scroll down to know more about my professional experience."
    
    const { active, next, prevDotClick } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
      	<div>
          <div className={classNames('content-div')}>
            <Header as='h1'>{ title }</Header>
            <p>
              {"I’m a Full Stack Web Developer. Currently, I work at Runtime Revolution. I love to travel, you can check some of my adventures "} 
              here. 
              {" I’m also passionate with sports, I’ve a workout routine, which is composed by gym activities, soccer and some runs (I’ve already run an half-marathon). In my free time I like to go out with friends, learn new stuff and support my favourite soccer team, you can check some pics "} 
              here.
            </p>
            <Header as='h4'>{ refTitle }</Header>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
