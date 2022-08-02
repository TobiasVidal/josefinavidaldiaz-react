
const Impressions = () => {
    const numOfImages = 14;
    const imgNumArray = [...Array(numOfImages).keys()];
    
    return (
        <div className="impressions">
                <span className="artwork-date">2018</span>
                <p className="description ml-0 mb-5">
                    38x29cm. Mixed media on paper.
                </p>
                {imgNumArray.map(x => 
                    <div key={x.toString()} className="impressions-img-group">
                        <img src={require(`../content/img/impressions/${x}.jpg`)} alt={x} />
                    </div>
                )}
            </div>
    );
}

export default Impressions;