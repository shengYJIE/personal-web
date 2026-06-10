import { useEffect, useRef, useState, useCallback } from "react"
import { Globe } from "lucide-react"
import { gsap } from "gsap"
import { useLang } from "../i18n/LanguageContext"
import t from "../i18n/translations"
import "./Nav.css"

export default function Nav() {
  const { lang, toggle: toggleLang } = useLang()
  const tx = t[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const links = [
    { label: tx.about, href: "#about" },
    { label: tx.projects, href: "#projects" },
    { label: tx.skills, href: "#skills" },
    { label: tx.contact, href: "#contact" },
  ]

  // GSAP refs
  const circleRefs = useRef([])
  const tlRefs = useRef([])
  const activeTweenRefs = useRef([])

  // Scroll detection — rAF-throttled
  useEffect(() => {
    let ticking = false
    const handle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  // Active section detection — rAF-throttled
  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""))
    let ticking = false
    const handle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 120
          let current = ""
          for (const id of sections) {
            const el = document.getElementById(id)
            if (el && el.offsetTop <= scrollPos) {
              current = id
            }
          }
          setActiveSection((prev) => (prev !== current ? current : prev))
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handle, { passive: true })
    // Initial check — use rAF to avoid blocking first paint
    requestAnimationFrame(handle)
    return () => window.removeEventListener("scroll", handle)
  }, [lang])

  // GSAP layout + timeline setup
  const ease = "power3.easeOut"

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement
        const rect = pill.getBoundingClientRect()
        const { width: w, height: h } = rect
        const R = ((w * w) / 4 + h * h) / (2 * h)
        const D = Math.ceil(2 * R) + 2
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1
        const originY = D - delta

        circle.style.width = `${D}px`
        circle.style.height = `${D}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        })

        const label = pill.querySelector(".pill-label")
        const hoverLabel = pill.querySelector(".pill-label-hover")

        if (label) gsap.set(label, { y: 0 })
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 })

        tlRefs.current[i]?.kill()
        const tl = gsap.timeline({ paused: true })

        tl.to(
          circle,
          {
            scale: 1.2,
            xPercent: -50,
            duration: 2,
            ease,
            overwrite: "auto",
          },
          0
        )

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
            0
          )
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(
            hoverLabel,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0
          )
        }

        tlRefs.current[i] = tl
      })
    }

    layout()
    window.addEventListener("resize", layout)
    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {})
    }

    return () => window.removeEventListener("resize", layout)
  }, [links.length, ease, lang])

  const handleMouseEnter = useCallback(
    (i) => {
      const tl = tlRefs.current[i]
      if (!tl) return
      activeTweenRefs.current[i]?.kill()
      activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
        duration: 0.3,
        ease,
        overwrite: "auto",
      })
    },
    [ease]
  )

  const handleMouseLeave = useCallback(
    (i) => {
      const tl = tlRefs.current[i]
      if (!tl) return
      activeTweenRefs.current[i]?.kill()
      activeTweenRefs.current[i] = tl.tweenTo(0, {
        duration: 0.2,
        ease,
        overwrite: "auto",
      })
    },
    [ease]
  )

  const toggleMobile = () => setMobileOpen((prev) => !prev)

  return (
    <>
      <nav className={`pill-nav${scrolled ? " scrolled" : ""}`}>
        <div className="pill-nav-inner">
          {/* Logo */}
          <a href="#" className="pill-logo-text">
            Sheng<span className="pill-logo-dot">.</span>
          </a>

          {/* Pill bar — desktop */}
          <div className="pill-nav-bar">
            <ul className="pill-list" role="menubar">
              {links.map((item, i) => {
                const sectionId = item.href.replace("#", "")
                const isActive = activeSection === sectionId
                return (
                  <li key={item.href} role="none">
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`pill${isActive ? " is-active" : ""}`}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={() => handleMouseLeave(i)}
                    >
                      <span
                        className="hover-circle"
                        aria-hidden="true"
                        ref={(el) => {
                          circleRefs.current[i] = el
                        }}
                      />
                      <span className="label-stack">
                        <span className="pill-label">{item.label}</span>
                        <span
                          className="pill-label-hover"
                          aria-hidden="true"
                        >
                          {item.label}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="pill-lang-toggle"
            title={lang === "zh" ? "Switch to English" : "切换到中文"}
          >
            <Globe size={13} />
            <span>{lang === "zh" ? "EN" : "中"}</span>
          </button>

          {/* Mobile burger */}
          <button
            className={`pill-mobile-burger${mobileOpen ? " open" : ""}`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            <span className="pill-hamburger-line" />
            <span className="pill-hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile popover */}
      <div className={`pill-mobile-popover${mobileOpen ? " open" : ""}`}>
        <ul className="pill-mobile-list">
          {links.map((item) => {
            const sectionId = item.href.replace("#", "")
            const isActive = activeSection === sectionId
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`pill-mobile-link${isActive ? " is-active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
