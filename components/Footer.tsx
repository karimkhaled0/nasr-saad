import Image from "next/image"
import { EnvelopeIcon, GlobeAsiaAustraliaIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="h-full text-white bg-[#2c2458] xl:mt-96 md:mt-20 mt-60">
            <div className="grid grid-cols-3 md:p-16 p-8">
                <div className="md:space-y-6 space-y-2">
                    <h1 className="text-[#B1853D] md:text-lg xs:text-sm text-[10px] font-cairo font-semibold">معلومات التواصل</h1>
                    <div className="md:space-y-5 space-y-2">
                        <div className="flex items-center md:space-x-4 space-x-1">
                            <h4 className="md:text-base text-[7px] font-cairo"><a href="mailto:info@nasr-saad.com">info@nasr-saad.com</a></h4>
                            <EnvelopeIcon
                                className='md:h-5 md:w-5 h-2 w-2'
                            />
                        </div>
                        <div className="flex items-center md:space-x-4 space-x-1">
                            <h1 className="md:text-base text-[7px] font-cairo"> <a href="tel:201200844777">+201200844777</a></h1>
                            <PhoneIcon
                                className='md:h-5 md:w-5 h-2 w-2'
                            />
                        </div>
                        <div className="flex items-center md:space-x-4 space-x-1">
                            <h4 className="md:text-base text-[7px] font-cairo">nasr-saad.com</h4>
                            <GlobeAsiaAustraliaIcon
                                className='md:h-5 md:w-5 h-2 w-2'
                            />
                        </div>
                    </div>
                    <div className="flex">
                        {/* Icons */}
                        <div className="flex md:space-x-8 space-x-2 items-center">
                            {/* Facebook */}
                            <div className="bg-[#234F7E]/25 md:p-2 p-1 rounded-full text-white cursor-pointer" onClick={() => {
                                window.open("https://www.facebook.com/nasr.saad.company/", '_blank')
                            }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="md:w-5 w-2 md:h-5 h-2"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="md:space-y-6 space-y-2 text-center">
                    <h1 className="text-[#B1853D] md:text-lg xs:text-sm text-[10px] font-cairo font-semibold">خريطة الموقع</h1>
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
                            <h4 className="md:text-xs text-[6px] font-cairo">مؤسسة</h4>
                            <h1 className="md:text-xs text-[6px] font-cairo font-bold">نصر وسعد</h1>
                            <h4 className="md:text-[10px] text-[5px] font-cairo font-bold">للمحاماة والاستشارات</h4>
                            <h4 className="md:text-xs text-[6px] font-cairo">القانونية</h4>
                        </div>
                    </div>
                    <h1 className="absolute md:-bottom-8 -bottom-3 font-cairo font-semibold xl:text-base md:text-sm text-[4px]">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة , حيث أسست علي نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي</h1>
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