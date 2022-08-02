
const NaturalScience = () => {
    const numOfImages = 3;
    const imgNumArray = [...Array(numOfImages).keys()].map(x => x + 1);

    return (
        <div className="natural-science">
            <span className="artwork-date">2015</span>
            <p className="description mb-5">
                33 x 26cm. Pencil on paper.
            </p>
            {imgNumArray.map(x =>
                <img key={x} src={require(`../content/img/natural-science/${x}.jpg`)} alt={`natural science ${x}`} className="display-block" />
            )}
        </div>
    );
}

export default NaturalScience;