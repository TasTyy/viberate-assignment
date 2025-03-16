import { useState, useEffect } from "react";
import "./styles/styles.css";
import { Navbar } from "./api/Interfaces";
import { getNavbar } from "./api/api";

function App() {
    const [navbarData, setNavbarData] = useState<Navbar[]>([]);
    // const [artist, setArtist] = useState<Artist>();

    useEffect(() => {
        async function fetchData() {
            const data = await getNavbar();
            setNavbarData(data);
        }
        fetchData();
    }, []);

    return (
        <>
            {/* container */}
            <div className="container">
                {/* HEADER */}
                <header className="header">
                    {/* page */}
                    <div className="page">
                        <a href="#" className="logo">
                            <img src="./assets/svg/logo-v.svg" alt="Viberate" />
                            Viberate
                        </a>

                        <nav className="navigation-primary">
                            <ul className="menu-sys">
                                <li>
                                    <button className="btn btn-menu search">
                                        Search
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-menu more">
                                        More
                                    </button>
                                </li>
                            </ul>

                            <ul className="menu">
                                {navbarData.map((navItem) => (
                                    <li key={navItem.artist_uuid}>
                                        <a href={`#${navItem.artist_uuid}`}>
                                            {navItem.artist_name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    {/* /page */}
                </header>
                {/* /HEADER */}
            </div>
            {/* /container */}
        </>
    );
}

export default App;
