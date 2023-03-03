'use client'

import Image from "next/image"

type Props = {}

const About = (props: Props) => {
    return (
        <div className="h-full relative xl:grid lg:grid-cols-2 grid-cols-1 bg-white z-20 pt-10 xl:pb-72 lg:pb-60 md:pb-48 pb-20">
            {/* content */}
            <div className="text-right xl:w-full xl:mx-0 w-fit mx-auto flex flex-col items-end justify-center space-y-10">
                <div className="flex items-center justify-center xl:mx-0 w-fit mx-auto space-x-2">
                    <h1 className="md:text-4xl text-2xl font-cairo font-extrabold text-[#B1853D]">الشركة</h1>
                    <h1 className="md:text-4xl text-2xl font-cairo font-extrabold text-[#191248]">نبذة عن</h1>
                </div>
                <div className="md:space-y-16 space-y-8">
                    <ul className="flex items-center space-x-5">
                        <li className="md:w-[600px] xs:w-[300px] w-[250px] xl:text-xl md:text-lg xs:text-xs text-[10px] font-cairo font-semibold">مؤسسة نصر وسعد للمحاماه والأستشارات القانونية تقدم خدمات قانونيه متكاملة
                            , حيث أسست علي نمط الشراكة الحديثة لوجود الخبرات في شتي مجال القانون الجنائي</li>
                        <li>⦿</li>
                    </ul>
                    <ul className="flex items-center space-x-5">
                        <li className="md:w-[600px] xs:w-[300px] w-[250px] xl:text-xl md:text-lg xs:text-xs text-[10px] font-cairo font-semibold">تضم المؤسسة نخبة من المحامين علي اعلي درجات المهارة
                            والكفاءه والدرايه التامة وذلك لتقديم الأستشارات اللازمة والمتعلقه بكافه مجالات القانون الجنائي  </li>
                        <li>⦿</li>
                    </ul>
                    <ul className="flex items-center space-x-5">
                        <li className="md:w-[600px] xs:w-[300px] w-[250px] xl:text-xl md:text-lg xs:text-xs text-[10px] font-cairo font-semibold">تتميز المؤسسة بتقديم الخدمات القانونية علي اعلى مستوى من التطوير والجدية
                            والدقة فلديها الخبرات المتخصصة في الأستشارات الخاصه بالقضايا الجنائيه</li>
                        <li>⦿</li>
                    </ul>
                </div>
            </div>
            {/* Image */}
            <div className="absolute top-20 xl:right-20 right-0 xl:w-[600px] xl:h-[640px] md:w-[450px] md:h-[500px] xl:block hidden">
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