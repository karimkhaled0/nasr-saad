import Image from "next/image"

type Props = {}
// TODO: name of partners
const Partners = (props: Props) => {
    return (
        <div className="h-full relative bg-white z-20">
            <h1 className="text-center font-cairo font-extrabold text-[#191248] md:text-4xl text-xl">الشركاء</h1>
            <div className="flex flex-col max-w-7xl mx-auto md:mt-16 mt-8 md:space-y-20 space-y-10">
                <div className="grid xl:grid-cols-3 xl:grid-rows-1 grid-cols-1 grid-rows-1 gap-y-5 justify-items-center xl:max-w-full md:max-w-2xl xs:max-w-xs max-w-[250px] mx-auto">
                    <div className="text-right xl:space-y-8 md:space-y-5 space-y-2 xl:order-1 order-3">
                        <h1 className="text-[#B1853D] font-cairo font-bold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 1992 حتى 2010</h1>
                        <div className="xl:space-y-5 space-y-1">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">عُين وكيلاّ للنائب العام لبعض نيابات القاهرة والاسكندرية والشرقية والمنصورة والاسماعيلية والسويس<p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">قاضياّ ثم رئيس للمستأنف بمحكمة استئناف المنيا وبني سويف ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">مسؤول للمكتب الفني بالمركز القومي للدراسات القضائية ●</h4>
                        </div>
                        <h1 className="text-[#B1853D] font-cairo font-bold xl:text-sm md:text-xs text-[8px]">المناصب السياسية التي تولاها سيادتة؛</h1>
                        <div className="xl:space-y-5 space-y-1">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">خلال الفترة من 2020 حتى الان يشغل سيادتة منصب نائب رئيس حزب التحرير المصري <p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">دكتوراة في القانون الجنائي بجامعة القاهرة عام 2010 بتقدير امتياز ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">استاذ القانون الجنائي المنتدب بكلية الحقوق في جامعة القاهرة وجامعة الاسكندرية <p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">رئيس مجلس ادارة مؤسسة نصر وسعد للمحاماة والاستشارات القانونية ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">محام بالنقض والادارية والدستورية العليا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">عضو اتحاد المحامين العرب ●</h4>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className="flex flex-col items-center space-y-5 xl:w-[200px] w-[100px] xl:order-2 order-1">
                        <Image
                            src='/mahmoud.jpg'
                            alt="Partner2"
                            width={200}
                            height={100}
                            className="rounded-full"
                            priority
                        />
                        <div className="space-y-1">
                            <h1 className="xl:text-2xl w-96 text-center md:text-sm text-[10px] font-cairo font-extrabold text-black">المستشار الدكتور / محمود نصر</h1>
                            <h4 className="xl:text-xl w-96 text-center md:text-sm text-[10px] font-cairo font-extrabold text-[#B1853D]">محام بالنقض</h4>
                            <h4 className="xl:text-xl w-96 text-center md:text-sm text-[10px] font-cairo font-extrabold text-[#B1853D]">رئيس محكمة الجنايات و أمن الدولة العليا الأسبق</h4>
                        </div>
                    </div>
                    <div className="text-right xl:space-y-8 md:space-y-5 space-y-2 xl:order-3 order-2">
                        <h1 className="text-[#B1853D] font-cairo font-bold md:text-base text-[10px]">حاصل على ليسانس الحقوق والعلوم الشرطية عام 1990 بتقدير جيد جدا</h1>
                        <h1 className="text-[#B1853D] font-cairo font-bold xl:text-sm md:text-xs text-[8px]">المناصب القضائية التي تولاها سيادتة؛</h1>
                        <div className="xl:space-y-5 space-y-1">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2018 حتى 2019 المفتش القضائي الاول لوزارة العدل ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">خلال الفترة من 2016 حتى 2018 رئس سيادتة دائرة محكمة جنايات القاهرة المختصة بقضايا الارهاب <p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2014 حتى 2016 عُين عضواّ بمحاكم جنايات الجيزة ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">خلال الفترة من 2012 حتى 2014 عُين عضواّ بمحاكم جنايات الاسكندرية ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">خلال الفترة من 2011 حتى 2012 عُين رئيساّ بمحاكم الاستئناف وعضو بمحاكم جنايات اسوان <p className="ml-0.5">●</p></h4>
                        </div>
                    </div>
                </div>
                <div className="bg-[#b99150] h-2 w-full" />
                <div className="grid xl:grid-cols-3 xl:grid-rows-1 grid-cols-1 grid-rows-1 gap-y-5 justify-items-center xl:max-w-full md:max-w-2xl xs:max-w-xs max-w-[250px] mx-auto">
                    <div className="text-right xl:space-y-8 md:space-y-5 space-y-2 xl:order-1 order-3">
                        <h1 className="text-[#B1853D] font-cairo font-bold md:text-base text-[10px]">الدرجة العلمية والمهنية ؛
                        </h1>
                        <div className="md:space-y-5 space-y-1">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">باحث في درجة الدكتوراة في القانون الجنائي بجامعة القاهرة ومعهد البحوث والدراسات العربية - المنظمة العربية للتربية والثقافه والعلوم - منظمة جامعة الدول العربية <p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">ماجستير في القانون العام من جامعة القاهرة 2003 بتقدير جيد جدا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">ماجستير في القانون الجنائي من جامعة القاهرة 2006 بتقدير جيد جدا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">نائب رئيس مجلس ادارة مؤسسة نصر وسعد للمحاماة والاستشارات القانونية<p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] ">محام بالنقض والادارية والدستورية العليا ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">عضو اتحاد المحامين العرب ●</h4>
                        </div>
                    </div>
                    {/* Photo */}
                    <div className="flex flex-col items-center space-y-5 xl:w-[200px] w-[100px] xl:order-2 order-1">
                        <Image
                            src='/waleed.jpg'
                            alt="Partner1"
                            width={200}
                            height={100}
                            className="rounded-full"
                            priority
                        />
                        <div className="space-y-1">
                            <h1 className="xl:text-2xl w-96 text-center md:text-sm text-[10px] font-cairo font-extrabold text-black">المستشار الدكتور / وليد سعد</h1>
                            <h4 className="xl:text-xl w-96 text-center md:text-sm text-[10px] font-cairo font-extrabold text-[#B1853D]">محام بالنقض</h4>

                        </div>

                    </div>
                    <div className="text-right xl:space-y-8 md:space-y-5 space-y-2 xl:order-3 order-2">
                        <h1 className="text-[#B1853D] font-cairo font-bold md:text-base text-[10px]">
                            حاصل على ليسانس الحقوق جامعة القاهرة عام 2000 بتقدير جيد جدا التحق للعمل
                            بالمحاماه منذ 2002 وحتى الان  وفي خلال هذة الفترة حيث انشأ سيادتة مؤسسة وليد سعد
                            للمحاماه والاستشارات القانونية وذلك في خلال؛
                        </h1>
                        <div className="md:space-y-5 space-y-1">
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">في عام 2008 انشأ فرع السلام - مدينة السلام ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">في عام 2016 انشأ فرع التجمع الخامس - القاهرة الجديدة ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">في عام 2018 انشأ فرع الشروق - مدينة الشروق ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px]">في عام 2019 انشأ فرع التجمع الخامص ●</h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">في عام 2019 انشأ مقرة الرئيسي لمؤسسة وليد سعد للمحاماة والاستشارات القانونية بمدينة نصر <p className="ml-0.5">●</p></h4>
                            <h4 className="text-[#191248] font-cairo font-semibold xl:text-sm md:text-xs text-[8px] flex justify-end">في عام 2020 أسس مؤسسة نصر وسعد للمحاماة والاستشارات القانونية حتى الان <p className="ml-0.5">●</p></h4>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Partners





