import Image from 'next/image'
import bubblecreate from '../public/bubblecreate.svg'

export default function CreateSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-[200px]">
            <div className="bg-first w-[1112px] h-[300px] mx-auto rounded-[40px] flex justify-center relative">
                <div className="flex items-center justify-center">
                    <h1 className='text-[42px] text-white w-[730px] leading-[56px]'>Let’s get connected and start finding your dream job</h1>
                    <div className="bg-white w-[232px] h-[63px] rounded-[10px] text-[17px] text-first font-medium flex justify-center items-center">Create free Account</div>
                </div>
                <div className="absolute right-0">
                    <Image src={bubblecreate} alt='bubblecreate' />
                </div>
            </div>
        </section>
    )
}