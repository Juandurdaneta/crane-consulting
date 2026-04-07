import Image from "next/image";
import Link from "next/link";
import {
  FadeUp,
  FadeIn,
  SlideIn,
  Stagger,
  StaggerItem,
  TextReveal,
  RevealLine,
} from "@/components/animations";
import { ScrollSection } from "@/components/scroll-section";

const mediaLogos = [
  "FOX",
  "CBS",
  "ABC",
  "NBC",
  "MarketWatch",
  "USA Today",
];

const disciplines = [
  "Military Leadership",
  "Business Transformation",
  "Financial Strategy",
  "Organizational Change",
  "Legal Education",
];

const advisorOutcomes = [
  {
    label: "Clarity",
    title: "High-stakes decisions made with clarity instead of pressure.",
    body: "Someone with no stake in the outcome can see what you cannot see from inside it.",
  },
  {
    label: "Visibility",
    title: "Blind spots named before they become organizational problems.",
    body: "Not after they have already cost you time, money, or credibility.",
  },
  {
    label: "Counsel",
    title: "Conversations that cannot safely happen inside your organization finally happen.",
    body: "With someone qualified to hold them.",
  },
  {
    label: "Weight",
    title: "You stop carrying the full weight of the organization alone.",
    body: "For the first time you have someone capable of carrying it alongside you.",
  },
  {
    label: "Performance",
    title: "Your leadership team performs at a higher level.",
    body: "Because the leader above them is operating from clarity instead of reaction.",
  },
  {
    label: "Continuity",
    title: "You build an organization that does not collapse without you.",
    body: "Because the strategic thinking that should be coming from the top finally is.",
  },
];

const fitFor = [
  "Carry significant responsibility for complex organizations and the people inside them.",
  "Value honest feedback over comfortable validation and can act on what they hear.",
  "Are willing to confront difficult truths about their own leadership, not just their organization's performance.",
  "Understand that the ceiling they keep hitting is unlikely to move until the thing producing it is named.",
  "Want a Senior Advisor who will tell them what no one inside their organization is positioned to say.",
  "Are prepared to invest in the depth of counsel their mission actually requires.",
];

const fitAgainst = [
  "Are in the early stages of building and need foundational business direction.",
  "Want validation for decisions they have already made.",
  "Are looking for a consultant to produce a report they can file and reference occasionally.",
  "Are unwilling to examine what is actually happening at the leadership level.",
  "Expect the advisor to work around the truth rather than through it.",
  "Want motivation rather than honest, rigorous, multi-dimensional counsel.",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-44 pb-28 md:pt-60 md:pb-44 overflow-hidden bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div className="md:col-start-1 md:col-span-9">
            <FadeIn delay={0.1}>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-8 font-bold">
                Executive Advisory for Founders, CEOs, and Senior Executives
              </span>
            </FadeIn>
            <TextReveal
              tag="h1"
              text="The Higher You Climb, The More Dangerous It Becomes to Lead Alone."
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-crane-blue leading-[1.05] tracking-tight mb-12 font-serif"
            />
            <FadeUp delay={0.4}>
              <p className="text-lg md:text-2xl text-crane-on-surface-variant max-w-3xl mb-12 leading-relaxed font-light">
                Crane Consulting Solutions provides Senior Advisor services to a
                small number of high-level leaders responsible for complex
                organizations, high-stakes decisions, and the people depending
                on both. This is not consulting. This is the honest inner
                counsel your organization has been missing.
              </p>
            </FadeUp>
            <FadeUp delay={0.6}>
              <Link
                href="/contact"
                className="inline-block bg-crane-blue text-white px-10 py-6 text-sm font-bold tracking-widest uppercase hover:bg-crane-light-blue transition-all duration-300"
              >
                Schedule Your Strategic Clarity Session
              </Link>
            </FadeUp>
          </div>
        </div>

        {/* Architectural background element */}
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

      {/* Trust Signals + Disciplines */}
      <section className="bg-crane-surface-low border-y border-crane-outline-variant/40 py-14 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.3em] text-crane-on-surface-variant font-bold mb-6">
              Featured In
            </p>
          </FadeIn>
          <Stagger className="flex flex-wrap items-center gap-x-10 md:gap-x-14 gap-y-4 mb-14">
            {mediaLogos.map((logo) => (
              <StaggerItem key={logo}>
                <span className="font-serif text-xl md:text-2xl text-crane-blue tracking-tight">
                  {logo}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
          <RevealLine className="w-24 mb-10" color="bg-crane-peach" />
          <FadeUp>
            <p className="text-base md:text-lg text-crane-on-surface-variant font-light max-w-4xl leading-relaxed">
              <span className="text-crane-blue font-medium">
                {disciplines.join(". ")}.
              </span>{" "}
              All in one advisor.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Statement Section */}
      <section className="bg-crane-peach-lightest py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                The Problem of the Top
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue leading-tight font-serif italic mb-10">
                &ldquo;Every leader reaches the point where the people around
                them can no longer tell them the truth.&rdquo;
              </h2>
            </FadeUp>
            <RevealLine className="w-24 mb-12" color="bg-crane-peach" />
            <Stagger className="space-y-6 text-lg md:text-xl text-crane-on-surface-variant leading-relaxed max-w-3xl font-light">
              <StaggerItem>
                <p>
                  You built something real. You are running it at a level most
                  people will never reach. And somewhere along the way, the
                  honest conversation disappeared.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  Your board has governance responsibilities and political
                  positions. Your leadership team has career interests. Your
                  peers have their own complexity to manage. The consultants
                  you have hired analyzed the problem and handed you a report.
                  None of them could sit in the room with you, hold the full
                  weight of what you are carrying, and tell you what is
                  actually true without something at stake in the answer.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  So you are making the most consequential decisions of your
                  life without the one thing that has always separated great
                  leaders from isolated ones: a trusted Senior Advisor with no
                  agenda other than your clarity and your organization&rsquo;s
                  success.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* About Section / The Senior Advisor */}
      <section id="about" className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <SlideIn from="left" className="md:col-span-5">
            <div className="h-[400px] md:h-[600px] bg-crane-blue relative overflow-hidden">
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
                The Senior Advisor Behind the Organization
              </span>
            </FadeIn>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-crane-blue leading-tight mb-10 font-serif">
                A Role That Has Existed Throughout History. The Question Is Why
                You Have Been Operating Without It.
              </h2>
            </FadeUp>
            <Stagger className="space-y-8 text-crane-on-surface-variant font-light text-lg max-w-2xl">
              <StaggerItem>
                <p>
                  Kings had philosophers. Generals had senior enlisted advisors.
                  Presidents had chiefs of staff. The most effective leaders in
                  history did not operate alone. They built trusted inner
                  counsel and used it to make better decisions, navigate
                  greater complexity, and build organizations that outlasted
                  them.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  Dr. Steven Crane brings an integration of experience that few
                  advisors can match: military leadership, business consulting,
                  executive advisory, financial strategy, organizational
                  change, legal education, and leadership psychology. Held
                  simultaneously by one advisor with the depth and discipline
                  to address root causes rather than surface symptoms.
                </p>
              </StaggerItem>
              <StaggerItem>
                <Link
                  href="/about"
                  className="inline-block text-sm uppercase tracking-widest font-bold text-crane-blue border-b-2 border-crane-peach pb-1 hover:text-crane-light-blue transition-colors"
                >
                  Meet Dr. Crane
                </Link>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* GSAP Scroll-Pinned Section */}
      <section id="services">
        <ScrollSection />
      </section>

      {/* What Changes - Advisor Outcomes */}
      <section className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 md:mb-24">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                What Changes
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue leading-tight font-serif">
                When You Have the Right Advisor in Your Corner.
              </h2>
            </FadeUp>
          </div>
          <Stagger
            wide
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-crane-outline-variant/30"
          >
            {advisorOutcomes.map((outcome) => (
              <StaggerItem
                key={outcome.label}
                className="bg-crane-surface p-10 md:p-12 flex flex-col gap-6 min-h-[280px] hover:bg-crane-peach-lightest transition-colors duration-500"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-crane-light-blue font-bold">
                  {outcome.label}
                </span>
                <h3 className="text-xl md:text-2xl text-crane-blue font-serif leading-tight">
                  {outcome.title}
                </h3>
                <p className="text-crane-on-surface-variant font-light text-base leading-relaxed mt-auto">
                  {outcome.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Consulting Industry Critique */}
      <section className="py-28 md:py-36 bg-crane-surface-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <FadeUp className="md:col-span-5">
            <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
              Why Other Solutions Fall Short
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-crane-blue leading-tight font-serif">
              What the Consulting Industry Will Not Tell You.
            </h2>
          </FadeUp>
          <Stagger className="md:col-span-7 space-y-10">
            <StaggerItem>
              <div className="border-l-2 border-crane-peach pl-8">
                <h3 className="text-crane-blue font-serif text-xl md:text-2xl mb-3">
                  Large consulting firms send teams.
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed">
                  They analyze, they recommend, and they leave. The report they
                  produce is thorough. The gap between that report and your
                  reality is where the money goes.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-2 border-crane-peach pl-8">
                <h3 className="text-crane-blue font-serif text-xl md:text-2xl mb-3">
                  Executive coaches work within a single lane.
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed">
                  They address the individual&rsquo;s psychology and behavior.
                  Your problems do not stay inside a single lane. Your advisor
                  should not either.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-2 border-crane-peach pl-8">
                <h3 className="text-crane-blue font-serif text-xl md:text-2xl mb-3">
                  Peer groups give you community.
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed">
                  They do not give you honest, direct, sustained counsel from
                  someone with no stake in how you see them. Peers have their
                  own agendas. A Senior Advisor has only one.
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Fit Section */}
      <section className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                Fit
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue leading-tight font-serif">
                Crane Consulting Solutions Is Not for Every Leader.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg text-crane-on-surface-variant font-light max-w-2xl leading-relaxed">
                It is designed for a specific kind of leader. Engagements are
                limited and accepted only when fit is clear on both sides.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-crane-outline-variant/30">
            <SlideIn from="left" className="bg-crane-peach-lightest p-10 md:p-14">
              <p className="text-xs uppercase tracking-[0.3em] text-crane-blue font-bold mb-8">
                CCS is for leaders who
              </p>
              <ul className="space-y-5">
                {fitFor.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-crane-on-surface-variant font-light leading-relaxed"
                  >
                    <span className="text-crane-blue font-serif text-xl leading-none mt-1">
                      &#43;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SlideIn>
            <SlideIn from="right" className="bg-crane-blue p-10 md:p-14">
              <p className="text-xs uppercase tracking-[0.3em] text-crane-peach font-bold mb-8">
                CCS is not for leaders who
              </p>
              <ul className="space-y-5">
                {fitAgainst.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-crane-on-primary-container font-light leading-relaxed"
                  >
                    <span className="text-crane-peach font-serif text-xl leading-none mt-1">
                      &minus;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              The Honest Counsel You&rsquo;ve Been Missing Is One Conversation
              Away.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-lg md:text-xl text-crane-on-primary-container font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              You are carrying weight that deserves more than isolation and
              generic solutions. The leaders who build organizations that last
              are the ones who understood early that no amount of intelligence
              compensates for the absence of honest counsel.
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
              A small number of sessions are available
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
