import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MapImage from '../../assets/mapa.png';
{
    /* importa a imagem do mapa */
}

export default function Mapa() {
    return (
        <div className="bg-gray-800 h-screen flex flex-col">
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <Link to="/find">
                    <button className="text-gray-500 hover:text-gray-100 focus:outline-none">
                        <FaArrowLeft />
                    </button>
                </Link>

                <h1 className="text-xl font-bold text-gray-100">Mapa</h1>
            </div>
            <img src={MapImage} alt="Mapa" className="mx-auto max-w-md rounded-lg shadow-lg" />{' '}
            {/* exibe a imagem do mapa */}
            <div className="flex justify-between py-3 px-4 bg-gray-800">
                <Link to="/find">
                    <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white">Caronas</button>
                </Link>
                <Link to="/myrides">
                    <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white ml-auto">
                        Recentes
                    </button>
                </Link>
            </div>
            <div className="bg-gray-800 px-4 py-3 flex justify-between items-center flex flex-col">
                <div className="flex flex-col">
                    <label className="text-xl text-gray-300 block font-bold" htmlFor="de">
                        De
                    </label>
                    <input className="bg-white rounded-full py-2 px-4 text-gray-800" type="text" id="de" />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-xl text-gray-300 block font-bold" htmlFor="para">
                        Para
                    </label>
                    <input className="bg-white rounded-full py-2 px-4 text-gray-800" type="text" id="para" />
                </div>
                <div className="ml-auto">
                    <Link to="/waiting">
                        <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white">
                            <FaArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
