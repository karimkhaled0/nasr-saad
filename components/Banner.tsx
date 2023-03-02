'use client'
import Image from "next/image"

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="relative bg-[#B1853D]/90 md:h-screen h-[80vh] w-full text-center">
            {/* Header */}
            <div className='flex items-center justify-center md:space-x-5 space-x-2 z-20 relative'>
                <a href='#contact'>
                    <button className='font-cairo md:text-xl text-[10px] text-white font-medium cursor-pointer z-30'>تواصل معنا</button>
                </a>
                <a href='#service'>
                    <button className='font-cairo md:text-xl text-[10px] text-white font-medium cursor-pointer z-30'>خدماتنا</button>
                </a>
                <a href='#home'>
                    <button className='md:w-[150px] w-[50px] font-cairo md:text-xl text-[10px] text-white font-medium cursor-pointer z-30'>
                        <Image
                            src='/logo.png'
                            alt='LOGO'
                            width={150}
                            height={83}
                            className='cursor-pointer'
                            priority
                        />
                    </button>
                </a>
                <a href='#partner'>
                    <button className='font-cairo md:text-xl text-[10px] text-white font-medium cursor-pointer z-30'>الشركاء</button>
                </a>
                <a href='#about'>
                    <button className='font-cairo md:text-xl text-[10px] text-white font-medium cursor-pointer z-30'>من نحن</button>
                </a>
            </div>
            {/* LOGO */}
            <div className="absolute md:-top-10 -top-5 md:-left-96 -left-44 opacity-10 z-0 md:w-[900px] w-[400px]">
                <Image
                    src='/logo2.png'
                    alt="logo"
                    width={900}
                    height={900}
                    priority
                />
            </div>
            {/* Content */}
            <div className="absolute z-20 flex flex-col items-center justify-center md:space-y-5 space-y-2 md:top-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="xl:text-4xl md:text-2xl text-sm lg:w-full md:w-[500px] font-cairo font-extrabold text-[#191248]">مرحبا بك فى مؤسسة نصر و سعد للمحاماه </h1>
                <h2 className="xl:text-4xl md:text-2xl text-sm md:w-full w-96 font-cairo font-extrabold text-[#191248]">تأسست فى عام 2020 </h2>
                <p className="text-center xl:text-2xl md:text-lg lg:w-full md:w-[500px] w-72 text-[10px] font-cairo font-medium text-white">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة , حيث أسست علي
                    نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي تسأسست علي يد المستشار الدكتور /محمود نصر
                    رئيس محكمة الجنايات وامن الدوله الاسبق و المستشار الدكتور/ وليد سعد المحام بالنقض</p>
            </div>
            <div className="absolute z-20 md:top-[90%] top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="md:py-3 md:px-12 py-1 px-6 shadow-lg bg-[#191248] rounded-xl text-white font-cairo font-semibold xl:text-lg md:text-base text-[10px]"><a href="#about">إقرا المزيد</a></button>
            </div>
            {/* Statue */}
            <div className="absolute right-0 bottom-0 z-10 xl:block hidden">
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