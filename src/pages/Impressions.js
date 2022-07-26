
const Impressions = () => {
    const numOfImages = 14;
    const imgNumArray = [...Array(numOfImages-1).keys()];

    return (
        <div className="impressions">
                <span className="artwork-date">2018</span>
                <p className="description ml-0 mb-5">
                    38x29cm. Mixed media on paper.
                </p>
                {imgNumArray.map(x => 
                    <div className="impressions-img-group">
                        <img key={x} src={require(`../content/img/impressions/${x}.jpg`)} alt={x} />
                    </div>
                )}
            </div>
    );
}

export default Impressions;