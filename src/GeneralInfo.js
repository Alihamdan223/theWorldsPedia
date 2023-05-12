const GeneralInfo = ({capital, population, continent, timezone, map, subregion}) => {

    return (
        <main>
            <div className="main-container wrapper">
                    <div className="sub-container">
                        <h2>Capital</h2>
                        <p>{capital}</p>
                        <h2>Population</h2>
                        <p>{population}</p>
                        <h2>Continent</h2>
                        <p>{continent}</p>
                        <h2>Subregion</h2>
                        <p>{subregion}</p>
                        <h2>Timezone</h2>
                        <p>{timezone[0] === "UTC" ? timezone[1] : timezone}</p>
                        <h2>Check It On The Map</h2>
                        <p><a href={map} style={{fontSize: "1.1em", textDecoration: "none"}}>Click</a></p>
                </div>
                </div>
        </main>
    )
}

export default GeneralInfo;