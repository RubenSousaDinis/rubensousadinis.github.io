import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import background from '../../../img/section_3.jpeg'
import lavandaLogo from '../../../img/lavanda_logo.png'

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
            <a href={'https://getlavanda.com/'} target='_blank'>
              <img src={lavandaLogo} class='logo' size='small' alt="Lavanda Logo" />
            </a>
            <h3 className='font-weight-bold my-3'>
              {description}
              <a href={'https://getlavanda.com/'} target='_blank'>
                Lavanda.
              </a>
            </h3>
            <p className='text-center my-3'>
              {"At Lavanda I work as a Web Developer trying to improve the quality of our product everyday. "}
              {"I work with Ruby on Rails on a daily basis, but I also like to explore different technologies, such as Python, React and Flutter."}
            </p>
            <h3 className='font-weight-bold'>{ refTitle }</h3>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
