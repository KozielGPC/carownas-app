import { useEffect, useState } from 'react';
import {
    FaAngleDoubleRight,
    FaArrowLeft,
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
import CardRideInfo from '../../components/cardRideInfo';

import { useCarRides } from '../../hooks/useCarRides';
import { Ride } from '../../interfaces/iRide';
import api from '../../providers';

export default function MyRides() {
    const [rides, setRides] = useState<Ride[]>([]);
    const ra_user = localStorage.getItem('ra_user');
    useEffect(() => {
        api.get<Ride[]>(`/car-rides/myrides/${ra_user}`).then((response) => {
            const rides = response.data;
            setRides(rides);
        });
    }, []);
    return (
        <div className="bg-gray-800 h-screen flex flex-col">
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <button className="text-gray-500 hover:text-gray-100 focus:outline-none">
                    <Link to="/find">
                        <FaArrowLeft />
                    </Link>
                </button>

                <h1 className="text-xl font-bold text-gray-100">Minhas Caronas</h1>
            </div>

            {/* Caronas disponiveis */}
            {/* <div className="px-4 py-3 flex justify-center items-center">
                <h1 className="text-left text-2xl text-gray-300">Minhas Caronas</h1>
            </div> */}

            {/* Cards principais */}

            <div className="rides bg-gray-800" id="rides">
                {rides.map((ride) => (
                    <CardRideInfo key={ride.id} ride={ride} />
                ))}
            </div>
        </div>
    );
}
