import img1 from '../content/img/moved-in-the-summer/1.jpg';
import img2 from '../content/img/moved-in-the-summer/2.jpg';
import img3 from '../content/img/moved-in-the-summer/3.jpg';
import img4 from '../content/img/moved-in-the-summer/4.jpg';
import img5 from '../content/img/moved-in-the-summer/5.jpg';

const Summer = () => {
    return (
        <div className='moved-in-the-summer'>
            <span className="artwork-date">2021</span>
                <p className="description mb-1 ml-0">
                    <i>Work in progress</i>
                </p>
                <p className="description mb-1 ml-0">
                    Graphic novel (autobiographical), selected fragments.
                </p>
                <p className="description mb-1 ml-0">
                    Originals’ sizes 32x24cm
                </p>
                <p className="description mb-1 ml-0">
                    Mixed media (graphite pencil, watercolor, acrylic, color pencil, crayon) on paper
                </p>
                <img src={img1} alt="" /><br />
                <img src={img2} alt="" /><br />
                <img src={img3} alt="" /><br />
                <img src={img4} alt="" /><br />
                <img src={img5} alt="" /><br />
        </div>
    );
}

export default Summer;