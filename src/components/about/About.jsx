import './about.css';
import AboutImg from "../../assets/avatar-2.webp";
import Skills from './Skills';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={AboutImg} alt="Site author smiling in a close-up photo." className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! My name is Ben and I am a 3rd year Computer Science student studying at Washington State University in Pullman, WA. 
              I currently work at Schweitzer Engineering Laboratories as a Software Engineer Intern with professional experience in full-stack development and development tooling.
            </p>
            <p className="about__description">
              I am a passionate software developer with a background in customer service and project management. 
              Outside of work and school, I enjoy being connected to my culture and community through volunteering and organizing events with the student organizations I am involved in.
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