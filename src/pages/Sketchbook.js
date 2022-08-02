
const Sketchbook = () => {
    const numOfImages = 8;
    const imgNumArray = [...Array(numOfImages).keys()].map(x => x + 1);

    return (
        <div className="sketchbook">
            <span className="artwork-date">2017</span>
            <p className="description mb-1 ml-0">
                <span className="italic">Sketchbook Project</span>, The Brooklyn Art Library, NY.
            </p>
            <p className="description mb-1 ml-0">
                Notebook; 18,5 x 13,5cm.
            </p>
            <p className="description mb-1 ml-0">
                Watercolor, collage and graphite and color pencil on paper.
            </p>
            {imgNumArray.map(x =>
                <img key={x} src={require(`../content/img/sketchbook/${x}.jpg`)} alt={`sketch ${x}`} />
            )}
        </div>
    );
}

export default Sketchbook;