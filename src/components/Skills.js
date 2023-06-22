export default function Skills() {
    return(
        <div className="skills" id="skills">
            <h2>Skills</h2>
            <div className="frontend">
                <h3>Frontend</h3>
                <div className="skills-container">
                    <div className="box">
                        <img src="/images/html5.svg"  loading="lazy" alt="HTML5"/>
                    </div>
                    <div className="box">
                        <img src="/images/css3.svg"  loading="lazy" alt="CSS3" />
                    </div>
                    <div className="box">
                        <img src="/images/javascript.svg"  loading="lazy" alt="JavaScript" />
                    </div>
                    <div className="box">
                        <img src="/images/react.svg"  loading="lazy" alt="ReactJS" />
                    </div>
                    <div className="box">
                        <img src="/images/bootstrap.svg"  loading="lazy" alt="Bootstrap" />
                    </div>
                    <div className="box">
                        <img src="/images/tailwindcss.svg"  loading="lazy" alt="TailwindCSS" />
                    </div>
                </div>
            </div>
            <div className="backend">
                <h3>Backend</h3>
                <div className="skills-container">
                    <div className="box">
                        <img src="/images/node-js.svg" alt="" />
                    </div>
                    <div className="box express-center">
                        <img src="/images/expressjs.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="/images/php.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="/images/mongo.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="/images/postgresql.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="/images/mysql.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="other">
                <h3>Other</h3>
                <div className="skills-container">
                <div className="box">
                        <img src="/images/java.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="/images/python.svg" alt="" />
                    </div>
                    <div className="box">
                        <img src="/images/git.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}