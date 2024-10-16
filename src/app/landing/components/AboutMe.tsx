import Image from "next/image"
import ImageMy from '@/app/_assets/images/MyImageMid.svg'
import ApplyWidth from './ApplyWidth'

const SKILLS = [
    {
        name: 'UI/UX Design',
        percentage: 90
    },
    {
        name: 'Web Development',
        percentage: 87
    },
    {
        name: 'Mobile Development',
        percentage: 95
    },
    {
        name: 'Graphic Design',
        percentage: 90
    }
]

function AboutMe() {

    return (
        <ApplyWidth className="flex px-8 gap-8 justify-between items-center md:items-start flex-col lg:flex-row">
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

            <div
                className="flex flex-col gap-6"
                style={{
                    maxWidth: '40rem'
                }}
            >
                <p className="font-semibold text-6xl">About Me</p>
                <p className="font-normal text-xl">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra </p>
                {
                    SKILLS.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col gap-3 py-2"
                        >
                            <p className="font-semibold text-2xl">{skill.name}</p>
                            <div className="w-full relative">
                                <p
                                    className="bg-orange-500 h-3 w-full rounded-md"
                                />
                                <p
                                    className="bg-gray-300 h-4 w-4 rounded-full absolute"
                                    style={{
                                        top: '-2px',
                                        right: `${100 - skill.percentage}%`,
                                        boxShadow: 'orange 0 0 1px 3px'
                                    }}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </ApplyWidth>
    )
}

export default AboutMe