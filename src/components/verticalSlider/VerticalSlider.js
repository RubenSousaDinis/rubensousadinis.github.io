import React from "react"

import classNames from "classnames"

import Dots from "./Dots"
import Slide from "./Slide"
import OverviewSlide from "./slides/OverviewSlide"
import AboutMeSlide from "./slides/AboutMeSlide"

import './verticalSlider.css'

export default class VerticalSlider extends React.Component {

    constructor(args){
        super(args)
        this.state = { active : 0, prevDotClick: -1 }

        const slides = [
            { title: "Portfolio", description:"Web Development passionate", href:"#/sports", refTitle:"Web Development passionate", background: "img/section_3.jpeg" },
            { title: "Contacts", description:"You can find me here", href:"#/rankings", refTitle:"Contacts", background: "img/section_4.jpeg" }
        ]

        this.slides = slides
        this.nSlides = 2
        this.slidesTitles = slides.map(slide => slide.title)

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
        if (!this.animating && this.props.selected) {
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

    handleKeyDown(e){
        if (e.which == 40)
            this.slideUp()
        else if (e.which == 38)
            this.slideDown()
    }

    render() {

        const { active, prevDotClick } = this.state
        const { selected } = this.props

        const slides = this.slides.map(
          (slide, i) => 
          <Slide key={i+1} {...slide} active={active==i} next={active==i-1} prevDotClick={prevDotClick==i} />
        )
        console.log(slides)

        return (
          <section id="vertical-slider" className={classNames({ selected })} >
            <OverviewSlide active={active==0} next={active==-1}  prevDotClick={prevDotClick==0}/>
            <AboutMeSlide active={active==1} next={active==0}  prevDotClick={prevDotClick==1}/>
            <Dots n={2} tooltipsData={this.slidesTitles} onDotClick={this.onDotClick.bind(this)} active={active} />
          </section>
        )
    }
}
