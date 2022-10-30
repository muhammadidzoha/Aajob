import Image from 'next/image'
import Logo from '../public/Logo.svg'
import MenuNavbar from './MenuNavbar'

export default function Navbar() {
    return (
        <header className="max-w-[1920px] mx-auto px-4">
            <div className="flex items-center">
                <div className='w-1/12 mr-[121px] ml-[107px]'>
                    <Image src={Logo} alt='Logo' />
                </div>
                <nav className='w-[60.66667%]'>
                    <ul className='flex items-center space-x-12'>
                        <MenuNavbar title='Find a Job' />
                        <MenuNavbar title='Companies' />
                        <MenuNavbar title='About Us' />
                        <MenuNavbar title='Post a Job' />
                    </ul>
                </nav>
                <button className='text-second bg-white w-[124px] h-[60px] rounded-[15px]'>
                    Sign In
                </button>
            </div>
        </header>
    )
}