import "./footer.css";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import {FaRegNewspaper} from "react-icons/fa"
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}> 
        <div className="footer_content" >
            <h1>Desarrollado por Daniel Martinez</h1>
            <div className="content__img" >
                <img className="profile" src="https://github.com/MdDaniel1.png" alt="Daniel M"/>
                <img className="react" src='./logo192.png' alt='React Logo'/>
            </div>
            <div className="redes">
                <a href='https://mddaniel1.github.io/Portafolio/' target="_blank"> 
                    <FaRegNewspaper alt="Portafolio"  />
                </a>
                <a href='https://github.com/MdDaniel1' target="_blank"> 
                    <AiFillGithub alt="Github"/>
                </a>
                <a href='https://www.linkedin.com/in/daniel-david-448567875454768756' target="_blank" > 
                    <AiFillLinkedin alt="Linkedin" />
                </a>
            </div>
        </div>
    </footer>
}
export default Footer;