import { Link } from 'react-router-dom';

export default function UseTerms() {
    return (
        <div className="bg-gray-800 h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-gray-700 p-8 rounded-lg shadow-lg">
                <h1 className="text-center text-yellow-500 text-3xl font-bold mb-4">Termos de uso</h1>
                <div className="bg-gray-200 p-4 text-black text-lg mb-8 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer posuere erat a ante.
                </div>
                <div className="flex justify-end">
                    <Link to="/find">
                        <button className="px-4 py-2 bg-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline">
                            Aceitar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
