import { PasswordGate } from "@/components/academy/PasswordGate";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AcademyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <PasswordGate>
            <div className="academy-theme min-h-screen bg-white text-black transition-colors duration-500">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </PasswordGate>
    );
}
