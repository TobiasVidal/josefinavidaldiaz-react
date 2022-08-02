
const Signs = () => {
    const numOfImages = 4;
    const imgNumArray = [...Array(numOfImages).keys()].map(x => x + 1);

    return (
        <div className="signs">
            <span className="artwork-date">2016</span>
            <p className="description mb-5">
                38 x 28,5. Watercolor, gouache and ink on paper.
            </p>
            {imgNumArray.map(x =>
                <img key={x} src={require(`../content/img/signs/${x}.jpg`)} alt={`sign ${x}`} className="display-block" />
            )}
        </div>
    );
}

export default Signs;