const Skills = () => {
  return (
    <div className="skills__container grid">
        <div className="row">
            <div className="skill__box">
                <i className="fa-brands fa-react skill__icon"></i>
                    <div>
                        <h3 className="skill__title">React</h3>
                        <span className="skill__description">Used extensively in personal and school projects for building
                            both Single-Page Applications and Multi-Page Applications.
                        </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-python skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Python</h3>
                        <span className="skill__description">Used in machine learning projects with pandas, numpy, and scikit-learn 
                            and as a backend framework with a MVC architecture framework in Django and simple REST API service with Flask</span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-github skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Git/GH Actions</h3>
                        <span className="skill__description">Version control is a neccesity for developers and I have a lot of experience
                            using the Git CLI. I also leverage GitHub actions with my GitHub repositories to facilitate CI/CD workflows through
                            automated testing and branch merging. 
                        </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-solid fa-wind skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Tailwind</h3>
                        <span className="skill__description">I've used both Tailwind and Bootstrap for rapid styling of UI components. This rapid development 
                            has helped me a lot when I am under a time constraint, such as for Hackathons.
                        </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-golang skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Golang</h3>
                        <span className="skill__description">Used for a microservice architecture backend. I really enjoy
                            using Go because of its robust memory safety/handling and high-speed processing
                        </span>
                    </div>
            </div>
        {/* </div> */}
        {/* <div className="row"> */}
            <div className="skill__box">
                <i className="fa-solid fa-database skill__icon"></i>
                <div>
                    <h3 className="skill__title">SQL</h3>
                    <span className="skill__description">Experience using Postgres to store large datasets to use with machine learning
                        algorithms
                    </span>
                </div>
            </div>
            <div className="skill__box">
                <i className="fa-solid fa-c skill__icon"></i>
                <div>
                    <h3 className="skill__title">C/C++</h3>
                    <span className="skill__description">C and C++ are the primary languages used in my coursework. I have created many academic projects
                        in both languages and am comfortable with pointers and memory safety in these languages.
                    </span>
                </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-java skill__icon"></i>
                <div>
                    <h3 className="skill__title">Java</h3>
                    <span className="skill__description">I have used Java for some school projects and have a good understanding of the Object Oriented
                        Principles and testing with JUnit, but have not used Spring Boot or worked with concurrency in Java yet.
                    </span>
                </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-docker skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Docker</h3>
                        <span className="skill__description">I've used Docker in both school projects and for a personal project.
                            Although my projects have not been in the scope where containerization would be beneficial, I have experience
                            using Docker to create highly-scalable and compatible workspaces.
                        </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-figma skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Figma</h3>
                        <span className="skill__description">I utilize Figma to create mockups of my UI before I write a singe line of code.
                            Having a sketch of my layout helps me create my css styling much quicker. I can also share these designs with other 
                            developers or stakeholders to get easy feedback and validation before spending time on implementation.
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills