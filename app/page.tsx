import About from '@/components/About'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Number from '@/components/Number'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
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
            <section id='#services'>
                <Services />
            </section>
            {/* Contuct Us */}
            <section id='#contact'>
                <Contact />
            </section>
            {/* Footer */}
            <section>
                <Footer />
            </section>
        </div>
    )
}

export default page