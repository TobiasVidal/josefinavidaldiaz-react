import bacco from '../content/img/lost-and-found/1.jpg';
import baccoInstallation from '../content/img/lost-and-found/1b.jpg';
import songOfLove from '../content/img/lost-and-found/2.jpg';
import songOfLoveInstallation from '../content/img/lost-and-found/2b.jpg';
import olympia from '../content/img/lost-and-found/3.jpg';
import olympiaInstallation from '../content/img/lost-and-found/3b.jpg';

const LostAndFound = () => {
    return (
        <div className="lost-and-found">
                <span className="artwork-date">2019</span>
                <p className="description m-0">
                    Oil on paper and object installation.
                </p>
                <p className="description mb-1 ml-0">
                    (1 and 2) 15x18cm; (3) 24x17cm.
                </p>
                <div className="row my-2">
                    <div className="col-md-6 col-sm-12">
                        <img className="img-obra" src={bacco} alt="Bacco" />
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img className="img-obra" src={baccoInstallation} alt="Bacco - installation" />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6 col-sm-12">
                        <img className="img-obra" src={songOfLove} alt="Song of love" />
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img className="img-obra" src={songOfLoveInstallation} alt="Song of love - installation" />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-6 col-sm-12">
                        <img className="img-obra" src={olympia} alt="Olympia" />
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <img className="img-obra" src={olympiaInstallation} alt="Olympia - installation" />
                    </div>
                </div>
            </div>
    );
}

export default LostAndFound;