import { Link } from 'react-router-dom';
import { FaBell, FaChevronRight, FaQuestionCircle, FaStar, FaUser } from 'react-icons/fa';

export default function Find() {
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white bg-[#282f2d]">
            <div className="w-[375px] h-[50px] flex flex-row justify-around items-center">
                <header className="flex justify-center items-center">
                    <button aria-label="Notifications" className="text-xl mr-4 text-white flex items-center">
                        <FaBell />
                        Notifications
                    </button>
                    <button aria-label="Ajuda" className="text-xl mr-4 text-white flex items-center">
                        <FaQuestionCircle />
                        Ajuda
                    </button>
                    <button aria-label="User profile" className="text-xl mr-4 text-white flex items-center">
                        <FaUser />
                    </button>
                </header>
                {/* <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">Notificações</p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">Ajuda</p> */}
            </div>

            <div className="w-[375px] h-[30px] flex flex-row justify-between items-center">
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-gray-400 relative left-[15px]">
                    Caronas Disponíveis
                </p>
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-gray-400 relative right-[35px]">
                    º º º
                </p>
            </div>

            <div className="relative">
                <div className="bg-gray-800 rounded-lg p-6 flex">
                    <div className="mr-6">
                        <FaUser className="text-4xl text-white" />
                        <div className="mt-2 flex items-center text-white">
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-xl font-bold text-white">Centro</div>
                        <div className="text-xl font-bold text-white">19:30</div>
                        <div className="text-xl font-bold text-white">3/4</div>
                    </div>
                    <button className="absolute bottom-0 right-0 rounded-full bg-white text-gray-800 p-3 flex items-center justify-center w-12 h-12">
                        <FaChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 flex">
                    <div className="mr-6">
                        <FaUser className="text-4xl text-white" />
                        <div className="mt-2 flex items-center text-white">
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                            <FaStar className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="text-xl font-bold text-white">Centro</div>
                        <div className="text-xl font-bold text-white">19:30</div>
                        <div className="text-xl font-bold text-white">3/4</div>
                    </div>
                    <button className="absolute bottom-0 right-0 rounded-full bg-white text-gray-800 p-3 flex items-center justify-center w-12 h-12">
                        <FaChevronRight className="w-4 h-4" />
                    </button>
                </div>
                {/* <div className="w-[334px] h-[171.56px] bg-[#393b4e] rounded-[20px] relative left-[17.5px] top-[30px]">
                    <div className="relative"></div>
                    <p className="w-[113px] h-[39px] relative left-[200px] top-[20px] text-[28px] font-bold text-left text-[#d8d8d8]">
                        Centro
                    </p>
                    <p className="w-[86px] h-[39px] relative left-[200px] top-[30px] text-[27px] font-bold text-left text-[#d8d8d8]">
                        19:30
                    </p>
                    <p className="w-11 h-[29px]  relative left-[200px] top-[40px] text-[27px] font-bold text-left text-[#d8d8d8]">
                        3/4
                    </p>
                </div>

                <div className="w-[334px] h-[171.56px] bg-[#393b4e] rounded-[20px] relative left-[17.5px] top-[50px]">
                    <p className="w-[113px] h-[39px] relative left-[200px] top-[20px] text-[28px] font-bold text-left text-[#d8d8d8]">
                        Centro
                    </p>
                    <p className="w-[86px] h-[39px] relative left-[200px] top-[30px] text-[27px] font-bold text-left text-[#d8d8d8]">
                        19:30
                    </p>
                    <p className="w-11 h-[29px]  relative left-[200px] top-[40px] text-[27px] font-bold text-left text-[#d8d8d8]">
                        3/4
                    </p>
                </div> */}
            </div>

            <div className="rounded-lg p-6 flex flex-col">
                <div className="mb-4 flex items-center">
                    <label htmlFor="from" className="mr-2 font-bold text-gray-100">
                        De:
                    </label>
                    <input type="text" id="from" className="bg-gray-600 rounded p-2 w-full" />
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="to" className="mr-2 font-bold text-gray-100">
                        Para:
                    </label>
                    <input type="text" id="to" className="bg-gray-600 rounded p-2 w-full" />
                </div>
                <button className="relative w-12 h-12 mx-auto rounded-full bg-white text-gray-800 p-3 flex items-center justify-center">
                    <FaChevronRight className="w-4 h-4" />
                </button>
            </div>
            {/* <div className="relative left-[30px] top-[70px]"> */}

            {/* <div className="relative flex flex-row">
                    <p className="text-xl font-bold text-left text-white w-[80px]">DE :</p>
                    <input className="h-[30px] w-[200px] relative left-[20px]" type="text" name="" id="" />
                </div>
                <div className="relative top-[20px] flex flex-row">
                    <p className=" text-xl font-bold text-left text-white w-[80px]">PARA :</p>
                    <input className="h-[30px] w-[200px] relative left-[20px]" type="text" name="" id="" />
                </div> */}

            {/* <Link to="/map">
                    <button className="bg-[#FFFFFF] w-[200px] h-[40px] rounded-[10px] relative top-[40px] left-[55px] font-bold">
                        Confirmar
                    </button>
                </Link> */}
            {/* </div> */}
        </div>
    );
}
