import { useEffect, useState } from 'react';
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
import CardRide from '../../components/cardRide';

import { useCarRides } from '../../hooks/useCarRides';
import { Ride } from '../../interfaces/iRide';
import api from '../../providers';

export default function Find() {
    const [rides, setRides] = useState<Ride[]>([]);

    useEffect(() => {
        api.get<Ride[]>(`/car-rides`).then((response) => {
            const rides = response.data;
            setRides(rides);
        });
    }, []);
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

            <div className="rides" id="rides">
                {rides.map((ride) => (
                    <CardRide key={ride.id} ride={ride} />
                ))}
            </div>

            {/* Botoes de mapa e recentes */}
            <div className="flex justify-between py-3 px-4 bg-gray-800">
                <Link to="/map">
                    <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white">Mapa</button>
                </Link>
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
