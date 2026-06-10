import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award } from "lucide-react"
import { useLang } from "../i18n/LanguageContext"
import t from "../i18n/translations"
import BorderGlow from "./BorderGlow"

gsap.registerPlugin(ScrollTrigger)

function SkillCard({ skill, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          delay: index * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=40px",
            toggleActions: "restart none restart reverse",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [index])

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      <BorderGlow
        backgroundColor="var(--bg-card)"
        borderRadius={16}
        glowRadius={32}
        edgeSensitivity={35}
        glowIntensity={0.8}
        coneSpread={20}
        fillOpacity={0.35}
        glowColor="145 45 35"
        colors={["#4f9d6e", "#3b7a52", "#B497CF"]}
      >
        <div
          style={{
            padding: "clamp(36px, 3.5vw, 52px) clamp(36px, 4vw, 56px)",
          }}
        >
          {/* Number */}
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: 3,
              marginBottom: 20,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: "clamp(22px, 2vw, 32px)",
              fontWeight: 350,
              letterSpacing: "-0.5px",
              lineHeight: 1.25,
              color: "var(--text-primary)",
              margin: "0 0 16px 0",
            }}
          >
            {skill.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(13px, 0.95vw, 15px)",
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              margin: 0,
              maxWidth: 720,
            }}
          >
            {skill.desc}
          </p>
        </div>
      </BorderGlow>
    </div>
  )
}

export default function Skills() {
  const { lang } = useLang()
  const tx = t[lang].skills

  const sectionRef = useRef(null)
  const decoRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const awardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative "SKILLS"
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

      // Label
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

      // Title
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

      // Subtitle
      gsap.fromTo(
        subtitleRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top bottom-=20px",
            toggleActions: "restart none restart reverse",
          },
        }
      )

      // Awards
      gsap.fromTo(
        awardsRef.current,
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: awardsRef.current,
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
      id="skills"
      ref={sectionRef}
      className="section"
      style={{
        background: "var(--bg-primary)",
        padding: "140px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative watermark */}
      <div
        ref={decoRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "clamp(20px, 3vw, 60px)",
          right: "clamp(-20px, -2vw, -40px)",
          fontSize: "clamp(120px, 16vw, 260px)",
          fontWeight: 700,
          letterSpacing: "-5px",
          lineHeight: 0.85,
          color: "var(--text-primary)",
          opacity: 0.025,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        SKILLS
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 1200 }}>
        <div style={{ marginBottom: 56 }}>
          <div ref={labelRef} className="section-label" style={{ opacity: 0 }}>
            {tx.label}
          </div>
          <h2
            ref={titleRef}
            style={{
              fontSize: "clamp(32px, 3vw, 48px)",
              fontWeight: 300,
              letterSpacing: "-1px",
              lineHeight: 1.2,
              color: "var(--text-primary)",
              marginBottom: 12,
              opacity: 0,
              willChange: "transform, opacity, filter",
            }}
          >
            {tx.title}
          </h2>
          <p
            ref={subtitleRef}
            style={{
              fontSize: 15,
              color: "var(--text-tertiary)",
              opacity: 0,
            }}
          >
            {tx.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {tx.items.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Awards */}
        <div
          ref={awardsRef}
          style={{
            marginTop: 48,
            padding: "32px 36px",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 20,
            opacity: 0,
          }}
        >
          <Award
            size={28}
            color="var(--accent)"
            style={{ flexShrink: 0, opacity: 0.7 }}
          />
          <div>
            <div
              style={{
                fontSize: 12,
                color: "var(--accent)",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 8,
                fontWeight: 500,
              }}
            >
              {tx.awards.label}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {tx.awards.items.map((a, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    fontWeight: 350,
                  }}
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
