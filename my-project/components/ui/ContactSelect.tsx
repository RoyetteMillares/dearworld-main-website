'use client';

import * as React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomSelectProps {
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    options: { value: string; label: string }[];
    disabled?: boolean;
}

export function ContactSelect({ value, onValueChange, placeholder = 'Select an option', options, disabled }: CustomSelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Select.Root value={value} onValueChange={onValueChange} open={isOpen} onOpenChange={setIsOpen} disabled={disabled}>
            <Select.Trigger
                className={cn(
                    "w-full bg-white border border-transparent rounded-lg px-4 py-3 text-left font-bold flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-transparent text-black",
                    !value && "text-gray-400",
                    disabled && "opacity-50 cursor-not-allowed",
                    isOpen && "ring-2 ring-black/10 border-transparent"
                )}
            >

                <Select.Value placeholder={placeholder}>
                    {value ? options.find(o => o.value === value)?.label : placeholder}
                </Select.Value>
                <Select.Icon>
                    <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-200", isOpen && "rotate-180")} />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    position="popper"
                    sideOffset={8}
                    className="z-50 min-w-(--radix-select-trigger-width) bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden outline-none"
                    asChild
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <Select.Viewport className="p-2">
                            {options.map((option) => (
                                <Select.Item
                                    key={option.value}
                                    value={option.value}
                                    className="relative flex items-center px-8 py-2.5 text-sm font-bold text-black rounded-lg cursor-pointer outline-none select-none hover:bg-black hover:text-white transition-colors data-disabled:opacity-50 data-disabled:pointer-events-none"
                                >
                                    <Select.ItemText>{option.label}</Select.ItemText>
                                    <Select.ItemIndicator className="absolute left-2 flex items-center justify-center">
                                        <Check className="w-4 h-4" />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                    </motion.div>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}
