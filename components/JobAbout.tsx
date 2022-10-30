import Image from 'next/image'
import petik from '../public/petik.svg'

export default function JobAbout() {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-[200px]">
            <h1 className='text-[52px] text-center w-[704px] mx-auto leading-[70px] text-second font-semibold mb-20'>What a Job holder says About Us</h1>
            <div className="grid grid-cols-2 gap-x-8">
                <div className="bg-white w-[540px] h-[228px] rounded-[25px] drop-shadow-[8px_8px_80px_rgba(133,130,159,0.12)] flex flex-col items-center justify-center relative">
                    <p className='text-[17px] text-[#8D93AB] w-[492px] mb-9'>This is the best job searching site I've ever seen. I found my dream job through this site, Come and grab this golden opportunity!</p>
                    <div className="flex self-start space-x-5 ml-9">
                        <Image src='/Group 41.png' alt='group41' width='56' height='56' />
                        <div>
                            <h6 className='text-second text-lg'>Jennifer</h6>
                            <p className='text-[12px] text-[#8D93AB]'>Jobholder</p>
                        </div>
                        <div className="absolute right-8 bottom-3">
                            <Image src={petik} alt='petik' />
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[540px] h-[228px] rounded-[25px] drop-shadow-[8px_8px_80px_rgba(133,130,159,0.12)] flex flex-col items-center justify-center relative">
                    <p className='text-[17px] text-[#8D93AB] w-[492px] mb-9'>This is the best job searching site I've ever seen. I found my dream job through this site, Come and grab this golden opportunity!</p>
                    <div className="flex self-start space-x-5 ml-9">
                        <Image src='/Group 42.png' alt='group42' width='56' height='56' />
                        <div>
                            <h6 className='text-second text-lg'>Jhon Doe</h6>
                            <p className='text-[12px] text-[#8D93AB]'>Jobholder</p>
                        </div>
                        <div className="absolute right-8 bottom-3">
                            <Image src={petik} alt='petik' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}