import Image from "next/image"

type Props = {}
// TODO: name of partners
const Partners = (props: Props) => {
    return (
        <div className="h-full relative bg-white z-20">
            <h1 className="text-center font-cairo font-extrabold text-[#191248] text-4xl">الشركاء</h1>

            {/* Photo */}
            <div className="grid grid-cols-2 max-w-7xl mx-auto xl:mt-40 md:mt-20 mt-10">
                <div className="flex items-center justify-center group relative">
                    {/* Photo */}
                    <div className="rounded-xl group-hover:hidden block xl:w-[536px] xl:h-[1051px] md:w-[436px] md:h-[850px] w-[200px] h-[650px]">
                        <Image
                            src='/partner1.jpeg'
                            alt="Partner1"
                            width={536}
                            height={1051}
                            className="rounded-xl"
                        />
                    </div>
                    {/* Content */}
                    <div className="absolute z-20 bg-white xl:w-[536px] md:w-[436px] h-fit top-0 text-right space-y-8 group-hover:block hidden p-3 border-2 border-gray-300 rounded-xl">
                        <h1 className="text-[#B1853D] font-cairo font-bold md:text-base text-[10px]">
                            حاصل على ليسانس الحقوق جامعة القاهرة عام 2000 بتقدير جيد جدا التحق للعمل
                            بالمحاماه منذ 2002 وحتى الان  وفي خلال هذة الفترة حيث انشأ سيادتة مؤسسة وليد سعد
                            للمحاماه والاستشارات القانونية وذلك في خلال؛
                        </h1>
                        <div className="space-y-5">
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">في عام 2008 انشأ فرع السلام - مدينة السلام ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">في عام 2016 انشأ فرع التجمع الاول - القاهرة الجديدة●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">في عام 2018 انشأ فرع الشروق - مدينة الشروق ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">في عام 2019 انشأ فرع التجمع الخامص ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">في عام 2019 انشأ مقرة الرئيسي لمؤسسة وليد سعد للمحاماة ●<p>
                                والاستشارات القانونية بمدينة نصر</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">في عام 2020 أسس مؤسسة نصر وسعد للمحاماة والاستشارات ●<p>
                                القانونية حتى الان</p></h4>
                        </div>
                        <h1 className="text-[#B1853D] font-cairo font-bold md:text-base text-[10px]">الدرجة العلمية والمهنية ؛
                        </h1>
                        <div className="space-y-5">
                            <div className="flex flex-row-reverse">
                                <p className="md:text-sm text-[8px]">●</p>
                                <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px] mr-1">باحث في درجة الدكتوراة في القانون الجنائي بجامعة القاهرة ومعهد الدراسات العربية - المنظمة العربية للتربية والثقافه والعلوم - منظمة جامعة الدول العربية</h4>
                            </div>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">ماجستير في القانون العام من جامعة القاهرة 2003 بتقدير جيد جدا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">ماجستير في القانون الجنائي من جامعة القاهرة 2006 بتقدير جيد جدا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">نائب رئيس مجلس ادارة مؤسسة نصر وسعد للمحاماة والاستشارات القانونية ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">محام بالنقض والادارية والدستورية العليا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold md:text-sm text-[8px]">عضو اتحاد المحامين العرب ●</h4>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center group relative">
                    {/* Photo */}
                    <div className="rounded-xl group-hover:hidden block xl:w-[532px] xl:h-[1051px] md:w-[432px] md:h-[850px] w-[200px] h-[650px]">
                        <Image
                            src='/partner2.jpeg'
                            alt="Partner2"
                            width={532}
                            height={1051}
                            className="rounded-xl"
                        />
                    </div>
                    {/* Content */}
                    <div className="absolute z-20 bg-white xl:w-[532px] md:w-[432px] h-fit top-0 text-right xl:space-y-8 space-y-5 group-hover:block hidden p-3 border-2 border-gray-300 rounded-xl">
                        <h1 className="text-[#B1853D] font-cairo font-bold md:text-base text-[10px]">حاصل على ليسانس الحقوق والعلوم الشرطية عام 1990 بتقدير جيد جدا</h1>
                        <h1 className="text-[#B1853D] font-cairo font-bold xl:text-sm md:text-xs text-[8px]">المناصب القضائية التي تولاها سيادتة؛</h1>
                        <div className="xl:space-y-5 space-y-2">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2018 حتى 2019 المفتش القضائي الاول لوزارة العدل ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2016 حتى 2018 رئس سيادتة دائرة محكمة جنايات القاهرة المختصة بقضايا الارهاب ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2014 حتى 2016 عُين عضواّ بمحاكم جنايات الجيزة ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2012 حتى 2014 عُين عضواّ بمحاكم جنايات الاسكندرية ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2011 حتى 2012 عُين رئيساّ بمحاكم الاستئناف وعضو بمحاكم جنايات اسوان ●</h4>
                        </div>
                        <h1 className="text-[#B1853D] font-cairo font-bold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 1992 حتى 2010</h1>
                        <div className="xl:space-y-5 space-y-2">
                            <div className="flex flex-row-reverse">
                                <p className="xl:text-sm md:text-xs text-[8px]">●</p>
                                <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] mr-1">عُين وكيلاّ للنائب العام لبعض نيابات القاهرة والاسكندرية والشرقية والمنصورة والاسماعيلية والسويس</h4>
                            </div>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">قاضياّ ثم رئيس للمستأنف بمحكمة استئناف المنيا وبني سويف ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">مسؤول للمكتب الفني بالمركز القومي للدراسات القضائية ●</h4>
                        </div>
                        <h1 className="text-[#B1853D] font-cairo font-bold xl:text-sm md:text-xs text-[8px]">المناصب السياسية التي تولاها سيادتة؛</h1>
                        <div className="xl:space-y-5 space-y-2">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2020 حتى الان يعمل سيادتة منصب نائب رئيس حزب التحرير المصري ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">دكتوراة في القانون الجنائي بجامعة القاهرة عام 2010 بتقدير امتياز ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">استاذ القانون الجنائي المنتدب بكلية الحقوق في جامعة القاهرة وجامعة الاسكندرية ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">رئيس مجلس ادارة مؤسسة نصر وسعد للمحاماة والاستشارات القانونية ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">محام بالنقض والادارية والدستورية العليا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">عضو اتحاد المحامين العرب ●</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners