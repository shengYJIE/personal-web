import { useState, useRef, useEffect, useCallback } from "react"
import { gsap } from "gsap"
import DecryptedText from "./DecryptedText"
import "./BubbleMenu.css"

/**
 * BubbleMenu — adapted from react-bits (DavidHDev)
 * Customized: image items, scroll lock, DecryptedText footer, elevated z-index
 */
export default function BubbleMenu({
  items = [],
  footerText = "",
  menuAriaLabel = "Toggle menu",
  menuBg = "#0a0a0f",
  menuAccent = "#4f9d6e",
  animationDuration = 0.45,
  staggerDelay = 0.1,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const overlayRef = useRef(null)
  const bubblesRef = useRef([])
  const decoRef = useRef(null)

  const containerClassName = [
    "bubble-menu-corner",
    isMenuOpen ? "menu-active" : "",
  ]
    .filter(Boolean)
    .join(" ")

  const handleToggle = useCallback(() => {
    const nextState = !isMenuOpen
    if (nextState) setShowOverlay(true)
    setIsMenuOpen(nextState)
  }, [isMenuOpen])

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [isMenuOpen])

  // GSAP open/close animation
  useEffect(() => {
    const overlay = overlayRef.current
    const bubbles = bubblesRef.current.filter(Boolean)
    const deco = decoRef.current

    if (!overlay || !bubbles.length) return

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" })
      gsap.killTweensOf(bubbles)
      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" })

      // DecryptedText line — fade in after bubbles
      if (deco) {
        gsap.killTweensOf(deco)
        gsap.set(deco, { autoAlpha: 0, y: 16 })
      }

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.04, 0.04)
        gsap.to(bubble, {
          scale: 1,
          duration: animationDuration,
          delay,
          ease: "back.out(1.6)",
        })
      })

      // DecryptedText appears after the last bubble
      if (deco) {
        const decoDelay = (bubbles.length - 1) * staggerDelay + animationDuration * 0.6
        gsap.to(deco, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          delay: decoDelay,
          ease: "power2.out",
        })
      }
    } else if (showOverlay) {
      gsap.killTweensOf(bubbles)
      if (deco) gsap.killTweensOf(deco)

      if (deco) {
        gsap.to(deco, { autoAlpha: 0, y: 8, duration: 0.15, ease: "power3.in" })
      }
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" })
          setShowOverlay(false)
        },
      })
    }
  }, [isMenuOpen, showOverlay, animationDuration, staggerDelay])

  // Close on Escape key
  useEffect(() => {
    if (!isMenuOpen) return
    const handleKey = (e) => {
      if (e.key === "Escape") handleToggle()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isMenuOpen, handleToggle])

  // 3 items = single row
  const layoutClass = "layout-row"

  return (
    <>
      {/* Toggle bubble — positioned in parent via CSS */}
      <div className={containerClassName}>
        <button
          type="button"
          className={`bubble toggle-bubble-corner ${isMenuOpen ? "open" : ""}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{
            background: isMenuOpen ? menuAccent : menuBg,
            boxShadow: isMenuOpen
              ? `0 0 24px ${menuAccent}44, 0 4px 16px rgba(0,0,0,0.3)`
              : "0 4px 16px rgba(0,0,0,0.2)",
          }}
        >
          <span
            className="menu-line"
            style={{ background: isMenuOpen ? "#fff" : "rgba(255,255,255,0.7)" }}
          />
          <span
            className="menu-line short"
            style={{ background: isMenuOpen ? "#fff" : "rgba(255,255,255,0.7)" }}
          />
          <span
            className="menu-line"
            style={{ background: isMenuOpen ? "#fff" : "rgba(255,255,255,0.7)" }}
          />
        </button>
      </div>

      {/* Fullscreen overlay — above nav (z-index 101) */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className="bubble-menu-overlay"
          aria-hidden={!isMenuOpen}
          onClick={(e) => {
            if (e.target === overlayRef.current) handleToggle()
          }}
        >
          <div
            className="bubble-menu-backdrop"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(10,10,15,0.92) 0%, rgba(5,5,8,0.97) 100%)",
              backdropFilter: "blur(20px)",
            }}
          />

          {/* Pill list — 3 image items in a row */}
          <div className="bubble-menu-content">
            <ul className={`pill-list-corner ${layoutClass}`} role="menu" aria-label="Social links">
              {items.map((item, idx) => (
                <li key={idx} role="none" className="pill-col-corner">
                  <a
                    role="menuitem"
                    href={item.href || "#"}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={item.ariaLabel || item.label || ""}
                    className="pill-link-corner pill-image"
                    style={{
                      "--pill-bg": menuBg,
                      "--pill-color": "rgba(255,255,255,0.85)",
                      "--hover-bg": menuAccent,
                      "--hover-color": "#ffffff",
                    }}
                    ref={(el) => {
                      if (el) bubblesRef.current[idx] = el
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.label || ""}
                      className="pill-img"
                      draggable={false}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* DecryptedText "关注我" — centered below middle icon */}
            {footerText && (
              <div
                ref={decoRef}
                className="bubble-footer"
                style={{ visibility: "hidden" }}
              >
                <DecryptedText
                  text={footerText}
                  speed={60}
                  maxIterations={12}
                  sequential={true}
                  revealDirection="center"
                  animateOn="view"
                  className="decrypted-char"
                  encryptedClassName="decrypted-char encrypted"
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
