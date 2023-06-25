import Project from "./Project";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, Keyboard } from "swiper";


export default function Projects() {
    // let totalItems = 9;
    const projects = [
        // {
        //     name:'Local Library',
        //     source:'https://github.com/RAM-BHARATH/local-library',
        //     live:'' // https://local-library-01.herokuapp.com/catalog
        // },
        {
            name:'News Tracker Application',
            source:'https://github.com/RAM-BHARATH/news-tracker-app',
            // live:'https://markdown-previewer-01.herokuapp.com/',
            techStack: ['Flask', 'NewsAPI', 'Docker', 'Kubernetes', 'Auth0', 'CSS'],
            imgSrc: '',
            desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories..."
        },
        {
            name:'Dear Diary',
            source:'https://github.com/RAM-BHARATH/dear-diary',
            live:'https://dear-diary.onrender.com/diary',
            techStack: ['Express.js', 'Pug', 'MongoDB', 'CSS'],
            imgSrc: '/images/projects/dear-diary.png',
            desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories...",

        },
        {
            name:'Ekna 2k22',
            source:'https://github.com/RAM-BHARATH/ekna2k22',
            live:'https://ekna2k22.netlify.app', ///https://www.genio2k22.com
            techStack: ['React.js', 'CSS', 'TailwindCSS'],
            imgSrc: '/images/projects/ekna2k22.png',
            desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories..."
        },
        {
            name:'Genio 2k22',
            source:'https://github.com/RAM-BHARATH/genio2k22',
            live:'https://genio2k22.netlify.app', ///https://www.genio2k22.com
            techStack: ['React.js', 'CSS', 'Bootstrap'],
            imgSrc: '',
            desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories..."
        },
        // {
        //     name:'Memory Card',
        //     source:'https://github.com/RAM-BHARATH/memory-card',
        //     live:'https://ram-bharath.github.io/memory-card/',
        //     techStack: ['React.js'],
        //     imgSrc: '',
        //     desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories..."
        // },
        // {
        //     name:'Weather App',
        //     source:'https://github.com/RAM-BHARATH/weather-app',
        //     live:'https://ram-bharath.github.io/weather-app/',
        //     techStack: ['HTML/CSS', 'API'],
        //     imgSrc: '',
        //     desc: "An app that gets the currrent weather from OpenWeather API and displays it.. "
        // },
        {
            name:'Shopping Cart',
            source:'https://github.com/RAM-BHARATH/shopping-cart/',
            live:'https://ram-bharath.github.io/shopping-cart',
            techStack: ['React.js'],
            imgSrc: '',
            desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories..."
        },
        {
            name:'Markdown Previewer',
            source:'https://github.com/RAM-BHARATH/markdown-previewer',
            live:'https://markdown-previewer-01.herokuapp.com/',
            techStack: ['React.js'],
            imgSrc: '',
            desc: "A webapp that let's you store whatever text content you want and it can be grouped into categories..."
        },
    ]
    return(
        <div className="works-outer-div works" id="works">
            {/* To be updated */}
            <h2 className="works-head">Works</h2>
            <div className="projects-container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    // navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation, Keyboard]}
                    className="swiper"
                >
                    {
                        projects.map(
                            (project, index) => 
                                (
                                    <SwiperSlide key={project.name} className="swiper-slide">
                                        <Project key={index} project={project}/>
                                    </SwiperSlide>
                                )
                        )
                    }
                    {/* <div className="project">
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
                    </div> */}
                </Swiper>
            </div>
        </div>
    );
}