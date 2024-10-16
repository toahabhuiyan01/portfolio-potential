'use client'

import Image from "next/image"
import { useState } from "react"
import AirCallingImage from '@/app/_assets/images/AirCalling.png'
import ApplyWidth from "./ApplyWidth"



const CATEGORIES = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design']
const BANNERS = [
    'AirCalling Landing Page Design',
    'Business Landing Page Design ',
    'Ecom Web Page Design '
]

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('Web Design')

    return (
        <ApplyWidth className="flex items-center w-full flex-col px-8 gap-8">
            <div className="flex justify-center flex-col max-w-4xl gap-8">
                <p className="font-semibold text-6xl w-full text-center">Projects</p>
                <p className="font-normal text-xl text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra </p>
            </div>

            <div className="flex justify-center flex-wrap flex-row max-w-4xl gap-8">
                {
                    CATEGORIES.map((service) => (
                        <button
                            key={service}
                            onClick={() => setSelectedCategory(service)}
                            className={` ${selectedCategory === service ? 'bg-orange-500 text-white' : 'bg-gray-50 text-black'} rounded-lg font-normal text-xl px-4 py-2`}
                        >
                            {service}
                        </button>
                    ))
                }
            </div>

            <div
                className="flex flex-row justify-around"
                style={{
                    maxWidth: '100%',
                    flexWrap: 'wrap'
                }}
            >
                {
                    BANNERS.map((banner) => (
                        <BannerCard
                            key={banner}
                            text={banner}
                            category={selectedCategory}
                        />
                    ))
                }
            </div>
        </ApplyWidth>
    )
}

export default Projects

function BannerCard({ text, category }: { text: string, category: string }) {
    return (
        <div
            className="w-full flex flex-col text-black gap-2 p-4 rounded-md"
            style={{
                width: '445px',
                maxWidth: '100%'
            }}
        >
            <Image
                src={AirCallingImage}
                alt={text}
            />
                

            <p className="font-normal text-xl text-orange-500">{category}</p>
            <p className="font-semibold text-2xl dark:text-white">{text}</p>
        </div>
    )

}