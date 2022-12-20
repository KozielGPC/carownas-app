import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/iUser';
import api from '../../providers';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Ride } from '../../interfaces/iRide';

function NewCarRide() {
    const history = useHistory();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [time_start, setTimeStart] = useState('');
    const [time_end, setTimeEnd] = useState('');
    const [spots, setSpots] = useState('');
    const ra_user = localStorage.getItem('ra_user');
    const handleClick = () => {
        api.post<Ride>(`/car-rides`, {
            rider_ra: ra_user,
            from: from,
            to: to,
            time_start: time_start,
            time_end: time_end,
            total_spots: parseInt(spots),
        })
            .then((response) => {
                history.push('/find');
            })
            .catch(() => alert('Algo inesperado aconteceu'));
    };

    return (
        <div className="bg-gray-800 h-screen flex flex-col">
            <div className="w-full flex items-center justify-between px-4 py-6 bg-gray-900">
                <button className="text-gray-500 hover:text-gray-100 focus:outline-none">
                    <FaArrowLeft />
                </button>

                <h1 className="text-xl font-bold text-gray-100">Nova Carona</h1>
            </div>
            <div className="w-full max-w-sm m-auto px-10">
                <label className="block font-bold text-white mb-2">De</label>
                <input
                    onChange={(e) => setFrom(e.target.value)}
                    type="text"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />

                <label className="block font-bold text-white mt-4 mb-2">Para</label>
                <input
                    onChange={(e) => setTo(e.target.value)}
                    type="text"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />

                <label className="block font-bold text-white mt-4 mb-2">Horário de Saída</label>
                <input
                    onChange={(e) => setTimeStart(e.target.value)}
                    type="text"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />

                <label className="block font-bold text-white mt-4 mb-2">Horário de Chegada</label>
                <input
                    onChange={(e) => setTimeEnd(e.target.value)}
                    type="text"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />

                <label className="block font-bold text-white mt-4 mb-2">Vagas</label>
                <input
                    onChange={(e) => setSpots(e.target.value)}
                    type="number"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />

                <button
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full"
                    onClick={handleClick}
                >
                    Confirmar
                </button>
            </div>
        </div>
    );
}

export default NewCarRide;
