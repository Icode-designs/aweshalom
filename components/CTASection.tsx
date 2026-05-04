'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Phone, MessageSquare } from 'lucide-react'
import { theme } from '@/lib/theme'
import { fadeInUp } from '@/lib/animations'

const CTAWrapper = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 60%, ${theme.colors.primaryDark} 100%);
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 60px,
      rgba(255, 255, 255, 0.03) 60px,
      rgba(255, 255, 255, 0.03) 61px
    );
    pointer-events: none;
  }
`

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`

const Eyebrow = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 1rem;
`

const Headline = styled(motion.h2)`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: ${theme.colors.textLight};
  margin-bottom: 1rem;
  line-height: 1.2;
`

const Subheadline = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const PhoneBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: ${theme.colors.surface};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  border-radius: ${theme.borderRadius.button};
  text-decoration: none;
  transition: background 0.25s, transform 0.2s;

  &:hover {
    background: #e8efff;
  }
`

const QuoteBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  border-radius: ${theme.borderRadius.button};
  text-decoration: none;
  transition: background 0.25s;

  &:hover {
    background: ${theme.colors.accentHover};
  }
`

const HoursNote = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.03em;
`

export default function CTASection() {
  return (
    <CTAWrapper id="contact">
      <Inner>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Eyebrow>Get Started Today</Eyebrow>
        </motion.div>

        <Headline
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          Ready for a Spotless Space?
        </Headline>

        <Subheadline
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
          Book your cleaning or pest control service today. Fast response.
          Professional results. 7,000+ clients already trust us.
        </Subheadline>

        <ButtonGroup
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
        >
          <PhoneBtn
            href="tel:+2348056074310"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={18} />
            Call 0805 607 4310
          </PhoneBtn>
          <QuoteBtn
            href="https://wa.me/2348056074310"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageSquare size={18} />
            Request a Quote
          </QuoteBtn>
        </ButtonGroup>

        <HoursNote
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        >
          Open Mon–Sat · Closes 6 PM · Serving Lagos & Nearby Areas
        </HoursNote>
      </Inner>
    </CTAWrapper>
  )
}
