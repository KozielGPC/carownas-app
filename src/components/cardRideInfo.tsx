import { FaClock, FaMapMarkerAlt, FaStar, FaUser, FaUsers } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Ride } from '../interfaces/iRide';

interface Props {
    ride: Ride;
}

export default function CardRideInfo(props: Props) {
    const stars = [];
    for (let index = 0; index < props.ride.rider.stars; index++) {
        stars.push(<FaStar className="w-4 h-4 mr-1 text-yellow-400" key={index} />);
    }
    const user_ra = localStorage.getItem('ra_user');
    const history = useHistory();
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
                        <p className="text-gray-300">De: {props.ride.from}</p>
                    </div>
                    <div className="flex mt-2 text-gray-300">
                        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">Para: {props.ride.to}</p>
                    </div>
                    <div className="flex mt-2 text-gray-300">
                        <FaClock className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">Saída: {props.ride.time_start}</p>
                    </div>
                    <div className="flex mt-2 text-gray-300">
                        <FaClock className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">Chegada: {props.ride.time_end}</p>
                    </div>
                    <div className="flex mt-2 text-gray-300">
                        <FaUsers className="w-4 h-4 mr-1" />
                        <p className="text-gray-300">
                            Vagas: {props.ride.filled_spots}/{props.ride.total_spots}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
