import Image from 'next/image'
import bbannerapply from '../public/bbannerapply.svg'
import bbannersearch from '../public/bbannersearch.svg'
import bbannerupload from '../public/bbannerupload.svg'
import bubblebanner from '../public/bubblebanner.svg'
import checkcircle from '../public/check-circle.svg'
import searchjob from '../public/searchjob.svg'
import upload from '../public/upload-cloud.svg'
import user from '../public/user.svg'

export default function BannerSection() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="w-[466px] h-[273px] pt-[260px]">
                        <h1 className='text-[19px] font-bold font-serif text-first leading-[30px]'>How it Workers?</h1>
                        <h1 className='text-[52px] font-semibold leading-[70px] text-second w-[305px] mb-8'>
                            Follow
                            Easy 4 Steps
                        </h1>
                        <p className='text-lg leading-[30px] font-normal text-[#8D93AB]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="w-[585px] pt-[250px]">
                        <div className="grid grid-cols-2 gap-y-[45px] gap-x-[45px]">
                            <div className="bg-white w-[270px] h-[270px] drop-shadow-[10px_10px_100px_rgba(133,130,159,0.1)] rounded-[35px] relative -top-40">
                                <span className="absolute left-0">
                                    <Image src={bubblebanner} alt='bubble banner' />
                                </span>
                                <div className="absolute top-14 left-1/2 -translate-x-1/2">
                                    <Image src={user} alt='user' />
                                </div>
                                <h3 className='text-xl text-second leading-[27px] text-center mt-[130px]'>Create Account</h3>
                                <p className='text-[17px] text-center text-[#8D93AB] leading-[22px] mt-2'>First you have to create an account here.</p>
                            </div>
                            <div className="bg-white w-[270px] h-[270px] drop-shadow-[10px_10px_100px_rgba(133,130,159,0.1)] rounded-[35px] relative -top-24">
                                <span className="absolute left-0">
                                    <Image src={bbannerupload} alt='bubble banner' />
                                </span>
                                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                                    <Image src={upload} alt='upload' />
                                </div>
                                <h3 className='text-xl text-second leading-[27px] text-center mt-[130px]'>CV/Resume</h3>
                                <p className='text-[17px] absolute left-1/2 -translate-x-1/2 text-center text-[#8D93AB] leading-[22px] mt-2 w-[206px]'>For a job you have to upload your best CV or Resume.</p>
                            </div>
                            <div className="bg-white w-[270px] h-[270px] drop-shadow-[10px_10px_100px_rgba(133,130,159,0.1)] rounded-[35px] relative -top-36">
                                <span className="absolute left-0">
                                    <Image src={bbannersearch} alt='bubble banner' />
                                </span>
                                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                                    <Image src={searchjob} alt='search job' />
                                </div>
                                <h3 className='text-xl text-second leading-[27px] text-center mt-[130px]'>Search Job</h3>
                                <p className='text-[17px] absolute left-1/2 -translate-x-1/2 text-center text-[#8D93AB] leading-[22px] mt-2 w-[206px]'>Find your best job using Search or categories.</p>
                            </div>
                            <div className="bg-white w-[270px] h-[270px] drop-shadow-[10px_10px_100px_rgba(133,130,159,0.1)] rounded-[35px] relative -top-20">
                                <span className="absolute left-0">
                                    <Image src={bbannerapply} alt='bubble banner' />
                                </span>
                                <div className="absolute top-16 left-1/2 -translate-x-1/2">
                                    <Image src={checkcircle} alt='check circle' />
                                </div>
                                <h3 className='text-xl text-second leading-[27px] text-center mt-[130px]'>Apply Them</h3>
                                <p className='absolute left-1/2 -translate-x-1/2 text-[17px] text-center text-[#8D93AB] leading-[22px] mt-2 w-[215px]'>Finally you apply your job and enjoy your work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}