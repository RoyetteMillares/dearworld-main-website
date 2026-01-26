'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import * as Popover from '@radix-ui/react-popover';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Import react-day-picker styles
import 'react-day-picker/dist/style.css';

interface DatePickerProps {
    date?: Date;
    onChange: (date: Date | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
}

export function ContactDatePicker({ date, onChange, placeholder = 'Pick a date', disabled }: DatePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger asChild>
                <button
                    type="button"
                    disabled={disabled}
                    className={cn(
                        "w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-left font-medium flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                        !date && "text-white/40",
                        disabled && "opacity-50 cursor-not-allowed",
                        isOpen && "ring-2 ring-primary border-transparent"
                    )}
                >
                    <span className="flex items-center gap-2 text-white/90">
                        <CalendarIcon className="w-4 h-4 text-white/40" />
                        {date ? format(date, "PPP") : <span>{placeholder}</span>}
                    </span>
                    {date && !disabled && (
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                onChange(undefined);
                            }}
                            className="hover:bg-white/10 rounded-full p-0.5 transition-colors"
                        >
                            <X className="w-3.5 h-3.5 text-white/40" />
                        </span>
                    )}
                </button>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content sideOffset={8} align="start" className="z-50 outline-none" asChild>
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-black border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4"
                    >
                        <DayPicker
                            mode="single"
                            selected={date}
                            disabled={{ before: new Date() }}
                            onSelect={(newDate) => {
                                onChange(newDate);
                                setIsOpen(false);
                            }}
                            className="contact-rdp"
                        />
                    </motion.div>
                </Popover.Content>
            </Popover.Portal>

            <style jsx global>{`
                .contact-rdp {
                    --rdp-cell-size: 40px;
                    --rdp-accent-color: #ffffff;
                    --rdp-background-color: #ffffff;
                    --rdp-accent-color-foreground: #000000;
                    margin: 0;
                    color: white !important;
                }
                .contact-rdp .rdp-day {
                    color: white !important;
                    font-weight: 500;
                }
                .contact-rdp .rdp-day_selected {
                    background-color: white !important;
                    color: black !important;
                    border-radius: 8px;
                }
                .contact-rdp .rdp-day:hover:not(.rdp-day_selected) {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                    border-radius: 8px;
                }
                .contact-rdp .rdp-head_cell {
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: rgba(255, 255, 255, 0.4);
                    padding-bottom: 0.5rem;
                }
                .contact-rdp .rdp-month_caption {
                    font-weight: 700;
                    font-size: 0.95rem;
                    color: white !important;
                    margin-bottom: 1rem;
                }
                .contact-rdp .rdp-nav_button {
                    color: white !important;
                }
            `}</style>
        </Popover.Root>
    );
}
