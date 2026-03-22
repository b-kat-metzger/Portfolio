const Skills = () => {
  return (
    <div className="skills__container grid">
        <div className="row">
            <div className="skill__box">
                <i className="fa-brands fa-react skill__icon"></i>
                    <div>
                        <h3 className="skill__title">React</h3>
                        <span className="skill__description">Used extensively in personal, academic, and professional  projects for building
                            responsive applications. Professionally, I use TypeScript and MobX for state management and static type checking.
                        </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-python skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Python</h3>
                        <span className="skill__description">Used in machine learning projects with pandas, numpy, and scikit-learn, 
                            as a backend framework with a MVC architecture framework in Django, as a simple REST API service with Flask,
                            and for creating scripts to interface with existing tools at my internship. </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-typescript skill__icon"></i>
                    <div>
                        <h3 className="skill__title">TypeScript</h3>
                        <span className="skill__description">I use TypeScript for type-safety in both personal and professional projects.
                            Static typing makes frontend error handling, debugging, and code reviewing much easier and more effective.
                        </span>
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
                <i className="fa-brands fa-docker skill__icon"></i>
                    <div>
                        <h3 className="skill__title">Docker</h3>
                        <span className="skill__description">I use Docker in professional, academic, and personal projects to create containerized apps through Dockerfiles and docker-compose.
                            I've also used Docker to create a Linux distribution which has development tools pre-installed and configured for my internship.
                            I also use Docker with other tools like Jenkins and Tilt to automate development workflows. 
                        </span>
                    </div>
            </div>
            <div className="skill__box">
                <i className="fa-solid fa-c skill__icon__dual"></i>
                <i className="fa-solid fa-hashtag skill__icon__dual"></i>
                    <div>
                        <h3 className="skill__title">Dotnet</h3>
                        <span className="skill__description">Used professionally with the ASPNET Core MVC framework to build REST APIs and web applications.
                            The XUnit testing framework enables me to write unit and integration tests for my applicaitons to ensure code quality and reliability.
                        </span>
                    </div>
            </div>
            
        {/* </div> */}
        {/* <div className"row"> */}
            <div className="skill__box">
                <i className="fa-solid fa-database skill__icon"></i>
                <div>
                    <h3 className="skill__title">SQL</h3>
                    <span className="skill__description">Peronal and academic Experience using Postgres to store large datasets to use with machine learning
                        algorithms
                    </span>
                </div>
            </div>
            <div className="skill__box">
                <i className="fa-solid fa-c skill__icon"></i>
                <div>
                    <h3 className="skill__title">C/C++</h3>
                    <span className="skill__description">I use C and CPP professionally and academically to build performance-critical applications in environments that handle thousands of packets per second.
                    </span>
                </div>
            </div>
            <div className="skill__box">
                <i className="fa-brands fa-kubernetes skill__icon"></i>
                <div>
                    <h3 className="skill__title">Kubernetes</h3>
                    <span className="skill__description">
                        I use Kubernetes professionally with k3s to create local development clusters to create and test containerized applications.
                        Using Helm charts, applications can easily be packaged and deployed for cross-repo deployment and testing.
                    </span>
                </div>
            </div>
            
            <div className="skill__box">
                <i className="fa-brands fa-claude skill__icon"></i>
                    <div>
                        <h3 className="skill__title">AI Tooling</h3>
                        <span className="skill__description">In our increasingly AI-driven industry, I leverage agentic agents to increase productivity, brainstorm architectural/design ideas, and review code before 
                            ever submitting pull requests. AI is here to stay, and I am always up-to-date on professional practices for using AI tools effectively and safely. 
                        </span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills