import React, { Component } from 'react'
import Header from '../components/header/Header'
import Greeting from './greeting/Greeting'
import Skills from './skills/Skills'
import StackProgress from './skillProgress/SkillProgress'
import Projects from './projects/Projects'
import StartupProject from './StartupProjects/StartupProject'
import Contact from './contact/Contact'
import Footer from '../components/footer/Footer'
import Top from './topbutton/Top'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Projects />
        <StartupProject />
        <Contact />
        <Footer />
        <Top />
      </div>
    )
  }
}
