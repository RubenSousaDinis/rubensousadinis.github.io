import React from "react"
import classNames from "classnames"
import '../verticalSlider.css'
import { Header, Icon } from 'semantic-ui-react'
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
              <Header as='h1'>{ title }</Header>
              <a href={'https://www.linkedin.com/in/rúben-dinis-923159b2'} target='_blank' style={{textDecoration: 'none'}}>
                <Icon size='huge' name='linkedin square' />
              </a>
              <a href={'https://www.facebook.com/ruben.dinis.31'} target='_blank' style={{textDecoration: 'none'}}>
                <Icon size='huge' name='facebook' />
              </a>
              <a href={'https://www.instagram.com/ruben.sousa_dinis/'} target='_blank' style={{textDecoration: 'none'}}>
                <Icon size='huge' name='instagram' />
              </a>
              <a href={'mailto:ruben.sousa.dinis@gmail.com'} style={{textDecoration: 'none'}}>
                <Icon size='huge' name='mail' />
              </a>
              <a href={'https://medium.com/@ruben.sousa.dinis'} target='_blank' style={{textDecoration: 'none'}}>
                <Icon size='huge' name='medium' />
              </a>
            </div>
        </div>
        <div className={classNames("icon-scroll")} ></div>
      </section>
    )
  }
}
