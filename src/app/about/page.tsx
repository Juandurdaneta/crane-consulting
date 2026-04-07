import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FadeUp,
  FadeIn,
  SlideIn,
  Stagger,
  StaggerItem,
  RevealLine,
  TextReveal,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "About Dr. Steven Crane | Crane Consulting Solutions",
  description:
    "Military leadership, business transformation, financial strategy, organizational change, legal education, and leadership psychology — held by one Senior Advisor.",
};

const credentials = [
  { value: "Multiple", label: "Doctoral Degrees" },
  { value: "125+", label: "Certifications" },
  { value: "$4.2B+", label: "Veteran Benefits Delivered" },
  { value: "2,500", label: "Hours Inside Military Community" },
];

const mediaLogos = ["FOX", "CBS", "ABC", "NBC", "MarketWatch", "USA Today"];

const dimensions = [
  {
    title: "Military Leadership",
    body: "Discipline, command structure, and decision-making under pressure.",
  },
  {
    title: "Business Consulting",
    body: "Organizational systems and strategic direction at the level they actually live.",
  },
  {
    title: "Financial Strategy",
    body: "The capital and operational implications of leadership decisions.",
  },
  {
    title: "Legal Education",
    body: "Governance exposure and structural risk most leaders cannot see from inside.",
  },
  {
    title: "Leadership Psychology",
    body: "The internal patterns producing the external problems.",
  },
  {
    title: "Organizational Change",
    body: "Major transitions, restructuring, leadership turnover, and cultural realignment.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-44 pb-28 md:pt-60 md:pb-44 overflow-hidden bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div className="md:col-span-9">
            <FadeIn delay={0.1}>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-8 font-bold">
                The Senior Advisor Behind the Organization
              </span>
            </FadeIn>
            <TextReveal
              tag="h1"
              text="Most Advisors Understand One Dimension of Your Problem. Dr. Steven Crane Understands All of Them."
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-crane-blue leading-[1.05] tracking-tight mb-12 font-serif"
            />
            <FadeUp delay={0.4}>
              <p className="text-lg md:text-xl text-crane-on-surface-variant max-w-3xl leading-relaxed font-light">
                Military leadership. Business transformation. Financial
                strategy. Organizational change. Legal education. Leadership
                psychology. This is not a list of credentials. It is the
                integration of experience that makes genuine Senior Advisor
                counsel possible.
              </p>
            </FadeUp>
          </div>
        </div>
        <FadeIn delay={0.3}>
          <div className="absolute right-0 bottom-0 w-1/3 h-full -z-0 hidden lg:block">
            <Image
              src="/images/hero-architecture.jpg"
              alt="Architectural detail"
              fill
              className="object-cover grayscale opacity-15 mix-blend-multiply"
              priority
            />
          </div>
        </FadeIn>
      </header>

      {/* Featured In */}
      <section className="bg-crane-surface-low border-y border-crane-outline-variant/40 py-12">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-crane-on-surface-variant font-bold mb-6">
              Featured In
            </p>
          </FadeIn>
          <Stagger className="flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-4">
            {mediaLogos.map((logo) => (
              <StaggerItem key={logo}>
                <span className="font-serif text-xl md:text-2xl text-crane-blue tracking-tight">
                  {logo}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <SlideIn from="left" className="md:col-span-5">
            <div className="h-[460px] md:h-[680px] bg-crane-blue relative overflow-hidden sticky top-32">
              <Image
                src="/images/advisor-portrait.jpg"
                alt="Dr. Steven Crane"
                fill
                className="object-cover grayscale brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-crane-blue/20" />
            </div>
          </SlideIn>
          <div className="md:col-span-7 md:pl-6 lg:pl-12">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                The Origin
              </span>
            </FadeIn>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-crane-blue leading-tight mb-12 font-serif">
                He Did Not Study Leadership From a Distance. He Was Rebuilt By
                It.
              </h2>
            </FadeUp>
            <Stagger className="space-y-8 text-crane-on-surface-variant font-light text-lg leading-relaxed max-w-2xl">
              <StaggerItem>
                <p className="italic font-serif text-xl md:text-2xl text-crane-blue">
                  &ldquo;I did not arrive at this work through a traditional
                  path. I arrived through collapse.&rdquo;
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  I was honorably discharged from the United States Marine
                  Corps and left homeless. I had no safety net, no plan. There
                  was no system designed to catch someone at that particular
                  intersection of service and circumstance. I was left living
                  in my car with nothing that resembled a next step.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>I am telling you that because you need to know who is in the room with you.</p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  You have built something significant. You have made hard
                  calls, carried real weight, and navigated complexity that
                  most people never encounter. You know what it means to be
                  responsible for something that matters. So do I. I did not
                  come to understand that from a boardroom. I came to
                  understand it from the ground up, under the kind of pressure
                  that does not allow for pretense.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  That experience molded the entire foundation of what I bring
                  into an advisory relationship.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-crane-peach-lightest py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                The Record
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-crane-blue font-serif leading-tight">
                Capability, Not Credentials.
              </h2>
            </FadeUp>
            <RevealLine className="w-24 mt-10 mb-10" color="bg-crane-peach" />
            <FadeUp delay={0.1}>
              <p className="text-lg text-crane-on-surface-variant font-light leading-relaxed">
                Leaders at your level are not moved by credentials. They are
                moved by capability. The only way to demonstrate capability at
                this level is to have actually operated inside the complexity
                you are claiming to understand.
              </p>
            </FadeUp>
          </div>
          <Stagger
            wide
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-crane-outline-variant/30"
          >
            {credentials.map((c) => (
              <StaggerItem
                key={c.label}
                className="bg-crane-peach-lightest p-8 md:p-12 flex flex-col gap-3 min-h-[200px]"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl text-crane-blue font-serif">
                  {c.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-crane-on-surface-variant font-bold mt-auto">
                  {c.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* The Belief */}
      <section className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn>
            <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-8 font-bold">
              The Belief Behind CCS
            </span>
          </FadeIn>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue font-serif italic leading-tight mb-12">
              &ldquo;Organizations do not collapse because of strategy alone.&rdquo;
            </h2>
          </FadeUp>
          <RevealLine className="w-24 mb-12" color="bg-crane-peach" />
          <Stagger className="space-y-8 text-lg text-crane-on-surface-variant font-light leading-relaxed">
            <StaggerItem>
              <p>
                They collapse because leaders become isolated, because blind
                spots go unchallenged for too long, because decisions get made
                under emotional pressure without adequate perspective, or
                simply because no one in the room is authorized or equipped to
                challenge the person responsible for all of it.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                The most sophisticated strategy in the world cannot compensate
                for a leader operating without honest counsel. The most
                talented team in the world will underperform under a leader
                whose own blind spots have become organizational ceilings.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                That structural element is the Senior Advisor. And it has been
                present at every level of elite leadership throughout history
                for a reason.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Six Dimensions */}
      <section className="py-28 md:py-40 bg-crane-surface-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                Why CCS Is Different
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue font-serif leading-tight">
                One Advisor. Every Dimension. Simultaneously.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-8 text-lg text-crane-on-surface-variant font-light leading-relaxed max-w-2xl">
                The advisory market is filled with people who understand pieces
                of what you are dealing with. Dr. Steven Crane operates across
                all of them at once. This is why CCS addresses root causes
                rather than surface symptoms.
              </p>
            </FadeUp>
          </div>
          <Stagger
            wide
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-crane-outline-variant/30"
          >
            {dimensions.map((d, i) => (
              <StaggerItem
                key={d.title}
                className="bg-crane-surface-low p-10 md:p-12 flex flex-col gap-5 min-h-[240px]"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-crane-light-blue font-bold">
                  0{i + 1}
                </span>
                <h3 className="text-xl md:text-2xl text-crane-blue font-serif leading-tight">
                  {d.title}
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed mt-auto">
                  {d.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* The Strategic Clarity Session */}
      <section className="bg-crane-blue py-36 md:py-52 text-center overflow-hidden relative">
        <Image
          src="/images/dark-texture.jpg"
          alt=""
          fill
          className="object-cover opacity-15 pointer-events-none grayscale"
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <span className="block text-xs uppercase tracking-[0.3em] text-crane-peach mb-8 font-bold">
              The Conversation Starts Here
            </span>
          </FadeIn>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif leading-tight mb-10">
              The Strategic Clarity Session.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-lg md:text-xl text-crane-on-primary-container font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              A private, no-obligation working session with Dr. Steven Crane.
              Not a sales call. The first honest conversation about what is
              actually happening in your leadership and your organization. You
              will leave with clarity. Whether you engage further is entirely
              your decision.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <Link
              href="/contact"
              className="inline-block bg-crane-peach text-crane-blue px-12 py-7 text-sm font-bold tracking-widest uppercase hover:brightness-110 transition-all active:scale-[0.98]"
            >
              Schedule Your Strategic Clarity Session
            </Link>
          </FadeUp>
          <FadeIn delay={0.5}>
            <p className="mt-10 text-xs uppercase tracking-[0.25em] text-crane-on-primary-container/80">
              Availability is limited. Current engagements must conclude before
              new ones begin.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
