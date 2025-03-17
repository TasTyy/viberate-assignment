import { useState, useEffect } from "react";
import "/src/styles/styles.css";
import { INavbar } from "../api/Interfaces";
import { getNavbar } from "../api/api";
import { Link } from "react-router-dom";

function Navbar() {
    const [navbarData, setNavbarData] = useState<INavbar[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getNavbar();
            setNavbarData(data);
        }
        fetchData();
    }, []);

    return (
        <>
            <header className="header">
                {/* page */}
                <div className="page">
                    <Link to={"/"} className="logo">
                        <img src="/logo-v.svg" alt="Viberate" />
                        Viberate
                    </Link>

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
                                    <Link to={`/artist/${navItem.artist_uuid}`}>
                                        {navItem.artist_name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {/* /page */}
            </header>
            {/* /HEADER */}
        </>
    );
}

export default Navbar;
