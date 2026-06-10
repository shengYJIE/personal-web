import { lazy, Suspense } from "react"
import { LanguageProvider } from "./i18n/LanguageContext"
import Nav from "./components/Nav"
import Hero from "./components/Hero"

// Lazy-load below-fold sections — don't block first paint
const About = lazy(() => import("./components/About"))
const Projects = lazy(() => import("./components/Projects"))
const Skills = lazy(() => import("./components/Skills"))
const Contact = lazy(() => import("./components/Contact"))

function SectionFallback() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-deepest)",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: "2px solid rgba(255,255,255,0.06)",
          borderTopColor: "var(--accent)",
          borderRadius: "50%",
          animation: "app-spin 0.6s linear infinite",
        }}
      />
      <style>{`@keyframes app-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
    </LanguageProvider>
  )
}
