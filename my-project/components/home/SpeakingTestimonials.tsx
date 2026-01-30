'use client';

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
        quote: "I’ve been doing leadership summits and leadership events my entire career, and I can honestly say this was the best experience I’ve ever had.",
        author: "Alex Chriss",
        title: "CEO, PayPal",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/paypal.png" alt="PayPal" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Dear World gave us the opportunity to share intimate moments with the people we love and with the people we were trying to build a tremendous amount of trust with. There is no greater trust than telling someone something deeply personal about yourself. When the whole team does that, you don’t just have a chance to become closer — you do. It had nothing to do with basketball, and yet it had everything to do with basketball. It created a more trusting environment where you could teach better defense, better offense, and build a stronger system of communication, because people weren’t holding anything back.",
        author: "Mike Krzyzewski",
        title: "Duke University",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/duke-university.svg" alt="Duke" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Because of Dear World, we are better able to tell our story and spark curiosity about who we are, where we came from, and where we are going. Every Airman has a story — and this work made a huge difference in mine.",
        author: "Lt. Gen. VeraLinn “Dash” Jamieson, Ret.",
        title: "United States Air Force",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/us-airforce.svg" alt="United States Air Force" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "I’ve never seen an exercise break down barriers faster than this one. If you want a group to connect and bond quickly, I would highly recommend Dear World.",
        author: "Malaika Myers",
        title: "CHRO, Hyatt Hotels Corporation",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/hyatt.png" alt="Hyatt" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "If you are building an organization that values belonging, engagement, and mental health, you need the right tools. Dear World is the strongest tool I’ve seen for helping people understand themselves and connect authentically with others.",
        author: "Daniel Raedel, Psy.D.",
        title: "Licensed Clinical Psychologist"
    },
    {
        quote: "Dear World opens the door to honest communication and gives students the courage to take risks and share their stories.",
        author: "Stephanie Barksdale",
        title: "Tulane University",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/tulane.svg" alt="Tulane" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Dear World strengthened relationships and the trust on my team because they provide a process that is authentic, safe and memorable for us to truly tell our stories and to listen to our colleagues",
        author: "Thomas Fuchs",
        title: "VP, Market Analysis and Strategy Genentech",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/genentech.png" alt="Genentech" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Dear World makes friends of stranger. What they have to say. What we get to see. Captured in a photograph. Their process is remarkable because colleagues truly begin understand the stories within their team.",
        author: "Patty McCord",
        title: "Former Chief Talent Officer, Netflix",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative flex items-center justify-center">
                <Image src="/testimonial-logo/netflix.png" alt="Netflix" width={140} height={40} className="object-contain" />
            </div>
        )
    },
];

export default function SpeakingTestimonials() {
    return (
        <section className="py-32 md:py-64 bg-white text-black border-t-2 border-black overflow-hidden relative">
            {/* Background Narrative Stamp */}
            <div className="absolute top-0 right-4 opacity-[0.03] select-none pointer-events-none hidden lg:block">
                <span className="text-[25vw] font-black uppercase tracking-tighter leading-none">VOICE</span>
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-24 flex items-center gap-12">
                    <div className="py-1 px-3 bg-black text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Testimonials / Impact</span>
                    </div>
                    <div className="h-0.5 grow bg-black/10"></div>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={1}
                    autoHeight={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.testimonial-dots',
                    }}
                    className="w-full"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="max-w-6xl mx-auto text-left relative flex flex-col items-start pb-12">
                                <Quote className="w-16 h-16 text-black/10 mb-12" />

                                <blockquote className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.8] text-black mb-16 uppercase tracking-tighter">
                                    "{t.quote}"
                                </blockquote>

                                <div className="flex flex-col md:flex-row md:items-center gap-12 w-full pt-12 border-t-2 border-black/10">
                                    <div className="space-y-1">
                                        <cite className="not-italic text-lg font-black uppercase tracking-tight text-black">
                                            {t.author}
                                        </cite>
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
                                            {t.title}
                                        </p>
                                    </div>

                                    {/* Client Logo Area */}
                                    {
                                        t.clientLogo && (
                                            <div className="md:ml-auto">
                                                {t.clientLogo}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Brutalist Pagination */}
                <div className="testimonial-dots flex gap-4 justify-start mt-12"></div>
            </div>
        </section>
    );
}
