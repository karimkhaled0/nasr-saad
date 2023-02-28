import Image from "next/image"
import { EnvelopeIcon, GlobeAsiaAustraliaIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="h-full text-white bg-[#2c2458] md:mt-0 mt-44">
            <div className="grid grid-cols-3 md:p-16 p-8">
                <div className="md:space-y-6 space-y-2">
                    <h1 className="text-[#B1853D] md:text-lg text-sm font-cairo font-semibold">معلومات التواصل</h1>
                    <div className="space-y-3 grid grid-cols-2 w-fit gap-x-2">
                        <div className="space-y-3 md:mt-2 mt-3">
                            <h4 className="md:text-base text-[7px] font-cairo">info@admin.com</h4>
                            <h4 className="md:text-base text-[7px] font-cairo">+201584687481</h4>
                            <h4 className="md:text-base text-[7px] font-cairo">nasr-saad.com</h4>
                        </div>
                        <div className="space-y-4">
                            <EnvelopeIcon
                                className='md:h-5 md:w-5 h-2 w-2'
                            />
                            <PhoneIcon
                                className='md:h-5 md:w-5 h-2 w-2'
                            />
                            <GlobeAsiaAustraliaIcon
                                className='md:h-5 md:w-5 h-2 w-2'
                            />
                        </div>
                    </div>
                    <div className="flex">
                        {/* Icons */}
                        <div className="flex md:space-x-8 space-x-2 items-center">
                            {/* insta in */}
                            <div className="bg-[#234F7E]/25 md:p-2 p-1 rounded-full text-white cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="md:w-5 sm:w-2 w-1 md:h-5 sm:h-2 h-1"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                    />
                                </svg>
                            </div>
                            {/* Facebook */}
                            <div className="bg-[#234F7E]/25 md:p-2 p-1 rounded-full text-white cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="md:w-5 sm:w-2 w-1 md:h-5 sm:h-2 h-1"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    />
                                </svg>
                            </div>
                            {/* Twitter */}
                            <div className="bg-[#234F7E]/25 md:p-2 p-1 rounded-full text-white cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="md:w-5 sm:w-2 w-1 md:h-5 sm:h-2 h-1"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:space-y-6 space-y-2 text-center">
                    <h1 className="text-[#B1853D] md:text-lg text-sm font-cairo font-semibold">خريطة الموقع</h1>
                    <div className="md:space-y-5 space-y-2 flex flex-col">
                        <a href='#about' className="md:text-base text-[7px] font-cairo">
                            من نحن
                        </a>
                        <a href='#partner' className="md:text-base text-[7px] font-cairo">
                            الشركاء
                        </a>
                        <a href='#service' className="md:text-base text-[7px] font-cairo">
                            خدماتنا
                        </a>
                        <a href='#contact' className="md:text-base text-[7px] font-cairo">
                            تواصل معنا
                        </a>
                    </div>
                </div>
                <div className="text-right relative grid justify-items-stretch">
                    <div className="relative justify-self-end md:w-[100px] md:h-[141] w-[50px] h-[100px]">
                        <Image
                            src='/logo.png'
                            alt="logo"
                            width={100}
                            height={141}
                        />
                        <div className="absolute text-center ">
                            <h4 className="md:text-xs text-[7px] font-cairo">مؤسسة</h4>
                            <h1 className="md:text-xs text-[7px] font-cairo font-bold">نصر وسعد</h1>
                            <h4 className="md:text-[10px] text-[5px] font-cairo font-bold">للمحاماة والاستشارات</h4>
                            <h4 className="md:text-xs text-[7px] font-cairo">القانونية</h4>
                        </div>
                    </div>
                    <h1 className="absolute md:-bottom-8 -bottom-3 font-cairo font-semibold xl:text-base md:text-sm text-[7px]">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة , حيث أسست علي نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي</h1>
                </div>
            </div>
            <hr className="h-1 bg-white" />
            <div className="md:text-base text-[8px] text-center py-5 flex items-center justify-center space-x-1 font-cairo font-semibold">
                <h2 className="">كل الحقوق محفوظه لدي مؤسسة نصر وسعد للمحاماه والاستشارات القانونيه </h2>
                <p> 2023 ©</p>
            </div>
        </div>
    )
}

export default Footer