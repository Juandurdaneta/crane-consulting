"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    label: "01",
    title: "The Danger of the Top",
    body: "Most leaders do not lose their organizations in a single catastrophic moment. They lose them in a hundred small decisions made without honest counsel, each one slightly off course, until the drift becomes a direction nobody chooses.",
  },
  {
    label: "02",
    title: "The Cost of the Blind Spot",
    body: "The higher the stakes, the more expensive the blind spot. The more successful the leader, the harder it becomes for anyone around them to say what needs to be said. Leadership teams learn to execute without dissent rather than challenge without politics.",
  },
  {
    label: "03",
    title: "The Senior Advisor",
    body: "Honest perspective without political consequences. The ability to challenge assumptions without career risk. The capacity to see what the leader cannot see from inside their own complexity, and say it directly, without agenda and without hesitation.",
  },
];

function PinnedLayout() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const setPanelRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      panelRefs.current[i] = el;
    },
    []
  );

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const pin = pinRef.current;
    const panels = panelRefs.current;
    const progress = progressRef.current;
    if (!wrapper || !pin || !panels[0] || !panels[1] || !panels[2] || !progress)
      return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(panels[0], { opacity: 1, y: 0 });
      gsap.set(panels[1], { opacity: 0, y: 40 });
      gsap.set(panels[2], { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          pin: pin,
          scrub: 1,
          start: "top top",
          end: "+=250%",
          onUpdate: (self) => {
            const p = self.progress;
            const next = p < 0.33 ? 0 : p < 0.66 ? 1 : 2;
            setActiveStep((prev) => (prev === next ? prev : next));
            // Animate progress bar
            gsap.set(progress, { scaleX: p });
          },
        },
      });

      // Phase 1 hold → fade out
      tl.to({}, { duration: 25 }, 0); // hold
      tl.to(panels[0], { opacity: 0, y: -30, duration: 8 }, 25);

      // Phase 2 fade in → hold → fade out
      tl.to(panels[1], { opacity: 1, y: 0, duration: 8 }, 25);
      tl.to({}, { duration: 25 }, 33); // hold
      tl.to(panels[1], { opacity: 0, y: -30, duration: 8 }, 58);

      // Phase 3 fade in → hold
      tl.to(panels[2], { opacity: 1, y: 0, duration: 8 }, 58);
      tl.to({}, { duration: 34 }, 66); // hold until end
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      <div
        ref={pinRef}
        className="h-screen overflow-hidden bg-crane-primary relative flex items-center"
      >
        {/* Ambient background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full blur-[120px] transition-colors duration-1000"
            style={{
              background:
                activeStep === 0
                  ? "radial-gradient(circle, rgba(14,73,105,0.25) 0%, transparent 70%)"
                  : activeStep === 1
                    ? "radial-gradient(circle, rgba(68,128,158,0.3) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(210,175,150,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full blur-[100px] transition-colors duration-1000"
            style={{
              background:
                activeStep === 0
                  ? "radial-gradient(circle, rgba(68,128,158,0.15) 0%, transparent 70%)"
                  : activeStep === 1
                    ? "radial-gradient(circle, rgba(210,175,150,0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(14,73,105,0.2) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-20">
          <div
            ref={progressRef}
            className="h-full bg-crane-accent origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Step indicators */}
        <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {phases.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                i === activeStep
                  ? "bg-crane-accent scale-125"
                  : "bg-white/20 scale-100"
              }`}
            />
          ))}
        </div>

        {/* Content panels */}
        <div className="relative w-full max-w-4xl mx-auto px-16 md:px-24 z-10">
          {phases.map((phase, i) => (
            <div
              key={i}
              ref={setPanelRef(i)}
              className="absolute inset-0 flex flex-col justify-center px-16 md:px-24"
            >
              <span className="text-crane-accent font-serif text-7xl md:text-9xl opacity-20 absolute -top-8 -left-4 select-none pointer-events-none">
                {phase.label}
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
                {phase.title}
              </h3>
              <p className="text-lg md:text-xl text-crane-on-primary-container leading-relaxed max-w-2xl">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StackedLayout() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-hidden");
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-crane-primary py-20 px-6">
      {phases.map((phase, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          className="reveal-hidden max-w-2xl mx-auto mb-20 last:mb-0"
        >
          <span className="text-crane-accent font-serif text-5xl opacity-30 block mb-4">
            {phase.label}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
            {phase.title}
          </h3>
          <p className="text-crane-on-primary-container">{phase.body}</p>
        </div>
      ))}
    </div>
  );
}

export function ScrollSection() {
  const [layout, setLayout] = useState<"stacked" | "pinned" | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setLayout(mq.matches || window.innerWidth < 768 ? "stacked" : "pinned");
    };
    update();
    mq.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (layout === null) {
    return <section className="min-h-screen bg-crane-primary" />;
  }

  return layout === "stacked" ? <StackedLayout /> : <PinnedLayout />;
}
