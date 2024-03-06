import { Clima } from "../../componentes/clima/Clima";

export function Blog() {

    return (<>
        <section className="min-h-screen bg-white" >
            <article>
                <div className="flex bg-playaMargarita bg-fixed bg-cover bg-center min-h-60 h-auto w-full justify-center items-center" >
                    <div className=" bg-white w-11/12 drop-shadow-md rounded-md p-3">
                        <p className="text-center text-gray-700">
                            Las playas de Margarita
                        </p>
                    </div>
                </div>
                <div className="p-10">
                    <p className="text-justify">
                        Son conocidas por su belleza y cultura. ¡Ven a disfrutar de sus aguas cristalinas y arena blanca!
                    </p>
                </div>
            </article>
            
            <article>
                <div className="flex bg-castillo1 bg-fixed bg-cover bg-center min-h-60 h-auto w-full justify-center items-center" >
                    <div className=" bg-white w-11/12 drop-shadow-md rounded-md p-3">
                        <p className="text-center text-gray-700">
                            Vive la experiencia de conquistar castillos
                        </p>
                    </div>
                </div>
                <div className="p-10">
                    <p className="text-justify">
                    El Castillo San Carlos de Borromeo, ubicado en la bahía de Pampatar, en la Isla de Margarita, Venezuela, es un tesoro histórico que nos transporta a la época del virreinato. Su imponente presencia y su rica historia lo convierten en un destino turístico imperdible para los visitantes de la isla.
                    </p>
                </div>
            </article>
        </section>
            <Clima/>
    </>
    );
}
