import Image from "next/image"
import ImageMy from '@/app/_assets/images/MyImageTop.svg'
import ApplyWidth from "./ApplyWidth"

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
            <div>
                <Image
                    src={ImageMy}
                    alt="My Image"
                    style={{
                        width: '34rem',
                        maxWidth: '100%'
                    }}
                />

                <div>

                </div>
            </div>
        </ApplyWidth>
    )
}

export default Hero