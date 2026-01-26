'use client';

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { sendEmail } from '@/app/actions';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ContactDatePicker } from './ContactDatePicker';
import { ContactSelect } from './ContactSelect';
import { cn } from '@/lib/utils';

const INQUIRY_OPTIONS = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Keynote Speaking", label: "Keynote Speaking" },
    { value: "Workshops", label: "Workshops / Training" },
    { value: "Press", label: "Press / Media" },
    { value: "Other", label: "Other" },
];

const ContactForm = () => {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        eventLocation: '',
        eventDate: undefined as Date | undefined,
        budget: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDateChange = (date: Date | undefined) => {
        setFormData({ ...formData, eventDate: date });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, subject: value });
    };

    const handleBudgetChange = (value: string) => {
        setFormData({ ...formData, budget: value });
    };

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('idle');

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'eventDate' && value instanceof Date) {
                formDataToSend.append(key, value.toISOString().split('T')[0]);
            } else if (value !== undefined) {
                formDataToSend.append(key, value as string);
            }
        });

        startTransition(async () => {
            try {
                const result = await sendEmail(null, formDataToSend);

                if (result.success) {
                    setStatus('success');
                    setStatusMessage(result.message);
                    // Redirect to success page
                    router.push('/inquiry-success');
                } else {
                    setStatus('error');
                    setStatusMessage(result.message);
                }
            } catch (error) {
                setStatus('error');
                setStatusMessage('An unexpected error occurred. Please try again.');
            }
        });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const inputClasses = "w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all disabled:opacity-50 placeholder:text-white/20";
    const labelClasses = "text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-1 block";

    return (
        <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-8"
        >
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-1">
                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClasses}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-1">
                    <label htmlFor="organization" className={labelClasses}>Organization</label>
                    <input
                        type="text"
                        id="organization"
                        name="organization"
                        className={inputClasses}
                        placeholder="Company or Event Name"
                        value={formData.organization}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                    <label htmlFor="subject" className={labelClasses}>Inquiry Type</label>
                    <ContactSelect
                        value={formData.subject}
                        onValueChange={handleSelectChange}
                        options={INQUIRY_OPTIONS}
                        disabled={isPending}
                    />
                </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="space-y-1">
                    <label htmlFor="eventLocation" className={labelClasses}>Event Location</label>
                    <input
                        type="text"
                        id="eventLocation"
                        name="eventLocation"
                        className={inputClasses}
                        placeholder="City, State or Virtual"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        disabled={isPending}
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                    <label htmlFor="eventDate" className={labelClasses}>Event Date</label>
                    <ContactDatePicker
                        date={formData.eventDate}
                        onChange={handleDateChange}
                        placeholder="When is the event?"
                        disabled={isPending}
                    />
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-1">
                <label htmlFor="budget" className={labelClasses}>Budget Range</label>
                <ContactSelect
                    value={formData.budget}
                    onValueChange={handleBudgetChange}
                    placeholder="Select budget range"
                    options={[
                        { value: 'Under $5,000', label: 'Under $5,000' },
                        { value: '$5,000 - $10,000', label: '$5,000 - $10,000' },
                        { value: '$10,000 - $25,000', label: '$10,000 - $25,000' },
                        { value: '$25,000 - $50,000', label: '$25,000 - $50,000' },
                        { value: '$50,000+', label: '$50,000+' }
                    ]}
                    disabled={isPending}
                />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1">
                <label htmlFor="message" className={labelClasses}>Tell us about your event</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className={cn(inputClasses, "resize-none")}
                    placeholder="What are your goals for this event? Who is the audience?..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isPending}
                ></textarea>
            </motion.div>

            <AnimatePresence mode="wait">
                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="p-5 rounded-xl border flex items-center gap-3 bg-red-500/10 border-red-500/20 text-red-500"
                    >
                        <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                        <p className="font-medium text-sm leading-relaxed">{statusMessage}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isPending}
                className="w-full bg-white text-black font-black py-5 rounded-full shadow-2xl hover:bg-black hover:text-white hover:border-white border-2 border-white transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none select-none group uppercase tracking-[0.2em]"
            >
                {isPending ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="tracking-wide">SUBMITTING APPLICATION...</span>
                    </>
                ) : (
                    <>
                        <span className="tracking-wide">SUBMIT APPLICATION</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                )}
            </motion.button>
        </motion.form>
    );
};

export default ContactForm;

