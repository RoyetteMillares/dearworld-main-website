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
                    {/* Header Images */}
                    {["image.png", "image1.png", "image2.png", "image3.png"].map((img, idx) => (
                        <img
                            key={idx}
                            src={`/images/${img}`}
                            alt={`CHOC × Dear World Academy preview ${idx}`}
                            className="block w-full h-auto mt-16 m-0 p-0"
                            loading="eager"
                        />
                    ))}

                    {/* Video Section */}
                    <section className="w-full mt-10 mb-16 px-4 md:px-[45px]">
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

                        <div className="self-stretch text-center justify-start mt-24">
                            <span className="text-black text-[18px] font-normal font-['Inter'] leading-relaxed">
                                If you have questions or think your department might like to participate in the Dear Hospital program, please contact us at
                            </span>
                            <br />
                            <a href="mailto:DearHospital@choc.org" className="text-black text-[18px] font-bold font-['Inter'] leading-relaxed underline decoration-transparent hover:decoration-inherit transition-colors">
                                DearHospital@choc.org
                            </a>
                        </div>

                        <h2 className="text-black text-[32px] md:text-[48px] font-bold font-['Inter'] leading-tight md:leading-[57.6px] text-center mt-6">
                            Dear Hospital Storybooks
                        </h2>

                        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            {STORYBOOKS.map((book) => (
                                <a
                                    key={book.label}
                                    href={book.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex justify-center items-center gap-2 overflow-hidden px-6 py-3 bg-yellow-500 rounded-xl shadow-[0px_8px_30px_-5px_rgba(255,178,0,0.30)] text-black text-base font-normal font-['Inter'] leading-normal transition-all hover:bg-yellow-500/90 active:scale-95"
                                >
                                    {book.label}
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Immersive Pop-Ups Grid */}
                    <div className="space-y-8 px-4 md:px-[45px] mb-16">
                        {IMMERSIVE_POP_UPS.map((row, rowIdx) => (
                            <div key={rowIdx} className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                {row.map((item, itemIdx) => (
                                    <ChocStorySection key={itemIdx} {...item} variant="partial" />
                                ))}
                            </div>
                        ))}
                    </div>

                    <h2 className="text-black text-[32px] md:text-[48px] font-bold font-['Inter'] leading-tight md:leading-[57.6px] text-center mt-20 mb-12">
                        Browse our Collection of Brain Tattoo Portraits
                    </h2>

                    <div className="space-y-16 mb-24">
                        {CLINICAL_ORIENTATIONS.map((item, idx) => (
                            <ChocStorySection key={idx} {...item} />
                        ))}
                    </div>

                    <div className="space-y-16 mb-24">
                        {HISTORICAL_SESSIONS.map((row, rowIdx) => (
                            <div key={rowIdx} className="px-4 md:px-[45px]">
                                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {row.map((item, itemIdx) => (
                                        <ChocStorySection key={itemIdx} {...item} variant={row.length === 1 ? "full" : "partial"} />
                                    ))}
                                </div>
                            </div>
                        ))}
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
