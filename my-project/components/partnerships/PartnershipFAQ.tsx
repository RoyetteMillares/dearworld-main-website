"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "Who can become a Dear World partner?",
        answer: "Our partners include agencies, consultants, facilitators, educators, corporate trainers, event producers, and creatives who believe in the power of storytelling to create connection and transformation."
    },
    {
        question: "What's the difference between a Business Partner and a Certified Storyteller?",
        answer: "Business Partners are typically organizations (agencies, bureaus) that integrate Dear World experiences into their broader service offerings for clients. Certified Storytellers are individual practitioners (coaches, facilitators) who master our method to deliver it directly."
    },
    {
        question: "Do I need prior experience in storytelling or facilitation?",
        answer: "While a background in facilitation, coaching, or leadership development is beneficial, our Certification program is designed to build mastery from the ground up. We look for 'narrative intelligence' and a capacity to hold space for others above all else."
    },
    {
        question: "What benefits do partners receive?",
        answer: "Partners gain access to preferred pricing, revenue sharing models, and our proprietary 'Partner Portal' containing high-fidelity sales assets. You also join a global network of like-minded practitioners and receive ongoing support from our HQ team."
    },
    {
        question: "How long does certification take?",
        answer: "The certification process is rigorous but flexible, designed to fit into the lives of busy professionals. It typically involves a multi-week immersion into the methodology, followed by practical application and review. Contact us for the current cohort schedule."
    },
    {
        question: "Can I partner with Dear World for a one-time event?",
        answer: "Our partnership model is built for long-term relationships, but we do collaborate on singular, high-impact activations. If you have a specific client opportunity or event in mind, submit an inquiry through the 'Business Partner' path."
    },
    {
        question: "Is there a cost to become a partner?",
        answer: "There are investment requirements for Certification and Licensing to cover training and materials. Revenue sharing and commission structures are designed to ensure a strong ROI for active partners."
    },
    {
        question: "Can partners operate internationally?",
        answer: "Yes. Dear World is a global operation with stories shared in over 140 countries. We welcome partners who can deliver our experience in diverse cultural contexts and languages."
    },
    {
        question: "How do I apply?",
        answer: "Fill out our Partnership Application Form and our team will reach out within a week to schedule a conversation."
    }
];

export function PartnershipFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-white text-black py-24 md:py-48 border-b-2 border-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    {/* Sticky Label */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-12">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] border-l-2 border-black pl-4 block">
                                The Interrogation
                            </span>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="lg:w-3/4">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="border-b border-black">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full py-8 text-left flex justify-between items-start group hover:bg-black hover:text-white transition-colors duration-300 px-4"
                                >
                                    <span className=" text-sm md:text-xl uppercase tracking-wider max-w-[80%] leading-relaxed">
                                        0{i + 1} {faq.question}
                                    </span>
                                    <div className="relative">
                                        <Plus className={cn(
                                            "w-6 h-6 transition-all duration-300 absolute top-0 right-0",
                                            openIndex === i ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                                        )} />
                                        <Minus className={cn(
                                            "w-6 h-6 transition-all duration-300",
                                            openIndex === i ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                                        )} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden bg-black text-white"
                                        >
                                            <div className="px-4 pb-12 pt-4 max-w-2xl">
                                                <p className="text-lg md:text-xl leading-relaxed opacity-90">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
