import { useEffect, useRef, useLayoutEffect } from "react"
import { ArrowDown } from "lucide-react"
import { gsap } from "gsap"
import { useLang } from "../i18n/LanguageContext"
import t from "../i18n/translations"
import resume from "../data/resume"

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang].hero
  const spotlightRef = useRef(null)
  const curtainRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctasRef = useRef(null)
  const scrollRef = useRef(null)
  const timelineRef = useRef(null)

  // Cursor spotlight
  useEffect(() => {
    const handleMouse = (e) => {
      if (!spotlightRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(79,157,110,0.06) 0%, transparent 60%)`
    }
    window.addEventListener("mousemove", handleMouse, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  // Opening animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })

      // Phase 1 — Curtain lifts (0 → 1.0s)
      tl.to(curtainRef.current, {
        scaleY: 0,
        duration: 1.0,
        ease: "power4.inOut",
        transformOrigin: "top center",
      }, 0.15)

      // Phase 2 — Title: scaleY compress → settle (0.5 → 1.6s)
      const titleChars = titleRef.current?.querySelectorAll(".hero-char")
      if (titleChars?.length) {
        tl.fromTo(
          titleChars,
          {
            scaleY: 0,
            opacity: 0,
          },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.9,
            stagger: { each: 0.06, from: "center" },
            ease: "expo.out",
            transformOrigin: "center bottom",
          },
          0.45
        )
      }

      // Phase 3 — Subtitle: blur dissolve + slide up (0.9 → 1.6s)
      tl.fromTo(
        subtitleRef.current,
        {
          y: 32,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        0.85
      )

      // Phase 4 — CTA buttons stagger up (1.2 → 1.8s)
      const ctaEls = ctasRef.current?.querySelectorAll(".hero-cta")
      if (ctaEls?.length) {
        tl.fromTo(
          ctaEls,
          {
            y: 36,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power2.out",
          },
          1.15
        )
      }

      // Phase 5 — Scroll hint (1.6 → 2.0s)
      tl.fromTo(
        scrollRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 0.4,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        1.5
      )

      timelineRef.current = tl
    })

    return () => ctx.revert()
  }, [])

  // Split name into individual characters for animation
  const name = resume.nameEn // "Sheng Yongjie"
  const nameChars = name.split("").map((char, i) => (
    <span
      key={i}
      className="hero-char"
      style={{
        display: "inline-block",
        whiteSpace: char === " " ? "pre" : "pre",
        willChange: "transform, opacity",
      }}
    >
      {char === " " ? " " : char}
    </span>
  ))

  return (
    <section
      id="hero"
      className="section"
      style={{
        height: "100vh",
        minHeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "var(--bg-deepest)",
        overflow: "hidden",
      }}
    >
      {/* ===== Curtain overlay ===== */}
      <div
        ref={curtainRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "#050508",
          transformOrigin: "top center",
          willChange: "transform",
          pointerEvents: "none",
        }}
      />

      {/* Video background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${BASE}hero-poster.webp`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.45,
            background: `#050508 url('${BASE}hero-poster.webp') center/cover no-repeat`,
          }}
        >
          <source src={`${BASE}bg.mp4`} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,157,110,0.06) 0%, transparent 60%),
              linear-gradient(to bottom, rgba(5,5,8,0.3) 0%, rgba(5,5,8,0.6) 60%, rgba(5,5,8,0.9) 100%)
            `,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            mask: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 70%)",
            WebkitMask: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 70%)",
          }}
        />
      </div>

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transition: "background 0.2s ease",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Label — no animation, revealed with curtain */}
        <div className="section-label" style={{ marginBottom: 20, opacity: 0 }}>
          {tx.label}
        </div>

        {/* Title — per-character scaleY reveal */}
        <h1
          ref={titleRef}
          style={{
            fontSize: "clamp(48px, 5.5vw, 80px)",
            fontWeight: 300,
            letterSpacing: "-1.5px",
            lineHeight: 1.08,
            color: "var(--text-primary)",
            marginBottom: 20,
          }}
        >
          {nameChars}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontSize: "clamp(16px, 1.2vw, 19px)",
            fontWeight: 300,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto 40px",
            willChange: "transform, opacity, filter",
          }}
        >
          {tx.subtitle}
        </p>

        {/* CTAs */}
        <div
          ref={ctasRef}
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="#contact" className="hero-cta" style={ctaPrimaryStyle}>
            {tx.cta}
          </a>
          <a href="#projects" className="hero-cta" style={ctaSecondaryStyle}>
            {tx.secondary}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0,
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "var(--text-tertiary)" }}>
          {tx.scroll}
        </span>
        <ArrowDown size={14} color="var(--text-tertiary)" style={{ animation: "hero-bounce 2s infinite" }} />
      </div>

      <style>{`
        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}

const ctaPrimaryStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: "var(--bg-deepest)",
  background: "var(--text-primary)",
  padding: "12px 28px",
  borderRadius: 100,
  textDecoration: "none",
  transition: "background 0.25s ease, transform 0.25s ease",
}

const ctaSecondaryStyle = {
  fontSize: 14,
  fontWeight: 400,
  color: "var(--text-secondary)",
  padding: "12px 28px",
  borderRadius: 100,
  textDecoration: "none",
  border: "1px solid var(--border-default)",
  transition: "border-color 0.25s ease, color 0.25s ease",
}
