'use client'

import Image from "next/image"
import AppLogoL from '@/app/_assets/images/logo-light.svg'
import AppLogoD from '@/app/_assets/images/logo-dark.svg'
import MenuLight from '@/app/_assets/images/menu-light.svg'
import MenuDark from '@/app/_assets/images/menu-dark.svg'
import Link from "next/link"
import { useTheme } from "next-themes"

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"


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
    const { resolvedTheme } = useTheme()
    return (
        <div className="w-lvw fixed flex justify-center">
            <div
                className="flex justify-between items-center top-0 py-4 px-8"
                style={{
                    maxWidth: '100%',
                    width: '1420px'
                }}
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
                            style={{
                                color: resolvedTheme === 'dark' ? 'white' : 'black'
                            }}
                        />
                    )
                }
                
                <div className="hidden lg:flex justify-between flex-row gap-4">
                    {RenderMenuItems()}
                </div>

                
                <Drawer
                    direction="right"
                >
                    <DrawerTrigger className="lg:hidden">
                        <Image
                            className="w-12"
                            src={resolvedTheme === 'dark' ? MenuDark : MenuLight}
                            alt="Menu"
                        />
                    </DrawerTrigger>
                    <DrawerContent
                        className="flex flex-col items-center text-center gap-6 py-16"
                        style={{
                            width: '25rem',
                            maxWidth: '100%'
                        }}
                    >
                        {RenderMenuItems()}
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}

export default TopBar


function RenderMenuItems() {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between">
                {
                    ROUTES.map((route) => (
                        <Link
                            key={route.href}
                            className="font-normal text-xl px-4 py-2 hover:text-orange-500"
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
        </>
    )
}