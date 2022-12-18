import { FaArrowLeft, FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CarRideInfos() {
    return (
        <div className="bg-gray-800 h-screen flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <button className="text-gray-500 hover:text-gray-100 focus:outline-none">
                    <FaArrowLeft />
                </button>
                <h1 className="text-xl font-bold text-gray-100">Carona em andamento...</h1>
            </div>
            <div className="w-full flex items-center justify-between px-4 py-6">
                <FaUser className="w-12 h-12 text-gray-100" />
                <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-100">Nome do Motorista</h2>
                    <div className="flex items-center text-gray-100">
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                        <FaStar className="mr-1" />
                    </div>
                </div>
            </div>
            <div className="w-full px-4 py-6">
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-100">Origem</h3>
                    <h3 className="text-lg text-gray-100">Endereço de Origem</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg text-gray-100 font-bold">Destino</h3>
                    <h3 className="text-lg text-gray-100">Endereço de Destino</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg text-gray-100 font-bold">Horário de Partida</h3>
                    <h3 className="text-lg text-gray-100">18:30</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg text-gray-100 font-bold">Horário de Chegada</h3>
                    <h3 className="text-lg text-gray-100">18:30</h3>
                </div>
                <div className="flex justify-between">
                    <h3 className="text-lg font-bold text-gray-100">Vagas</h3>
                    <h3 className="text-lg text-gray-100">4</h3>
                </div>
            </div>
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <Link to="/find">
                    <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none text-gray-900 font-bold py-2 px-4 rounded-full">
                        Cancelar
                    </button>
                </Link>
                <Link to="/finish">
                    <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none text-gray-900 font-bold py-2 px-4 rounded-full">
                        Finalizar
                    </button>
                </Link>
            </div>
        </div>
    );
}
