import { useEffect, useState } from 'react';
import {
    FaAngleDoubleRight,
    FaArrowLeft,
    FaArrowRight,
    FaBell,
    FaClock,
    FaMapMarkerAlt,
    FaPlus,
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
    const [filteredRides, setFilteredRides] = useState<Ride[]>([]);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    useEffect(() => {
        api.get<Ride[]>(`/car-rides`).then((response) => {
            const rides = response.data;
            setRides(rides);
            setFilteredRides(rides);
        });
    }, []);

    const handleFilter = () => {
        const filtered = rides.filter(
            (ride) => ride.from.toLowerCase() == from.toLowerCase() || ride.to.toLowerCase() == to.toLowerCase(),
        );

        if (from == '' && to == '') {
            setFilteredRides(rides);
        } else {
            setFilteredRides(filtered);
        }
    };
    return (
        <div className="bg-gray-800 h-screen flex flex-col">
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <h1 className="text-xl font-bold text-gray-100">Caronas Disponíveis</h1>
                <Link to="/newcarride">
                    <button className="text-white hover:text-gray-100 focus:outline-none rounded-full bg-gray-700 py-2 px-4">
                        <FaPlus />
                    </button>
                </Link>
            </div>

            {/* Cards principais */}

            <div className="bg-gray-800" id="rides">
                {filteredRides.map((ride) => (
                    <CardRide key={ride.id} ride={ride} />
                ))}
            </div>

            {/* Botoes de mapa e recentes */}
            <div className="flex justify-between py-3 px-4 bg-gray-800">
                <Link to="/map">
                    <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white">Mapa</button>
                </Link>
                <Link to="/myrides">
                    <button className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white ml-auto">
                        Recentes
                    </button>
                </Link>
            </div>

            {/* De e Para sessão */}
            <div className="bg-gray-800 px-4 py-3 flex justify-between items-center flex flex-col">
                <div className="flex flex-col">
                    <label className="text-xl text-gray-300 block font-bold" htmlFor="de">
                        De
                    </label>
                    <input
                        onChange={(e) => setFrom(e.target.value)}
                        className="bg-white rounded-full py-2 px-4 text-gray-800"
                        type="text"
                        id="de"
                    />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-xl text-gray-300 block font-bold" htmlFor="para">
                        Para
                    </label>
                    <input
                        onChange={(e) => setTo(e.target.value)}
                        className="bg-white rounded-full py-2 px-4 text-gray-800"
                        type="text"
                        id="para"
                    />
                </div>
                <div className="ml-auto">
                    <button
                        className="bg-gray-700 hover:bg-gray-900 rounded-full py-2 px-4 text-white"
                        onClick={handleFilter}
                    >
                        <FaArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
