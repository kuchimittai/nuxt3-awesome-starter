<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const titleWords = ['Privacy', 'isn’t', 'just', 'a', 'policy.']
const features = [
  { number: '01', title: 'Understand the rules', body: 'Turn DPDP concepts into plain-language decisions your team can use every day.', mark: '01 / LEARN' },
  { number: '02', title: 'Practice real scenarios', body: 'Work through practical situations around consent, data access, retention and response.', mark: '02 / APPLY' },
  { number: '03', title: 'Build confident habits', body: 'Give people a clear path from awareness to responsible action at work.', mark: '03 / IMPROVE' }
]
const steps = [
  { n: '01', title: 'Start with the essentials', body: 'Get a shared understanding of personal data, responsibilities and the DPDP framework.' },
  { n: '02', title: 'Explore the situations', body: 'Connect the concepts to the choices people make when handling information.' },
  { n: '03', title: 'Take the next step', body: 'Use the learning path to identify what to do, when to ask, and where to escalate.' }
]

let ctx: gsap.Context | undefined
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  ctx = gsap.context(() => {
    gsap.from('.hero-word', {
      yPercent: 115, opacity: 0, rotate: 2, duration: 0.95,
      stagger: 0.09, ease: 'power4.out', delay: 0.15
    })
    gsap.from('.hero-copy', {
      y: 24, opacity: 0, duration: 0.8, stagger: 0.12,
      ease: 'power3.out', delay: 0.52
    })
    gsap.from('.hero-art', {
      opacity: 0, scale: 0.88, rotate: -4, duration: 1.4,
      ease: 'power3.out', delay: 0.2
    })
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
      gsap.to(element, {
        opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 86%', once: true }
      })
    })
    gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, index) => {
      gsap.from(card, {
        y: 36, opacity: 0, duration: 0.7, delay: index * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%', once: true }
      })
    })
    gsap.to('.hero-orbit', {
      rotate: 360, duration: 48, repeat: -1, ease: 'none'
    })
  })
})
onBeforeUnmount(() => ctx?.revert())

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <main class="site-grid relative overflow-hidden">
    <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav class="nav-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 md:px-7" aria-label="Main navigation">
        <a href="#" class="flex items-center gap-3" aria-label="SkillsDA home">
          <span class="grid h-8 w-8 place-items-center rounded-xl bg-skills-blue text-sm font-extrabold text-white">S</span>
          <span class="text-xs font-extrabold tracking-[.2em] text-skills-ink">SKILLS<span class="text-skills-blue">DA</span></span>
        </a>
        <div class="hidden items-center gap-8 text-xs font-semibold text-slate-600 md:flex">
          <a class="transition hover:text-skills-blue" href="#approach">Our approach</a>
          <a class="transition hover:text-skills-blue" href="#pathway">Learning path</a>
          <a class="transition hover:text-skills-blue" href="#about">About DPDP</a>
        </div>
        <button @click="scrollTo('pathway')" class="rounded-full bg-skills-blue px-4 py-2.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-skills-indigo md:px-5">Explore the path <span aria-hidden="true">↗</span></button>
      </nav>
    </header>

    <section class="relative flex min-h-[760px] items-center px-5 pb-24 pt-36 md:min-h-[850px] md:px-10 lg:px-16">
      <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-skills-pale/70" />
      <div class="absolute right-[-14rem] top-28 h-[38rem] w-[38rem] rounded-full border border-skills-blue/10 md:right-[-9rem]">
        <div class="hero-orbit absolute inset-10 rounded-full border border-dashed border-skills-indigo/25" />
      </div>
      <ThreeWireframe />
      <div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div class="max-w-3xl">
          <p class="hero-copy section-kicker mb-7 flex items-center gap-3 text-skills-blue"><span class="h-px w-8 bg-skills-blue" /> DATA PROTECTION, MADE PRACTICAL</p>
          <h1 class="hero-title max-w-3xl font-display text-[clamp(3.7rem,8vw,7.6rem)] leading-[.96] tracking-[-.055em] text-skills-ink">
            <span v-for="(word, index) in titleWords" :key="word" class="inline-block overflow-hidden pb-2 align-top"><span class="hero-word">{{ word }}</span></span>
            <span class="block overflow-hidden pb-3 text-skills-blue"><span class="hero-word italic">It’s how we work.</span></span>
          </h1>
          <p class="hero-copy mt-7 max-w-xl text-base leading-8 text-slate-600 md:text-lg">Build a culture of responsible data handling with clear guidance, practical learning and everyday decisions that protect people.</p>
          <div class="hero-copy mt-9 flex flex-wrap items-center gap-4">
            <button @click="scrollTo('pathway')" class="group inline-flex items-center gap-4 rounded-full bg-skills-blue px-6 py-4 text-sm font-bold text-white shadow-lg shadow-skills-blue/20 transition hover:-translate-y-1 hover:bg-skills-indigo">Explore the learning path <span class="transition group-hover:translate-x-1">↗</span></button>
            <a href="#approach" class="rounded-full px-4 py-3 text-sm font-bold text-skills-ink transition hover:text-skills-blue">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-copy mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-skills-blue/15 pt-5 text-[11px] font-semibold tracking-wide text-slate-500">
            <span>01 — Understand</span><span>02 — Practice</span><span>03 — Apply</span>
          </div>
        </div>
        <div class="hero-art relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block">
          <div class="absolute inset-[10%] rounded-full bg-skills-blue/5 blur-3xl" />
          <svg class="relative z-10 h-full w-full overflow-visible" viewBox="0 0 520 520" fill="none" role="img" aria-label="Abstract wireframe geometry representing connected data and privacy">
            <defs>
              <linearGradient id="faceA" x1="110" y1="95" x2="395" y2="430" gradientUnits="userSpaceOnUse"><stop stop-color="#E8F1F7"/><stop offset="1" stop-color="#B5D5E5"/></linearGradient>
              <linearGradient id="faceB" x1="120" y1="160" x2="410" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="#0A4A72"/><stop offset="1" stop-color="#252462"/></linearGradient>
            </defs>
            <circle cx="260" cy="260" r="190" stroke="#0A4A72" stroke-opacity=".12"/>
            <circle cx="260" cy="260" r="155" stroke="#252462" stroke-opacity=".16" stroke-dasharray="3 8"/>
            <path d="M260 73 414 162 414 340 260 429 106 340 106 162 260 73Z" fill="url(#faceA)" fill-opacity=".58" stroke="#0A4A72" stroke-opacity=".45"/>
            <path d="M260 73 260 252 106 340 106 162 260 73Z" fill="#0A4A72" fill-opacity=".09" stroke="#0A4A72" stroke-opacity=".35"/>
            <path d="M260 73 414 162 260 252 106 162 260 73Z" fill="#FFFFFF" fill-opacity=".7" stroke="#0A4A72" stroke-opacity=".38"/>
            <path d="M260 252 414 162 414 340 260 429 260 252Z" fill="url(#faceB)" fill-opacity=".13" stroke="#0A4A72" stroke-opacity=".42"/>
            <path d="M106 162 260 252 260 429 106 340 106 162Z" fill="#E8F1F7" fill-opacity=".8" stroke="#0A4A72" stroke-opacity=".42"/>
            <path d="M260 73V252M106 162 260 73 414 162M106 340 260 429 414 340M106 162 260 252 414 162M260 252V429" stroke="#0A4A72" stroke-opacity=".5"/>
            <g fill="#FFFFFF" stroke="#0A4A72" stroke-width="1.5"><circle cx="260" cy="73" r="5"/><circle cx="414" cy="162" r="5"/><circle cx="414" cy="340" r="5"/><circle cx="260" cy="429" r="5"/><circle cx="106" cy="340" r="5"/><circle cx="106" cy="162" r="5"/><circle cx="260" cy="252" r="6"/></g>
            <g transform="translate(326 90)"><rect width="118" height="45" rx="12" fill="#FFFFFF" stroke="#D6E4ED"/><circle cx="17" cy="22" r="5" fill="#0A4A72"/><text x="30" y="26" fill="#183449" font-size="10" font-family="DM Mono">TRUST / 001</text></g>
            <g transform="translate(45 365)"><rect width="126" height="45" rx="12" fill="#FFFFFF" stroke="#D6E4ED"/><circle cx="17" cy="22" r="5" fill="#252462"/><text x="30" y="26" fill="#183449" font-size="10" font-family="DM Mono">PRIVACY / 002</text></g>
            <circle cx="260" cy="252" r="34" fill="#0A4A72" fill-opacity=".08"/><circle cx="260" cy="252" r="18" fill="#0A4A72"/><path d="m252 252 6 6 12-14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="absolute bottom-8 right-0 rounded-2xl border border-white bg-white/85 px-4 py-3 shadow-card backdrop-blur"><span class="section-kicker text-skills-blue">DESIGNED FOR REAL WORK</span><p class="mt-1 text-xs font-semibold text-skills-ink">Clarity over complexity.</p></div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 border-y border-skills-blue/10 bg-white/60 py-4">
        <div class="marquee-track flex w-max gap-10 whitespace-nowrap text-[10px] font-bold tracking-[.22em] text-skills-blue/65"><span v-for="n in 2" :key="n" class="flex gap-10 pr-10"><span>DATA RIGHTS</span><span>✳</span><span>RESPONSIBLE PRACTICE</span><span>✳</span><span>TRUST BY DESIGN</span><span>✳</span><span>PRIVACY CULTURE</span><span>✳</span></span></div>
      </div>
    </section>

    <section id="approach" class="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div class="mx-auto max-w-7xl">
        <div class="reveal grid gap-8 border-b border-skills-blue/15 pb-12 md:grid-cols-[.7fr_1.3fr] md:items-end">
          <p class="section-kicker text-skills-blue">01 / THE APPROACH</p>
          <div><h2 class="max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-6xl">Make the important things <span class="italic text-skills-blue">understandable.</span></h2><p class="mt-6 max-w-2xl text-base leading-8 text-slate-600">Privacy guidance works best when people can connect it to their own role. SkillsDA brings the framework closer to the everyday moments where good decisions matter.</p></div>
        </div>
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <article v-for="item in features" :key="item.number" class="feature-card reveal min-h-[290px] rounded-[1.6rem] border border-skills-blue/15 bg-white/70 p-7 md:p-8">
            <div class="flex items-start justify-between"><span class="section-kicker text-skills-blue">{{ item.number }} / PRINCIPLE</span><span class="grid h-10 w-10 place-items-center rounded-full bg-skills-pale text-lg text-skills-blue">↗</span></div>
            <h3 class="mt-14 font-display text-3xl text-skills-ink">{{ item.title }}</h3><p class="mt-4 text-sm leading-7 text-slate-600">{{ item.body }}</p><p class="mt-7 section-kicker text-skills-blue/70">{{ item.mark }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="pathway" class="relative overflow-hidden bg-skills-blue px-5 py-24 text-white md:px-10 md:py-32 lg:px-16">
      <div class="absolute inset-0 opacity-20" style="background-image:linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px);background-size:44px 44px" />
      <div class="relative mx-auto max-w-7xl">
        <div class="reveal grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-end"><p class="section-kicker text-skills-pale">02 / THE LEARNING PATH</p><div><h2 class="font-display text-4xl leading-tight md:text-6xl">From awareness to <span class="italic text-[#C9E8F7]">action.</span></h2><p class="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">A simple structure for learning, discussion and practical application. Adapt the steps to your programme and audience.</p></div></div>
        <div class="mt-14 grid gap-0 md:grid-cols-3">
          <article v-for="step in steps" :key="step.n" class="reveal border-t border-white/25 py-8 md:min-h-[260px] md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
            <p class="font-mono text-xs text-[#C9E8F7]">{{ step.n }} <span class="ml-3 text-white/45">/ STEP</span></p><h3 class="mt-8 font-display text-3xl">{{ step.title }}</h3><p class="mt-4 max-w-sm text-sm leading-7 text-white/70">{{ step.body }}</p>
          </article>
        </div>
        <div class="reveal mt-12 flex flex-col justify-between gap-6 rounded-3xl border border-white/20 bg-white/[.07] p-7 backdrop-blur md:flex-row md:items-center md:p-10"><div><p class="section-kicker text-[#C9E8F7]">A PRACTICAL START</p><h3 class="mt-3 font-display text-3xl md:text-4xl">Make privacy part of the process.</h3></div><a href="#about" class="inline-flex w-fit items-center gap-5 rounded-full bg-white px-6 py-4 text-sm font-bold text-skills-blue transition hover:-translate-y-1">Explore the principles <span>↗</span></a></div>
      </div>
    </section>

    <section id="about" class="px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div class="reveal mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr]">
        <div><p class="section-kicker text-skills-blue">03 / WHY IT MATTERS</p><div class="mt-8 max-w-sm font-display text-5xl leading-tight md:text-6xl">Trust is built in the <span class="italic text-skills-blue">details.</span></div></div>
        <div class="border-t border-skills-blue/20 pt-7 md:pt-0 md:border-t-0 md:border-l md:pl-10"><p class="max-w-2xl text-lg leading-9 text-slate-600">The Digital Personal Data Protection framework is easier to work with when people know what personal data means, recognise their responsibilities, and know where to go when something is unclear.</p><p class="mt-6 max-w-2xl text-sm leading-7 text-slate-500">This template is a starting point for an educational landing page. Review all programme claims, course details, calls to action and legal statements against your approved SkillsDA content before publishing.</p><div class="mt-10 flex flex-wrap gap-3"><span class="rounded-full border border-skills-blue/15 bg-white/75 px-4 py-2 text-xs font-semibold">Clear language</span><span class="rounded-full border border-skills-blue/15 bg-white/75 px-4 py-2 text-xs font-semibold">Role-based learning</span><span class="rounded-full border border-skills-blue/15 bg-white/75 px-4 py-2 text-xs font-semibold">Practical decisions</span></div></div>
      </div>
    </section>

    <footer class="border-t border-skills-blue/15 bg-white/65 px-5 py-8 md:px-10 lg:px-16">
      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center"><a href="#" class="flex items-center gap-3"><span class="grid h-8 w-8 place-items-center rounded-xl bg-skills-blue text-sm font-extrabold text-white">S</span><span class="text-xs font-extrabold tracking-[.2em]">SKILLS<span class="text-skills-blue">DA</span></span></a><p class="text-xs text-slate-500">A motion-ready Nuxt 3 landing page starter · Built for adaptation</p><a href="#" class="text-xs font-bold text-skills-blue hover:text-skills-indigo">Back to top ↑</a></div>
    </footer>
  </main>
</template>