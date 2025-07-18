import './about.css';
import AboutImg from "../../assets/avatar-2.webp";
import Skills from './Skills';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! My name is Ben and I am a 3rd year Computer Science student studying at Washington State University in Pullman, WA.
              I have personal and academic experience in full-stack development and machine learning, as can be seen in my <a href="#portfolio">personal projects</a>!
              I am a bold and spirited developer with a great work ethic and eye for fine detail!
            </p>
            <a href="src\assets\Metzger-Ben__Resume.pdf" className="btn" download>Download CV</a>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  )
}

export default About