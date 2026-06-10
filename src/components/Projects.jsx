import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"
import { useLang } from "../i18n/LanguageContext"
import t from "../i18n/translations"
import Grainient from "./Grainient"
import TiltedCard from "./TiltedCard"

gsap.registerPlugin(ScrollTrigger)

function ProjectCard({ project, index }) {
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
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=60px",
            toggleActions: "restart none restart reverse",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} style={{ marginBottom: 28, opacity: 0 }}>
      <TiltedCard rotateAmplitude={8} scaleOnHover={1.01}>
        <a
          href={project.link || undefined}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noopener noreferrer" : undefined}
          style={{
            display: "block",
            textDecoration: "none",
            color: "inherit",
            cursor: project.link ? "pointer" : "default",
          }}
        >
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              padding: "clamp(32px, 3.5vw, 48px) clamp(36px, 4vw, 56px)",
              transition: "border-color 0.35s ease, box-shadow 0.35s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-default)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)"
            }}
          >
            {/* Subtle corner accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 200,
                height: 200,
                background:
                  "radial-gradient(circle at 100% 0%, rgba(79,157,110,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "var(--accent)",
                  letterSpacing: 3,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "var(--text-tertiary)",
                  letterSpacing: 1,
                }}
              >
                {project.period}
              </span>
            </div>

            {/* Title + subtitle */}
            <h3
              style={{
                fontSize: "clamp(22px, 2.2vw, 36px)",
                fontWeight: 350,
                letterSpacing: "-0.6px",
                lineHeight: 1.2,
                color: "var(--text-primary)",
                margin: "0 0 6px 0",
                maxWidth: "85%",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(12px, 0.9vw, 14px)",
                fontWeight: 400,
                color: "var(--accent)",
                margin: "0 0 24px 0",
                opacity: 0.75,
              }}
            >
              {project.subtitle}
            </p>

            {/* Divider */}
            <div
              style={{
                height: 1,
                background: "var(--border-subtle)",
                marginBottom: 24,
                opacity: 0.6,
              }}
            />

            {/* Description + highlights */}
            <div
              style={{
                display: "flex",
                gap: "clamp(32px, 4vw, 64px)",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <p
                style={{
                  flex: "1 1 280px",
                  fontSize: "clamp(13px, 0.9vw, 14px)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                {project.description}
              </p>
              <ul
                style={{
                  flex: "1 1 260px",
                  margin: 0,
                  paddingLeft: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "clamp(12px, 0.8vw, 13px)",
                      color: "var(--text-tertiary)",
                      lineHeight: 1.6,
                      paddingLeft: 18,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 8,
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        opacity: 0.5,
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 28,
                paddingTop: 24,
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    fontWeight: 450,
                    color: "var(--text-secondary)",
                    background: "var(--bg-hover)",
                    padding: "4px 12px",
                    borderRadius: 6,
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </TiltedCard>
    </div>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const tx = t[lang].projects

  const sectionRef = useRef(null)
  const decoRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative "PROJECTS"
      gsap.fromTo(
        decoRef.current,
        { clipPath: "inset(0 0 0 100%)", x: -60 },
        {
          clipPath: "inset(0 0 0 0%)",
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
    })

    return () => ctx.revert()
  }, [lang])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section"
      style={{
        background: "var(--bg-deepest)",
        padding: "140px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grainient background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Grainient color1="#3b7a52" color2="#000000" color3="#B497CF" />
      </div>

      {/* Decorative watermark */}
      <div
        ref={decoRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(30px, 4vw, 70px)",
          left: "clamp(-30px, -3vw, -60px)",
          fontSize: "clamp(120px, 16vw, 260px)",
          fontWeight: 700,
          letterSpacing: "-5px",
          lineHeight: 0.85,
          color: "var(--text-primary)",
          opacity: 0.025,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        PROJECTS
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 64 }}>
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
              opacity: 0,
              willChange: "transform, opacity, filter",
            }}
          >
            {tx.title}
          </h2>
        </div>

        {/* Cards */}
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          {tx.items.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
