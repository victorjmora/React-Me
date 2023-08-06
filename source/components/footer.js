import {FaGithub, FaStackOverflow} from "react-icons/fa"

const Footer = () => {
    return (
        <section className="footer">
            <footer>
                <a href="https://github.com/Element2804">
                <FaGithub className="github"/>
                </a>
                <a href="https://stackoverflow.com/users/18804130/element2804">
                <FaStackOverflow className="stack"/>
                </a>
            </footer>


        </section>
      );
}
 
export default Footer;