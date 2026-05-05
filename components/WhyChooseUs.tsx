'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Clock, ShieldCheck, MapPin, ThumbsUp } from 'lucide-react'
import { theme } from '@/lib/theme'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const WhyWrapper = styled.section`
  background: ${theme.colors.surface};
  padding: 6rem 2rem;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const LeftBlock = styled(motion.div)``

const Eyebrow = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 1rem;
`

const Headline = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: ${theme.colors.textDark};
  line-height: 1.25;
  margin-bottom: 1.25rem;
`

const Description = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  line-height: 1.75;
  margin-bottom: 2rem;
`

const StyledCTA = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.button};
  text-decoration: none;
  transition: background 0.25s;

  &:hover {
    background: ${theme.colors.primaryLight};
  }
`

const TileGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const Tile = styled(motion.div)`
  background: #f8f9ff;
  border: 1px solid rgba(30, 58, 138, 0.08);
  border-radius: ${theme.borderRadius.card};
  padding: 1.75rem 1.5rem;
  transition: box-shadow 0.25s, transform 0.25s;

  &:hover {
    box-shadow: ${theme.shadows.cardHover};
    transform: translateY(-4px);
  }
`

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(30, 58, 138, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

const TileTitle = styled.h3`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.colors.textDark};
  margin-bottom: 0.4rem;
`

const TileDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  line-height: 1.6;
`

const features = [
  {
    icon: Clock,
    title: 'Punctual & Efficient',
    desc: 'We show up on time, every time — no waiting, no excuses.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified & Safe Products',
    desc: 'All products are safe for children, pets, and the environment.',
  },
  {
    icon: MapPin,
    title: 'Lagos-Wide Coverage',
    desc: 'From Island to Mainland — we serve all major Lagos areas.',
  },
  {
    icon: ThumbsUp,
    title: '700+ Happy Clients',
    desc: 'A track record of excellence built on trust and results.',
  },
]

export default function WhyChooseUs() {
  return (
    <WhyWrapper id="about">
      <Inner>
        <LeftBlock
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Eyebrow>Why Choose Us</Eyebrow>
          <Headline>Why Lagos Trusts Aweshalom</Headline>
          <Description>
            For over a decade, Aweshalom Cleaning Service has been the go-to choice
            for homeowners, businesses, and property managers across Lagos. We combine
            professional-grade cleaning methods with genuine care for every client&apos;s space.
          </Description>
          <StyledCTA
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Free Consultation
          </StyledCTA>
        </LeftBlock>

        <TileGrid
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <Tile key={title} variants={fadeInUp}>
              <IconCircle>
                <Icon size={22} color={theme.colors.primary} strokeWidth={2} />
              </IconCircle>
              <TileTitle>{title}</TileTitle>
              <TileDesc>{desc}</TileDesc>
            </Tile>
          ))}
        </TileGrid>
      </Inner>
    </WhyWrapper>
  )
}
