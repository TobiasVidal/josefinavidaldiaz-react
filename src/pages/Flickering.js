import img0 from '../content/img/flickering-light/0.jpg';
import img1 from '../content/img/flickering-light/1.jpg';
import img2 from '../content/img/flickering-light/2.jpg';
import img3 from '../content/img/flickering-light/3.jpg';
import img4 from '../content/img/flickering-light/4.jpg';
import img5 from '../content/img/flickering-light/5.jpg';
import img6 from '../content/img/flickering-light/6.jpg';
import img7 from '../content/img/flickering-light/7.jpg';
import img8 from '../content/img/flickering-light/8.jpg';
import img9 from '../content/img/flickering-light/9.jpg';
import img10 from '../content/img/flickering-light/10.jpg';
import img11 from '../content/img/flickering-light/11.jpg';
import img12 from '../content/img/flickering-light/12.jpg';
import img13 from '../content/img/flickering-light/13.jpg';

const Flickering = () => {
    return (<>
                <span className="artwork-date">2019</span>
                <p className="description m-0">
                    Visual Narrative, selected fragments.
                </p>
                <p className="description m-0">
                    Sizes varying from 28x19cm to 38x28cm.
                </p>
                <p className="description mb-5 ml-0">
                    Mixed media (oil, pencil, watercolor) on paper.
                </p>
                <div id="flickering-light-img-container">
                    <img className="flickering flickering-left" id="flickering-0" src={img0} alt="flickering-0" />
                    <img className="flickering flickering-right" id="flickering-1" src={img1} alt="flickering-1" />
                    <img className="flickering flickering-left" id="flickering-2" src={img2} alt="flickering-2" />
                    <img className="flickering flickering-right" id="flickering-3" src={img3} alt="flickering-3" />
                    <img className="flickering flickering-left" id="flickering-4" src={img4} alt="flickering-4" />
                    <img className="flickering flickering-right" id="flickering-5" src={img5} alt="flickering-5" />
                    <img className="flickering flickering-left" id="flickering-6" src={img6} alt="flickering-6" />
                    <img className="flickering flickering-right" id="flickering-7" src={img7} alt="flickering-7" />
                    <img className="flickering flickering-left" id="flickering-8" src={img8} alt="flickering-8" />
                    <img className="flickering flickering-right" id="flickering-9" src={img9} alt="flickering-9" />
                    <img className="flickering flickering-left" id="flickering-10" src={img10} alt="flickering-10" />
                    <img className="flickering flickering-right" id="flickering-11" src={img11} alt="flickering-11" />
                    <img className="flickering flickering-left" id="flickering-12" src={img12} alt="flickering-12" />
                    <img className="flickering flickering-right" id="flickering-13" src={img13} alt="flickering-13" />
                </div>
            </>
    );
}

export default Flickering;