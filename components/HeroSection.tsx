import react from 'react'
import Image from 'next/image'
import primarydecore from '../public/Rectangle 1.svg'
import secondarydecore from '../public/Rectangle 10.svg'
import bubbledecore from '../public/bubble.svg'
import searchicon from '../public/search.svg'
import locationicon from '../public/map-pin.svg'
import jobicon from '../public/briefcase.svg'
import playicon from '../public/play.svg'

export default function HeroSection() {
    return (
        <section className="relative mb-28 overflow-hidden">
            <span className="absolute right-0">
                <Image src={primarydecore} alt='primarydecore' />
            </span>
            <span className="absolute left-[1457px] top-[338px]">
                <Image src={secondarydecore} alt='secondarydecore' />
            </span>
            <span className="absolute -right-28 -top-[48px]">
                <Image src={secondarydecore} alt='secondarydecore' />
            </span>
            <span className="absolute left-[1494px] top-[152px] z-10">
                <Image src={bubbledecore} alt='bubbledecore' />
            </span>
            <span className="absolute -right-7 top-[721px]">
                <Image src={bubbledecore} alt='bubbledecore' />
            </span>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex">
                    <div className="w-6/12 pt-56">
                        <h1 className='text-6xl font-semibold leading-[81px] tracking-normal mb-[71px]'>Your dream job is
                            waiting for you
                        </h1>
                        <div className="relative mb-[267px]">
                            <input type='text' className='bg-white border-[1px] border-[#E3E3E3] w-[571px] h-[75px] drop-shadow-[8px_8px_63px_rgba(133,130,159,0.13)] rounded-[15px]' />
                            <div className="absolute top-1/2 -translate-y-1/2 ml-[31px] flex">
                                <Image src={locationicon} alt='locationicon' />
                                <p className='ml-[15px] text-sm text-[#ACB9CF]'>Find Your Location</p>
                                <div className="bg-[#BAC8DF] absolute h-10 w-[1px] ml-[197px] -top-2"></div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 ml-[268px] flex">
                                <Image src={jobicon} alt='jobicon' />
                                <p className='ml-[15px] text-sm text-[#ACB9CF]'>Job Category</p>
                                <div className="relative">
                                    <span className="absolute w-2 h-2 border-[#ACB9CF] border-b border-r transform rotate-45 translate-y-1/2 ml-[31px]"></span>
                                </div>
                            </div>
                            <div className="bg-first absolute w-[65px] h-[65px] top-1 right-0 rounded-[10px] flex justify-center">
                                <Image src={searchicon} alt='searchicon' />
                            </div>
                        </div>
                        <h1 className='text-xl leading-7 font-medium text-second mb-[30px]'>We are trusted by</h1>
                        <div className="-ml-3 flex">
                            <Image src='/Dribbble.png' alt='Dribbble' width='50' height='50' />
                            <Image src='/Behance.png' alt='Behance' width='50' height='50' />
                            <Image src='/Ig.png' alt='Ig' width='50' height='50' />
                            <Image src='/Linkedin.png' alt='Linkedin' width='50' height='50' />
                        </div>
                    </div>
                    <div className="w-6/12 pt-44 ml-[99px]">
                        <Image src='/austin-distel-jpHw8ndwJ_Q-unsplash 1.png' alt='hero1' width='500' height='650' className='rounded-[60px] absolute' />
                        <div className="absolute top-[686px] left-[827px] flex justify-center items-center">
                            <Image src='/Rectangle 4.png' alt='hero2' width='318' height='214' />
                            <div className="absolute bg-first w-[58px] h-[58px] rounded-full flex justify-center">
                                <Image src={playicon} alt='playicon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}