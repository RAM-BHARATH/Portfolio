export default function Skills() {
    return(
        <div className="skills" id="skills">
            <div className="frontend">
                <h3>Frontend</h3>
                <div className="skills-container">
                    <div className="box">
                        <img src="/images/html5.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/css3.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/javascript.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/react.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/bootstrap.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/tailwindcss.svg" alt="HTML5" />
                    </div>
                </div>
            </div>
            <div className="backend">
                <h3>Backend</h3>
                <div className="skills-container">
                    <div className="box">
                        <img src="/images/node-js.svg" alt="HTML5" />
                    </div>
                    <div className="box express-center">
                        <img src="/images/expressjs.png" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/php.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/mongo.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/firebase.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/mysql.svg" alt="HTML5" />
                    </div>
                </div>
            </div>
            <div className="other">
                <h3>Other</h3>
                <div className="skills-container">
                <div className="box">
                        <img src="/images/java.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/python.svg" alt="HTML5" />
                    </div>
                    <div className="box">
                        <img src="/images/git.svg" alt="HTML5" />
                    </div>
                </div>
            </div>
        </div>
    );
}