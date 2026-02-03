import Image from "next/image";
import { ChocStorySection } from "@/components/choc/chock-story";

// DATA SECTION - Update this to change page content
const STORYBOOKS = [
    { label: "October 2025 Digital Storybook", href: "/documents/October 2025 Digital Storybook.pdf" },
    { label: "July 2025 Digital Storybook", href: "/documents/July 2025 Digital Storybook.pdf" },
    { label: "April 2025 Digital Storybook", href: "/documents/April 2025 Digital Storybook.pdf" },
    { label: "January 2025 Digital Storybook", href: "/documents/January 2025 Digital Storybook.pdf" },
    { label: "September 2024 Digital Storybook", href: "/documents/September 2024 Digital Storybook.pdf" },
];

const IMMERSIVE_POP_UPS = [
    [
        {
            imageSrc: "/images/image copy.png",
            title: "APRIL 2025 POP-UP IMMERSIVE",
            ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/APRIL-2025-POP-UP-IMMERSIVE/n-GwhJ5X",
        },
        {
            imageSrc: "/images/image copy 2.png",
            title: "JULY 2025 POP-UP IMMERSIVE",
            ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/July-2025-POP-UP-IMMERSIVE/n-ZhX6T9",
        },
    ],
    [
        {
            imageSrc: "/images/image copy 3.png",
            title: "SEPTEMBER 2024 POP-UP IMMERSIVE",
            ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/SEPTEMBER-2024-POP-UP-IMMERSIVE/n-snBZjP",
        },
        {
            imageSrc: "/images/image copy 4.png",
            title: "JANUARY 2025 POP-UP IMMERSIVE",
            ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CHOCs-JANUARY-2025-POP-UP-IMMERSIVE-EXPERIENCE/n-SLLRsx",
        },
    ],
    [
        {
            imageSrc: "/images/Image X3.png",
            title: "OCTOBER 2025 POP-UP IMMERSIVE",
            ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/October-2025-Pop-Up-Immersive-/n-JCRF5S",
        },
    ],
];

const CLINICAL_ORIENTATIONS = [
    { imageSrc: "/images/img-2026.jpg", title: "Clinical Orientation: January 6th, 2026", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-January-6th-2026-/n-23JJVf" },
    { imageSrc: "/images/newOne.jpg", title: "Clinical Orientation – December 16, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-December-16-2025/n-9MNqWR" },
    { imageSrc: "/images/mns.jpg", title: "Clinical Orientation – December 2, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-December-2-2025/n-4nPt76" },
    { imageSrc: "/images/novFour.png", title: "Clinical Orientation – November 18, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-November-18-2025-/n-C7K2vb" },
    { imageSrc: "/images/bnm.png", title: "Clinical Orientation: November 4, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-November-4-2025/n-s4Lh7j" },
    { imageSrc: "/images/xcv.png", title: "Storytime with Lois: October 30, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Storytime-with-Lois-October-30-2025/n-j3WHG2" },
    { imageSrc: "/images/Image X.png", title: "Clinical Orientation – October 21, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-October-21-2025-/n-mvm2WG" },
    { imageSrc: "/images/Image X2.png", title: "GetCHOC Team Retreat – October 17, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/GetCHOC-Team-Retreat-October-17-2025/n-SM8vmC" },
    { imageSrc: "/images/image copy 68.png", title: "Clinical Orientations: October 7, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientations-October-7-2025/n-BpTdVz" },
    { imageSrc: "/images/image copy 69.png", title: "Charge Nurse and CSL Meeting: October 2, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CHOC-Charge-Nurse/n-dZwgWj" },
    { imageSrc: "/images/image5.png", title: "Clinical Orientation: September 23rd, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-September-23rd-2025/n-6MSXv6" },
    { imageSrc: "/images/image copy 5.png", title: "Clinical Orientation: September 9th, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-September-9th-2025/n-RN5vR6" },
    { imageSrc: "/images/image copy 6.png", title: "Mission Medical Executives September 7th, 2025", ctaHref: "https://www.smugmug.com/app/organize/2023-BTE-/CHOC-Dear-World-/Mission-Medical-Executives-September-7th-2025" },
    { imageSrc: "/images/image copy 7.png", title: "Health Literacy Session: September 2nd, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-SEPT-2nd-2025/n-hnZSbk" },
    { imageSrc: "/images/image copy 8.png", title: "CLINICAL ORIENTATION: AUGUST 19TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-August-19th-2025/n-4CfZcN" },
    { imageSrc: "/images/image copy 9.png", title: "CLINICAL ORIENTATION: AUGUST 12TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-AUSGUST-12TH-2025/n-pZ45Th" },
    { imageSrc: "/images/image copy 10.png", title: "RN Residency: August 5th, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/RN-Residency-August-5th-2025-/n-qHJkX8" },
    { imageSrc: "/images/image copy 11.png", title: "CLINICAL ORIENTATION: JULY 22nd, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-JULY-22nd-2025/n-x2cZWh" },
    { imageSrc: "/images/image copy 12.png", title: "CLINICAL ORIENTATION: JULY 8TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-JULY-8TH-2025/n-W5zgBF" },
    { imageSrc: "/images/image copy 13.png", title: "Mi4 Interns: JUNE 23rd, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-JUNE-23RD-2025/n-mjtsm6" },
    { imageSrc: "/images/image copy 14.png", title: "CLINICAL ORIENTATION: JUNE 17TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/Clinical-Orientation-June-17th-2025/n-JX34PN" },
    { imageSrc: "/images/image copy 15.png", title: "CLINICAL ORIENTATION: JUNE 3rd, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-JUNE-3TH-2025/n-CMDqCr" },
    { imageSrc: "/images/image copy 16.png", title: "CLINICAL ORIENTATION: MAY 20TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-MAY-20TH-2025/n-QvQrNs" },
    { imageSrc: "/images/image copy 17.png", title: "CLINICAL ORIENTATION: MAY 6TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-MAY-6TH-2025/n-Bx9MTb" },
    { imageSrc: "/images/image copy 18.png", title: "CLINICAL ORIENTATION: APRIL 22ND, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-APRIL-22ND-2025/n-S2wmjT" },
];

const HISTORICAL_SESSIONS = [
    [
        { imageSrc: "/images/image copy 19.png", title: "CLINICAL ORIENTATION: APRIL 8TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-APRIL-8TH-2025/n-T3L9xf" },
        { imageSrc: "/images/image copy 20.png", title: "SOCIAL WORK TEAM: APRIL 15TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/SOCIAL-WORK-TEAM-APRIL-15TH-2025/n-9hPrCx" },
    ],
    [
        { imageSrc: "/images/image copy 21.png", title: "CLINICAL ORIENTATION: MARCH 25TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-MARCH-25TH-2025/n-BhKHvr" },
    ],
    [
        { imageSrc: "/images/image copy 22.png", title: "CLINICAL ORIENTATION: MARCH 11TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-MARCH-11TH-2025/n-6jKfpV" },
        { imageSrc: "/images/image copy 23.png", title: "CLINICAL ORIENTATION: FEBRUARY 25TH, 2025", ctaHref: "https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-FEBRUARY-25TH-2025/n-ZDrxbp" },
    ],
];

export default function AcademyPage() {
    return (
        <main className="flex-1 bg-white m-0 p-0">
            <div className="w-full m-0 p-0 overflow-x-hidden">
                <div className="flex flex-col items-stretch gap-0 m-0 p-0">
                    {/* HERO Banner Section */}
                    <section className="relative w-full mt-16">
                        {/* Hero Image */}
                        <div className="relative w-full aspect-4/5 md:aspect-21/9">
                            <Image
                                src="/images/CHOC-26.jpg"
                                alt="CHOC × Dear World Academy - Longest Hug"
                                fill
                                className="object-cover object-top pt-[2em]"
                                priority
                            />
                            {/* Dark overlay for text legibility */}
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Academy Presents - Left Side */}
                            <div className="absolute left-4 md:left-12 top-1/3 md:top-1/2 md:-translate-y-1/2">
                                <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    The Dear World<br />Academy presents
                                </h1>
                            </div>

                            {/* Dear Hospital Title - Bottom Center */}
                            <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-4">
                                <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold italic">
                                    Dear Hospital:
                                </h2>
                                <p className="text-white text-sm md:text-lg lg:text-xl font-normal mt-1">
                                    Children&apos;s Hospital of Orange County (choc)
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Partnership Section */}
                    <section className="w-full mt-8 md:mt-16 mb-16 md:mb-24 px-4 md:px-[45px]">
                        <div className="max-w-[1400px] mx-auto flex flex-col items-center">

                            <h1 className="text-black text-3xl md:text-5xl font-bold mt-4 text-center">
                                The Partnership
                            </h1>
                            {/* Header with Scribble */}
                            <div className="flex flex-col items-center mb-8 md:mb-16">
                                <div className="relative w-64 md:w-96 aspect-4/1">
                                    <Image
                                        src="/brand-assets/Scribble-17.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                            </div>

                            {/* Two-Column Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                                {/* Left Column: How it happened */}
                                <div className="flex flex-col gap-8">
                                    <div className="relative aspect-3/2 w-full overflow-hidden">
                                        <Image
                                            src="/images/CHOC-2.jpg"
                                            alt="CHOC Nurse portrait - Our Stories Matter"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-2xl md:text-3xl font-bold text-black">
                                            How it happened
                                        </h2>
                                        <p className="text-black text-base md:text-lg leading-relaxed font-normal">
                                            Dear World presents to the American Association of Critical Care Nurses annual conference in 2022. Children's Hospital of Orange County (CHOC) nurses attend and are inspired to bring Dear World to their organization. Director of Nursing Research and Innovation, Dr. Jennifer Hayakawa assembles an interdisciplinary team to participate in the inaugural NurseHack4Health Pitch-A-Thon event. Dr. Hayakawa received seed funding from #FirstRespondersFirst and ALL IN: Wellbeing First for Healthcare to bring this program to life at CHOC.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: How we onboarded */}
                                <div className="flex flex-col gap-8">
                                    <div className="relative aspect-3/2 w-full overflow-hidden">
                                        <Image
                                            src="/images/CHOC-39.jpg"
                                            alt="CHOC Associate portrait - Holy Water"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-3xl font-bold text-black">
                                            How we onboarded Storytellers
                                        </h2>
                                        <p className="text-black text-lg leading-relaxed font-normal">
                                            Dear World delivers its custom storytelling curriculum over three weeks to certify 10 CHOC associates in the Brain Tattoo storytelling method.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*FIGURES SECTION*/}
                    <section className="w-full mt-8 md:mt-16 px-4 md:px-[45px]">
                        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                            {/* Hero Portrait */}
                            <div className="w-full relative aspect-video md:aspect-21/9 overflow-hidden rounded-none mb-12 md:mb-24">
                                <Image
                                    src="/images/CHOC-88.jpg"
                                    alt="CHOC Hero Portrait"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Stats Section */}
                            <div className="w-full flex flex-col items-center px-4">
                                {/* Branding Scribble */}
                                <div className="relative w-48 md:w-96 aspect-4/1 mb-8">
                                    <Image
                                        src="/brand-assets/Scribble-17.png"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Stats Grid with Bracket */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full">
                                    {/* Left Side: Experience Count */}
                                    <div className="text-center md:text-right flex-1">
                                        <p className="text-2xl md:text-5xl font-bold text-black leading-tight">
                                            Through <span className="text-5xl md:text-8xl">84</span><br />
                                            completed<br />
                                            storytelling experiences
                                        </p>
                                    </div>

                                    {/* Middle: Orange Bracket (Desktop Only) */}
                                    <div className="hidden md:block w-12 h-64 border-y-4 border-r-4 border-[#FFB300] rounded-r-xl relative">
                                        <div className="absolute top-1/2 -right-6 w-6 h-1 bg-[#FFB300] -translate-y-1/2" />
                                    </div>
                                    {/* Mobile Divider */}
                                    <div className="md:hidden w-1 h-24 bg-[#FFB300]" />

                                    {/* Right Side: Detailed Stats */}
                                    <div className="flex flex-col gap-6 md:gap-12 flex-1 text-center md:text-left">
                                        <div className="flex flex-col">
                                            <span className="text-5xl md:text-9xl font-bold text-black leading-none">2,708</span>
                                            <span className="text-lg md:text-3xl font-normal text-black mt-1 md:mt-2">participants</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-5xl md:text-9xl font-bold text-black leading-none">93%</span>
                                            <span className="text-lg md:text-3xl font-normal text-black mt-1 md:mt-2">Recommended the<br />experience</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Logo Left Alignment */}
                                <div className="w-full flex justify-center md:justify-start mt-8 md:mt-12">
                                    <div className="text-[#FFB300] font-bold italic text-xl flex flex-col leading-none">
                                        <Image
                                            src="/images/Brain Tattoo_Black and Orange.png"
                                            alt=""
                                            width={200}
                                            height={200}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*FIGURES SECTION END*/}
                    {/*PRELIMANARY RESULTS SECTION*/}
                    <section className="w-full mt-8 md:mt-16 px-4 md:px-[45px]">
                        <div className="max-w-[1400px] mx-auto">
                            <div className="w-full relative aspect-video md:aspect-21/9 overflow-hidden rounded-none mb-12 md:mb-24">
                                <Image
                                    src="/images/CHOC-64.jpg"
                                    alt="CHOC Hero Portrait"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Preliminary Results Stats Section */}
                            <div className="w-full flex flex-col items-center px-0 md:px-4 mb-8 md:mb-16">
                                {/* Stats Grid with Bracket */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 w-full">
                                    {/* Left Side: Title */}
                                    <div className="text-center md:text-right flex-1">
                                        <p className="text-3xl md:text-6xl font-bold text-black leading-tight">
                                            Preliminary<br />Results
                                        </p>
                                    </div>

                                    {/* Middle: Orange Bracket (Desktop Only) */}
                                    <div className="hidden md:block w-12 h-96 border-y-4 border-r-4 border-[#FFB300] rounded-r-xl relative">
                                        <div className="absolute top-1/2 -right-6 w-6 h-1 bg-[#FFB300] -translate-y-1/2" />
                                    </div>
                                    {/* Mobile Divider */}
                                    <div className="md:hidden w-1 h-24 bg-[#FFB300]" />

                                    {/* Right Side: Detailed Stats */}
                                    <div className="flex flex-col gap-6 md:gap-10 flex-1 text-center md:text-left">
                                        <div className="flex flex-col">
                                            <span className="text-5xl md:text-9xl font-bold text-black leading-none">89%</span>
                                            <span className="text-base md:text-2xl font-normal text-black mt-1 md:mt-2">Felt safe to share their story</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-5xl md:text-9xl font-bold text-black leading-none">91%</span>
                                            <span className="text-base md:text-2xl font-normal text-black mt-1 md:mt-2">Felt more connected to CHOC&apos;s Values</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-5xl md:text-9xl font-bold text-black leading-none">94%</span>
                                            <span className="text-base md:text-2xl font-normal text-black mt-1 md:mt-2">Felt more connected to their colleagues</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Logo Left Alignment */}
                                <div className="w-full flex justify-center md:justify-start mt-8 md:mt-12">
                                    <Image
                                        src="/images/Brain Tattoo_Black and Orange.png"
                                        alt=""
                                        width={200}
                                        height={200}
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Testimonial Quote */}
                            <div className="w-full border-t-4 border-[#FFB300] pt-6 md:pt-8 mb-8 md:mb-16">
                                <p className="text-base md:text-xl text-black leading-relaxed italic">
                                    &quot;As we waited in line for our photos, we wrote these &apos;brain tattoos&apos; on each other. A magical thing happened–we laughed, we cried, and we connected through our stories. The Dear World experience creates a space to encourage deep connection, vulnerability, and expression.&quot;
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Video Section */}
                    <section className="w-full mt-6 md:mt-10 mb-10 md:mb-16 px-4 md:px-[45px]">
                        <div className="w-full max-w-[1400px] mx-auto">
                            <div className="relative w-full aspect-video bg-black overflow-hidden rounded-none">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/0uGzug6oeCg?rel=0"
                                    title="Dear Hospital Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        <div className="self-stretch text-center justify-start mt-12 md:mt-24 px-2">
                            <span className="text-black text-base md:text-[18px] font-normal leading-relaxed">
                                If you have questions or think your department might like to participate in the Dear Hospital program, please contact us at
                            </span>
                            <br />
                            <a href="mailto:DearHospital@choc.org" className="text-black text-base md:text-[18px] font-bold leading-relaxed underline decoration-transparent hover:decoration-inherit transition-colors">
                                DearHospital@choc.org
                            </a>
                        </div>

                        <h2 className="text-black text-2xl md:text-[48px] font-bold leading-tight md:leading-[57.6px] text-center mt-4 md:mt-6">
                            Dear Hospital Storybooks
                        </h2>

                        <div className="mt-4 md:mt-5 flex flex-wrap items-center justify-center gap-3 md:gap-6">
                            {STORYBOOKS.map((book) => (
                                <a
                                    key={book.label}
                                    href={book.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest bg-[#eab308f2] text-black px-8 py-4 w-fit hover:bg-yellow-500 transition-colors"
                                >
                                    {book.label}
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Immersive Pop-Ups Grid */}
                    <div className="px-4 md:px-[45px] mb-10 md:mb-16">
                        <div className="space-y-8 max-w-[1400px] mx-auto">
                            {IMMERSIVE_POP_UPS.map((row, rowIdx) => (
                                <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                    {row.map((item, itemIdx) => (
                                        <ChocStorySection key={itemIdx} {...item} variant="partial" />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-black text-2xl md:text-[48px] font-bold leading-tight md:leading-[57.6px] text-center mt-12 md:mt-20 mb-8 md:mb-12 px-4">
                        Browse our Collection of Brain Tattoo Portraits
                    </h2>

                    <div className="px-4 md:px-[45px] mb-16 md:mb-24">
                        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-16">
                            {CLINICAL_ORIENTATIONS.map((item, idx) => (
                                <ChocStorySection key={idx} {...item} variant="partial" />
                            ))}
                        </div>
                    </div>

                    <div className="px-4 md:px-[45px] mb-16 md:mb-24">
                        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-16">
                            {HISTORICAL_SESSIONS.flat().map((item, idx, array) => {
                                const isLast = idx === array.length - 1;
                                return (
                                    <div key={idx} className={isLast ? "md:col-span-2" : ""}>
                                        <ChocStorySection {...item} variant="partial" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <ChocStorySection
                        imageSrc="/images/image copy 67.png"
                        title="CHOC at Mission Nurse Leaders Event June 2023"
                        ctaHref="https://dearworld.smugmug.com/2023-BTE-/CHOC-Dear-World-/CLINICAL-ORIENTATION-JUNE-9TH-2023/n-3FDDNw"
                    />
                </div>
            </div>
        </main>
    );
}
