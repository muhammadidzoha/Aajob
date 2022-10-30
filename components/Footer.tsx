import Image from 'next/image'
import Logo from '../public/Logo.svg'
import Mail from '../public/mail.svg'

export default function Footer() {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-[200px]">
            <div className="flex justify-between">
                <div className="w-[270px] h-[229px]">
                    <div className='mb-[13px]'>
                        <Image src={Logo} alt='Logo' />
                    </div>
                    <p className='text-[17px] text-[#8D93AB] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className="flex space-x-3">
                        <Image src={Mail} alt='Icon' />
                        <p className='text-[17px] text-[#8D93AB]'>hello@aajob.com</p>
                    </div>
                </div>
                <div className="w-[134px] h-[226px]">
                    <h3 className='text-[22px] text-second font-medium mb-5'>Useful Links</h3>
                    <div className="space-y-3">
                        <p className='text-[17px] text-[#8D93AB]'>Find a Job</p>
                        <p className='text-[17px] text-[#8D93AB]'>Companies</p>
                        <p className='text-[17px] text-[#8D93AB]'>About Us</p>
                        <p className='text-[17px] text-[#8D93AB]'>Post a Job</p>
                        <p className='text-[17px] text-[#8D93AB]'>Testimonial</p>
                    </div>
                </div>
                <div className="w-[141px] h-[226px]">
                    <h3 className='text-[22px] text-second font-medium mb-5'>Category</h3>
                    <div className="space-y-3">
                        <p className='text-[17px] text-[#8D93AB]'>UI Designer</p>
                        <p className='text-[17px] text-[#8D93AB]'>UX Designer</p>
                        <p className='text-[17px] text-[#8D93AB]'>Grapic Designer</p>
                        <p className='text-[17px] text-[#8D93AB]'>Web Developers</p>
                        <p className='text-[17px] text-[#8D93AB]'>More</p>
                    </div>
                </div>
                <div className="w-[141px] h-[226px]">
                    <h3 className='text-[22px] text-second font-medium mb-5'>Follow Us</h3>
                    <div className="space-y-3">
                        <p className='text-[17px] text-[#8D93AB]'>Linked In</p>
                        <p className='text-[17px] text-[#8D93AB]'>Facebook</p>
                        <p className='text-[17px] text-[#8D93AB]'>Instagram</p>
                        <p className='text-[17px] text-[#8D93AB]'>Dribbble</p>
                        <p className='text-[17px] text-[#8D93AB]'>Behance</p>
                    </div>
                </div>
            </div>
        </section>
    )
}