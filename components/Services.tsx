import Image from "next/image"

type Props = {}

const Services = (props: Props) => {
    return (
        <div className="h-full xl:mt-16 mt-10 bg-white z-20 space-y-20 md:mb-64 mb-20">
            <h1 className="text-center font-cairo font-extrabold text-[#191248] text-4xl">خدماتنا</h1>

            <div className="md:space-y-10 space-y-5">
                <h1 className="text-center font-cairo font-extrabold text-[#B1853D] md:text-4xl text-xl">مجال القانون الجنائي</h1>
                <h4 className="md:w-[1000px] w-96 mx-auto text-center text-[#191248] font-cairo font-semibold xl:text-lg md:text-base text-xs">نظراً للخبره الكبيره للمؤسسين في الاشتغال العملي بالقانون الجنائي   عبر سنوات خبرتهم الوظيفيه فأن المؤسسه تفتخر بأن تقدم لعملائها تلك الخبرة العريضه لضمان تحقيق اعلي نتائج مرجوه فيما يتعلق بالتحقيقات التي تجريها النيابه العامه او في المرافعه أمام المحاكم الجنائيه المختصه بكافة درجاتها وكذلك كتابة وصياغه الطعون الجنائيه لمحكمة النقض سواء لنقض الجنايات او نقض الجنح</h4>
            </div>

            <div className="grid grid-cols-2 max-w-7xl mx-auto gap-x-10">
                <div className="md:space-y-10 space-y-5">
                    <h1 className="text-[#B1853D] md:text-4xl text-xl font-cairo font-extrabold text-center">قسم القضايا الجنائية</h1>
                    <div className="space-y-3">
                        <h4 className="md:text-base text-xs text-right text-[#191248] font-cairo font-semibold tracking-wide">
                            قدم المؤسسة كافة الخدمات المتكاملة في القضايا الجنائي
                            من حضور التحقيقات في النيابات المختلفة سواء في النيابة العامة
                            او نيابة امن الدولة العليا او نيابة الاموال العامة او نيابة الشئون
                            المالية و التجارية او نيابة غسيل الاموال او نيابة الاستئناف
                        </h4>
                        <h4 className="md:text-base text-xs text-right text-[#191248] font-cairo font-semibold tracking-wide">
                            الانتقال لمكان الضبط للوصول لادلة او مستتندات قد تفيد في
                            القضية سواء من شهود او كاميرات للمراقبة او تلغرافات مرسلة
                        </h4>
                        <h4 className="md:text-base text-xs text-right text-[#191248] font-cairo font-semibold tracking-wide">
                            حضور الجلسات الخاصة بتجديد الحبس تمهيدا لاخلاء سبيل
                            المتهمين المحبوسين احتياطيا على ذمة القضاياالجنائية التى يتم
                            تجديد حبس المتهمين فيها امام الدوائر الجزئية او المشورة او
                            الجنايات او نيابات امن الدولة العليا و الاموال العامة
                            حضور الجلسات الخاصة بالموضوع امام محاكم الجنايات و الجنخ
                            و الجنح المستثنافة و ذلك للمرافعة و تقديم المذكرات و اثبات البراءة
                            و على رأس هذا القسم المستشار الدكتور / وليد سعد
                        </h4>
                    </div>
                </div>
                <div className="md:space-y-10 space-y-5">
                    <h1 className="text-[#B1853D] md:text-4xl text-xl font-cairo font-extrabold text-center">قسم الطعن الجنائي</h1>
                    <h4 className="md:text-base text-xs text-right text-[#191248] font-cairo font-semibold tracking-wide">
                        حيث تقدم المؤسسة كافة الخدمات المتكاملة في صياغة و كتابة
                        النقض الجنائى للجنايات و الجنح في الاحكام الصادرة من محاكم
                        الجنايات بخصوص جرائم الاعتداء على الاشخاص و جرائم الاعتداء
                        على الاموال من خلال نخبة من اكثر المحامين خبرة في مجال
                        النقض الجنائى
                        حيث يتولون قراءة الدعوى و الحكم الصادر فيها و محاضر الجلسات
                        و المستندات الخاصة بها ثم الوقوف على النقاط الهامة التى تصاغ
                        بالشكل الذى يضمن قبول الطعن و اعادة المحاكمة
                        كل ذلك من خلال المثول امام دوائر محكمة النقض المختلفة
                        للطعون الجنائية و المرافعة فيها
                        وعلى رأس هذا القسم السيد المستشار الدكتور / محمود نصر
                    </h4>
                </div>
            </div>
            <div className="space-y-10">
                <h1 className="text-center font-cairo font-extrabold text-[#B1853D] md:text-4xl text-xl">الاستشارة القانونية الجنائية</h1>

                <div className="xl:w-[1200px] md:w-[900px] md:h-[250px] h-[100px] bg-gradient-to-r from-[#191248] to-[#B1853D] mx-auto rounded-[100px] relative">
                    <h4 className="md:text-2xl text-sm text-center md:w-[800px] w-[400px] text-white font-cairo font-semibold tracking-wide absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        تقديم الاستشارة و المشورة و المساعدة القانونية من خلال فريق
                        العمل و ذلك بعد المداولة فيها و عرض الرأى و تقديمها لطالبها
                        بأفضل و انسب و اقوى حل في الاستشارة المطلوية
                        و على رأس هذا القسم السيد المستشار الدكتور / محمود نصر
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Services