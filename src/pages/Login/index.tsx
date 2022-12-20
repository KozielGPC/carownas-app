import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces/iUser';
import api from '../../providers';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [ra, setRa] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        api.post<User>(`/users/login`, {
            ra: ra,
            password: password,
        })
            .then((response) => {
                const user = response.data;
                localStorage.setItem('ra_user', user.ra);
                history.push('/terms');
            })
            .catch(() => alert('Login invalido'));
    };

    return (
        <div className="bg-gray-800 p-6 flex justify-center  h-screen">
            <div className="w-full max-w-sm m-auto">
                <label className="block font-bold text-white mb-2">RA</label>
                <input
                    onChange={(e) => setRa(e.target.value)}
                    type="text"
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />

                <label className="block font-bold text-white mt-4 mb-2">Senha</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
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

export default Login;
