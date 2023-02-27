'use client'

import Image from "next/image"

type Props = {}

const About = (props: Props) => {
    return (
        <div className="h-screen grid grid-cols-2 relative bg-white z-20">
            {/* content */}
            <div className="text-right flex flex-col items-end justify-center space-y-10 md:col-span-1 col-span-2">
                <div className="flex items-center space-x-2 md:w-fit md:mx-0 max-w-60 mx-auto">
                    <h1 className="text-4xl font-cairo font-extrabold text-[#B1853D]">الشركة</h1>
                    <h1 className="text-4xl font-cairo font-extrabold text-[#191248]">نبذة عن</h1>
                </div>
                <div className="space-y-16">
                    <ul className="flex items-center space-x-5">
                        <li className="xl:w-[600px] md:w-[400px] xl:text-xl md:text-base font-cairo font-semibold">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة
                            , حيث أسست علي نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي</li>
                        <li>⦿</li>
                    </ul>
                    <ul className="flex items-center space-x-5">
                        <li className="xl:w-[600px] md:w-[400px] xl:text-xl md:text-base font-cairo font-semibold">تضم المؤسسة نخبة من المحامين علي اعلي درجات المهارة
                            والكفاءه والدرايه التامة وذلك لتقديم الأستشارات الازمة والمتعله بكافه مجالات القانون الجنائي  </li>
                        <li>⦿</li>
                    </ul>
                    <ul className="flex items-center space-x-5">
                        <li className="xl:w-[600px] md:w-[400px] xl:text-xl md:text-base font-cairo font-semibold">تتميز المؤسسة بتقديم الخدمات القانونية علي اعلي مستوي من التطوير والجدية
                            والدقة فالديها بالخبرات المتخصصة في الأستشارات الخاصه بالقضايا الجنائيه</li>
                        <li>⦿</li>
                    </ul>
                </div>
            </div>
            {/* Image */}
            <div className="absolute top-20 xl:right-20 right-0 xl:w-[600px] xl:h-[640px] md:w-[450px] md:h-[500px] md:block hidden">
                <Image
                    src='/statue2.png'
                    alt="Statue2"
                    width={600}
                    height={640}
                />
            </div>
        </div>
    )
}

export default About