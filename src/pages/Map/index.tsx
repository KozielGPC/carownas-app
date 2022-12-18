import { FaAngleDoubleRight, FaBell, FaQuestionCircle, FaStar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Map() {
    return (
        <div className="bg-gray-800 min-h-screen flex flex-col">
            <header className="flex justify-between items-center px-4 py-3 bg-gray-900">
                <FaBell className="text-gray-300" />
                <span className="text-gray-300">Notifications</span>
                <FaQuestionCircle className="text-gray-300" />
                <span className="text-gray-300">Help</span>
                <button className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-900">
                    <FaUser className="text-gray-300" />
                </button>
            </header>
            <main className="flex-1 overflow-y-auto px-4 py-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 py-6">
                        <div className="relative rounded-lg shadow-lg bg-gray-900">
                            <div className="relative pb-5/6">
                                <div className="absolute top-0 left-0 w-16 h-16 -mt-10 -ml-10 bg-gray-800 rounded-full flex items-center justify-center">
                                    <FaUser className="text-gray-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-16 flex items-center justify-between px-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-gray-300" />
                                        ))}
                                    </div>
                                    <button
                                        className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-800"
                                        // onClick={() => history.push('/next-page')}
                                    >
                                        <FaAngleDoubleRight className="text-gray-300" />
                                    </button>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <div className="flex flex-col">
                                    <span className="text-gray-300">Where to go:</span>
                                    <span className="text-gray-300">When to go:</span>
                                    <span className="text-gray-300">How much slots have in the car:</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="flex justify-between items-center px-4 py-3 bg-gray">
                <div className="flex justify-between py-3">
                    <button className="px-4 py-2 font-bold text-gray-300 bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray">
                        Mapa
                    </button>
                    <button className="px-4 py-2 font-bold text-gray-300 bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray">
                        Recentes
                    </button>
                </div>
                <div className="px-4 py-3 flex justify-between items-center">
                    <div className="w-1/2 pr-2">
                        <label className="block font-bold text-gray-300 mb-2" htmlFor="from">
                            From
                        </label>
                        <input
                            className="w-full px-3 py-2 font-bold text-gray-300 bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray"
                            type="text"
                            id="from"
                        />
                    </div>
                    <div className="w-1/2 pl-2">
                        <label className="block font-bold text-gray-300 mb-2" htmlFor="to">
                            To
                        </label>
                        <input
                            className="w-full px-3 py-2 font-bold text-gray-300 bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray"
                            type="text"
                            id="to"
                        />
                    </div>
                </div>
                <div className="px-4 py-3">
                    <button
                        className="w-full px-4 py-2 font-bold text-gray-300 bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray"
                        // onClick={() => history.push('/next-page')}
                    >
                        Go to next page
                    </button>
                </div>
            </footer>
        </div>
        //     <header className="flex items-center justify-between p-4">
        //         <button className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
        //             <svg className="w-6 h-6 fill-current text-gray-700" viewBox="0 0 24 24">
        //                 <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        //             </svg>
        //         </button>
        //         <h1 className="font-bold text-xl text-white">Mapa</h1>
        //     </header>
        //     <main className="flex-1 overflow-y-scroll">
        //         <div className="relative w-full h-64 bg-gray-300">{/* map component goes here */}</div>
        //         <div className="flex justify-between p-4">
        //             <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        //                 Favoritos
        //             </button>
        //             <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        //                 Recentes
        //             </button>
        //         </div>
        //         <div className="flex justify-between p-4 flex-col items-center">
        //             <input
        //                 className="px-4 py-2 w-1/2 rounded-full bg-gray-200 focus:outline-none focus:shadow-outline"
        //                 type="text"
        //                 placeholder="From"
        //             />
        //             <input
        //                 className="px-4 py-2 w-1/2 rounded-full bg-gray-200 focus:outline-none focus:shadow-outline"
        //                 type="text"
        //                 placeholder="To"
        //             />
        //         </div>
        //     </main>
        // </div>
        // <div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
        //     <div
        //         className="w-[375px] h-[812px] absolute left-[-1px] top-[-1px] bg-[#282f2d]"
        //         style={{ boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)' }}
        //     />
        //     <div className="w-[129px] h-[31px] absolute left-[113px] top-[781px]">
        //         <div className="w-[128.94px] h-[4.81px] absolute left-[-0.8px] top-[18.36px] rounded-[96.23px] bg-white" />
        //     </div>
        //     <div className="w-[375px] h-[752px]">
        //         <svg
        //             width={365}
        //             height={752}
        //             viewBox="0 0 365 752"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //             className="absolute left-[9.5px] top-[47.5px]"
        //             preserveAspectRatio="xMidYMid meet"
        //         >
        //             <path
        //                 d="M0 40C0 21.1438 0 11.7157 5.85786 5.85786C11.7157 0 21.1438 0 40 0H335C353.856 0 363.284 0 369.142 5.85786C375 11.7157 375 21.1438 375 40V712C375 730.856 375 740.284 369.142 746.142C363.284 752 353.856 752 335 752H192.79H40C21.1438 752 11.7157 752 5.85786 746.142C0 740.284 0 730.856 0 712V40Z"
        //                 fill="#282F2D"
        //             />
        //         </svg>
        //         <div className="w-[95px] h-[31px]">
        //             <div className="w-[66.57px] h-[3.49px]">
        //                 <p className="w-[66.57px] h-[3.49px] absolute left-[29px] top-[709px] text-xl font-bold text-left text-white">
        //                     PARA :
        //                 </p>
        //             </div>
        //             <div className="w-[12.35px] h-[2.61px] absolute left-[111.65px] top-[737.39px] overflow-hidden" />
        //         </div>
        //         <div className="w-[114.39px] h-[26.42px]">
        //             <div className="w-[114.39px] h-[26.42px]">
        //                 <p className="w-[114.39px] h-[26.42px] absolute left-[29px] top-[668px] text-xl font-bold text-left text-white">
        //                     DE :
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-[253px] h-[29px]">
        //         <div className="w-[253px] h-[29px] absolute left-[114.5px] top-[709.5px] rounded-[20px] bg-[#fefeff]" />
        //     </div>
        //     <div className="w-[253px] h-[29px]">
        //         <div className="w-[253px] h-[29px] absolute left-[114.5px] top-[665.5px] rounded-[20px] bg-[#fefeff]" />
        //     </div>
        //     <div className="flex justify-center items-center w-[137px] h-[39px] absolute left-[214px] top-[581px] gap-2.5 px-[54px] py-2.5 rounded-[50px] bg-[#393b4e]">
        //         <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">Recentes</p>
        //     </div>
        //     <div className="flex justify-center items-center w-[137px] h-[39px] absolute left-10 top-[581px] gap-2.5 px-[54px] py-2.5 rounded-[50px] bg-[#393b4e]">
        //         <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-white">Favoritos</p>
        //     </div>
        //     <p className="w-[181px] h-[25px] absolute left-[124px] top-[669px] text-[15px] font-semibold text-left text-black">
        //         UTFPR
        //     </p>
        //     <p className="w-[181px] h-[25px] absolute left-[124px] top-[714px] text-[15px] font-semibold text-left text-black">
        //         Centro
        //     </p>
        //     <div
        //         className="flex justify-center items-center w-[37.74px] absolute left-[18px] top-12 gap-[7.272727012634277px] px-[39.27272415161133px] py-[7.272727012634277px] rounded-[36.36px] bg-white"
        //         style={{ boxShadow: '0px 7.272727012634277px 18.909090042114258px 0 rgba(0,0,0,0.1)' }}
        //     >
        //         <svg
        //             width={18}
        //             height={18}
        //             viewBox="0 0 18 18"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //             className="flex-grow-0 flex-shrink-0 w-[17.45px] h-[17.45px] relative"
        //             preserveAspectRatio="none"
        //         >
        //             <path
        //                 d="M14.6846 9.08168L3.04942 8.91885M8.06859 14.0805L3.04942 8.91885L8.21106 3.89968"
        //                 stroke="black"
        //                 stroke-width="1.45455"
        //                 stroke-linecap="round"
        //                 stroke-linejoin="round"
        //             />
        //         </svg>
        //     </div>
        //     <p className="w-[113px] h-[39px] absolute left-[70px] top-11 text-[28px] font-bold text-left text-[#d8d8d8]">
        //         Mapa
        //     </p>
        //     <Link to="/waiting">
        //         <div className="w-[353px] h-[436px]">
        //             <img
        //                 src="rectangle-329.png"
        //                 className="w-[353px] h-[436px] absolute left-[10.5px] top-[98.5px] rounded-[20px] object-cover"
        //             />
        //             <img
        //                 src="0103c5a4ed0dd8841f933aa24d4e4b4e-2.png"
        //                 className="w-[30px] h-[22px] absolute left-[123.5px] top-[417.5px] object-cover"
        //             />
        //         </div>
        //     </Link>
        // </div>
    );
}
