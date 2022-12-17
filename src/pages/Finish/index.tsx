import { Link } from 'react-router-dom';

export default function Finish() {
    return (
        <div
            className="w-[375px] h-[812px] relative overflow-hidden bg-white"
            style={{ boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)' }}
        >
            <div className="w-[375px] h-[812px] absolute left-[-1px] top-[-1px] bg-[#282f2d]" />
            <p className="w-[301px] h-[42px] absolute left-12 top-[370px] text-[35.20000076293945px] font-bold text-left text-[#fbbd19]">
                Carona finalizada!
            </p>
            <div className="w-[129px] h-[31px] absolute left-[123px] top-[781px]">
                <div className="w-[128.94px] h-[4.81px] absolute left-[-0.8px] top-[18.36px] rounded-[96.23px] bg-white" />
            </div>
            <Link to="/find">
                <div className="flex justify-center items-center w-[137px] h-[39px] absolute left-[110px] top-[709px] gap-2.5 px-[54px] py-2.5 rounded-[50px] bg-[#fbbd19]">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#282f2d]">Inicio</p>
                </div>
            </Link>
            <svg
                width={117}
                height={130}
                viewBox="0 0 117 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[117px] h-[130px]"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M105.427 88.7402L82.2742 75.9205L91.0031 62.2884C93.0379 59.1049 94.1055 55.5384 94.1087 51.9136V30.3333C94.1087 22.2884 90.3571 14.573 83.6791 8.88443C77.0012 3.19582 67.944 0 58.5 0C49.056 0 39.9988 3.19582 33.3209 8.88443C26.643 14.573 22.8913 22.2884 22.8913 30.3333V51.9136C22.8945 55.5385 23.9621 59.1051 25.9969 62.2887L34.7258 75.9205L11.5729 88.7402C8.01455 90.7024 5.09074 93.3935 3.06898 96.5672C1.04721 99.7408 -0.0079528 103.296 4.51303e-05 106.907V130H117V106.907C117.008 103.296 115.953 99.7409 113.931 96.5672C111.909 93.3935 108.985 90.7025 105.427 88.7402V88.7402ZM106.826 121.333H10.174V106.907C10.1692 104.74 10.8023 102.607 12.0155 100.703C13.2286 98.7986 14.9829 97.184 17.118 96.0066L48.1674 78.8144L34.9287 58.1387C33.7078 56.2285 33.0672 54.0886 33.0652 51.9136V30.3333C33.0652 24.587 35.745 19.076 40.5149 15.0127C45.2849 10.9494 51.7543 8.66667 58.5 8.66667C65.2457 8.66667 71.7151 10.9494 76.4851 15.0127C81.255 19.076 83.9348 24.587 83.9348 30.3333V51.9136C83.9328 54.0886 83.2922 56.2285 82.0714 58.1387L68.8329 78.8144L99.883 96.0066C102.018 97.1841 103.772 98.7988 104.985 100.703C106.198 102.607 106.831 104.74 106.826 106.907V121.333Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}
