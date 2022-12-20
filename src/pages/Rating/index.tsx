import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Ride } from '../../interfaces/iRide';
import { User } from '../../interfaces/iUser';
import api from '../../providers';

function Rating() {
    const history = useHistory();
    const [rating, setRating] = useState(5);
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
    const [ride, setRide] = useState<Ride>(example_ride);
    const car_ride_id = localStorage.getItem('id_carona');
    const ra_user = localStorage.getItem('ra_user');
    useEffect(() => {
        api.get<Ride>(`/car-rides/${car_ride_id}`).then((response) => {
            const ride = response.data;
            setRide(ride);
        });
    }, []);

    function handleStarClick(index: any) {
        setRating(index);
    }

    function handleRate() {
        api.post<User>(`/users/rate`, {
            ra: ra_user,
            ra_rider: ride.rider.ra,
            stars: rating,
        })
            .then((response) => {
                history.push('/thanks');
            })
            .catch((error) => {
                alert('Algo inesperado aconteceu!');
            });
    }

    return (
        <div className="bg-gray-800 flex h-screen items-center justify-center p-6">
            <div className="w-full max-w-xs">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-yellow-500">Avaliar Motorista</h1>
                </div>

                <div className="flex items-center mb-4 ml-4">
                    <FaUser className="h-12 w-12 mr-4 text-white" />
                    <h2 className="text-xl font-bold text-white">{ride.rider.name}</h2>
                </div>

                <div className="mb-6 flex flex-row ml-16">
                    {[1, 2, 3, 4, 5].map((value, index) => (
                        <FaStar
                            key={value}
                            className={`h-8 w-8 text-yellow-500 mr-2 ${
                                index < rating ? 'text-yellow-500' : 'text-yellow-700'
                            }`}
                            onClick={() => handleStarClick(value)}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <Link to="/find" className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full w-full">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full">
                            Cancelar
                        </button>
                    </Link>
                    <button
                        className="ml-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full w-full"
                        onClick={handleRate}
                    >
                        Avaliar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rating;
