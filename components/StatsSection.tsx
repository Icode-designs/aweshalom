'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { staggerContainer, counterVariant } from '@/lib/animations'

const StatsWrapper = styled.section`
  background: ${theme.colors.primary};
  padding: 5rem 2rem;
`

const Inner = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`

const StatCard = styled(motion.div)`
  text-align: center;
`

const StatNumber = styled.div`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: ${theme.colors.textLight};
  line-height: 1.1;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 0.02em;
`

const AccentLine = styled.div`
  width: 36px;
  height: 3px;
  background: ${theme.colors.accent};
  border-radius: 2px;
  margin: 0.75rem auto 0;
`

interface StatItemProps {
  target: number
  suffix: string
  label: string
  index: number
  isRating?: boolean
}

function StatItem({ target, suffix, label, index, isRating }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return

    let startTime: number | null = null
    const duration = 1800

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <StatCard ref={ref} variants={counterVariant} custom={index}>
      <StatNumber>
        {isRating ? (count / 10).toFixed(1) : count.toLocaleString()}
        {suffix}
      </StatNumber>
      <AccentLine />
      <StatLabel>{label}</StatLabel>
    </StatCard>
  )
}

const stats = [
  { target: 700, suffix: '+', label: 'Clients Served' },
  { target: 48, suffix: '★', label: 'Google Rating', isRating: true },
  { target: 66, suffix: '+', label: 'Verified Reviews' },
  { target: 4, suffix: '+', label: 'Years Experience' },
]

export default function StatsSection() {
  return (
    <StatsWrapper id="stats">
      <Inner
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            index={i}
            isRating={stat.isRating}
          />
        ))}
      </Inner>
    </StatsWrapper>
  )
}
