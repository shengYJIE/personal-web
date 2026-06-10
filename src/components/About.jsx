import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLang } from "../i18n/LanguageContext"
import t from "../i18n/translations"

gsap.registerPlugin(ScrollTrigger)

function StatItem({ value, label, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=80px",
            toggleActions: "restart none restart reverse",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        paddingBottom: 20,
        borderBottom: "1px solid var(--border-subtle)",
        opacity: 0,
      }}
    >
      <span
        style={{
          fontSize: "clamp(32px, 3.5vw, 52px)",
          fontWeight: 200,
          color: "var(--text-primary)",
          letterSpacing: "-1px",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 13, color: "var(--text-tertiary)", fontWeight: 400 }}>
        {label}
      </span>
    </div>
  )
}

export default function About() {
  const { lang } = useLang()
  const tx = t[lang].about

  const sectionRef = useRef(null)
  const decoRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const eduRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative "ABOUT" — clip-path reveal from right
      gsap.fromTo(
        decoRef.current,
        { clipPath: "inset(0 100% 0 0)", x: 60 },
        {
          clipPath: "inset(0 0% 0 0)",
          x: 0,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom+=120px",
            toggleActions: "restart none restart reverse",
          },
        }
      )

      // Section label — fade up
      gsap.fromTo(
        labelRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom+=120px",
            toggleActions: "restart none restart reverse",
          },
        }
      )

      // Title — slide up + blur dissolve
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom+=100px",
            toggleActions: "restart none restart reverse",
          },
        }
      )

      // Intro paragraph
      gsap.fromTo(
        introRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top bottom-=40px",
            toggleActions: "restart none restart reverse",
          },
        }
      )

      // Education card
      gsap.fromTo(
        eduRef.current,
        { y: 36, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: eduRef.current,
            start: "top bottom-=20px",
            toggleActions: "restart none restart reverse",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [lang])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section"
      style={{
        background: "var(--bg-primary)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large watermark title */}
      <div
        ref={decoRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(40px, 5vw, 80px)",
          right: "clamp(-20px, -2vw, -40px)",
          fontSize: "clamp(120px, 16vw, 260px)",
          fontWeight: 700,
          letterSpacing: "-6px",
          lineHeight: 0.85,
          color: "var(--text-primary)",
          opacity: 0.025,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          willChange: "transform, clip-path",
        }}
      >
        ABOUT
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: "6%", alignItems: "flex-start" }}>
          {/* Left 60% */}
          <div style={{ flex: "0 0 58%" }}>
            <div ref={labelRef} className="section-label" style={{ opacity: 0 }}>
              {tx.label}
            </div>
            <h2
              ref={titleRef}
              style={{
                fontSize: "clamp(28px, 2.8vw, 44px)",
                fontWeight: 300,
                letterSpacing: "-0.8px",
                lineHeight: 1.25,
                color: "var(--text-primary)",
                marginBottom: 28,
                opacity: 0,
                willChange: "transform, opacity, filter",
              }}
            >
              {tx.title}
            </h2>
            <p
              ref={introRef}
              style={{
                fontSize: "clamp(14px, 1vw, 16px)",
                fontWeight: 350,
                color: "var(--text-secondary)",
                lineHeight: 1.85,
                maxWidth: 560,
                marginBottom: 32,
                whiteSpace: "pre-line",
                opacity: 0,
              }}
            >
              {tx.intro}
            </p>

            <div
              ref={eduRef}
              style={{
                marginTop: 32,
                padding: "20px 0",
                borderTop: "1px solid var(--border-subtle)",
                opacity: 0,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-tertiary)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {tx.education.label}
              </div>
              <div style={{ fontSize: 15, color: "var(--text-primary)", fontWeight: 400 }}>
                {tx.education.school}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>
                {tx.education.degree} · {tx.education.period}
              </div>
              <div style={{ fontSize: 12, color: "var(--accent)", marginTop: 4 }}>
                {tx.education.rank}
              </div>
            </div>
          </div>

          {/* Right 40% — Stats */}
          <div
            style={{
              flex: "0 0 36%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingTop: 60,
            }}
          >
            {tx.stats.map((s, i) => (
              <StatItem key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
