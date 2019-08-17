import React from "react"
import SkillBar from 'react-skillbars';
import './main.css'

export default class Skills extends React.Component {

  render() {
    const  { skills } = this.props;
    return (
      <SkillBar skills={skills}/>
    )
  }
}
