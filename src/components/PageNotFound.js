import React, { Component } from 'react';
import classNames from "classnames"
import { Header } from 'semantic-ui-react'
import './verticalSlider/verticalSlider.css'
import background from '../img/not_found.jpeg'

export default class PageNotFound extends Component {
  render() {
    return (
      <div id="wrapper">
        <section id="vertical-slider" className={classNames( 'selected')} >
         <section className={classNames("slide") } >
            <picture style={ { backgroundImage: "url(" + background + ")" } } />
            <div>
              <div className={classNames('content-div')}>
                <Header as='h1'>{ 'Not Found' }</Header>
                <p>
                  {"I’m a Full Stack Web Developer. Currently, I work at Runtime Revolution. I love to travel, you can check some of my adventures "} 
                  here. 
                  {" I’m also passionate with sports, I’ve a workout routine, which is composed by gym activities, soccer and some runs (I’ve already run an half-marathon). In my free time I like to go out with friends, learn new stuff and support my favourite soccer team, you can check some pics "} 
                  here.
                </p>
              </div>
            </div>
          </section>
        </section>
        </div>  
    )
  }
}
