'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations'

const TestimonialsWrapper = styled.section`
  background: ${theme.colors.surface};
  padding: 6rem 2rem;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3.5rem;
`

const Eyebrow = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 0.75rem;
`

const Title = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: ${theme.colors.textDark};
`

const CardRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    display: flex;
    flex-direction: row;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    gap: 1.25rem;
  }

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 2px;
  }
`

const Card = styled(motion.div)`
  background: #f8f9ff;
  border: 1px solid rgba(30, 58, 138, 0.07);
  border-radius: ${theme.borderRadius.card};
  padding: 2rem 1.75rem;
  box-shadow: ${theme.shadows.card};
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
`

const Stars = styled.div`
  color: ${theme.colors.accent};
  font-size: 1.1rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`

const Quote = styled.blockquote`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-style: italic;
  color: ${theme.colors.textDark};
  line-height: 1.7;
  margin-bottom: 1.5rem;
  border: none;
  padding: 0;
`

const ClientName = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`

const ClientArea = styled.span`
  font-weight: 400;
  color: ${theme.colors.textMuted};
`

const GoogleBadge = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const BadgeText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.textDark};
`

const RateLink = styled.a`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.primaryLight};
  }
`

const testimonials = [
  {
    stars: '★★★★★',
    quote:
      '"They were punctual, efficient and performed way beyond my expectations. My apartment looks brand new!"',
    name: 'Adaeze O.',
    area: 'Lekki',
  },
  {
    stars: '★★★★★',
    quote:
      '"Best pest control service I&apos;ve ever used. The team was professional and thorough — no more cockroaches!"',
    name: 'Emeka F.',
    area: 'Victoria Island',
  },
  {
    stars: '★★★★★',
    quote:
      '"Aweshalom handled our post-renovation cleanup perfectly. Every corner was spotless. Highly recommend!"',
    name: 'Tosin A.',
    area: 'Ikoyi',
  },
]

export default function Testimonials() {
  return (
    <TestimonialsWrapper id="reviews">
      <Inner>
        <SectionHeader
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Eyebrow>Client Reviews</Eyebrow>
          <Title>What Our Clients Say</Title>
        </SectionHeader>

        <CardRow
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t, i) => (
            <Card
              key={i}
              variants={fadeInUp}
              custom={i}
              whileHover={cardHover.hover}
              initial="rest"
              animate="rest"
            >
              <Stars>{t.stars}</Stars>
              <Quote>{t.quote}</Quote>
              <ClientName>
                {t.name} — <ClientArea>{t.area}</ClientArea>
              </ClientName>
            </Card>
          ))}
        </CardRow>

        <GoogleBadge
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BadgeText>⭐ 4.8 on Google · 66 Reviews</BadgeText>
          <span style={{ color: theme.colors.textMuted }}>·</span>
          <RateLink
            href="https://g.page/r/aweshalom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rate Us on Google →
          </RateLink>
        </GoogleBadge>
      </Inner>
    </TestimonialsWrapper>
  )
}
