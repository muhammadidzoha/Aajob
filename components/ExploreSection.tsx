import Image from 'next/image'

export default function ExploreSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 flex pt-[140px]">
            <div className="relative w-[580px]">
                <div className="absolute top-16 left-4">
                    <Image src='/Group 25.png' alt='group25' width='90' height='90' />
                </div>
                <div className="absolute right-[108px] top-[45px]">
                    <Image src='/Group 20.png' alt='group20' width='90' height='90' />
                </div>
                <div className="absolute left-8 top-0 -z-5">
                    <Image src='/Group 21.png' alt='group21' width='470' height='600' />
                </div>
                <div className="absolute top-[327px] left-4">
                    <Image src='/Group 24.png' alt='group24' width='113' height='113' />
                </div>
                <div className="absolute right-[60px] top-[323px]">
                    <Image src='/Group 22.png' alt='group22' width='90' height='90' />
                </div>
                <div className="absolute top-[470px] right-[180px]">
                    <Image src='/Group 23.png' alt='group23' width='116' height='116' />
                </div>
            </div>
            <div className="w-6/12 pt-[95px]">
                <h1 className='text-[60px] font-semibold text-second leading-[70px] w-[530px] h-[246]'>Over 10,000+ Talented People Registered in Our Website</h1>
                <button className="bg-first w-[186px] h-[63px] text-white text-[17px] font-medium rounded-[10px] mt-14">Explore More</button>
            </div>
        </section>
    )
}