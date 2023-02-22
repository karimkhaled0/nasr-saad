import About from '@/components/About'
import Banner from '@/components/Banner'
import Number from '@/components/Number'
import Partners from '@/components/Partners'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            {/* Banner */}
            <section id='#home'>
                <Banner />
            </section>
            {/* Number Section */}
            <section>
                <Number />
            </section>
            {/* About */}
            <section id='#about'>
                <About />
            </section>
            {/* People */}
            <section id='#partners'>
                <Partners />
            </section>
            {/* Services */}

            {/* Contuct Us */}

            {/* Footer */}
        </div>
    )
}

export default page