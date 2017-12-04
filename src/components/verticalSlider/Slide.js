import React from "react"

import classNames from "classnames"
import './verticalSlider.css'

export default class Slide extends React.Component {

  render() {

  	const { active, background, description, next, prevDotClick, href, refTitle, title } = this.props
    return (
      <section className={classNames("slide", { active, next, prevDotClick } ) } >
        <picture style={ { backgroundImage: "url(" + background + ")" } } />
        <div>
          <div>
              <p>{ title }</p>
              <small>{ description }</small>
              <a className={classNames("hover-underline")} href={ href }>{ refTitle }</a>
          </div>
      	</div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
