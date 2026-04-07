import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";
import {
  FadeUp,
  FadeIn,
  SlideIn,
  Stagger,
  StaggerItem,
  RevealLine,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "Contact | Crane Consulting Solutions",
  description:
    "Every inquiry is reviewed personally. Reach out to begin a conversation about your strategic objectives.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(14, 73, 105, 0.05) 10px, rgba(14, 73, 105, 0.05) 11px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <FadeIn>
                <p className="text-crane-on-surface-variant italic font-serif text-lg mb-4">
                  Direct Communication
                </p>
              </FadeIn>
              <FadeUp>
                <h1 className="text-crane-blue font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                  Every Inquiry Is Reviewed Personally
                </h1>
              </FadeUp>
            </div>
            <FadeIn className="md:col-span-4 pb-4">
              <RevealLine className="w-48" color="bg-crane-peach" />
            </FadeIn>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Form */}
          <FadeUp className="lg:col-span-7">
            <section className="bg-white p-8 md:p-12 relative">
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(14, 73, 105, 0.05) 10px, rgba(14, 73, 105, 0.05) 11px)",
                }}
              />
              <ContactForm />
            </section>
          </FadeUp>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-12 md:space-y-16">
            {/* Quote */}
            <SlideIn from="right">
              <div className="border-l-4 border-crane-light-blue pl-8 py-4">
                <p className="font-serif text-2xl md:text-3xl italic text-crane-blue leading-snug">
                  &ldquo;The truth is rarely comfortable, but it is always the
                  most efficient path to growth.&rdquo;
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-crane-on-surface-variant">
                  &mdash; Dr. Steven Crane, Managing Partner
                </p>
              </div>
            </SlideIn>

            {/* Office Info */}
            <FadeUp delay={0.15}>
              <div className="bg-crane-peach-lightest p-8 md:p-10">
                <h3 className="font-serif text-2xl font-bold text-crane-blue mb-6">
                  Headquarters
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-crane-light-blue"
                      aria-hidden="true"
                    >
                      location_on
                    </span>
                    <p className="text-crane-on-surface-variant leading-relaxed">
                      One Central Plaza, Suite 4400
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-crane-light-blue"
                      aria-hidden="true"
                    >
                      call
                    </span>
                    <p className="text-crane-on-surface-variant">
                      +1 (212) 555-0193
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span
                      className="material-symbols-outlined text-crane-light-blue"
                      aria-hidden="true"
                    >
                      mail
                    </span>
                    <p className="text-crane-on-surface-variant">
                      inquiries@crane-consulting.com
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Image */}
            <FadeUp delay={0.25}>
              <div className="w-full aspect-[4/3] bg-crane-surface-container relative overflow-hidden">
                <Image
                  src="/images/contact-office.jpg"
                  alt="Modern office interior"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-crane-blue/10 mix-blend-multiply" />
              </div>
            </FadeUp>
          </aside>
        </div>
      </div>

      {/* What Happens Next */}
      <section className="bg-crane-blue text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
              What Happens Next
            </h2>
          </FadeUp>
          <Stagger
            wide
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                num: "01",
                title: "Review",
                desc: "Your inquiry is triaged by our senior partnership team to ensure we are the right architectural fit for your challenge.",
              },
              {
                num: "02",
                title: "Dialogue",
                desc: "We schedule a direct conversation to dive deep into your operational mechanics and define specific success metrics.",
              },
              {
                num: "03",
                title: "Engagement",
                desc: "A bespoke advisory roadmap is proposed, detailing the structural shifts required to achieve your objectives.",
              },
            ].map((step) => (
              <StaggerItem
                key={step.num}
                className="space-y-6 border-t border-white/10 pt-8"
              >
                <span className="text-crane-peach font-serif text-5xl font-extralight">
                  {step.num}.
                </span>
                <h4 className="font-serif text-2xl font-bold">{step.title}</h4>
                <p className="text-crane-on-primary-container leading-relaxed">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
