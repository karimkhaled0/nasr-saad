'use client'
import Image from "next/image"
import Link from "next/link"

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="relative bg-[#B1853D]/90 h-screen w-full text-center">
            {/* Header */}
            <div className='flex items-center justify-center space-x-5 z-20 relative'>
                <a href='#contact'>
                    <button className='font-cairo md:text-xl text-sm text-white font-medium cursor-pointer z-30'>تواصل معنا</button>
                </a>
                <a href='#service'>
                    <button className='font-cairo md:text-xl text-sm text-white font-medium cursor-pointer z-30'>خدماتنا</button>
                </a>
                <a href='#home'>
                    <button className='font-cairo md:text-xl text-sm text-white font-medium cursor-pointer z-30'>
                        <Image
                            src='/logo.png'
                            alt='LOGO'
                            width={98}
                            height={83}
                            className='cursor-pointer'
                            priority
                        />
                    </button>
                </a>
                <a href='#partner'>
                    <button className='font-cairo md:text-xl text-sm text-white font-medium cursor-pointer z-30'>الشركاء</button>
                </a>
                <a href='#about'>
                    <button className='font-cairo md:text-xl text-sm text-white font-medium cursor-pointer z-30'>من نحن</button>
                </a>
            </div>
            {/* LOGO */}
            <div className="absolute md:-top-10 -top-0 md:-left-96 -left-80 opacity-10 z-0 md:w-[900px] md:h-[900px] h-[700px] w-[700px]">
                <Image
                    src='/logo.png'
                    alt="logo"
                    width={900}
                    height={900}
                    priority
                />
            </div>
            {/* Content */}
            <div className="absolute z-20 flex flex-col items-center justify-center md:space-y-5 space-y-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="xl:text-4xl md:text-2xl text-lg md:w-full w-96 font-cairo font-extrabold text-[#191248]">مرحبا بك فى مؤسسة نصر و سعد للمحاماه </h1>
                <h2 className="xl:text-4xl md:text-2xl text-lg md:w-full w-96 font-cairo font-extrabold text-[#191248]">تأسست فى عام 2020 </h2>
                <p className="text-center xl:text-2xl md:text-lg md:w-full w-96 text-sm font-cairo font-medium text-white">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة , حيث أسست علي
                    نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي تسأسست علي يد المستشار الدكتور /محمد نصر
                    رئيس محكمة الجنايات وامن الدوله الاسبق و المستشار الدكتور/ وليد سعد المحام بالنقض</p>
            </div>
            <div className="absolute z-20 md:top-[80%] top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="py-3 px-12 shadow-lg bg-[#191248] rounded-xl text-white font-cairo font-semibold xl:text-lg md:text-base text-xs">اقرأ المزيد</button>
            </div>
            {/* Statue */}
            <div className="absolute right-0 bottom-0 z-10 xl:block hidden w">
                <Image
                    src='/statue1.png'
                    alt="statue"
                    width={460}
                    height={932}
                />
            </div>
        </div>
    )
}

export default Banner