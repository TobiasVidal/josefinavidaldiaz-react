import roseGif from '../content/img/rose/moms-rose.gif';
import rosePattern from '../content/img/rose/rose-pattern.jpg';
import pencilRoseGif from '../content/img/rose/moms-rose-pencil.gif';
import pencilRosePattern from '../content/img/rose/rose-pencil-pattern.jpg';

const Rose = () => {
    return (
        <div className="rose">
            <span className="artwork-date">2021</span>
            <p className="description mb-1 ml-0">
                Rose is a rose is a rose is a rose
            </p>
            <p className="description mb-1 ml-0">
                GIF animations based on handmade frames (15 x 21cm)
            </p>
            <p className="description mb-1 ml-0">
                Watercolor and pencil on paper
            </p>
            <img src={roseGif} alt="rose watercolor gif" /><br />
            <img src={rosePattern} alt="rose pattern watercolor" /><br />
            <img src={pencilRoseGif} alt="rose pencil gif" /><br />
            <img src={pencilRosePattern} alt="rose pattern pencil" />
        </div>
    );
}

export default Rose;