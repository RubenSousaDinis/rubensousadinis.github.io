import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
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
          <div className={classNames('content-div')}>
            <a href={'http://www.runtime-revolution.com/'} target='_blank'>
              <img src={runtimeLogo} size='medium' alt="Runtime Revolution Logo" />
            </a>
            <h3 className='font-weight-bold my-3'>
              {description}
              <a href={'http://www.runtime-revolution.com/'} target='_blank'>
                Runtime Revolution.
              </a>
            </h3>
            <p className='text-center my-3'>
              {"At Runtime I work as a web developer, trying to deliver the best possible solution to our clients from all over the world."}
              {"I work with several different technologies, such as Ruby, Rails, Python, Django, React, React Native, Ember and many others."}
            </p>
            <h3 className='font-weight-bold'>{ refTitle }</h3>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
