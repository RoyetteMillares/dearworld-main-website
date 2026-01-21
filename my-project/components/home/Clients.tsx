import { cn } from "@/lib/utils";

const CLIENTS = [
    "Accenture",
    "Verizon",
    "Duke University",
    "UBS",
    "Salesforce",
    "NBA"
];

export function Clients() {
    return (
        <section className="bg-black py-20 text-center text-white">
            <div className="container mx-auto px-6">
                <p className="mb-12 text-sm font-bold uppercase tracking-widest text-[#FFB300]">
                    Trusted by Global Leaders
                </p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
                    {/* Using text for logos as placeholders, styled to look like diverse logotypes */}
                    {CLIENTS.map((client, i) => (
                        <span key={i} className={cn(
                            "text-2xl md:text-3xl font-bold",
                            i % 2 === 0 ? "font-serif" : "font-sans tracking-tight"
                        )}>
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
