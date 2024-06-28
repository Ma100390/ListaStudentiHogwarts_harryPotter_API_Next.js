import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Seleziona una casata:</h1>
            <ul>
                <button className="gryffindor-button">
                    <Link href="/house/Gryffindor">Gryffindor</Link>
                </button>
                <button className="hufflepuff-button">
                    <Link href="/house/Hufflepuff">Hufflepuff</Link>
                </button>
                <button className="ravenclaw-button">
                    <Link href="/house/Ravenclaw">Ravenclaw</Link>
                </button>
                <button className="slytherin-button">
                    <Link href="/house/Slytherin">Slytherin</Link>
                </button>
            </ul>
        </div>
    );
}
