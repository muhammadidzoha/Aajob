import Link from 'next/link'

interface MenuNavbarProps {
    title: string
}

export default function MenuNavbar(props: MenuNavbarProps) {

    const { title } = props

    return (
        <li className='text-second text-[17px] font-medium'><Link href='/'>{title}</Link></li>
    )
}