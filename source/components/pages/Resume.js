

const Resume = () => {
    return ( 
        <section>
            <h2>Resume</h2>
        <h3>Development Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Mongo Database</li>
            <li>SQL</li>
            <li>ExpressJS</li>
            <li>React</li>
        </ul>
        <a href={require("../../components/file/RESUME.pdf")} download>
        <button>Download Resume</button>
        </a>
            </section>
        

     );
}
 
export default Resume ;