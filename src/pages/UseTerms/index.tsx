import { Link } from 'react-router-dom';

export default function UseTerms() {
    return (
        <div className="w-[375px] h-[812px] relative bg-white" style={{ boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)' }}>
            <div className="w-[375px] h-[812px] absolute left-[-1px] top-[-1px] bg-[#282f2d]" />
            <p className="w-[270px] h-[51px] absolute left-[73px] top-[201px] text-[35.20000076293945px] font-bold text-left text-[#fbbd19]">
                Termos de uso
            </p>
            <Link to="/find">
                <div className="flex justify-center items-center w-[319px] h-[54px] absolute left-7 top-[697px] gap-2.5 px-[54px] py-2.5 rounded-[50px] bg-[#fbbd19]">
                    <p className="flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#282f2d]">Aceitar</p>
                </div>
            </Link>
            <div className="w-[129px] h-[31px] absolute left-[123px] top-[781px]">
                <div className="w-[128.94px] h-[4.81px] absolute left-[-0.8px] top-[18.36px] rounded-[96.23px] bg-white" />
            </div>
            <div className="w-[328px] h-[371px]">
                <div className="w-[328px] h-[371px] absolute left-[25.5px] top-[273.5px] rounded-[20px] bg-[#393b4e]" />
            </div>
        </div>
    );
}
