'use client'
import Image from "next/image"
import Map, { Marker } from "react-map-gl";

type Props = {}

const Contact = (props: Props) => {
    return (
        <div className="h-full relative">
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
                <h1 className="text-center font-cairo font-extrabold text-white xl:text-5xl md:text-3xl text-base">تواصل معنا</h1>
                <h3 className="text-center font-cairo font-extrabold text-white xl:text-3xl md:text-lg text-sm">نحن نعمل بإستمرار من أجل مساعدتك وجعل تجربتك اسهل من خلال خدماتنا</h3>
                <div className="grid grid-cols-2 border-2 border-gray-400 rounded-3xl z-50 xl:h-[500px] md:h-[400px] h-[250px] bg-white xl:w-[1000px] md:w-[700px] w-[400px] absolute xl:top-[430px] md:top-[300px] top-[220px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="p-4 xl:h-full md:h-96 h-60">
                        <Map
                            mapStyle="mapbox://styles/mapbox/streets-v12"
                            mapboxAccessToken="pk.eyJ1Ijoia2FyaW1raGFsZWRlbG1hd2UiLCJhIjoiY2wxa3l4bDRjMDN6ZDNjb2JnbWpzbGVncSJ9.Hr7IeGn4060vCiHaeJH1Zw"
                            initialViewState={{
                                longitude: 55.5172173,
                                latitude: 25.2560882,
                                zoom: 12,
                            }}
                            style={{
                                borderRadius: '20px'
                            }}
                        >
                            <Marker
                                longitude={55.5172173}
                                latitude={25.2560882}
                                anchor="right"
                                color="#FF0000"
                                style={{
                                    cursor: "pointer",
                                }}
                            ></Marker>
                        </Map>
                    </div>
                    <div className="py-5 md:px-4 xs:px-2">
                        <form action="" method="post" className="md:space-y-5 space-y-2">
                            <div className="relative z-0 md:w-full w-48  xl:mb-6 md:mb-5 group">
                                <input
                                    type="text"
                                    className={`block py-2.5 text-right px-0 md:w-full w-48 xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className={`peer-focus:font-medium right-2 absolute md:text-sm text-[10px] text-[#234F7E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                >
                                    الاسم
                                </label>
                            </div>
                            <div className="relative z-0 md:w-full w-48  xl:mb-6 md:mb-5 group">
                                <input
                                    type="email"
                                    className={`block py-2.5 text-right px-0 md:w-full w-48  xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className='peer-focus:font-medium right-2 absolute md:text-sm text-[10px] text-[#234F7E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                                >
                                    البريد الالكتروني
                                </label>
                            </div>
                            <div className="relative z-0 md:w-full w-48 xl:mb-6 md:mb-5 group">
                                <input
                                    type="tel"
                                    className={`block py-2.5 text-right px-0 md:w-full w-48 xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=" "
                                    required
                                />
                                <label
                                    className={`peer-focus:font-medium right-2 absolute md:text-sm text-[10px] text-[#234F7E] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                >
                                    رقم الهاتف                                </label>
                            </div>
                            <div className="relative z-0 md:w-full w-48 xl:mb-6 md:mb-5 group">
                                <textarea
                                    className={`block md:py-6 py-3 px-0 md:w-full w-48 text-right xs:text-sm text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                                    placeholder=""
                                    rows={1}
                                    required
                                />
                                <label
                                    className={`peer-focus:font-medium right-2 absolute md:text-sm text-[10px] text-[#234F7E] duration-300 transform -translate-y-1 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                                >
                                    الرسالة
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-sm text-[10px] md:w-full w-48 sm:w-auto sm:px-5 sm:py-2.5 px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                ارسل رسالتك
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-white xl:h-96 md:h-72 w-full absolute -bottom-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        </div>
    )
}

export default Contact