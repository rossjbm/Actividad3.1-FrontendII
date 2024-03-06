import { Clima } from "../../componentes/clima/Clima";

export function Blog() {

    return (<>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img
                className="w-1/2 md:w-1/3 rounded-lg shadow-lg mb-4"
                src="https://i.pinimg.com/originals/bc/0d/a0/bc0da01cedb1eddb61ea0e5d60e0a780.jpg"
                alt="Playas de Margarita"
            />
            <p className="text-center text-gray-700">
                Las playas de Margarita en Venezuela son conocidas por su belleza y cultura. ¡Ven a disfrutar de sus aguas cristalinas y arena blanca!
            </p>
        </div>
        <div>
            <Clima/>
        </div>
    </>
    );
}
