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
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
                <Image src="/testimonial-logo/paypal.png" alt="PayPal" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Dear World gave us the opportunity to share intimate moments with the people we love and with the people we were trying to build a tremendous amount of trust with. There is no greater trust than telling someone something deeply personal about yourself. When the whole team does that, you don’t just have a chance to become closer — you do. It had nothing to do with basketball, and yet it had everything to do with basketball. It created a more trusting environment where you could teach better defense, better offense, and build a stronger system of communication, because people weren’t holding anything back.",
        author: "Mike Krzyzewski",
        title: "Duke University",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
                <Image src="/testimonial-logo/duke-university.svg" alt="Duke" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Because of Dear World, we are better able to tell our story and spark curiosity about who we are, where we came from, and where we are going. Every Airman has a story — and this work made a huge difference in mine.",
        author: "Lt. Gen. VeraLinn “Dash” Jamieson, Ret.",
        title: "United States Air Force",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
                <Image src="/testimonial-logo/us-airforce.svg" alt="United States Air Force" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "I’ve never seen an exercise break down barriers faster than this one. If you want a group to connect and bond quickly, I would highly recommend Dear World.",
        author: "Malaika Myers",
        title: "CHRO, Hyatt Hotels Corporation",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
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
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
                <Image src="/testimonial-logo/tulane.svg" alt="Tulane" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Dear World strengthened relationships and the trust on my team because they provide a process that is authentic, safe and memorable for us to truly tell our stories and to listen to our colleagues",
        author: "Thomas Fuchs",
        title: "VP, Market Analysis and Strategy Genentech",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
                <Image src="/testimonial-logo/genentech.png" alt="Genentech" width={140} height={40} className="object-contain" />
            </div>
        )
    },
    {
        quote: "Dear World makes friends of stranger. What they have to say. What we get to see. Captured in a photograph. Their process is remarkable because colleagues truly begin understand the stories within their team.",
        author: "Patty McCord",
        title: "Former Chief Talent Officer, Netflix",
        clientLogo: (
            <div className="h-8 md:h-12 w-auto relative opacity-40 hover:opacity-100 transition-all flex items-center justify-center">
                <Image src="/testimonial-logo/netflix.png" alt="Netflix" width={140} height={40} className="object-contain" />
            </div>
        )
    },
];

export default function SpeakingTestimonials() {
    return (
        <section className="py-24 bg-background border-y border-foreground/5 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={32}
                    slidesPerView={1}
                    autoHeight={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.speaking-testimonial-pagination',
                    }}
                    className="w-full"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <div className="max-w-4xl mx-auto text-center relative flex flex-col items-center pb-12">
                                <Quote className="w-12 h-12 text-foreground/20 mb-10" />

                                <blockquote className="text-3xl md:text-5xl font-black leading-[1.2] text-foreground mb-12">
                                    "{t.quote}"
                                </blockquote>

                                <div className="space-y-2 mb-10">
                                    <cite className="not-italic text-sm md:text-base font-medium text-foreground/60">
                                        {t.author}, {t.title}
                                    </cite>
                                </div>

                                {/* Client Logo Area */}
                                {
                                    t.clientLogo && (
                                        <div className="flex items-center gap-3 mb-10">
                                            {t.clientLogo}
                                        </div>
                                    )
                                }
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination Dots */}
                <div className="speaking-testimonial-pagination flex gap-2 justify-center mt-4"></div>
            </div>
        </section>
    );
}
