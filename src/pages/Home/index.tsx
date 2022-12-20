import { Link } from 'react-router-dom';
import MapImage from '../../assets/uno.png';

export default function Home() {
    return (
        <div className="bg-gray-800 h-screen flex items-center justify-center">
            <div className="relative w-full max-w-sm">
                <img className="mx-auto max-w-full rounded-lg shadow-lg" src={MapImage} alt="Car" />
                <div className="bg-gray-800 p-8 text-center">
                    <h1 className="text-yellow-500 text-3xl font-bold mb-4">Encontre sua carona</h1>
                    <p className="text-white text-lg mb-8">App utilizado na UTFPR para ajudar a locomoção dos alunos</p>
                    <Link to="/login">
                        <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline">
                            Vamos começar!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
