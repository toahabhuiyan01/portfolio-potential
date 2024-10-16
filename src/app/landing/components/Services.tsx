import Ui from '@/app/_assets/images/VectorUiUx.svg'
import Web from '@/app/_assets/images/VectorWeb.svg'
import App from '@/app/_assets/images/VectorApp.svg'
import Graphic from '@/app/_assets/images/VectorGraphic.svg'
import Image from 'next/image'
import ApplyWidth from './ApplyWidth'

const SERVICES = [
    {
        name: 'UI/UX Design',
        image: Ui
    },
    {
        name: 'Web Development',
        image: Web
    },
    {
        name: 'Mobile Development',
        image: App
    },
    {
        name: 'Graphic Design',
        image: Graphic
    }
]
function Services() {

    return (
        <ApplyWidth className="flex items-center flex-col gap-8 px-8">
            <div className="flex justify-center flex-col max-w-4xl gap-8">
                <p className="font-semibold text-6xl w-full text-center">Services</p>
                <p className="font-normal text-xl text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra </p>
            </div>
            <div
                className="flex flex-row gap-4 justify-center wrap"
            >
                {
                    SERVICES.map((service) => (
                        <ServiceCard key={service.name} service={service} />
                    ))
                }
            </div>
        </ApplyWidth>
    )
}

export default Services

function ServiceCard({ service }: { service: { name: string, image: string } }) {
    return (
        <div
            key={service.name}
            style={{
                width: '18rem',
                maxWidth: '100%'
            }}
            className="flex flex-col bg-gray-50 text-black gap-4 p-4 rounded-md"
        >
            <Image
                src={service.image}
                alt={service.name}  
            />
            <p className="font-semibold text-2xl">{service.name}</p>
            <p className="font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum </p>
        </div>
    )
}