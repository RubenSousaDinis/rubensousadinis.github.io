import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import background from '../../../img/section_1.jpeg'
import profileImage from '../../../img/foto_perfil.jpg'

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
            <h1 className='font-weight-bold mb-3'>{ title } </h1>
            <img src={profileImage} style={{height: '150px'}} className='rounded-circle mb-2' alt='Rúben face' />
            <h2 className='font-weight-bold my-3' >
              {description}
              <a href={'https://getlavanda.com/'} target='_blank'>
                Lavanda
              </a>
            </h2>
            <h3 className='font-weight-bold'>{ refTitle }</h3>
          </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
