import { Form } from '@inertiajs/react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import ContactController from '@/actions/App/Http/Controllers/ContactController';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

type ContactDetail = {
    label: string;
    value: string;
    href?: string;
    icon: LucideIcon;
};

const contactDetails: ContactDetail[] = [
    {
        label: 'Location',
        value: 'Bacoor, Cavite',
        icon: MapPin,
    },
    {
        label: 'Phone',
        value: '+63 962 772 8852',
        href: 'tel:+639627728852',
        icon: Phone,
    },
    {
        label: 'Email',
        value: 'metadigitrading@gmail.com',
        href: 'mailto:metadigitrading@gmail.com',
        icon: Mail,
    },
];

const entranceStyles =
    'animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 motion-reduce:animate-none';

const focusRingStyles =
    'focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0618] focus-visible:outline-none';

const labelStyles =
    'text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase';

const fieldStyles =
    'mt-2 block w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-base text-white caret-cyan-300 placeholder:text-white/40 transition outline-none autofill:shadow-[inset_0_0_0_1000px_#15132e] autofill:[-webkit-text-fill-color:white] hover:border-white/25 focus:border-cyan-300 focus:bg-white/10 focus:ring-2 focus:ring-cyan-300/40 aria-invalid:border-rose-400 aria-invalid:focus:ring-rose-400/40';

function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) {
        return null;
    }

    return (
        <p id={id} className="mt-2 text-sm text-rose-300">
            {message}
        </p>
    );
}

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden bg-black selection:bg-violet-500/50 selection:text-white"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgb(124_58_237/0.7),rgb(49_46_129/0.5)_45%,transparent_75%)]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)] bg-size-[64px_64px]"
            />
            <div
                aria-hidden="true"
                className="absolute -right-40 bottom-0 -z-10 size-[28rem] rounded-full bg-[radial-gradient(circle,rgb(103_232_249/0.5),rgb(34_211_238/0.2)_35%,transparent_70%)] blur-2xl sm:size-[40rem]"
            />

            <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pt-28 pb-16 sm:pt-36 sm:pb-24 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16 lg:px-10 lg:pt-40 lg:pb-32">
                <div>
                    <p
                        className={cn(
                            'inline-flex items-center gap-2.5 rounded-full border border-violet-400/40 bg-violet-950/50 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-violet-100 uppercase backdrop-blur-sm sm:text-sm',
                            entranceStyles,
                        )}
                    >
                        <span className="size-2 rounded-full bg-cyan-300" />
                        Start Something Bigger
                    </p>
                    <h1
                        className={cn(
                            'mt-6 text-5xl font-bold tracking-tight uppercase sm:text-7xl',
                            entranceStyles,
                            'delay-100',
                        )}
                    >
                        <span className="bg-linear-to-r from-white to-violet-300 bg-clip-text text-transparent">
                            Get in{' '}
                        </span>
                        <span className="bg-linear-to-r from-violet-500 to-cyan-300 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p
                        className={cn(
                            'mt-8 max-w-xl text-base leading-relaxed text-pretty text-white/70 sm:text-lg',
                            entranceStyles,
                            'delay-200',
                        )}
                    >
                        Have questions? We&apos;d love to hear from you. Send us
                        a message and we&apos;ll respond as soon as possible.
                    </p>

                    <ul
                        className={cn(
                            'mt-10 max-w-md divide-y divide-white/10 border-y border-white/10',
                            entranceStyles,
                            'delay-300',
                        )}
                    >
                        {contactDetails.map((detail) => {
                            const Icon = detail.icon;

                            const content = (
                                <>
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/15 text-cyan-200 transition group-hover:border-cyan-300/70 group-hover:bg-cyan-300/10">
                                        <Icon
                                            aria-hidden="true"
                                            className="size-5"
                                        />
                                    </span>
                                    <span className="flex min-w-0 flex-1 flex-col">
                                        <span className={labelStyles}>
                                            {detail.label}
                                        </span>
                                        <span className="mt-1 text-base font-medium break-words text-white sm:text-lg">
                                            {detail.value}
                                        </span>
                                    </span>
                                </>
                            );

                            return (
                                <li key={detail.label}>
                                    {detail.href ? (
                                        <a
                                            href={detail.href}
                                            className={cn(
                                                'group flex items-center gap-4 rounded-lg py-4 transition-colors',
                                                focusRingStyles,
                                            )}
                                        >
                                            {content}
                                            <ArrowUpRight
                                                aria-hidden="true"
                                                className="size-5 shrink-0 text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-300 motion-reduce:transition-none"
                                            />
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-4 py-4">
                                            {content}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div
                    className={cn(
                        'rounded-2xl bg-linear-to-br from-violet-500/80 to-cyan-300/70 p-px shadow-[0_24px_40px_-24px_rgb(167_139_250/0.5)]',
                        entranceStyles,
                        'delay-300',
                    )}
                >
                    <div className="rounded-[calc(1rem-1px)] bg-linear-to-b from-[#05030d] via-[#0d0b26] to-[#1c2340] px-6 py-8 sm:px-10 sm:py-10">
                        <h2 className="text-2xl font-semibold tracking-wide text-white uppercase sm:text-3xl">
                            Send us a Message
                        </h2>

                        <Form
                            {...ContactController.store.form()}
                            options={{ preserveScroll: true }}
                            resetOnSuccess
                            className="mt-8 grid gap-6 sm:grid-cols-2"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div>
                                        <label
                                            htmlFor="contact-name"
                                            className={labelStyles}
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            required
                                            autoComplete="name"
                                            placeholder="Juan Dela Cruz"
                                            aria-invalid={!!errors.name}
                                            aria-describedby={
                                                errors.name
                                                    ? 'contact-name-error'
                                                    : undefined
                                            }
                                            className={fieldStyles}
                                        />
                                        <FieldError
                                            id="contact-name-error"
                                            message={errors.name}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-email"
                                            className={labelStyles}
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="you@example.com"
                                            aria-invalid={!!errors.email}
                                            aria-describedby={
                                                errors.email
                                                    ? 'contact-email-error'
                                                    : undefined
                                            }
                                            className={fieldStyles}
                                        />
                                        <FieldError
                                            id="contact-email-error"
                                            message={errors.email}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-phone"
                                            className={labelStyles}
                                        >
                                            Phone{' '}
                                            <span className="font-normal tracking-normal text-white/45 normal-case">
                                                (optional)
                                            </span>
                                        </label>
                                        <input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            placeholder="+63 900 000 0000"
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={
                                                errors.phone
                                                    ? 'contact-phone-error'
                                                    : undefined
                                            }
                                            className={fieldStyles}
                                        />
                                        <FieldError
                                            id="contact-phone-error"
                                            message={errors.phone}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="contact-subject"
                                            className={labelStyles}
                                        >
                                            Subject
                                        </label>
                                        <input
                                            id="contact-subject"
                                            name="subject"
                                            required
                                            placeholder="How can we help?"
                                            aria-invalid={!!errors.subject}
                                            aria-describedby={
                                                errors.subject
                                                    ? 'contact-subject-error'
                                                    : undefined
                                            }
                                            className={fieldStyles}
                                        />
                                        <FieldError
                                            id="contact-subject-error"
                                            message={errors.subject}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="contact-message"
                                            className={labelStyles}
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Tell us more about your project or question..."
                                            aria-invalid={!!errors.message}
                                            aria-describedby={
                                                errors.message
                                                    ? 'contact-message-error'
                                                    : undefined
                                            }
                                            className={cn(
                                                fieldStyles,
                                                'resize-y',
                                            )}
                                        />
                                        <FieldError
                                            id="contact-message-error"
                                            message={errors.message}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className={cn(
                                                'inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold tracking-wide text-[#1a0b3d] uppercase transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto',
                                                focusRingStyles,
                                            )}
                                        >
                                            {processing ? (
                                                <Spinner />
                                            ) : (
                                                <Send
                                                    aria-hidden="true"
                                                    className="size-4"
                                                />
                                            )}
                                            Send Message
                                        </button>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}
