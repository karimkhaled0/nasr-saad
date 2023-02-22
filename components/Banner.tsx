import Image from "next/image"
import Link from "next/link"

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="relative bg-[#B1853D]/90 h-screen w-full">
            {/* Header */}
            <ul className='flex items-center justify-center space-x-5'>
                <Link href='#contact'>
                    <li className='font-cairo text-xl text-white font-medium cursor-pointer'>تواصل معنا</li>
                </Link>
                <Link href='#services'>
                    <li className='font-cairo text-xl text-white font-medium cursor-pointer'>خدماتنا</li>
                </Link>
                <Link href='#home'>
                    <li>
                        <Image
                            src='/logo.png'
                            alt='LOGO'
                            width={98}
                            height={83}
                            className='cursor-pointer'
                            priority
                        />
                    </li>
                </Link>
                <Link href='#partners'>
                    <li className='font-cairo text-xl text-white font-medium cursor-pointer'>الشركاء</li>
                </Link>
                <Link href='#about'>
                    <li className='font-cairo text-xl text-white font-medium cursor-pointer'>من نحن</li>
                </Link>
            </ul>
            {/* LOGO */}
            <div className="absolute -top-10 -left-96 opacity-10 z-0">
                <Image
                    src='/logo.png'
                    alt="logo"
                    width={900}
                    height={900}
                    priority
                />
            </div>
            {/* Content */}
            <div className="absolute z-20 flex flex-col items-center justify-center space-y-5 top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-4xl font-cairo font-extrabold text-[#191248]">مرحبا بك فى مؤسسة نصر و سعد للمحاماه </h1>
                <h2 className="text-4xl font-cairo font-extrabold text-[#191248]">تأسست فى عام 2020 </h2>
                <p className="text-center text-2xl font-cairo font-medium text-white">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة , حيث أسست علي
                    نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي تسأسست علي يد المستشار الدكتور /محمد نصر
                    رئيس محكمة الجنايات وامن الدوله الاسبق و المستشار الدكتور/ وليد سعد المحام بالنقض</p>
            </div>
            {/* Statue */}
            <div className="absolute right-0 bottom-0 z-10">
                <Image
                    src='/statue1.png'
                    alt="logo"
                    width={460}
                    height={932}
                />
            </div>
        </div>
    )
}

export default Banner