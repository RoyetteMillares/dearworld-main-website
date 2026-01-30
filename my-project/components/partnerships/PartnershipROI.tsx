"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const BENEFITS = [
    { title: "Special Pricing", desc: "Access to partner-exclusive pricing models for all Dear World experiences." },
    { title: "Revenue Sharing", desc: "Competitive commission structures for referrals and business partnerships." },
    { title: "Priority Booking", desc: "First-look access to Robert's schedule and certified facilitator availability." },
    { title: "Licensing Tools", desc: "Rights to use our proprietary narrative science methods within your organization." },
    { title: "Co-Marketing", desc: "Ready-to-use digital assets, case studies, and brand materials." },
    { title: "Partner Directory", desc: "Verified listing in our global network of certified storytelling partners." }
];

export function PartnershipROI() {
    return (
        <section className="bg-white py-32 md:py-64 border-t-2 border-black overflow-hidden relative">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-24 flex items-center gap-12">
                    <div className="py-1 px-3 bg-black text-white">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">The ROI / Benefits</span>
                    </div>
                    <div className="h-0.5 grow bg-black/10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {BENEFITS.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={cn(
                                i % 3 === 1 ? "md:translate-y-12" : i % 3 === 2 ? "md:translate-y-24" : ""
                            )}
                        >
                            <Card className="p-12 bg-white/80 backdrop-blur-xl border border-black/5 hover:border-black hover:shadow-2xl transition-all duration-700 rounded-none h-full group">
                                <CardHeader className="p-0 mb-12">
                                    <div className="p-4 border border-black/10 group-hover:border-black/40 w-fit transition-colors rounded-full">
                                        <CheckCircle2 className="w-6 h-6 text-black/40 group-hover:text-black transition-colors" />
                                    </div>
                                </CardHeader>
                                <CardContent className="p-0 space-y-6">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-3 block">
                                            DW_ROI_0{i + 1}
                                        </span>
                                        <CardTitle className="text-3xl font-black uppercase tracking-tighter leading-[0.8]">
                                            {benefit.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-lg font-medium text-black/60 group-hover:text-black transition-colors leading-relaxed">
                                        {benefit.desc}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Narrative Stamp */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none hidden lg:block">
                <span className="text-[25vw] font-black uppercase tracking-tighter leading-none">IMPACT</span>
            </div>
        </section>
    );
}
