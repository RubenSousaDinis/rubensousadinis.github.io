import React from "react"

import classNames from "classnames"

import Dots from "./Dots"
import OverviewSlide from "./slides/OverviewSlide"
import AboutMeSlide from "./slides/AboutMeSlide"
import CurrentJobSlide from "./slides/CurrentJobSlide"
import ContactSlide from "./slides/ContactSlide"

import './verticalSlider.css'

export default class MainSlider extends React.Component {

    constructor(args){
      super(args)
      this.state = { active : 0, prevDotClick: -1 }

      this.selected = true

      this.slidesTitles = [
        'Presentation Initial', 
        'About Me',
        'Runtime Revolution',
        'Contacts'
      ]
      this.nSlides = this.slidesTitles.length

      document.addEventListener('wheel', this.handleWheel.bind(this));
      document.addEventListener('touchstart', this.handleTouchStart.bind(this));
      document.addEventListener('touchend', this.handleTouchEnd.bind(this));
      window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleWheel(e){
      const deltaY = e.deltaY
      if(deltaY > 0) {
        this.slideUp()
      }
      else {
        this.slideDown()
      }
    }

    handleTouchStart(e){
      this.ts = e.touches[0].clientY;
    }

    handleTouchEnd(e){
      var te = e.changedTouches[0].clientY;
      if(this.ts > te+5) {
        this.slideUp()
      }
      else if(this.ts < te-5) {
        this.slideDown()
      }
    }

    slideUp(){
      const active = this.state.active
      if (active < this.nSlides - 1) {
        this.setActiveSlide(active + 1)
      }
    }

    slideDown(){
      const active = this.state.active
      if (active > 0) {
        this.setActiveSlide(active - 1)
      }
    }

    setActiveSlide(active, prevDotClick = -1){
      if (!this.animating && this.selected) {
        this.animating = true
        this.setState({ active, prevDotClick }, this.animationEnd.bind(this) )
      }
    }

    animationEnd(){
      setTimeout( () => this.animating = false, 1000 )
    }

    onDotClick(dotNumber){
      const active = this.state.active
      if (active > dotNumber - 1)
        this.setActiveSlide(dotNumber, active)
      else
        this.setActiveSlide(dotNumber, active)
    }

    handleKeyDown(e) {
      if (e.which === 40)
        this.slideUp()
      else if (e.which === 38)
        this.slideDown()
    }

    render() {
      const { active, prevDotClick } = this.state
      const selected = this.selected

      return (
        <div id="wrapper">
          <section id="vertical-slider" className={classNames({ selected })} >
            <OverviewSlide active={active===0} next={active===-1}  prevDotClick={prevDotClick===0}/>
            <AboutMeSlide active={active===1} next={active===0}  prevDotClick={prevDotClick===1}/>
            <CurrentJobSlide active={active===2} next={active===1}  prevDotClick={prevDotClick===2}/>
            <ContactSlide active={active===3} next={active===2}  prevDotClick={prevDotClick===3}/>
            <Dots n={this.nSlides} tooltipsData={this.slidesTitles} onDotClick={this.onDotClick.bind(this)} active={active} />
          </section>
        </div>
      )
    }
}
