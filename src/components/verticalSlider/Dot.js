import React from "react"
import classNames from "classnames"
import "./verticalSlider.css"

export default class Dot extends React.Component {

    render() {
        const { active, hoverText, onClick } = this.props
        return (
          <div className={classNames("dot", { active } ) } onClick={onClick}>
          	<span />
          	<div className={classNames("hover")} >{ hoverText }</div>
          </div>
        )
    }
}
