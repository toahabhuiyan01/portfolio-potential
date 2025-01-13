'use client'

import Image from "next/image"
import ImageMy from '@/app/_assets/images/MyImageTop.svg'
import FBLight from '@/app/_assets/images/facebook-light.svg'
import FBDark from '@/app/_assets/images/facebook-dark.svg'
import IGDark from '@/app/_assets/images/insta-dark.svg'
import IGLight from '@/app/_assets/images/insta-lite.svg'
import TwitDark from '@/app/_assets/images/twitter-dark.svg'
import TwitLight from '@/app/_assets/images/twitter-light.svg'
import ApplyWidth from "./ApplyWidth"
import { useTheme } from "next-themes"

function Hero() {

    return (
        <ApplyWidth className="flex justify-between items-center flex-col-reverse gap-4 px-8 lg:flex-row">
            <div
                className="flex items-center md:items-start justify-end flex-col gap-4"
                style={{
                    width: '40rem',
                    maxWidth: '100%'
                }}
            >
                <p className="font-semibold text-2xl">Hi I am</p>
                <p className="text-orange-500 font-semibold text-3xl">Mehammad Umair</p>
                <p className="font-bold text-6xl sm:text-8xl">UI & UX</p>
                <p className="font-bold text-6xl sm:text-8xl w-full text-center md:text-end">Designer</p>
                <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra </p>
                <button
                    className="text-white w-full md:w-40 font-normal text-xl bg-orange-500 rounded-md px-8 py-2"
                >
                    Hire Me
                </button>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Image
                    src={ImageMy}
                    alt="My Image"
                    style={{
                        width: '34rem',
                        maxWidth: '100%'
                    }}
                />

                <Socials />
            </div>
        </ApplyWidth>
    )
}

export default Hero

export function Socials() {
    const { resolvedTheme } = useTheme()
    return (
        <div className="flex gap-8">
            <Image
                src={resolvedTheme === 'dark' ? FBDark : FBLight}
                alt="Facebook"
            />
            <Image
                src={resolvedTheme === 'dark' ? TwitDark : TwitLight}
                alt="Twitter"
            />
            <Image
                src={resolvedTheme === 'dark' ? IGDark : IGLight}
                alt="Instagram"
            />
        </div>
    )
}