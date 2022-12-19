import { FaArrowRight, FaClock, FaMapMarkerAlt, FaStar, FaUser, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Ride } from '../interfaces/iRide';

interface Props {
    ride: Ride;
}

export default function CardRide(props: Props) {
    const stars = [];
    for (let index = 0; index < props.ride.rider.stars; index++) {
        stars.push(<FaStar className="w-4 h-4 mr-1 text-yellow-400" key={index} />);
    }

    const handleClick = () => {
        localStorage.setItem('id_carona', props.ride.id.toString());
    };
    return (
        <div className="flex justify-center mt-10">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-600">
                <div className="px-6 py-4">
                    <div className="flex items-center text-gray-300">
                        <FaUser className="w-12 h-12 mr-2" />
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-gray-300">{props.ride.rider.name}</p>
                            <div className="flex items-center mt-1">{stars}</div>
                        </div>
                    </div>
                    <div className="flex mt-4 text-gray-300">
                        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">{props.ride.to}</p>
                    </div>
                    <div className="flex mt-2 text-gray-300">
                        <FaClock className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">{props.ride.time_start}</p>
                    </div>
                    <div className="flex mt-2 text-gray-300">
                        <FaUsers className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">
                            {props.ride.filled_spots}/{props.ride.total_spots}
                        </p>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <Link to="/waiting">
                            <button
                                className="bg-white text-gray-800 hover:bg-gray-100 rounded-full py-2 px-4"
                                onClick={handleClick}
                            >
                                <FaArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
