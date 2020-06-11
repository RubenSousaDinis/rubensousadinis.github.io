import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import background from '../../../img/section_2.jpg'

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
            <h1 className='font-weight-bold mb-3'>{ title }</h1>
            <p className='text-center my-3'>
              {"I’m a Web Developer. Currently, I work at Lavanda."}
              {"I’m also passionate with sports, I’ve a workout routine, which is composed by gym activities, soccer and some runs (I’ve already run an half-marathon). In my free time I like to go out with friends, learn new stuff and support my favourite soccer team."}
            </p>
            <h3 className='font-weight-bold'>{ refTitle }</h3>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
