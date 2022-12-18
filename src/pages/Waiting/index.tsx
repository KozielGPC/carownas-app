import { Link } from 'react-router-dom';

export default function Waiting() {
    return (
        <div className="bg-gray-800 text-center py-5  h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Corrida em andamento...</h1>
            <Link to="/carrideinfos">
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full mt-5">Informações</button>
            </Link>
        </div>
    );
}
