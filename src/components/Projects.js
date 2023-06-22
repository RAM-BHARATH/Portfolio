import { useState } from "react";

export default function Projects() {
    // let totalItems = 9;
    const projects = [
        // {
        //     name:'Local Library',
        //     source:'https://github.com/RAM-BHARATH/local-library',
        //     live:'' // https://local-library-01.herokuapp.com/catalog
        // },
        {
            name:'Dear Diary',
            source:'https://github.com/RAM-BHARATH/dear-diary',
            live:'https://dear-diary.onrender.com/diary',
            techStack: ['Express.js', 'Pug', 'MongoDB']
        },
        {
            name:'Shopping Cart',
            source:'https://github.com/RAM-BHARATH/shopping-cart/',
            live:'https://ram-bharath.github.io/shopping-cart',
            techStack: ['React.js']
        },
        {
            name:'Memory Card',
            source:'https://github.com/RAM-BHARATH/memory-card',
            live:'https://ram-bharath.github.io/memory-card/',
            techStack: ['React.js']
        },
        {
            name:'Weather App',
            source:'https://github.com/RAM-BHARATH/weather-app',
            live:'https://ram-bharath.github.io/weather-app/',
            techStack: ['HTML/CSS', 'API']
        },
        {
            name:'Genio 2k22',
            source:'https://github.com/RAM-BHARATH/genio2k22',
            live:'https://genio2k22.netlify.app', ///https://www.genio2k22.com
            techStack: ['React.js']
        },
        {
            name:'Markdown Previewer',
            source:'https://github.com/RAM-BHARATH/markdown-previewer',
            live:'https://markdown-previewer-01.herokuapp.com/',
            techStack: ['React.js']
        },
        {
            name:'Ekna 2k22',
            source:'https://github.com/RAM-BHARATH/ekna2k22',
            live:'https://ekna2k22.netlify.app', ///https://www.genio2k22.com
            techStack: 'React.js'
        },
    ]
    // const [active, setActive] = useState(0);
    // const [left, setLeft] = useState((totalItems-active-1)%totalItems);
    // const [right, setRight] = useState((active+1)%totalItems);
    // const changeCarouselActive = (direction) =>{
        
    //     if(direction==='next'){
    //             setLeft(active%totalItems);
    //             setActive((active+1)%totalItems);
    //             setRight((active+2)%totalItems);
    //             console.log('Next: ',left, active, right);
    //     }else if(direction==='prev'){
    //         setRight(active%totalItems);
    //         setActive(left%totalItems);
    //         setLeft((left-1+totalItems)%totalItems);
    //         console.log('Prev: ',left, active, right);
    //     }
    // }
    return(
        // <div className="carousel-whole-container" id="works">
        //     <div className="carousel-container">
        //         {projects.map((project, index)=>{
        //             return(
        //                 <div key={index} className={`carousel-item ${active===index?'carousel-active':''} ${left===index?'carousel-active-left':''} ${right===index?'carousel-active-right':''} ${(active===index||left===index||right===index)?'':'carousel-back'}` } id="1">
        //                     <div className="">
        //                         {project.name}
        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        //     <div className="button-group">
        //         <button onClick={()=>changeCarouselActive('prev')}>Prev</button>
        //         <a href={projects[active].source}>Source</a>
        //         {(projects[active].live != '') && <a href={projects[active].live}>Live</a>}
        //         <button onClick={()=>changeCarouselActive('next')}>Next</button>
        //     </div>
        // </div>
        <div className="works-outer-div works" id="works">
            {/* To be updated */}
            <h2 className="works-head">Works</h2>
            <div className="projects-container">
                <div className="project">
                    <img src={process.env.PUBLIC_URL + "/images/projects/dear-diary.png"} className="proj-ss"/>
                    <div className="content">
                        <div className="project-title">
                            {projects[0].name}
                        </div>
                        <div className="tech-stack">
                        {projects[0].techStack.map((tech, index)=> <span>{tech}</span>)}
                        </div>
                        <div className="description">
                            <p className="desc">
                                A webapp that let's you store whatever text content you want and it can be grouped into categories...
                            </p>
                        </div>
                        <div className="project-links">
                            <span>
                                <a href={projects[0].source} target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/images/assets/github.svg"}/>
                                </a>
                            </span>
                            <span>
                                <a href={projects[0].live} target="_blank">
                                    <img src={process.env.PUBLIC_URL + "/images/assets/live.svg"}/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="project">
                <img src={process.env.PUBLIC_URL + "/images/projects/dear-diary.png"}/>
                <div className="content">
                    <div className="tech-stack">

                    </div>
                    <div className="description">

                    </div>
                </div>
            </div> */}
        </div>
    );
}