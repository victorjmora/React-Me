import React from "react";
import QuizShow from "React-Me/source/images/ShortestQuizShow.png"
import WorkTeam from "React-Me/source/images/WorkTeam.png"
const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio">
                <a href="https://github.com/victorjmora/Shortest-QuizShow.git">
                <img src ={QuizShow} className="challenge" alt="challenge hw"/>
                </a>
               <a href="https://github.com/victorjmora/WorkTeam.git">
                <img src ={WorkTeam} className="challenge" alt="challenge hw"/>
                </a>

            </div>
        </section>
        
        
        );
}
 
export default Portfolio ;