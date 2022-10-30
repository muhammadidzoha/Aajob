import Image from 'next/image'

export default function PostJobSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-[200px]">
            <div className="flex justify-between relative">
                <div className="flex items-start flex-col justify-center">
                    <h1 className='text-[52px] w-[498px] leading-[70px] text-second font-semibold mb-10'>500+ World Top Company Posted There Job</h1>
                    <div className="bg-first rounded-[10px] w-[170px] h-[63px] text-white text-[17px] font-medium flex items-center justify-center">Post a Job</div>
                </div>
                <div className="absolute bg-[#D5D3E559] w-[300px] h-[83px] rounded-[18px] right-96 top-10 backdrop-blur-[52px] flex items-center">
                    <p className='text-base text-second absolute left-1/2 -translate-x-1/2 w-[245px]'>We need a UI/UX Designer for our Team</p>
                </div>
                <Image src='/Group 37.png' alt='group37' width='500' height='560' className='-z-10' />
            </div>
        </section>
    )
}