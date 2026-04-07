import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  Stagger,
  StaggerItem,
  RevealLine,
  TextReveal,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "Who's Got Your Six? | Dr. Steven Crane",
  description:
    "The Senior Advisor Behind the Leader. A book for founders, CEOs, and executives ready to address the most expensive gap in their leadership.",
};

const audience = [
  {
    title: "Founders",
    body: "Scaling beyond personal capacity and need someone who can see the full picture when they no longer can.",
  },
  {
    title: "CEOs",
    body: "Isolated at the top with no one positioned to pressure-test their thinking before the decision is made.",
  },
  {
    title: "Executives",
    body: "Facing calls with no clear right answer and no one in their corner who can engage with the full weight of what is at stake.",
  },
  {
    title: "Leaders",
    body: "Who know they need external perspective but have not yet found someone capable of providing it at the level they actually operate.",
  },
];

export default function Book() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-44 pb-28 md:pt-60 md:pb-44 overflow-hidden bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
          <div className="md:col-span-7">
            <FadeIn delay={0.1}>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-8 font-bold">
                Now Available
              </span>
            </FadeIn>
            <TextReveal
              tag="h1"
              text="Who's Got Your Six?"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-crane-blue leading-[1.0] tracking-tight mb-6 font-serif"
            />
            <FadeUp delay={0.3}>
              <p className="text-xl md:text-2xl text-crane-light-blue font-serif italic mb-12">
                The Senior Advisor Behind the Leader
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="text-lg md:text-xl text-crane-on-surface-variant max-w-2xl mb-12 leading-relaxed font-light">
                Leaders don&rsquo;t fail from lack of tactics. They fail from
                lack of honest mirrors. You have consumed enough frameworks,
                systems, and strategies to build an empire. The problem has
                never been the information. It has been the blind spots that
                no framework can see and no strategy can address.
              </p>
            </FadeUp>
            <FadeUp delay={0.6}>
              <Link
                href="/contact"
                className="inline-block bg-crane-blue text-white px-10 py-6 text-sm font-bold tracking-widest uppercase hover:bg-crane-light-blue transition-all duration-300"
              >
                Get Your Copy Now
              </Link>
            </FadeUp>
          </div>

          {/* Book mock */}
          <ScaleIn className="md:col-span-5">
            <div className="relative aspect-[3/4] max-w-sm mx-auto">
              <div className="absolute inset-0 bg-crane-blue rotate-1 shadow-2xl" />
              <div className="absolute inset-0 -rotate-1 bg-gradient-to-br from-crane-blue via-crane-primary-container to-crane-blue p-10 md:p-12 flex flex-col justify-between text-white shadow-2xl">
                <div>
                  <span className="block text-xs uppercase tracking-[0.3em] text-crane-peach mb-6 font-bold">
                    Dr. Steven Crane
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                    Who&rsquo;s Got Your Six?
                  </h2>
                </div>
                <div>
                  <RevealLine className="w-16 mb-4" color="bg-crane-peach" />
                  <p className="font-serif italic text-crane-peach text-sm">
                    The Senior Advisor Behind the Leader
                  </p>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </header>

      {/* The Role */}
      <section className="bg-crane-peach-lightest py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                The Role That Has Always Existed
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue leading-tight font-serif italic mb-10">
                &ldquo;Kings had philosophers. Generals had Senior Enlisted
                Advisors. Presidents had chiefs of staff.&rdquo;
              </h2>
            </FadeUp>
            <RevealLine className="w-24 mb-12" color="bg-crane-peach" />
            <Stagger className="space-y-6 text-lg md:text-xl text-crane-on-surface-variant leading-relaxed max-w-3xl font-light">
              <StaggerItem>
                <p>
                  At every level of consequential leadership throughout
                  history, there has been one person whose sole responsibility
                  was to see everything, hear everything, and carry the moral
                  weight of telling the person in charge what they did not want
                  to hear but desperately needed to know.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  That role has never disappeared. It has simply become harder
                  to find at the level you are operating at. Most leaders at
                  your level do not realize how much the absence of that role
                  is costing them until it has already produced the outcome
                  they were trying to avoid.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-crane-blue font-medium">
                  That is what this book addresses.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 md:mb-24">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                Written For
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue leading-tight font-serif">
                A Specific Kind of Leader.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-8 text-lg text-crane-on-surface-variant font-light leading-relaxed max-w-2xl">
                If any of these descriptions fit where you are right now, this
                book was written directly for you.
              </p>
            </FadeUp>
          </div>
          <Stagger
            wide
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-crane-outline-variant/30"
          >
            {audience.map((a, i) => (
              <StaggerItem
                key={a.title}
                className="bg-crane-surface p-10 md:p-14 flex flex-col gap-5 min-h-[260px] hover:bg-crane-peach-lightest transition-colors duration-500"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-crane-peach font-bold">
                  0{i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl text-crane-blue font-serif leading-tight">
                  {a.title}
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed mt-auto">
                  {a.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-crane-blue py-36 md:py-52 overflow-hidden relative">
        <Image
          src="/images/dark-texture.jpg"
          alt=""
          fill
          className="object-cover opacity-15 pointer-events-none grayscale"
          aria-hidden="true"
        />
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <FadeIn>
            <span className="block text-xs uppercase tracking-[0.3em] text-crane-peach mb-8 font-bold">
              The Conversation Continues
            </span>
          </FadeIn>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif leading-tight mb-10">
              The Most Expensive Gap in Your Leadership Is the One Nobody Has
              Named Yet. This Book Names It.
            </h2>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-12">
              <Link
                href="/contact"
                className="inline-block bg-crane-peach text-crane-blue px-12 py-7 text-sm font-bold tracking-widest uppercase hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Get Your Copy Now
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-crane-peach/50 text-crane-peach px-12 py-7 text-sm font-bold tracking-widest uppercase hover:bg-crane-peach/10 transition-all"
              >
                Schedule a Clarity Session
              </Link>
            </div>
          </FadeUp>
          <FadeIn delay={0.5}>
            <p className="mt-12 text-xs uppercase tracking-[0.25em] text-crane-on-primary-container/80">
              For leaders ready to move from the framework to the work
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
