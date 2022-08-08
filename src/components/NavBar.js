import logo from '../content/img/logo.png';
import polilla from '../content/img/polilla.png';
import flor from '../content/img/flor.png';

const NavBar = () => {
    const isActiveTab = (tab) => {
        return window.location.href.includes(tab);
    }

    return (
        <>
        <div id="mobile-menu" className="clearfix"></div>            
        <div className="sidebar-nav">
            <div className="sidenav-content">
                <div className="logo-container clearfix">
                    <a href="/"><img id="logo" src={logo} alt="logo" /></a>
                    <img className="polilla" src={polilla} alt="polilla" />
                </div>
                <ul className='mb-1'>
                    <li>
                        <a href="/summer" className={isActiveTab('/summer') ? 'active' : ''}>
                            She moved in the Summer
                        </a>
                    </li>
                    <li>
                        <a href="/rose" className={isActiveTab('/rose') ? 'active' : ''}>
                            Rose is a rose
                        </a>
                    </li>
                    <li>
                        <a href="/flickering" className={isActiveTab('/flickering') ? 'active' : ''}>
                            flickering light
                        </a>
                    </li>
                    <li>
                        <a className={'italic ' + (isActiveTab('/lostandfound') ? 'active' : '')} href="/lostandfound">
                            lost & found
                        </a>
                    </li>
                    <li>
                        <a href="/impressions" className={isActiveTab('/impressions') ? 'active' : ''}>
                            Impressions
                        </a>
                    </li>
                    <li>
                        <a href="/sommerregen" className={isActiveTab('/sommerregen') ? 'active' : ''}>
                            Sommerregen<br />
                        </a>
                    </li>
                    <li>
                        <a href="/sketchbook" className={isActiveTab('/sketchbook') ? 'active' : ''}>
                            distance from origin                              
                            <br />
                            <span className="italic">sketchbook project</span>
                        </a>
                    </li>
                    <li>
                        <a href="/signs" className={isActiveTab('/signs') ? 'active' : ''}>
                            signs
                        </a>
                    </li>
                    <li>
                        <a href="/naturalscience" className={isActiveTab('/naturalscience') ? 'active' : ''}>
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