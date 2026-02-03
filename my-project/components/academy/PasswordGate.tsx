"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

interface PasswordGateProps {
    children: React.ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const CORRECT_PASSWORD = "DWCHOC";

    useEffect(() => {
        const authorized = sessionStorage.getItem("academy_authorized");
        if (authorized === "true") {
            setIsAuthorized(true);
        }
        setIsLoading(false);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsAuthorized(true);
            sessionStorage.setItem("academy_authorized", "true");
            setError(false);
        } else {
            setError(true);
            setPassword("");
        }
    };

    if (isLoading) {
        return <div className="min-h-screen bg-black" />;
    }

    if (isAuthorized) {
        return <>{children}</>;
    }

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black p-4">
            <div className="w-full max-w-md space-y-8 text-center">
                <div className="flex justify-center">
                    <div className="rounded-full bg-white/10 p-4">
                        <Lock className="h-8 w-8 text-white" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                        Academy Access
                    </h1>
                    <p className="text-zinc-400">
                        Please enter the password to access the CHOC x Dear World Academy.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2 text-left">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={cn(
                                "w-full rounded-none border-b-2 bg-transparent py-4 text-center text-2xl text-white transition-all focus:outline-none",
                                error ? "border-red-500" : "border-white/20 focus:border-white"
                            )}
                            autoFocus
                        />
                        {error && (
                            <p className="text-center text-sm font-medium text-red-500">
                                Incorrect password. Please try again.
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-white py-4 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-200"
                    >
                        Enter Academy
                    </button>
                </form>

                <p className="text-xs text-zinc-500">
                    Dear World &copy; 2026. All rights reserved.
                </p>
            </div>
        </div>
    );
}
