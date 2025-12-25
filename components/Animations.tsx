'use client'
import { useEffect } from 'react'

export default function Animations() {
  useEffect(() => {
    /* ------------------------------
       Intersection Observer
    ------------------------------ */
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .scale-in'
    )

    animatedElements.forEach(el => observer.observe(el))

    /* ------------------------------
       Smooth anchor scrolling
    ------------------------------ */
    const handleAnchorClick = (e: Event) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement)
        .getAttribute('href')
        ?.slice(1)

      const target = document.getElementById(targetId || '')
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor =>
      anchor.addEventListener('click', handleAnchorClick)
    )

    /* ------------------------------
       Active nav link on scroll
    ------------------------------ */
    const handleScroll = () => {
      let current = ''
      const sections = document.querySelectorAll('section')

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || ''
        }
      })

      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href')?.slice(1) === current) {
          link.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    /* ------------------------------
       Cleanup (important)
    ------------------------------ */
    return () => {
      observer.disconnect()
      animatedElements.forEach(el => observer.unobserve(el))
      anchors.forEach(anchor =>
        anchor.removeEventListener('click', handleAnchorClick)
      )
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
