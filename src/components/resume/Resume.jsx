import './resume.css';
import Experience from './Experience.json'
import Card from './Card';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        
        <div className="timeline grid">
          <h2 className="timeline__header">Education</h2>
          {Experience.map((val,id)=>{
            if (val.category==="education"){
              return (
                <Card 
                key={id} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                gpa={val.gpa}
                city={val.city} 
                location={val.location}
                desc={val.desc}
                />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          <h2 className="timeline__header">Events</h2>
          {Experience.map((val,id)=>{
            if (val.category==="event"){
              return (
                <Card 
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                location={val.organization}
                city={val.location}
                desc={val.desc}/>
              )
            }
          })}
        </div>

        <div className="timeline grid">
          <h2 className="timeline__header">Non-Software Professional Experience</h2>
          {Experience.map((val,id)=>{
            if (val.category==="non-technical"){
              return (
                <Card 
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                location={val.location}
                city={val.city}
                desc={val.desc}/>
              )
            }
          })}
        </div>

        <div className="timeline grid">
          <h2 className="timeline__header">Student Organizations</h2>
          {Experience.map((val,id)=>{
            if (val.category==="organization"){
              return (
                <Card 
                key={id}
                icon={val.icon}
                title={val.title}
                year={val.year}
                location={val.organization}
                city={val.location}
                desc={val.desc}/>
              )
            }
          })}
        </div>

        
      </div>
    </section>
  )
}

export default Resume