import { useState } from 'react';
import img1 from '../content/img/sommerregen/0.jpg';
import img2 from '../content/img/sommerregen/2.jpg';
import img3 from '../content/img/sommerregen/3.jpg';
import img4 from '../content/img/sommerregen/4.jpg';
import img5 from '../content/img/sommerregen/5.jpg';
import img6 from '../content/img/sommerregen/6.jpg';
import img7 from '../content/img/sommerregen/7.jpg';
import img8 from '../content/img/sommerregen/8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const slideCount = 8;
    /* Mueve al carousel a la izq o derecha dependiendo de 'direction' */
    const carouselArrowClick = (next) => {
        const imagenesMovidasPorClick = 1;
        const shift = next ? 1 : -1;
        const nextslide = currentSlideIndex + shift;
        if (nextslide < 0 || nextslide >= slideCount) { return }

        var imgWidth = document.querySelector('.slides div').offsetWidth;
        var newPosition = imgWidth * nextslide * -1 * imagenesMovidasPorClick;

        const slidesElem = document.querySelector('.slides');
        slidesElem.style.transform = `translateX(${newPosition}px)`;
        setCurrentSlideIndex(nextslide);
    }

    return (
        <div className="sommerregen">
            <article>
                <span className="artwork-date">2017</span>
                <p className="description m-0">
                    Graphic Novel, selected fragments, self-published.
                </p>
                <p className="description ml-0 mb-4">
                    Original drawings 38x29cm, pencil on paper.
                </p>
            </article>
            <section className='carousel-container'>
                <div className="carousel">
                    <div className="slides" data-current-page="0">
                        {/* Los div esta escritos asi "raro", pegados al final, para
                                evitar que quede ningun espacio entre ellos. */}
                        <div><img className="vertical" src={img1} alt="1" /></div><div
                        ><img className="horizontal" src={img2} alt="2" /></div><div
                        ><img className="horizontal" src={img3} alt="3" /></div><div
                        ><img className="horizontal" src={img4} alt="4" /></div><div
                        ><img className="horizontal" src={img5} alt="5" /></div><div
                        ><img className="horizontal" src={img6} alt="6" /></div><div
                        ><img className="horizontal" src={img7} alt="7" /></div><div
                        ><img className="horizontal" src={img8} alt="8" /></div>
                    </div>
                </div>
                <article className='slides-navigation'>
                    <div className="container-arrows">
                        <button className="btn btn-link arrow" onClick={() => carouselArrowClick(true)}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <button className="btn btn-link arrow" onClick={() => carouselArrowClick(false)}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                    </div>
                    <div className="img-counter">
                        {currentSlideIndex + 1}/{slideCount}
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Home;