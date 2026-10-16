<script setup lang="ts">
import * as THREE from 'three'

const canvasHost = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | undefined
let frame = 0
let observer: ResizeObserver | undefined
let disposeScene: (() => void) | undefined

onMounted(() => {
  if (!canvasHost.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const host = canvasHost.value
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, 0, 15)

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
  } catch {
    return
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
  renderer.setClearColor(0x000000, 0)
  host.appendChild(renderer.domElement)

  const group = new THREE.Group()
  scene.add(group)

  const geometry = new THREE.IcosahedronGeometry(4.3, 2)
  const wire = new THREE.LineSegments(
    new THREE.EdgesGeometry(geometry),
    new THREE.LineBasicMaterial({ color: 0x7fc4e4, transparent: true, opacity: 0.42 })
  )
  wire.position.set(2.25, -0.15, 0)
  group.add(wire)

  const inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.15, 1),
    new THREE.MeshBasicMaterial({ color: 0x252462, wireframe: true, transparent: true, opacity: 0.22 })
  )
  inner.position.copy(wire.position)
  group.add(inner)

  const orbitGeometry = new THREE.BufferGeometry()
  const orbitPoints: THREE.Vector3[] = []
  for (let i = 0; i <= 180; i++) {
    const a = (i / 180) * Math.PI * 2
    orbitPoints.push(new THREE.Vector3(Math.cos(a) * 5.25, Math.sin(a) * 1.75, -0.5))
  }
  orbitGeometry.setFromPoints(orbitPoints)
  const orbit = new THREE.Line(orbitGeometry, new THREE.LineBasicMaterial({ color: 0xb4d7e7, transparent: true, opacity: 0.45 }))
  orbit.position.copy(wire.position)
  orbit.rotation.set(0.48, 0.12, -0.2)
  group.add(orbit)

  const resize = () => {
    const width = host.clientWidth || window.innerWidth
    const height = host.clientHeight || window.innerHeight
    renderer?.setSize(width, height, false)
    camera.aspect = width / Math.max(height, 1)
    camera.updateProjectionMatrix()
  }
  observer = new ResizeObserver(resize)
  observer.observe(host)
  resize()

  const clock = new THREE.Clock()
  const render = () => {
    frame = requestAnimationFrame(render)
    const t = clock.getElapsedTime()
    group.rotation.y = Math.sin(t * 0.16) * 0.11
    wire.rotation.x = t * 0.045
    wire.rotation.y = t * 0.075
    inner.rotation.x = -t * 0.065
    inner.rotation.y = t * 0.09
    orbit.rotation.z = -0.2 + Math.sin(t * 0.2) * 0.08
    renderer?.render(scene, camera)
  }
  render()

  disposeScene = () => {
    cancelAnimationFrame(frame)
    observer?.disconnect()
    geometry.dispose()
    wire.geometry.dispose()
    ;(wire.material as THREE.Material).dispose()
    inner.geometry.dispose()
    ;(inner.material as THREE.Material).dispose()
    orbitGeometry.dispose()
    ;(orbit.material as THREE.Material).dispose()
    renderer?.dispose()
    renderer?.domElement.remove()
  }
})

onBeforeUnmount(() => disposeScene?.())
</script>

<template>
  <div ref="canvasHost" class="wireframe-wrap pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" />
</template>