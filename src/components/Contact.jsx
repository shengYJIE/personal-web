import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, Globe } from "lucide-react"
import { useLang } from "../i18n/LanguageContext"
import t from "../i18n/translations"
import resume from "../data/resume"
import BubbleMenu from "./BubbleMenu"

gsap.registerPlugin(ScrollTrigger)

const BASE = import.meta.env.BASE_URL

const BUBBLE_ITEMS = [
  { image: `${BASE}assets/1.png`, label: "抖音", ariaLabel: "抖音主页", href: "https://www.douyin.com/user/MS4wLjABAAAAfYaDoGNHLq7F7csoJtxgKnTxUEPQ1xjtToFNXv33Mj4?from_tab_name=main", external: true },
  { image: `${BASE}assets/2.png`, label: "B站", ariaLabel: "B站主页", href: "https://space.bilibili.com/496757397?spm_id_from=333.337.0.0", external: true },
  { image: `${BASE}assets/3.png`, label: "YouTube", ariaLabel: "YouTube频道", href: "https://www.youtube.com/@yongjies", external: true },
]

const FORM_ENDPOINT = "https://formsubmit.co/15200674379@163.com"

function PaperPlane({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang].contact

  const sectionRef = useRef(null)
  const decoRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const linksRef = useRef(null)
  const formRef = useRef(null)
  const footerRef = useRef(null)
  const iframeRef = useRef(null)

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleIframeLoad = useCallback(() => {
    setStatus("success")
    setForm({ name: "", email: "", message: "" })
  }, [])

  const handleSubmit = () => {
    setStatus("loading")
    setTimeout(() => {
      setStatus((prev) => (prev === "loading" ? "error" : prev))
    }, 10000)
  }

  // Scroll-triggered reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Decorative "CONTACT"
      gsap.fromTo(
        decoRef.current,
        { clipPath: "inset(0 0 0 100%)", x: -80 },
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

      // Description
      gsap.fromTo(
        descRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top bottom-=20px",
            toggleActions: "restart none restart reverse",
          },
        }
      )

      // Contact links
      const linkEls = linksRef.current?.querySelectorAll(".contact-link-item")
      if (linkEls?.length) {
        gsap.fromTo(
          linkEls,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: linksRef.current,
              start: "top bottom-=20px",
              toggleActions: "restart none restart reverse",
            },
          }
        )
      }

      // Form
      gsap.fromTo(
        formRef.current,
        { y: 48, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom-=20px",
            toggleActions: "restart none restart reverse",
          },
        }
      )
    })

    return () => ctx.revert()
  }, [lang])

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom:
      status === "success"
        ? "1.5px solid rgba(255,255,255,0.08)"
        : "1.5px solid rgba(255,255,255,0.12)",
    outline: "none",
    padding: "14px 0",
    fontSize: 15,
    fontWeight: 350,
    color: "var(--text-primary)",
    fontFamily: "var(--font-family)",
    caretColor: "var(--accent)",
    transition: "border-color 0.35s ease, border-width 0.35s ease",
    WebkitAppearance: "none",
    borderRadius: 0,
    resize: "none",
    lineHeight: 1.6,
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "var(--bg-deepest)",
        position: "relative",
        padding: "140px 0 60px",
        overflow: "hidden",
      }}
    >
      {/* Bubble Menu — top-right corner */}
      <BubbleMenu items={BUBBLE_ITEMS} footerText="关注我" />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-8%",
          width: "45%",
          height: "55%",
          background:
            "radial-gradient(ellipse, rgba(79,157,110,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative watermark */}
      <div
        ref={decoRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(40px, 5vw, 80px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "clamp(100px, 14vw, 220px)",
          fontWeight: 700,
          letterSpacing: "-4px",
          lineHeight: 0.85,
          color: "var(--text-primary)",
          opacity: 0.025,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        CONTACT
      </div>

      <div
        className="container"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 580, margin: "0 auto", width: "100%" }}>
          {/* Label */}
          <div ref={labelRef} className="section-label" style={{ opacity: 0 }}>
            {tx.label}
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            style={{
              fontSize: "clamp(32px, 3.2vw, 48px)",
              fontWeight: 300,
              letterSpacing: "-1px",
              lineHeight: 1.15,
              color: "var(--text-primary)",
              marginBottom: 12,
              opacity: 0,
              willChange: "transform, opacity, filter",
            }}
          >
            {tx.formTitle}
          </h2>

          {/* Description */}
          <p
            ref={descRef}
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: 36,
              opacity: 0,
            }}
          >
            {tx.description}
          </p>

          {/* Contact links */}
          <div
            ref={linksRef}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              marginBottom: 48,
            }}
          >
            {[
              {
                href: `mailto:${resume.email}`,
                icon: <Mail size={14} />,
                label: resume.email,
              },
              {
                href: `tel:${resume.phone}`,
                icon: <Phone size={14} />,
                label: resume.phone,
              },
              {
                href: "https://github.com",
                icon: <Globe size={14} />,
                label: "GitHub",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "GitHub" ? "_blank" : undefined}
                rel={
                  item.label === "GitHub" ? "noopener noreferrer" : undefined
                }
                className="contact-link-item"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: 13,
                  fontWeight: 350,
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)"
                }}
              >
                <span style={{ color: "var(--accent)", opacity: 0.7 }}>
                  {item.icon}
                </span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Form */}
          <div ref={formRef} style={{ opacity: 0 }}>
            <iframe
              ref={iframeRef}
              name="formsubmit-iframe"
              title="form submit hidden frame"
              onLoad={handleIframeLoad}
              style={{ display: "none" }}
            />

            {status === "success" ? (
              <div
                style={{
                  padding: "40px 0",
                  borderBottom: "1.5px solid var(--accent)",
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    color: "var(--accent)",
                    fontWeight: 350,
                    margin: "0 0 8px 0",
                  }}
                >
                  {tx.formSuccess}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: 20,
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 100,
                    padding: "8px 22px",
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    cursor: "pointer",
                    fontFamily: "var(--font-family)",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)"
                    e.currentTarget.style.color = "var(--text-primary)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.12)"
                    e.currentTarget.style.color = "var(--text-secondary)"
                  }}
                >
                  {lang === "zh" ? "发送新消息" : "Send another"}
                </button>
              </div>
            ) : (
              <form
                action={FORM_ENDPOINT}
                method="POST"
                target="formsubmit-iframe"
                onSubmit={handleSubmit}
                style={{ width: "100%" }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value={
                    lang === "zh"
                      ? "来自个人网站的留言"
                      : "New message from portfolio"
                  }
                />

                <div style={{ marginBottom: 8 }}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={tx.formName}
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderBottom =
                        "1.5px solid var(--accent)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottom =
                        "1.5px solid rgba(255,255,255,0.12)"
                    }}
                  />
                </div>

                <div style={{ marginBottom: 8 }}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={tx.formEmail}
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderBottom =
                        "1.5px solid var(--accent)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottom =
                        "1.5px solid rgba(255,255,255,0.12)"
                    }}
                  />
                </div>

                <div style={{ marginBottom: 32 }}>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={tx.formMessage}
                    required
                    rows={1}
                    style={inputStyle}
                    onInput={(e) => {
                      e.target.style.height = "auto"
                      e.target.style.height = e.target.scrollHeight + "px"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderBottom =
                        "1.5px solid var(--accent)"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderBottom =
                        "1.5px solid rgba(255,255,255,0.12)"
                    }}
                  />
                </div>

                {status === "error" && (
                  <p
                    style={{
                      fontSize: 13,
                      color: "#e05555",
                      marginBottom: 16,
                    }}
                  >
                    {tx.formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="contact-send-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    background:
                      status === "loading"
                        ? "#1a1a22"
                        : "var(--text-primary)",
                    color:
                      status === "loading"
                        ? "var(--text-secondary)"
                        : "var(--bg-deepest)",
                    border: "none",
                    borderRadius: 100,
                    padding: "15px 32px",
                    fontSize: 15,
                    fontWeight: 400,
                    letterSpacing: "0.2px",
                    cursor: status === "loading" ? "wait" : "pointer",
                    fontFamily: "var(--font-family)",
                    transition:
                      "transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                    transform: "scale(1)",
                    boxShadow:
                      "0 2px 8px rgba(0,0,0,0.15), 0 0 0 0 rgba(240,240,240,0)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") {
                      e.currentTarget.style.transform = "scale(1.04)"
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0,0,0,0.25), 0 0 0 8px rgba(240,240,240,0.04)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.15), 0 0 0 0 rgba(240,240,240,0)"
                  }}
                >
                  <span>
                    {status === "loading" ? tx.formSending : tx.formSend}
                  </span>
                  <PaperPlane size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        ref={footerRef}
        className="container"
        style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: 28,
          paddingBottom: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 80,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
          © 2026 {resume.nameEn}. All rights reserved.
        </span>
        <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
          {tx.footer}
        </span>
      </div>

      <style>{`
        #contact input::placeholder,
        #contact textarea::placeholder {
          color: rgba(255,255,255,0.22);
          opacity: 1;
        }
        #contact input::-webkit-input-placeholder,
        #contact textarea::-webkit-input-placeholder {
          color: rgba(255,255,255,0.22);
        }
        #contact input::-moz-placeholder,
        #contact textarea::-moz-placeholder {
          color: rgba(255,255,255,0.22);
          opacity: 1;
        }
        #contact input:-ms-input-placeholder,
        #contact textarea:-ms-input-placeholder {
          color: rgba(255,255,255,0.22);
        }
        #contact textarea {
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
