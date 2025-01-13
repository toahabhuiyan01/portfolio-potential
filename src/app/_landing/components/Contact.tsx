import ApplyWidth from "./ApplyWidth"

function ContactMe() {

    return (
        <ApplyWidth className="flex items-center w-full flex-col px-8 gap-12">
            <div className="flex justify-center flex-col max-w-4xl gap-8">
                <p className="font-semibold text-6xl w-full text-center">Lets Design Together</p>
                <p className="font-normal text-xl text-center">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra </p>
            </div>

            <div
                className="flex flex-row gap-4 flex-wrap sm:flex-nowrap justify-between w-full"
                style={{ maxWidth: '54rem' }}
            >
                <input
                    placeholder="Enter Your Email"
                    className="rounded-md w-full sm:w-8/12 bg-gray-50 h-10 p-6"
                />
                 <button
                    className="text-white w-full sm:w-3/12 font-normal text-xl bg-orange-500 rounded-md px-4 py-2"
                >
                    Contact Me
                </button>
            </div>
        </ApplyWidth>
    )
}

export default ContactMe