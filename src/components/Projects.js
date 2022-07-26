import { useState } from "react";

export default function Projects() {
    let totalItems = 8;
    const projects = [
        {
            name:'Local Library',
            source:'https://github.com/RAM-BHARATH/local-library',
            live:'https://local-library-01.herokuapp.com/catalog'
        },
        {
            name:'Shopping Cart',
            source:'https://github.com/RAM-BHARATH/shopping-cart/',
            live:'https://ram-bharath.github.io/shopping-cart'
        },
        {
            name:'Memory Card',
            source:'https://github.com/RAM-BHARATH/memory-card',
            live:'https://ram-bharath.github.io/memory-card/'
        },
        {
            name:'Weather App',
            source:'https://github.com/RAM-BHARATH/weather-app',
            live:'https://ram-bharath.github.io/weather-app/'
        },
        {
            name:'Genio 2k22',
            source:'https://github.com/RAM-BHARATH/genio2k22',
            live:'www.genio2k22.com'
        },
        {
            name:'Markdown Previewer',
            source:'https://github.com/RAM-BHARATH/markdown-previewer',
            live:'https://markdown-previewer-01.herokuapp.com/'
        },
        {
            name:'Etch-a-sketch',
            source:'https://github.com/RAM-BHARATH/etch-a-sketch',
            live:'https://ram-bharath.github.io/etch-a-sketch'
        },
        {
            name:'Pomodoro Timer',
            source:'https://github.com/RAM-BHARATH/pomodoro-timer',
            live:'https://ram-bharath.github.io/pomodoro-timer'
        },
    ]
    const [active, setActive] = useState(0);
    const [left, setLeft] = useState((totalItems-active-1)%totalItems);
    const [right, setRight] = useState((active+1)%totalItems);
    const changeCarouselActive = (direction) =>{
        
        if(direction==='next'){
                setLeft(active%totalItems);
                setActive((active+1)%totalItems);
                setRight((active+2)%totalItems);
                console.log('Next: ',left, active, right);
        }else if(direction==='prev'){
            setRight(active%totalItems);
            setActive(left%totalItems);
            setLeft((left-1+totalItems)%totalItems);
            console.log('Prev: ',left, active, right);
        }
    }
    return(
        <div className="carousel-whole-container">
            <div className="carousel-container">
                {projects.map((project, index)=>{
                    return(
                        <div className={`carousel-item ${active===index?'carousel-active':''} ${left===index?'carousel-active-left':''} ${right===index?'carousel-active-right':''} ${(active===index||left===index||right===index)?'':'carousel-back'}` } id="1">
                            {project.name}
                        </div>
                    )
                })}
                {/* <div className={`carousel-item ${active===0?'carousel-active':''} ${left===0?'carousel-active-left':''} ${right===0?'carousel-active-right':''} ${(active===0||left===0||right===0)?'':'carousel-back'}` } id="1">
                    Item 1
                </div>
                <div className={`carousel-item ${active===1?'carousel-active':''} ${left===1?'carousel-active-left':''} ${right===1?'carousel-active-right':''} ${(active===1||left===1||right===1)?'':'carousel-back'}`} id="2">
                    Item 2
                </div>
                <div className={`carousel-item ${active===2?'carousel-active':''} ${left===2?'carousel-active-left':''} ${right===2?'carousel-active-right':''} ${(active===2||left===2||right===2)?'':'carousel-back'}`} id="3">
                    Item 3
                </div>
                <div className={`carousel-item ${active===3?'carousel-active':''} ${left===3?'carousel-active-left':''} ${right===3?'carousel-active-right':''} ${(active===3||left===3||right===3)?'':'carousel-back'}`} id='4'>
                    Item 4
                </div>
                <div className={`carousel-item ${active===4?'carousel-active':''} ${left===4?'carousel-active-left':''} ${right===4?'carousel-active-right':''} ${(active===4||left===4||right===4)?'':'carousel-back'}`} id='5'>
                    Item 5
                </div>
                <div className={`carousel-item ${active===5?'carousel-active':''} ${left===5?'carousel-active-left':''} ${right===5?'carousel-active-right':''} ${(active===5||left===5||right===5)?'':'carousel-back'}`} id='6'>
                    Item 6
                </div>
                <div className={`carousel-item ${active===6?'carousel-active':''} ${left===6?'carousel-active-left':''} ${right===6?'carousel-active-right':''} ${(active===6||left===6||right===6)?'':'carousel-back'}`} id='7'>
                    Item 7
                </div>
                <div className={`carousel-item ${active===7?'carousel-active':''} ${left===7?'carousel-active-left':''} ${right===7?'carousel-active-right':''} ${(active===7||left===7||right===7)?'':'carousel-back'}`} id='8'>
                    Item 8
                </div> */}
            </div>
            <div className="button-group">
                <button onClick={()=>changeCarouselActive('prev')}>Prev</button>
                <a href={projects[active].source}>Source</a>
                <a href={projects[active].live}>Live</a>
                <button onClick={()=>changeCarouselActive('next')}>Next</button>
            </div>
        </div>
    );
}