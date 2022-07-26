import logo from '../content/img/logo.png';
import polilla from '../content/img/polilla.png';
import flor from '../content/img/flor.png';

const NavBar = () => {
    return (
        <>
        <div id="mobile-menu" className="clearfix"></div>            
        <div className="sidebar-nav">
            <div className="sidenav-content">
                <div className="logo-container clearfix">
                    <a href="/"><img id="logo" src={logo} alt="logo" /></a>
                    <img className="polilla" src={polilla} alt="polilla" />
                </div>
                <ul className="py-2 mt-2">
                    <li>
                        <a href="/summer">
                            She moved in the Summer
                        </a>
                    </li>
                    <li>
                        <a href="/rose">
                            Rose is a rose
                        </a>
                    </li>
                    <li>
                        <a href="/flickering">
                            flickering light
                        </a>
                    </li>
                    <li>
                        <a className="italic" href="/lostandfound">
                            lost & found
                        </a>
                    </li>
                    <li>
                        <a href="/impressions">
                            Impressions
                        </a>
                    </li>
                    <li>
                        <a href="/sommerregen">
                            Sommerregen<br />
                        </a>
                    </li>
                    <li>
                        <a href="/sketchbook">
                            distance from origin                              
                            <br />
                            <span className="italic">sketchbook project</span>
                        </a>
                    </li>
                    <li>
                        <a href="/signo">
                            signs
                        </a>
                    </li>
                    <li>
                        <a href="/historia">
                            Natural science                            
                        </a>
                    </li>
                </ul>
                <img className="sidebar-img" src={flor} alt="dibujo" />
                <div className="redes-sociales">
                    <a href="https://www.instagram.com/josefinavidaldiaz/" rel="noreferrer" target="_blank">ig/@josefinavidaldiaz</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default NavBar;