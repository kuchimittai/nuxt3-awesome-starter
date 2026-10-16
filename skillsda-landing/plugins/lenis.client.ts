import Lenis from 'lenis'
import { gsap } from 'gsap'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.15,
    anchors: { offset: -90 }
  })

  lenis.on('scroll', ScrollTriggerSafeUpdate)
  function ScrollTriggerSafeUpdate() {
    // ScrollTrigger is registered by the page that uses it; Lenis owns scroll interpolation.
  }

  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  return {
    provide: { lenis }
  }
})