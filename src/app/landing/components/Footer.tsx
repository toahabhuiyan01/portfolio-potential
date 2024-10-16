'use client'

import AppLogoL from '@/app/_assets/images/logo-light.svg'
import AppLogoD from '@/app/_assets/images/logo-dark.svg'
import Image from 'next/image'
import { ROUTES } from './TopBar'
import Link from 'next/link'
import { useTheme } from 'next-themes'

function Footer() {
    const { resolvedTheme } = useTheme()

    return (
        <section
            className='flex items-center gap-12 pt-20 flex-col dark:bg-black w-full'
        >
            {
                resolvedTheme !== 'dark' ? (
                    <Image
                        src={AppLogoL}
                        alt="App Logo"
                    />
                ) : (
                    <Image
                        src={AppLogoD}
                        alt="App Logo"
                    />
                )
            }

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