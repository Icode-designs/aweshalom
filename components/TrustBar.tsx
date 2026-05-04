'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { CheckCircle } from 'lucide-react'
import { theme } from '@/lib/theme'
import { fadeIn, staggerContainer } from '@/lib/animations'

const TrustBarWrapper = styled.section`
  background: ${theme.colors.surface};
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  padding: 1.25rem 2rem;
`

const Inner = styled(motion.div)`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`

const TrustItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${theme.fonts.body};
  font-size: 0.92rem;
  font-weight: 500;
  color: ${theme.colors.textDark};
  white-space: nowrap;
`

const trustItems = [
  'Punctual & Reliable',
  '700+ Clients',
  'Lagos-Wide Coverage',
  'Pest & Cleaning Specialists',
]

export default function TrustBar() {
  return (
    <TrustBarWrapper id="trustbar">
      <Inner
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {trustItems.map((item) => (
          <TrustItem key={item} variants={fadeIn}>
            <CheckCircle size={18} color={theme.colors.primary} strokeWidth={2.5} />
            <span>{item}</span>
          </TrustItem>
        ))}
      </Inner>
    </TrustBarWrapper>
  )
}
