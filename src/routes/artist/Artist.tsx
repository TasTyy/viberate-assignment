import Navbar from "../../components/Navbar";
import ArtistCard from "../../components/ArtistCard";
import "/src/styles/styles.css";

export default function Artist() {
    return (
        <>
            <div className="container">
                <Navbar />
                <ArtistCard />
            </div>
        </>
    );
}
