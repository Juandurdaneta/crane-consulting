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
  title: "Solutions | Crane Consulting Solutions",
  description:
    "Organizational advisory, strategic consulting, and leadership transformation. Direct engagement with Dr. Steven Crane across every dimension of your organization's complexity.",
};

const services = [
  {
    label: "01",
    title: "Executive Advisory",
    body: "Direct counsel for CEOs and executives navigating strategic, operational, and leadership decisions that cannot be adequately addressed from inside the organization.",
  },
  {
    label: "02",
    title: "Strategic Consulting",
    body: "Deep evaluation and restructuring of organizational systems that have drifted out of alignment with the leader's actual mission and operational reality.",
  },
  {
    label: "03",
    title: "Leadership Advisory",
    body: "Helping leaders evolve into the version of themselves that the organization they are building actually requires — not the version that built the earlier stages of it.",
  },
  {
    label: "04",
    title: "Organizational Change",
    body: "Supporting companies through major transitions including scaling, restructuring, leadership turnover, cultural realignment, and operational redesign.",
  },
  {
    label: "05",
    title: "Decision Architecture",
    body: "Rebuilding the internal systems through which leaders process high-stakes decisions so that clarity replaces pressure as the dominant operating condition.",
  },
  {
    label: "06",
    title: "Governance & Risk",
    body: "Identifying and addressing the governance exposures and structural vulnerabilities that leaders frequently cannot see from inside their own organizations.",
  },
];

const fitFor = [
  "Carry significant responsibility for complex organizations and the people inside them.",
  "Operate in genuine complexity and understand that the answers cannot be found inside their own organization.",
  "Value honest feedback over comfortable validation and are prepared to act on what they hear.",
  "Are willing to confront difficult truths about their own leadership, not just their organization's performance.",
  "Understand that the ceiling they keep hitting will not move until the thing producing it is named directly.",
];

const fitAgainst = [
  "Want validation for decisions they have already made.",
  "Are looking for a consultant to produce a report they can reference occasionally and file away.",
  "Are unwilling to examine what is actually happening at the leadership level.",
  "Expect honest counsel to work around the truth rather than through it.",
  "Are in the early stages of building and need foundational business direction.",
];

const engagementStructures = [
  {
    name: "Executive Retainer",
    tagline: "Sustained, continuous counsel.",
    body: "Across the full scope of the leader's responsibilities. The structure that produces the deepest results because it allows the advisory relationship to develop the trust, continuity, and accumulated context that genuine Senior Advisor counsel requires.",
  },
  {
    name: "Strategic Projects",
    tagline: "Custom engagement structures.",
    body: "Built around specific organizational challenges with defined scope, timeline, and outcomes. Appropriate for organizations navigating a major transition, restructuring, or transformation that requires intensive advisory support over a concentrated period.",
  },
  {
    name: "Hourly Advisory",
    tagline: "Direct access to Dr. Crane.",
    body: "Appropriate for leaders navigating a specific high-stakes decision, a defined period of organizational complexity, or an isolated challenge that requires the Senior Advisor perspective without an ongoing retainer commitment.",
  },
];

export default function Solutions() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-44 pb-28 md:pt-60 md:pb-44 overflow-hidden bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div className="md:col-span-9">
            <FadeIn delay={0.1}>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-8 font-bold">
                Organizational Advisory · Strategic Consulting · Leadership
                Transformation
              </span>
            </FadeIn>
            <TextReveal
              tag="h1"
              text="The Problems That Are Costing Your Business the Most Are Not Where You Think."
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-crane-blue leading-[1.05] tracking-tight mb-12 font-serif"
            />
            <FadeUp delay={0.4}>
              <p className="text-lg md:text-xl text-crane-on-surface-variant max-w-3xl mb-12 leading-relaxed font-light">
                Crane Consulting Solutions works directly with founders,
                executives, and organizations navigating complex leadership,
                strategic, and organizational challenges. The work is not
                tactical. It is architectural, and it operates at the level
                where the real problems actually live.
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
        <FadeIn delay={0.3}>
          <div className="absolute right-0 bottom-0 w-1/3 h-full -z-0 hidden lg:block">
            <Image
              src="/images/skyscraper.jpg"
              alt="Architectural detail"
              fill
              className="object-cover grayscale opacity-15 mix-blend-multiply"
              priority
            />
          </div>
        </FadeIn>
      </header>

      {/* Root Cause Statement */}
      <section className="bg-crane-peach-lightest py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                The Root Cause
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue leading-tight font-serif italic mb-10">
                &ldquo;Most organizations are treating symptoms while the root
                cause goes unaddressed.&rdquo;
              </h2>
            </FadeUp>
            <RevealLine className="w-24 mb-12" color="bg-crane-peach" />
            <Stagger className="space-y-6 text-lg md:text-xl text-crane-on-surface-variant leading-relaxed max-w-3xl font-light">
              <StaggerItem>
                <p>
                  You have restructured, replaced people, brought in
                  consultants, implemented new processes, and adjusted the
                  strategy. Some of it moved the needle. None of it led to the
                  transformation you are looking for.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  That is not a coincidence. That is what happens when the
                  intervention targets the symptom rather than the source.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p>
                  Strategy failures, cultural breakdowns, operational
                  misalignment, and leadership dysfunction are almost never the
                  root problem. They are what the root problem produces. The
                  root problem lives in the leadership layer. Until it is
                  addressed, the symptoms will keep returning. The names will
                  change. The cost will not.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 md:py-40 bg-crane-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-20 md:mb-24">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                The Engagement
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue font-serif leading-tight">
                What a CCS Engagement Actually Looks Like.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-8 text-lg text-crane-on-surface-variant font-light leading-relaxed max-w-2xl">
                Every engagement is a direct relationship with Dr. Steven
                Crane, built around the leader&rsquo;s needs — not a
                predetermined service model.
              </p>
            </FadeUp>
          </div>
          <Stagger
            wide
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-crane-outline-variant/30"
          >
            {services.map((s) => (
              <StaggerItem
                key={s.label}
                className="bg-crane-surface p-10 md:p-12 flex flex-col gap-6 min-h-[320px] hover:bg-crane-peach-lightest transition-colors duration-500"
              >
                <span className="text-crane-peach font-serif text-5xl opacity-60">
                  {s.label}
                </span>
                <h3 className="text-2xl text-crane-blue font-serif leading-tight">
                  {s.title}
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed mt-auto">
                  {s.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Other Solutions Fall Short */}
      <section className="py-28 md:py-36 bg-crane-surface-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <FadeUp className="md:col-span-5">
            <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
              Why CCS Operates Differently
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-crane-blue leading-tight font-serif">
              Standard Models Address One Dimension of a Problem That Does Not
              Exist in One.
            </h2>
          </FadeUp>
          <Stagger className="md:col-span-7 space-y-10">
            <StaggerItem>
              <div className="border-l-2 border-crane-peach pl-8">
                <h3 className="text-crane-blue font-serif text-xl md:text-2xl mb-3">
                  The standard consulting model sends a team.
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed">
                  They gather data, analyze, recommend, and present a document.
                  Then they leave. The document sits. The problem continues.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-2 border-crane-peach pl-8">
                <h3 className="text-crane-blue font-serif text-xl md:text-2xl mb-3">
                  The standard coaching model addresses the individual.
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed">
                  It does not engage with your structure, strategy, financial
                  decision-making, governance exposure, or the team dynamics
                  underneath the operational problems.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border-l-2 border-crane-peach pl-8">
                <h3 className="text-crane-blue font-serif text-xl md:text-2xl mb-3">
                  CCS operates differently on both counts.
                </h3>
                <p className="text-crane-on-surface-variant font-light leading-relaxed">
                  Direct engagement with Dr. Steven Crane across every
                  dimension simultaneously. The advisory relationship continues
                  through the decisions, the resistance, and the complications
                  that no report ever accounts for.
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
                A Small Number of Leaders. Significant Depth. No Exceptions.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="mt-8 text-lg text-crane-on-surface-variant font-light max-w-2xl leading-relaxed">
                Depth requires time. Trust requires continuity. Honest counsel
                requires a relationship that has been built carefully enough
                that the leader can say what is actually true without managing
                how it lands. None of that is possible at scale.
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

      {/* Engagement Structures */}
      <section className="py-28 md:py-40 bg-crane-surface-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 md:mb-20">
            <FadeIn>
              <span className="block text-xs uppercase tracking-[0.3em] text-crane-light-blue mb-6 font-bold">
                How Engagements Are Structured
              </span>
            </FadeIn>
            <FadeUp>
              <h2 className="text-3xl md:text-5xl lg:text-6xl text-crane-blue font-serif leading-tight">
                Built Around the Leader. Not the Service Model.
              </h2>
            </FadeUp>
          </div>
          <Stagger
            wide
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-crane-outline-variant/30"
          >
            {engagementStructures.map((eng, i) => (
              <StaggerItem
                key={eng.name}
                className="bg-crane-surface-low p-10 md:p-14 flex flex-col gap-5 min-h-[360px]"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-crane-peach font-bold">
                  0{i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl text-crane-blue font-serif leading-tight">
                  {eng.name}
                </h3>
                <p className="italic text-crane-light-blue font-serif">
                  {eng.tagline}
                </p>
                <p className="text-crane-on-surface-variant font-light leading-relaxed mt-auto">
                  {eng.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
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
              The First Step Is a Conversation
            </span>
          </FadeIn>
          <FadeUp>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif leading-tight mb-10">
              Your Organization Does Not Have to Keep Paying the Cost of
              Unaddressed Root Causes.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-lg md:text-xl text-crane-on-primary-container font-light max-w-2xl mx-auto mb-16 leading-relaxed">
              The pattern will not break by itself. The blind spots will not
              disappear because the leader is intelligent and working hard.
              They will disappear when someone with genuine perspective and no
              stake in the outcome finally names them.
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
              A limited number of engagements are accepted each year
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
