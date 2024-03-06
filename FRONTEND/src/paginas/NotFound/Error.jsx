import { useEffect } from "react"
import { Link } from "react-router-dom";

export function Error({setHeaderMostrar, setBotonRMostrar, setPieMostrar}) {
    useEffect(() => {
        setHeaderMostrar(false);
        setBotonRMostrar(false);
        setPieMostrar(false);
        return () => {
            setPieMostrar(true);
            setBotonRMostrar(true);
            setHeaderMostrar(true);
        };
    }, []);

    return(<>
        <div className="bg-parallaxFondo1 bg-cover w-full h-screen">
            <div className="bg-gray-300 w-full h-screen flex flex-col justify-center items-center gap-16">
                <h2 className="text-white text-5xl font-titulos text-center">ERROR 404 NOT FOUND</h2>
                <Link to={`/inicio`}>
                    <button className="w-52 h-14 bg-blue-200 text-xl font-textos hover:bg-white hover:border-2 hover:border-black">Vuelve a Inicio</button>
                </Link>
            </div>

        </div>
    </>)
}