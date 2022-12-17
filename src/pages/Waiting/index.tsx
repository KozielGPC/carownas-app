import { Link } from 'react-router-dom';

export default function Waiting() {
    return (
        <div className="w-[375px] h-[812px] relative overflow-hidden bg-white">
            <div
                className="w-[375px] h-[812px] absolute left-[-1px] top-[-1px] bg-[#282f2d]"
                style={{ boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)' }}
            />
            <div className="w-[129px] h-[31px] absolute left-[113px] top-[781px]">
                <div className="w-[128.94px] h-[4.81px] absolute left-[-0.8px] top-[18.36px] rounded-[96.23px] bg-white" />
            </div>
            <svg
                width={370}
                height={752}
                viewBox="0 0 370 752"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[375px] h-[752px]"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 40C0 21.1438 0 11.7157 5.85786 5.85786C11.7157 0 21.1438 0 40 0H335C353.856 0 363.284 0 369.142 5.85786C375 11.7157 375 21.1438 375 40V712C375 730.856 375 740.284 369.142 746.142C363.284 752 353.856 752 335 752H192.79H40C21.1438 752 11.7157 752 5.85786 746.142C0 740.284 0 730.856 0 712V40Z"
                    fill="#282F2D"
                />
            </svg>
            <Link to="/carrideinfos">
                <div className="flex justify-center items-center w-[356px] h-[39px] absolute left-2.5 top-[724px] gap-2.5 px-[54px] py-2.5 rounded-[50px] bg-[#fbbd19]">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#282f2d]">Informações</p>
                </div>
            </Link>
            <p className="w-[340px] h-[33px] absolute left-[57px] top-[362px] text-2xl font-bold text-left text-white">
                Corrida em andamento...
            </p>
        </div>
    );
}
