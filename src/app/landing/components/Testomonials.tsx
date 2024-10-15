import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"
import ImageCEO1 from "@/app/_assets/images/CEOImage.png"
import ImageCEO2 from "@/app/_assets/images/CEOImage2.png"
import ApplyWidth from "./ApplyWidth"


function Testimonials() {


    return (
        <ApplyWidth className="flex items-center w-full flex-col gap-8">
            <div className="flex justify-center flex-col max-w-4xl gap-8">
                <p className="font-semibold text-6xl w-full text-center">Testimonials</p>
                <p className="font-normal text-xl text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra </p>
            </div>

            <Carousel className="w-full">
                <CarouselContent className="flex gap-8">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="flex py-8 px-12 flex-col lg:flex-row items-center rounded-xl gap-8 bg-gray-50"
                            style={{
                                    maxWidth: '1087px',
                            }}
                        >
                            <Image
                                src={index % 2 === 0 ? ImageCEO1 : ImageCEO2}
                                alt="CEO"
                                width={235}
                                height={235}
                            />
                            <div className="flex flex-col gap-3 text-black">
                                <p className="font-normal flex text-xl gap-2">
                                    <span className="text-orange-500 font-bold text-3xl">“</span>
                                        Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                                    <span
                                        className="text-orange-500 font-bold text-3xl"
                                        style={{
                                            transform: 'rotate(180deg)',
                                        }}
                                    >
                                        “
                                    </span>
                                </p>
                                <div className="px-6">
                                    <p className="font-semibold text-2xl">John Doe</p>
                                    <p className="font-normal text-xl">CEO</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </ApplyWidth>
    )
}

export default Testimonials