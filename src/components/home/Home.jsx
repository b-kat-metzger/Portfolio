import './home.css';
import Me from '../../assets/avatar-1.webp';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Ben Metzger</h1>
        <span className="home__education">3rd year Computer Science major @ Washington State University</span>
        <HeaderSocials />

        <a href="#contact" className="btn">Get in Contact!</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home