import Image from "next/image"
import AppLogo from '@/app/_assets/images/Logo.svg'
import Link from "next/link"

export const ROUTES = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About Me',
        href: '/about-me'
    },
    {
        name: 'Services',
        href: '/services'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Testimonials',
        href: '/testimonials'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
]

function TopBar() {
    return (
        <div
            className="flex justify-between items-center fixed top-0 p-4"
            style={{
                maxWidth: '100%',
                width: '1420px'
            }}
        >
            <Image
                className="dark:text-white"
                src={AppLogo}
                alt="App Logo"
            />
            <div className="flex justify-between flex-row gap-4">
                <div className="flex justify-between">
                    {
                        ROUTES.map((route) => (
                            <Link
                                key={route.href}
                                className="font-normal text-xl px-4 py-2"
                                href={route.href}
                            >
                                {route.name}
                            </Link>
                        ))
                    }
                </div>

                <button
                    className="text-white font-normal text-xl bg-orange-500 rounded-md px-4 py-2"
                >
                    Download CV
                </button>
            </div>
        </div>
    )
}

export default TopBar