export default function Project({project}) {
    return(
        <div className="project">
            <img src={process.env.PUBLIC_URL + (project.imgSrc? project.imgSrc : '/images/projects/default.png')} className="proj-ss"/>
            <div className="content">
                <div className="project-title">
                    {project.name}
                </div>
                <div className="tech-stack">
                {project.techStack.map((tech, index)=> <span key={index}>{tech}</span>)}
                </div>
                <div className="description">
                    <p className="desc">
                        {project.desc}
                    </p>
                </div>
                <div className="project-links">
                    <span>
                        <a href={project.source} target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/assets/github.svg"}/>
                        </a>
                    </span>
                    {project.live && (
                        <span>
                            <a href={project.live} target="_blank">
                                <img src={process.env.PUBLIC_URL + "/images/assets/live.svg"}/>
                            </a>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}