import {SiPlanetscale} from "react-icons/si";

const Header = () => {
    return (
        <header>
            <nav className="Header-comp">
            <h2>WorldsPedia</h2>
            <SiPlanetscale id="planet" />
            </nav>
            <section className="header-discrip">
                <div className="header-dis">
                <h2>Learn About The World</h2>
                <p> 
                    A simple website built for those who are curious and interested in learning about the World.
                    Each flag has some details about the country that it represents, so feel free to toggle through the list
                    and learn.
                </p>
                </div>
            </section>
        </header>
    )
}

export default Header;