import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import classNames from "classnames"
import { Header } from 'semantic-ui-react'
import './verticalSlider/verticalSlider.css'
import background from '../img/not_found.jpeg'

export default class PageNotFound extends Component {
  render() {
    const active = true
    return (
      <div id="wrapper">
        <section id="vertical-slider" className={classNames( 'selected')} >
         <section className={classNames("slide", { active } )} >
            <picture style={ { backgroundImage: "url(" + background + ")" } } />
            <div>
              <div className={classNames('content-div')}>
                <Header as='h1'>{ 'Are you lost?' }</Header>
                <Link to={'/'}>
                  Back to Homepage
                </Link>
              </div>
            </div>
          </section>
        </section>
        </div>
    )
  }
}
