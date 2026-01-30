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
                        "w-full bg-white border border-transparent rounded-lg px-4 py-3 text-left font-bold flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent text-black",
                        !date && "text-gray-400",
                        disabled && "opacity-50 cursor-not-allowed",
                        isOpen && "ring-2 ring-black/10 border-transparent"
                    )}
                >
                    <span className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-gray-400" />
                        {date ? format(date, "PPP") : <span>{placeholder}</span>}
                    </span>
                    {date && !disabled && (
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                onChange(undefined);
                            }}
                            className="hover:bg-black/5 rounded-full p-0.5 transition-colors"
                        >
                            <X className="w-3.5 h-3.5 text-gray-400" />
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
                        className="bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-4"
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


        </Popover.Root>
    );
}
