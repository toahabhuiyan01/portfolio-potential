import AppLogo from '@/app/_assets/images/Logo.svg'
import Image from 'next/image'
import { ROUTES } from './TopBar'
import Link from 'next/link'

function Footer() {
    return (
        <section
            className='flex items-center gap-12 pt-20 flex-col  dark:bg-gray-900 bg-gray-50'
            style={{
                // width:'100vw'
            }}
        >
            <Image
                src={AppLogo}
                alt="App Logo"
            />

            <div className="flex justify-between flex-row gap-4">
                <div className="flex justify-between flex-wrap">
                    {
                        ROUTES.map((route) => (
                            <Link
                                key={route.href}
                                className="dark:text-white font-normal text-xl px-4 py-2"
                                href={route.href}
                            >
                                {route.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div>

            </div> 

            <footer className='p-3 bg-gray-600 w-full'>
                <p className="font-normal text-xl text-white text-center">© 2021 <span className='text-orange-500'>Mumair</span> All Rights Reserved Inc</p>
            </footer>
        </section>
    )
}

export default Footer