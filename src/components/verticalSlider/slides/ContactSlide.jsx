import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import background from '../../../img/section_4.jpeg'

export default class ContactSlide extends React.Component {

  render() {
    
    const title = "Contacts"
    
    const { active, next, prevDotClick } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
      	<div>
            <div className={classNames('content-div')}>
              <h1 className='font-weight-bold mb-2'>{ title }</h1>
              <a href={'https://www.linkedin.com/in/rúben-dinis-923159b2'} target='_blank' className="mr-4" style={{textDecoration: 'none'}}>
                <i class="fa fa-4x fa-linkedin" title="Linkedin link"></i>
              </a>
              <a href={'https://github.com/RubenSousaDinis'} target='_blank' className="mr-4" style={{textDecoration: 'none'}}>
                <i class="fa fa-4x fa-github" title="Github link"></i>
              </a>
              <a href={'mailto:ruben.sousa.dinis@gmail.com'} className="mr-4" style={{textDecoration: 'none'}}>
                <i class="fa fa-4x fa-envelope" title="Gmail link"></i>
              </a>
              <a href={'https://medium.com/@ruben.sousa.dinis'} target='_blank' className="mr-4" style={{textDecoration: 'none'}}>
                <i class="fa fa-4x fa-medium" title="Medium link"></i>
              </a>
            </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
