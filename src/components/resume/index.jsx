import React from "react"
import './main.css'
import logo from '../../img/foto_perfil.jpg'
import Skills from './skills'

export default class Dots extends React.Component {

  render() {
    const mainSkills = [
      { type: "Ruby", level: 100 },
      { type: "Rails", level: 100 },
      { type: "Javascript", level: 80 },
      { type: "React", level: 80 },
      { type: "CSS", level: 80 },
      { type: "HTML", level: 80 },
      { type: "Python", level: 75 },
      { type: "Django", level: 70 },
    ]
    const secondarySkills = [
      { type: "Heroku", level: 100 },
      { type: "Cloudflare", level: 70 },
      { type: "AWS", level: 60 },
      { type: "React Native", level: 60 },
      { type: "Ember", level: 50 },
      { type: "Docker", level: 50 },
      { type: "Jenkins", level: 50 },
      { type: "CircleCI", level: 50 },
    ]
    return (
      <div>
        <div class="container header-contianer">
          <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 header-left">
            <h1>Rúben Dinis</h1>
            <h3>Team Leader and FullStack Web Developer</h3>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 header-right">
            <ul class="icons no-print">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/RubenSousaDinis" class="button button--sacnite button--round-l">
                  <i class="fa fa-github" title="Github link"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rúben-dinis-923159b2" class="button button--sacnite button--round-l">
                  <i class="fa fa-linkedin" title="Linkedin link"></i>
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ruben.sousa.dinis" class="button button--sacnite button--round-l">
                  <i class="fa fa-medium" title="Medium link"></i>
                </a>
              </li>
            </ul>
            <p>
              Email: <a href="mailto:ruben.sousa.dinis@gmail.com" target="_blank" rel="noopener noreferrer">ruben.sousa.dinis@gmail.com</a>
            </p>
            <p>
              Web: <a href="https://rubensousadinis.github.io/" target="_blank" rel="noopener noreferrer">rubensousadinis.github.io</a>
            </p>
          </div>
        </div>
      </div>
      <main class="page-content" aria-label="Content">
        <div class="wrapper">
          <div class="container intro-container">
            <h2 className="text-center dashed pb-2">About Me</h2>
            <div class="row clearfix">
              <div class="col-xs-12 col-sm-4 col-md-3 no-print">
                <span class="profile-img" style={ { backgroundImage: "url(" + logo + ")" } }></span>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-9 col-print-12 details">
                <p>My name’s Rúben and I’m a senior full stack web developer. 
                  As well as developing web applications I also have experience managing and leading projects. 
                  I have worked at a number of companies gaining teamwork and leadership skills.</p>
              </div>
            </div>
          </div>
          <div class="container experience-container">
            <h2 className="text-center dashed pb-2">Skills</h2>
            <div class="row clearfix layout layout-left mb-3">
              <div class="col-xs-12 col-sm-6 col-md-6 col-print-6 details">
                <Skills skills={mainSkills}/>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-print-6 details">
                <Skills skills={secondarySkills}/>
              </div>
            </div>
          </div>
          <div class="container experience-container">
            <h2 className="text-center dashed pb-2">Experience</h2>
            <div class="row clearfix layout layout-left mb-3">
              <div class="col-xs-12 col-sm-4 col-md-3 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">Runtime Revolution</h2>
                <a href="https://www.runtime-revolution.com/" target="_blank" rel="noopener noreferrer" class="link">runtime-revolution.com</a>
                <p><b>Team Leader and Full Stack Web Developer</b></p>
                <p>October 2016 - Present</p>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-9 col-print-12 details">
                <p class="quote">Helping clients get their ideas into awesome web applications</p>
                <p>I play my role developing web and mobile applications. I also helped by leading and managing some projects. I've used many technologies, the main one's were: <mark>Rails</mark> - <mark>Django</mark> - <mark>React</mark></p>
              </div>
            </div>
            <div class="row clearfix layout layout-left">
              <div class="col-xs-12 col-sm-4 col-md-3 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">Affinity (Vodafone One Net)</h2>
                <a href="https://affinity.pt" target="_blank" rel="noopener noreferrer" class="link">affinity.pt</a>
                <br></br>
                <a href="https://onenet.vodafone.com" target="_blank" rel="noopener noreferrer" class="link">onenet.vodafone.com</a>
                <p><b>Test Automator</b></p>
                <p>July 2015 - October 2016</p>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-9 col-print-12 details">
                <p class="quote">Vodafone One Net combines the flexibility of mobile communication with the benefits of a telephone system.</p>
                <p>I play my part developing scripts and small applications in <mark>Ruby</mark> and <mark>Java</mark> to help automate product testing. I've also developed data migration scripts and shell scripts.</p>
              </div>
            </div>
          </div>
          <div class="container projects-container">
            <h2 className="text-center dashed pb-2">Projects</h2>
            <div class="row clearfix layout layout-top-middle">
              <div class="col-xs-12 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">Team Maker</h2>
                <a href="https://github.com/team-maker" target="_blank" rel="noopener noreferrer" class="link">github.com/team-maker</a>
                <p class="no-print">
                  <a href="https://github.com/team-maker" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github" title="Team Maker Link"></i>
                  </a>
                </p>
              </div>
              <div class="col-xs-12 col-print-12 details">
                <p class="quote">
                  Join your friends, create your rules and compete between them in your own league
                </p>
                <p>I started this project as a way of dive deeper in the concepts of <mark>Django</mark> and <mark>React</mark>. It's still in the beginning but I’m very proud of having this in my portfolio.</p>
              </div>
            </div>
            <div class="row clearfix layout layout-top-middle">
              <div class="col-xs-12 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">My Personal Website</h2>
                <a href="https://github.com/RubenSousaDinis/rubensousadinis.github.io" target="_blank" rel="noopener noreferrer" class="link text-break">github.com/RubenSousaDinis/rubensousadinis.github.io</a>
                <p class="no-print">
                  <a href="https://github.com/RubenSousaDinis/rubensousadinis.github.io" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github" title="My Website Link"></i>
                  </a>
                </p>
              </div>
              <div class="col-xs-12 col-print-12 details">
                <p class="quote">
                  My personal Website
                </p>
                <p>I made my website and this resume using <mark>React</mark>. You can give it an eye and fell free to replicate it for you own website.</p>
              </div>
            </div>
            <div class="row clearfix layout layout-top-middle">
              <div class="col-xs-12 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">Real Time Chat</h2>
                <a href="https://github.com/RubenSousaDinis/real-time-chat-api" target="_blank" rel="noopener noreferrer" class="link">API Repository</a>
                <p class="no-print">
                  <a href="https://github.com/RubenSousaDinis/real-time-chat-api" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github" title="My Website Link"></i>
                  </a>
                </p>
                <br/>
                <a href="https://github.com/RubenSousaDinis/real-time-chat-frontend" target="_blank" rel="noopener noreferrer" class="link">Frontend Repository</a>
                <p class="no-print">
                  <a href="https://github.com/RubenSousaDinis/real-time-chat-frontend" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-github" title="My Website Link"></i>
                  </a>
                </p>
              </div>
              <div class="col-xs-12 col-print-12 details">
                <p class="quote">
                  A Simple Real Time Chat with Django Channels and React
                </p>
                <p>
                  I made this tutorial to explain how to integrate a Websocket client with <mark>Django Channels</mark>. You can check it the post <a href="https://revs.runtime-revolution.com/a-simple-real-time-chat-with-django-channels-and-react-b73edc3a79f2" target="_blank" rel="noopener noreferrer">here.</a> Fell free to clap it too!
                </p>
              </div>
            </div>
          </div>
          <div class="container publications-container">
            <h2 className="text-center dashed pb-2">Publications</h2>
            <div class="row clearfix layout layout-top-middle">
              <div class="col-xs-12 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">A Simple Real Time Chat with Django Channels and React</h2>
                <a href="https://revs.runtime-revolution.com/a-simple-real-time-chat-with-django-channels-and-react-b73edc3a79f2" target="_blank" rel="noopener noreferrer" class="link">Check Here</a>
                <p class="no-print">
                  <a href="https://revs.runtime-revolution.com/a-simple-real-time-chat-with-django-channels-and-react-b73edc3a79f2" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-medium" title="A Simple Real Time Chat with Django Channels and React Link"></i>
                  </a>
                </p>
              </div>
            </div>
            <div class="row clearfix layout layout-top-middle">
              <div class="col-xs-12 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">Deploy your Rails app with Capistrano</h2>
                <a href="https://revs.runtime-revolution.com/deploy-your-rails-app-with-capistrano-5ad5d58e9b07" target="_blank" rel="noopener noreferrer" class="link">Check Here</a>
                <p class="no-print">
                  <a href="https://revs.runtime-revolution.com/deploy-your-rails-app-with-capistrano-5ad5d58e9b07" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-medium" title="Deploy your rails App with Capistrano Link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="container education-container">
            <h2 className="text-center dashed pb-2">Education</h2>
            <div class="row clearfix layout layout-left">
              <div class="col-xs-12 col-sm-4 col-md-3 col-print-12 details">
                <h2 className="mb-0 font-weight-bold">Instituto Superior Técnico</h2>
                <p><b>BSc Computer Science</b></p>
                <p>2012 - 2015</p>
              </div>
              <div class="col-xs-12 col-sm-8 col-md-9 col-print-12">
                <p class="quote">Founded on 23rd May 1911, IST is one of the greateast University in Portugal</p>
                <p>During my time at IST I learnt most of my key skills that I have taken through my career such as teamwork and working to tight deadlines. I thouroughly enjoyed my time as university, learnt a lot about and gained lots of great experiences</p>
              </div>
            </div>
          </div>
          <div class="container more-container">
            <h2 className="text-center dashed pb-2">A Little More About Me</h2>
            <div class="row clearfix">
              <div class="col-md-12">
                <p>Alongside my interests in software engineering and leading teams some of my other interests and hobbies are:</p>
                <ul>
                  <li>Hit the gym</li>
                  <li>Play Soccer</li>
                  <li>Walk my dog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  }
}
