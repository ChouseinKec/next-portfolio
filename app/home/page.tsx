// Components
import Navbar from '../../components/navbar/navbar'

import Banner from './banner/banner';
import About from './about/about';
import Timeline from './timeline/timeline';
import Skills from './skills/skills';

import './global.css';

export default function Home() {

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <a href='#about'>About Me</a>
        <a href='#timeline'>Timeline</a>
        <a href='#skills'>Skills</a>
      </Navbar>

      {/* Banner */}
      < Banner />

      {/* Placeholder */}
      <div className={'placeholder'} />

      {/* About */}
      <About />

      {/* Timeline */}
      <Timeline />

      {/* Skills */}
      <Skills />

    </>
  )


}
