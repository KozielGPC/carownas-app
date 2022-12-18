import {
    FaAngleDoubleRight,
    FaArrowRight,
    FaBell,
    FaClock,
    FaMapMarkerAlt,
    FaQuestionCircle,
    FaStar,
    FaUser,
    FaUsers,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Find() {
    return (
        <div className="bg-gray-800 h-screen flex flex-col">
            {/* Header */}
            <div className="bg-gray-700 px-4 py-3 flex justify-between items-center">
                <div className="text-gray-300">
                    <FaBell className="w-6 h-6 mr-2" />
                    Notificações
                </div>
                <div className="text-gray-300 ml-8">
                    <FaQuestionCircle className="w-6 h-6 mr-2" />
                    Ajuda
                </div>
                <div className="ml-auto text-gray-300">
                    <FaUser className="w-6 h-6 mr-2" />
                </div>
            </div>

            {/* Caronas disponiveis */}
            <div className="px-4 py-3 flex justify-center items-center">
                <h1 className="text-left text-2xl text-gray-300">Caronas Disponíveis</h1>
            </div>

            {/* Cards principais */}
            <div className="flex justify-center mt-10">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-600">
                    <div className="px-6 py-4">
                        <div className="flex items-center text-gray-300">
                            <FaUser className="w-12 h-12 mr-2" />
                            <div className="flex flex-col">
                                <p className="text-xl font-bold text-gray-300">Nome do Motorista</p>
                                <div className="flex items-center mt-1">
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4 text-gray-300">
                            <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                            <p className="text-gray-300">Localização</p>
                        </div>
                        <div className="flex mt-2 text-gray-300">
                            <FaClock className="w-4 h-4 mr-1" />
                            <p className="text-gray-300">Hora de Partida</p>
                        </div>
                        <div className="flex mt-2 text-gray-300">
                            <FaUsers className="w-4 h-4 mr-1" />
                            <p className="text-gray-300">Vagas Preenchidas</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-white text-gray-800 hover:bg-gray-100 rounded-full py-2 px-4">
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-600">
                    <div className="px-6 py-4">
                        <div className="flex items-center text-gray-300">
                            <FaUser className="w-12 h-12 mr-2" />
                            <div className="flex flex-col">
                                <p className="text-xl font-bold text-gray-300">Nome do Motorista</p>
                                <div className="flex items-center mt-1">
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                    <FaStar className="w-4 h-4 mr-1 text-yellow-400" />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-4 text-gray-300">
                            <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                            <p className="text-gray-300">Localização</p>
                        </div>
                        <div className="flex mt-2 text-gray-300">
                            <FaClock className="w-4 h-4 mr-1" />
                            <p className="text-gray-300">Hora de Partida</p>
                        </div>
                        <div className="flex mt-2 text-gray-300">
                            <FaUsers className="w-4 h-4 mr-1" />
                            <p className="text-gray-300">Vagas Preenchidas</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-white text-gray-800 hover:bg-gray-100 rounded-full py-2 px-4">
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botoes de mapa e recentes */}
            <div className="flex justify-between py-3 px-4 bg-gray-800">
                <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white">Mapa</button>
                <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white ml-auto">
                    Recentes
                </button>
            </div>

            {/* De e Para sessão */}
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
                    <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white">
                        <FaArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
