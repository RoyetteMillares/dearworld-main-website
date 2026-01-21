import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function SplitIdentity() {
    return (
        <section className="flex flex-col md:flex-row min-h-[600px] w-full">
            {/* Left: Commercial (Black) */}
            <div className="group relative flex w-full flex-col items-center justify-center bg-black px-6 py-20 text-center text-white transition-colors duration-500 md:w-1/2">
                <div className="max-w-md space-y-6">
                    <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Building Skills
                    </h2>
                    <p className="text-gray-400">
                        For organizations that want to build better teams through the power of personal narrative.
                    </p>
                    <div className="pt-4">
                        <Link href="/methods">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 border-2 border-transparent hover:border-white h-14 px-8 text-lg"
                            >
                                Explore Methods <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right: Foundation (Yellow) */}
            <div className="group relative flex w-full flex-col items-center justify-center bg-[#FFB300] px-6 py-20 text-center text-black transition-colors duration-500 md:w-1/2">
                <div className="max-w-md space-y-6">
                    <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Building Connection
                    </h2>
                    <p className="text-black/80 font-medium">
                        For communities and individuals seeking to share their story with the world.
                    </p>
                    <div className="pt-4">
                        <Link href="/foundation">
                            <Button
                                size="lg"
                                className="bg-black text-white hover:bg-gray-900 border-2 border-transparent hover:border-black h-14 px-8 text-lg"
                            >
                                Visit Foundation <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
