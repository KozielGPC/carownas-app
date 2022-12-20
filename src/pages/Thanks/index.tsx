import { Link } from 'react-router-dom';

export default function Thanks() {
    return (
        <div className="bg-gray-800 text-center py-5  h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-white">Obrigado por avaliá-lo!</h1>
            <Link to="/find" className="mt-5">
                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full w-[200px]">Inicio</button>
            </Link>
        </div>
    );
}
