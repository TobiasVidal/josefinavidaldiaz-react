import logo from '../content/img/logo.png';
import polilla from '../content/img/polilla.png';
import flor from '../content/img/flor.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const location = useLocation();
    const [url, setUrl] = useState(window.location.href)
    useEffect(() => {
        setUrl(window.location.href);
    }, [location]);

    const isActiveTab = (tab) => url.includes(tab);

    return (
        <>
            <div id="mobile-menu" className="clearfix"></div>
            <div className="sidebar-nav">
                <div className="sidenav-content">
                    <div className="logo-container clearfix">
                        <Link to={"/"}><img id="logo" src={logo} alt="logo" /></Link>
                        <img className="polilla" src={polilla} alt="polilla" />
                    </div>
                    <ul className='mb-1'>
                        <li>
                            <Link to={"/summer"} className={isActiveTab('/summer') ? 'active' : ''}>
                                She moved in the Summer
                            </Link>
                        </li>
                        <li>
                            <Link to={"/rose"} className={isActiveTab('/rose') ? 'active' : ''}>
                                Rose is a rose
                            </Link>
                        </li>
                        <li>
                            <Link to={"/flickering"} className={isActiveTab('/flickering') ? 'active' : ''}>
                                flickering light
                            </Link>
                        </li>
                        <li>
                            <Link className={'italic ' + (isActiveTab('/lostandfound') ? 'active' : '')} to={"/lostandfound"}>
                                lost & found
                            </Link>
                        </li>
                        <li>
                            <Link to={"/impressions"} className={isActiveTab('/impressions') ? 'active' : ''}>
                                Impressions
                            </Link>
                        </li>
                        <li>
                            <Link to={"/sommerregen"} className={isActiveTab('/sommerregen') ? 'active' : ''}>
                                Sommerregen<br />
                            </Link>
                        </li>
                        <li>
                            <Link to={"/sketchbook"} className={isActiveTab('/sketchbook') ? 'active' : ''}>
                                distance from origin
                                <br />
                                <span className="italic">sketchbook project</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/signs"} className={isActiveTab('/signs') ? 'active' : ''}>
                                signs
                            </Link>
                        </li>
                        <li>
                            <Link to={"/naturalscience"} className={isActiveTab('/naturalscience') ? 'active' : ''}>
                                Natural science
                            </Link>
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