'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Phone, CheckCircle } from 'lucide-react'
import { theme } from '@/lib/theme'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations'

const HeroWrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 60%, #0F172A 100%);
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 80px,
      rgba(255, 255, 255, 0.04) 80px,
      rgba(255, 255, 255, 0.04) 81px
    );
    pointer-events: none;
  }
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 1fr;
  gap: 4rem;
  align-items: center;
  padding: 8rem 0 5rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const LeftContent = styled(motion.div)`
  position: relative;
  z-index: 1;
`

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1.1rem;
  border: 1.5px solid rgba(255, 255, 255, 0.35);
  border-radius: ${theme.borderRadius.button};
  color: rgba(255, 255, 255, 0.9);
  font-family: ${theme.fonts.body};
  font-size: 0.82rem;
  font-weight: 500;
  margin-bottom: 1.75rem;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.06);
`

const H1 = styled(motion.h1)`
  font-family: ${theme.fonts.display};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: ${theme.colors.textLight};
  line-height: 1.12;
  margin-bottom: 1.25rem;

  span {
    color: ${theme.colors.accent};
  }
`

const Subheadline = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.75;
  max-width: 520px;
  margin-bottom: 2.25rem;
`

const CTAGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`

const PrimaryBtn = styled(motion.a)`
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
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);

  &:hover {
    background: ${theme.colors.accentHover};
  }
`

const SecondaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: transparent;
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.button};
  text-decoration: none;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  transition: background 0.25s, color 0.25s, border-color 0.25s;

  &:hover {
    background: ${theme.colors.textLight};
    color: ${theme.colors.primary};
    border-color: transparent;
  }
`

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

const ConfirmationCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 320px;
  backdrop-filter: blur(16px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
`

const CardStatus = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: #4ade80;
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin: 1rem 0;
`

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
`

const CardLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

const CardValue = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
`

const CardFooter = styled.div`
  margin-top: 1.5rem;
  padding: 0.85rem 1rem;
  background: rgba(37, 99, 235, 0.25);
  border-radius: 10px;
  text-align: center;
`

const CardFooterText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.65);
`

const CardFooterHighlight = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin-top: 0.2rem;
`

const FloatingBadge = styled(motion.div)`
  position: absolute;
  bottom: -16px;
  left: -24px;
  background: ${theme.colors.accent};
  border-radius: 12px;
  padding: 0.65rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.4);
`

const BadgeLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${theme.colors.textLight};
`

export default function HeroSection() {
  return (
    <HeroWrapper id="hero">
      <Inner>
        <LeftContent
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Badge variants={fadeInUp} custom={0}>
            ⭐ 4.8 Rating · 66 Reviews · 7,000+ Clients Served
          </Badge>

          <H1 variants={fadeInUp} custom={1}>
            Lagos&apos;s <span>#1</span> Cleaning &<br />
            Pest Control Service
          </H1>

          <Subheadline variants={fadeInUp} custom={2}>
            Professional, reliable, and thorough — from deep home cleaning and
            office sanitation to pest extermination across Lagos Island and Mainland.
          </Subheadline>

          <CTAGroup variants={fadeInUp} custom={3}>
            <PrimaryBtn
              href="#contact"
              whileHover={scaleOnHover.hover}
              whileTap={{ scale: 0.97 }}
            >
              Book a Cleaning Now
            </PrimaryBtn>
            <SecondaryBtn
              href="tel:+2348056074310"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={17} />
              Call 0805 607 4310
            </SecondaryBtn>
          </CTAGroup>
        </LeftContent>

        <RightContent>
          <div style={{ position: 'relative' }}>
            <ConfirmationCard
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
            >
              <CardHeader>
                <CheckCircle size={20} color="#4ade80" strokeWidth={2.5} />
                <CardStatus>Service Request Confirmed</CardStatus>
              </CardHeader>
              <Divider />
              <CardRow>
                <CardLabel>Client</CardLabel>
                <CardValue>Mrs. Adaeze O.</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Service</CardLabel>
                <CardValue>Deep Home Cleaning</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Location</CardLabel>
                <CardValue>Lekki Phase 1</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Date</CardLabel>
                <CardValue>Tomorrow, 9:00 AM</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Status</CardLabel>
                <CardValue style={{ color: '#4ade80' }}>✓ Confirmed</CardValue>
              </CardRow>
              <CardFooter>
                <CardFooterText>Estimated completion</CardFooterText>
                <CardFooterHighlight>3–4 Hours · Lagos-Certified Team</CardFooterHighlight>
              </CardFooter>
            </ConfirmationCard>

            <FloatingBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <CheckCircle size={14} color="#fff" strokeWidth={2.5} />
              <BadgeLabel>7,000+ Clients</BadgeLabel>
            </FloatingBadge>
          </div>
        </RightContent>
      </Inner>
    </HeroWrapper>
  )
}
