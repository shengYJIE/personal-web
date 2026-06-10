import { useEffect, useState, useRef, useMemo, useCallback } from "react"
import { motion } from "framer-motion"

const styles = {
  wrapper: {
    display: "inline-block",
    whiteSpace: "pre-wrap",
  },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0,0,0,0)",
    border: 0,
  },
}

/**
 * DecryptedText — adapted from react-bits (DavidHDev)
 * Scrambles characters then reveals them one by one.
 */
export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "view",
  ...props
}) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState(new Set())
  const [hasAnimated, setHasAnimated] = useState(false)
  const [, setIsDecrypted] = useState(animateOn !== "click")
  const [direction, setDirection] = useState("forward")

  const containerRef = useRef(null)
  const orderRef = useRef([])
  const intervalRef = useRef(null)

  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("")
  }, [useOriginalCharsOnly, text, characters])

  const shuffleText = useCallback(
    (originalText, currentRevealed) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (currentRevealed.has(i)) return originalText[i]
          return availableChars[
            Math.floor(Math.random() * availableChars.length)
          ]
        })
        .join("")
    },
    [availableChars]
  )

  const computeOrder = useCallback(
    (len) => {
      const order = []
      if (len <= 0) return order
      if (revealDirection === "start") {
        for (let i = 0; i < len; i++) order.push(i)
        return order
      }
      if (revealDirection === "end") {
        for (let i = len - 1; i >= 0; i--) order.push(i)
        return order
      }
      // center
      const middle = Math.floor(len / 2)
      let offset = 0
      while (order.length < len) {
        if (offset % 2 === 0) {
          const idx = middle + offset / 2
          if (idx >= 0 && idx < len) order.push(idx)
        } else {
          const idx = middle - Math.ceil(offset / 2)
          if (idx >= 0 && idx < len) order.push(idx)
        }
        offset++
      }
      return order.slice(0, len)
    },
    [revealDirection]
  )

  const triggerDecrypt = useCallback(() => {
    if (sequential) {
      orderRef.current = computeOrder(text.length)
    }
    setDirection("forward")
    setIsAnimating(true)
  }, [sequential, computeOrder, text.length])

  // View observer — auto-play when visible
  useEffect(() => {
    if (animateOn !== "view") return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setRevealedIndices(new Set())
          triggerDecrypt()
          setHasAnimated(true)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [animateOn, hasAnimated, triggerDecrypt])

  // Reset when text changes (e.g., language switch)
  useEffect(() => {
    setDisplayText(text)
    setIsDecrypted(true)
    setRevealedIndices(new Set())
    setDirection("forward")
    setHasAnimated(false)
  }, [text])

  // Animation interval
  useEffect(() => {
    if (!isAnimating) return

    let currentIteration = 0

    intervalRef.current = setInterval(() => {
      setRevealedIndices((prevRevealed) => {
        if (sequential) {
          if (direction === "forward") {
            if (prevRevealed.size < text.length) {
              const nextIndex = prevRevealed.size
              const newRevealed = new Set(prevRevealed)
              newRevealed.add(nextIndex)
              setDisplayText(shuffleText(text, newRevealed))
              return newRevealed
            } else {
              clearInterval(intervalRef.current)
              setIsAnimating(false)
              setIsDecrypted(true)
              return prevRevealed
            }
          }
        } else {
          setDisplayText(shuffleText(text, prevRevealed))
          currentIteration++
          if (currentIteration >= maxIterations) {
            clearInterval(intervalRef.current)
            setIsAnimating(false)
            setDisplayText(text)
            setIsDecrypted(true)
          }
          return prevRevealed
        }
        return prevRevealed
      })
    }, speed)

    return () => clearInterval(intervalRef.current)
  }, [
    isAnimating,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    shuffleText,
    direction,
  ])

  return (
    <motion.span
      className={parentClassName}
      ref={containerRef}
      style={styles.wrapper}
      {...props}
    >
      <span style={styles.srOnly}>{displayText}</span>

      <span aria-hidden="true">
        {displayText.split("").map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || (!isAnimating && displayText === text)

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          )
        })}
      </span>
    </motion.span>
  )
}
