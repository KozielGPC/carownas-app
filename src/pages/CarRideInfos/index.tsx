import { useEffect, useState } from 'react';
import { FaArrowLeft, FaStar, FaUser } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Ride } from '../../interfaces/iRide';
import api from '../../providers';

export default function CarRideInfos() {
    const history = useHistory();
    const example_ride = {
        id: 0,
        rider_ra: '1111111',
        from: 'UTFPR',
        to: 'Centro',
        time_start: '15:30',
        time_end: '16:00',
        total_spots: 4,
        filled_spots: 0,
        passagers: [],
        rider: {
            ra: '1111111',
            password: '123456',
            active: true,
            name: 'Motorista',
            stars: 5,
            rides: [],
        },
    };

    const [stars, setStars] = useState<number>(example_ride.rider.stars);
    const [ride, setRide] = useState<Ride>(example_ride);
    const car_ride_id = localStorage.getItem('id_carona');
    const ra_user = localStorage.getItem('ra_user');
    useEffect(() => {
        api.get<Ride>(`/car-rides/${car_ride_id}`).then((response) => {
            const ride = response.data;
            setRide(ride);
            setStars(ride.rider.stars);
        });
    }, []);

    const handleCancelButton = () => {
        api.post<Ride>(`/car-rides/cancel`, {
            car_ride_id: parseInt(car_ride_id ?? '1'),
            passager_ra: ra_user,
        })
            .then((response) => {
                history.push('/find');
            })
            .catch(() => alert('Um erro inesperado aconteceu'));
    };
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
                    <h2 className="text-lg font-bold text-gray-100">{ride.rider.name}</h2>
                    <div className="flex items-center text-gray-100">
                        {Array.from({ length: stars }).map((_, index) => (
                            <FaStar className="w-4 h-4 mr-1 text-yellow-400" key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full px-4 py-6">
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-100">Origem</h3>
                    <h3 className="text-lg text-gray-100">{ride.from}</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg text-gray-100 font-bold">Destino</h3>
                    <h3 className="text-lg text-gray-100">{ride.to}</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg text-gray-100 font-bold">Horário de Partida</h3>
                    <h3 className="text-lg text-gray-100">{ride.time_start}</h3>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="text-lg text-gray-100 font-bold">Horário de Chegada</h3>
                    <h3 className="text-lg text-gray-100">{ride.time_end}</h3>
                </div>
                <div className="flex justify-between">
                    <h3 className="text-lg font-bold text-gray-100">Vagas</h3>
                    <h3 className="text-lg text-gray-100">{ride.total_spots - ride.filled_spots}</h3>
                </div>
            </div>
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <button
                    className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none text-gray-900 font-bold py-2 px-4 rounded-full"
                    onClick={handleCancelButton}
                >
                    Cancelar
                </button>
                <Link to="/finish">
                    <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none text-gray-900 font-bold py-2 px-4 rounded-full">
                        Finalizar
                    </button>
                </Link>
            </div>
        </div>
    );
}
