'use client'
import Image from "next/image"
import { SubmitHandler, useForm } from "react-hook-form";
import Map, { Marker } from "react-map-gl";
type Inputs = {
    name: String,
    email: String,
    number: String,
    message: String
};
type Props = {}

const Contact = (props: Props) => {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:Info@nasr-saad.com?subject=Support&body=${formData.message} %0D%0D${formData.name}%0D${formData.email} - ${formData.number}`
    };
    return (
        <div className="md:h-screen h-full relative">
            <div className="relative">
                <div className="bg-[#B1853D]/80 w-full h-full absolute opacity-100" />
                <Image
                    src='/pattern.png'
                    alt="pattern"
                    width={10000}
                    height={500}
                    className='opacity-20 z-10'
                />
            </div>
            <div className="absolute xl:top-48 top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:space-y-10 md:space-y-5 space-y-3 z-50">
                <h1 className="text-center font-cairo font-extrabold text-white xl:text-5xl md:text-3xl xs:text-base text-xs">تواصل معنا</h1>
                <h3 className="text-center font-cairo font-extrabold text-white xl:text-3xl md:text-lg xs:text-xs text-[10px]">نحن نعمل بإستمرار من أجل مساعدتك وجعل تجربتك اسهل من خلال خدماتنا</h3>
                <div className="grid md:grid-cols-2 md:border-2 md:border-gray-400 md:rounded-3xl rounded-lg z-50 xl:h-[500px] md:h-[400px] h-[250px] md:bg-white bg-white/80 xl:w-[1000px] md:w-[700px] xs:w-[380px] xxs:w-[300px] w-[280px] mx-auto absolute xl:top-[430px] md:top-[300px] top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="py-5 md:px-4 xs:px-2 md:order-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="md:space-y-5 space-y-2">
                            <div className="relative z-0 xs:w-full xxs:w-72 w-64  xl:mb-6 md:mb-5 group">
                                <input
                                    {...register('name')}
                                    type="text"
                                    className={`block py-2.5 text-right px-0 w-full xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className={`peer-focus:font-medium right-2 absolute md:text-sm text-[10px] md:text-[#234F7E] text-black font-semibold font-cairo duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                >
                                    الاسم
                                </label>
                            </div>
                            <div className="relative z-0 xs:w-full xxs:w-72 w-64   xl:mb-6 md:mb-5 group">
                                <input
                                    {...register('email')}
                                    type="email"
                                    className={`block py-2.5 text-right px-0 w-full  xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className='peer-focus:font-medium right-2 absolute md:text-sm text-[10px] md:text-[#234F7E] text-black font-semibold font-cairo duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                                >
                                    البريد الالكتروني
                                </label>
                            </div>
                            <div className="relative z-0 xs:w-full xxs:w-72 w-64  xl:mb-6 md:mb-5 group">
                                <input
                                    {...register('number')}
                                    type="tel"
                                    className={`block py-2.5 text-right px-0 w-full xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className={`peer-focus:font-medium right-2 absolute md:text-sm text-[10px] md:text-[#234F7E] text-black font-semibold font-cairo duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                >
                                    رقم الهاتف                                </label>
                            </div>
                            <div className="relative z-0 xs:w-full xxs:w-72 w-64  xl:mb-6 md:mb-5 group">
                                <textarea
                                    {...register('message')}

                                    className={` block md:py-6 py-3 px-0 w-full text-right xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=""
                                    rows={2}
                                    maxLength={200}
                                    required
                                />
                                <label
                                    className={`peer-focus:font-medium right-2 absolute md:text-sm text-[10px] md:text-[#234F7E] text-black font-semibold font-cairo duration-300 transform -translate-y-1 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                >
                                    الرسالة
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm text-[10px] w-fit sm:w-auto sm:px-5 sm:py-2.5 px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                ارسل رسالتك
                            </button>
                        </form>
                    </div>
                    <div className="p-4 xl:h-full md:h-96 h-60 md:order-1 space-y-2 md:space-y-0 relative">
                        <h1 className="text-center font-cairo font-extrabold md:text-xl xs:text-base text-xs md:absolute md:z-30 md:top-10 md:w-full md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 animate-pulse">Google Maps اضغط على العلامة للذهاب الى</h1>
                        <Map
                            mapStyle="mapbox://styles/mapbox/streets-v12"
                            mapboxAccessToken="pk.eyJ1Ijoia2FyaW1raGFsZWRlbG1hd2UiLCJhIjoiY2wxa3l4bDRjMDN6ZDNjb2JnbWpzbGVncSJ9.Hr7IeGn4060vCiHaeJH1Zw"
                            initialViewState={{
                                longitude: 31.3579951,
                                latitude: 30.0644273,
                                zoom: 15,
                            }}
                            style={{
                                borderRadius: '10px'
                            }}
                        >
                            <Marker
                                longitude={31.3579951}
                                latitude={30.0644273}
                                anchor="right"
                                color="#FF0000"
                                style={{
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    window.open("https://www.google.com/maps/place/%D9%85%D8%A4%D8%B3%D8%B3%D8%A9+%D9%86%D8%B5%D8%B1+%D9%88+%D8%B3%D8%B9%D8%AF+%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D9%87+%D9%88+%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9%E2%80%AD/@30.0644273,31.3579951,19z/data=!4m12!1m5!3m4!2zMzDCsDAzJzUxLjYiTiAzMcKwMjEnMTkuOCJF!8m2!3d30.0643333!4d31.3555!3m5!1s0x14583d1ebe8ec3ff:0x12c31c68678993a9!8m2!3d30.0643358!4d31.357692!16s%2Fg%2F11schrc8z9", "_blank")
                                }}
                            ></Marker>
                        </Map>
                    </div>
                </div>
            </div>
            <div className="bg-white xl:h-96 md:h-72 w-full absolute xl:-bottom-[500px] md:-bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
}

export default Contact