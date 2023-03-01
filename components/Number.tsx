'use client'
import Image from 'next/image';
import CountUp from 'react-countup';

type Props = {}

const Number = (props: Props) => {

    return (
        <div className='relative z-10'>
            <div className='absolute w-full h-96 z-0 opacity-10'>
                <Image
                    src='/pattern.png'
                    alt='pattern'
                    width={10000}
                    height={100}
                    priority
                />
            </div>
            <div className='grid grid-cols-4 text-right md:max-w-[1400px] max-w-[900px] gap-y-44 mx-auto md:py-16 py-10'>
                <div className='z-20 border-r-4 md:space-y-5 space-y-2 border-[#191248] flex flex-col px-5'>
                    <div className='flex justify-end items-center space-x-2'>
                        <CountUp end={2000} delay={1} duration={3} className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]' />
                        <h1 className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]'>+</h1>
                    </div>
                    <h2 className='md:text-4xl sm:text-sm text-xs font-cairo font-semibold text-[#191248]'>عدد العملاء</h2>
                </div>
                <div className='z-20 border-r-4 md:space-y-5 space-y-2 border-[#191248] flex flex-col px-5'>
                    <div className='flex justify-end items-center space-x-2'>
                        <CountUp end={100} delay={1} duration={1} className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]' />
                        <h1 className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]'>+</h1>
                    </div>
                    <h2 className='md:text-4xl sm:text-sm text-xs font-cairo font-semibold text-[#191248]'>عدد الموظفين</h2>
                </div>
                <div className='z-20 border-r-4 md:space-y-5 space-y-2 border-[#191248] flex flex-col px-5'>
                    <div className='flex justify-end items-center space-x-2'>
                        <CountUp end={1400} delay={1} duration={3} className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]' />
                        <h1 className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]'>+</h1>
                    </div>
                    <h2 className='md:text-4xl sm:text-sm text-xs font-cairo font-semibold text-[#191248]'>عدد القضايا</h2>
                </div>
                <div className='z-20 border-r-4 md:space-y-5 space-y-2 border-[#191248] flex flex-col px-5'>
                    <div className='flex justify-end items-center space-x-2'>
                        <CountUp end={50} delay={1} duration={1} className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]' />
                        <h1 className='md:text-4xl sm:text-sm text-xs font-cairo font-bold text-[#191248]'>+</h1>
                    </div>
                    <h2 className='md:text-4xl sm:text-sm text-xs font-cairo font-semibold text-[#191248]'>عملاء في الانتظار</h2>
                </div>
            </div>

        </div>
    )
}

export default Number