import Navbar from "../../components/Navbar";
import "../../styles/styles.css";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="main">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "90vh",
                        textAlign: "center",
                    }}
                >
                    <h1 className="title">Click on artist in Navigation Bar to show data</h1>
                </div>
            </main>
        </>
    );
}
