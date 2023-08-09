import "./footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='hhttps://mddaniel1.github.io/Portafolio/' target="_blank"> 
            <img src="/img/portafolio.png" alt="Portafolio"/>
        </a>
        <a href='https://github.com/MdDaniel1' target="_blank"> 
            <img src="/img/github.png" alt="Github" />
        </a>
        <a href='hhttps://www.linkedin.com/in/daniel-david-448567875454768756' target="_blank" > 
            <img src="/img/linkedin.png" alt="Linkedin" />
        </a>
        </div>
        <img className="react" src='./logo192.png' alt='reactLogo' /> 
        <strong>Desarrollado por Daniel Martinez</strong>
    </footer>
}
export default Footer;