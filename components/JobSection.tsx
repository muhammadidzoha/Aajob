import Image from 'next/image'
import job from '../public/briefcase.svg'
import bookmarks from '../public/bookmark.svg'

export default function JobSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-[200px]">
            <h1 className="text-center text-[52px] font-semibold leading-[70px] w-[704px] mx-auto">
                Grab these exciting offer and apply now
            </h1>
            <div className="flex justify-center items-center space-x-4 mt-9">
                <h6 className="text-[17px] font-semibold leading-[22px] text-[#8D93AB]">Part Time</h6>
                <label className='bg-white border-2 border-[#CCCCCC] cursor-pointer relative w-10 h-6 rounded-full'>
                    <input type='checkbox' className='sr-only peer' />
                    <span className="w-[17px] h-[17px] bg-[#CCCCCC] absolute rounded-full left-0.5 top-0.5 -translate-y-[0.8px] peer-checked:bg-first peer-checked:left-4 transition-all duration-500"></span>
                </label>
                <h6 className="text-[17px] font-semibold leading-[22px] text-first">Full Time</h6>
            </div>
            <div className="grid grid-cols-2 mt-12 gap-y-7">
                <div className="bg-white w-[530px] h-[247px] drop-shadow-[0px_7px_90px_rgba(132,140,207,0.12)] rounded-[20px] border border-first">
                    <div className="flex w-6/12 mt-[33px] ml-10 items-center">
                        <Image src='/google.png' alt='google' width='40' height='41' />
                        <div className="flex-wrap ml-[17px]">
                            <h6 className='text-xl text-second leading-[27px]'>Google, Bangladesh</h6>
                            <h4 className='text-[22px] text-second font-semibold leading-[29px]'>UI UX Designer</h4>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-[#8D93AB] leading-[30px] ml-[97px]">Posted 10m ago</p>
                        <div className="flex-wrap">
                            <h6 className='text-first text-[17px] font-medium text-right mr-[41px]'>Salary</h6>
                            <p className='text-[15px] leading-[30px] text-second mr-[41px]'>1000.00$ - 1300.00$</p>
                        </div>
                    </div>
                    <div className="flex ml-10 space-x-2 items-center">
                        <Image src={job} alt='job' />
                        <p className='text-[#8D93AB] text-[15px]'>2 - 3 Year experince</p>
                        <div className="w-[5px] h-[5px] bg-[#C4C4C4]"></div>
                        <p className='text-[#8D93AB] text-[15px] leading-[30px] font-medium'>Full Time</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <p className='text-[14px] text-second ml-10 w-[300px]'>We are looking for a senior UI UX designer for our design team </p>
                        <button className="bg-first w-[116px] h-[40px] text-white text-[15px] rounded-lg ml-[30px]">Apply Now</button>
                    </div>
                </div>
                <div className="bg-white w-[530px] h-[247px] drop-shadow-[0px_7px_90px_rgba(132,140,207,0.12)] rounded-[20px] border border-[#CCCCCC]">
                    <div className="flex w-6/12 mt-[33px] ml-10 items-center">
                        <Image src='/airbnb.png' alt='airbnb' width='40' height='41' />
                        <div className="flex-wrap ml-[17px]">
                            <h6 className='text-xl text-second leading-[27px]'>Airbnb, Bangladesh</h6>
                            <h4 className='text-[22px] text-second font-semibold leading-[29px]'>Grapic Designer</h4>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-[#8D93AB] leading-[30px] ml-[97px]">Posted 10m ago</p>
                        <div className="flex-wrap">
                            <h6 className='text-first text-[17px] font-medium text-right mr-[41px]'>Salary</h6>
                            <p className='text-[15px] leading-[30px] text-second mr-[41px]'>1000.00$ - 1300.00$</p>
                        </div>
                    </div>
                    <div className="flex ml-10 space-x-2 items-center">
                        <Image src={job} alt='job' />
                        <p className='text-[#8D93AB] text-[15px]'>2 - 3 Year experince</p>
                        <div className="w-[5px] h-[5px] bg-[#C4C4C4]"></div>
                        <p className='text-[#8D93AB] text-[15px] leading-[30px] font-medium'>Full Time</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <p className='text-[14px] text-second ml-10 w-[300px]'>We are looking for a senior grapic designer for our design team</p>
                        <button className="bg-[#ECEBF8] w-[116px] h-[40px] text-second text-[15px] rounded-lg ml-[30px]">Apply Now</button>
                    </div>
                </div>
                <div className="bg-white w-[530px] h-[247px] drop-shadow-[0px_7px_90px_rgba(132,140,207,0.12)] rounded-[20px] border border-[#CCCCCC] relative">
                    <div className="absolute right-10 top-5">
                        <Image src={bookmarks} alt='bookmarks' />
                    </div>
                    <div className="flex w-6/12 mt-[33px] ml-10 items-center">
                        <Image src='/instagram.png' alt='instagram' width='40' height='41' />
                        <div className="flex-wrap ml-[17px]">
                            <h6 className='text-[17px] text-second leading-[27px]'>Instagram, Bangladesh</h6>
                            <h4 className='text-[22px] text-second font-semibold leading-[29px]'>UI UX Designer</h4>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-[#8D93AB] leading-[30px] ml-[97px]">Posted 10m ago</p>
                        <div className="flex-wrap">
                            <h6 className='text-first text-[17px] font-medium text-right mr-[41px]'>Salary</h6>
                            <p className='text-[15px] leading-[30px] text-second mr-[41px]'>1000.00$ - 1300.00$</p>
                        </div>
                    </div>
                    <div className="flex ml-10 space-x-2 items-center">
                        <Image src={job} alt='job' />
                        <p className='text-[#8D93AB] text-[15px]'>2 - 3 Year experince</p>
                        <div className="w-[5px] h-[5px] bg-[#C4C4C4]"></div>
                        <p className='text-[#8D93AB] text-[15px] leading-[30px] font-medium'>Full Time</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <p className='text-[14px] text-second ml-10 w-[300px]'>We are looking for a senior grapic designer for our design team</p>
                        <button className="bg-[#ECEBF8] w-[116px] h-[40px] text-second text-[15px] rounded-lg ml-[30px]">Apply Now</button>
                    </div>
                </div>
                <div className="bg-white w-[530px] h-[247px] drop-shadow-[0px_7px_90px_rgba(132,140,207,0.12)] rounded-[20px] border border-[#CCCCCC] rellative">
                    <div className="absolute right-10 top-5">
                        <Image src={bookmarks} alt='bookmarks' />
                    </div>
                    <div className="flex w-6/12 mt-[33px] ml-10 items-center">
                        <Image src='/behanceimg.png' alt='behance' width='40' height='41' />
                        <div className="flex-wrap ml-[17px]">
                            <h6 className='text-lg text-second leading-[27px]'>Behance, Bangladesh</h6>
                            <h4 className='text-[22px] text-second font-semibold leading-[29px]'>UI UX Designer</h4>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm text-[#8D93AB] leading-[30px] ml-[97px]">Posted 10m ago</p>
                        <div className="flex-wrap">
                            <h6 className='text-first text-[17px] font-medium text-right mr-[41px]'>Salary</h6>
                            <p className='text-[15px] leading-[30px] text-second mr-[41px]'>1000.00$ - 1300.00$</p>
                        </div>
                    </div>
                    <div className="flex ml-10 space-x-2 items-center">
                        <Image src={job} alt='job' />
                        <p className='text-[#8D93AB] text-[15px]'>2 - 3 Year experince</p>
                        <div className="w-[5px] h-[5px] bg-[#C4C4C4]"></div>
                        <p className='text-[#8D93AB] text-[15px] leading-[30px] font-medium'>Full Time</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <p className='text-[14px] text-second ml-10 w-[300px]'>We are looking for a senior grapic designer for our design team</p>
                        <button className="bg-[#ECEBF8] w-[116px] h-[40px] text-second text-[15px] rounded-lg ml-[30px]">Apply Now</button>
                    </div>
                </div>
            </div>
            <button className="w-[170px] h-[63px] bg-first rounded-[10px] text-white text-medium text-[17px] mt-20 block mx-auto">Browse all</button>
        </section>
    )
}