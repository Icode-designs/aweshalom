'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '@/lib/theme'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const ServicesWrapper = styled.section`
  background: ${theme.colors.background};
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
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const Card = styled(motion.div)`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.card};
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
`

const CardImage = styled.div<{ $url: string }>`
  height: 210px;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  border-radius: ${theme.borderRadius.image};
`

const CardBody = styled.div`
  padding: 1.5rem 1.75rem 1.75rem;
`

const CardTitle = styled.h3`
  font-family: ${theme.fonts.body};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 0.6rem;
`

const CardDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: ${theme.colors.textMuted};
  line-height: 1.65;
  margin-bottom: 1.1rem;
`

const CardCTA = styled.a`
  display: inline-block;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: none;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: ${theme.colors.accent};
    border-radius: 1px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${theme.colors.primaryLight};
  }
`

const services = [
  {
    title: 'Home & Deep Cleaning',
    desc: 'Standard, deep, move-out, mattress & upholstery cleaning — restoring every corner to pristine condition.',
    image: '/assets/HomeDeepCleaning.jpeg',
    alt: 'Professional home deep cleaning service in Lagos',
  },
  {
    title: 'Office & Commercial',
    desc: 'Office, multi-tenant, and workplace cleaning tailored to your business environment and schedule.',
    image: '/assets/OfficeCommercialcleaning.jpeg',
    alt: 'Professional office cleaning service in Lagos',
  },
  {
    title: 'Post-Construction',
    desc: 'Thorough clean-up after renovation or build work — removing dust, debris, and construction residue.',
    image: '/assets/Post-Constructioncleaning.jpeg',
    alt: 'Post-construction cleanup service in Lagos',
  },
  {
    title: 'Pest Control',
    desc: 'Cockroach, rodent, termite, bed bug & mosquito extermination using certified, family-safe products.',
    image: '/assets/pestControl.jpeg',
    alt: 'Pest control and fumigation service in Lagos',
  },
  {
    title: 'Carpet, Rug & Curtains',
    desc: 'Area rug, carpet, and drape cleaning with pet stain & odour removal using steam and specialist tools.',
    image: '/assets/CarpetRugCurtainsCleaning.jpeg',
    alt: 'Carpet and rug cleaning service in Lagos',
  },
  {
    title: 'Exterior & Specialist',
    desc: 'Pressure washing, roof & gutter cleaning, glass polishing, and auto detailing for complete exterior care.',
    image: '/assets/ExteriorCleaning.jpeg',
    alt: 'Exterior building washing and pressure cleaning in Lagos',
  },
]

export default function ServicesSection() {
  return (
    <ServicesWrapper id="services">
      <Inner>
        <SectionHeader
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Eyebrow>Our Services</Eyebrow>
          <Title>What We Do</Title>
          <Subtitle>
            Comprehensive cleaning and pest control solutions for homes, offices, and
            commercial properties across Lagos.
          </Subtitle>
        </SectionHeader>

        <Grid
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <Card
              key={service.title}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 40px rgba(30,58,138,0.15)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <CardImage $url={service.image} role="img" aria-label={service.alt} />
              <CardBody>
                <CardTitle>{service.title}</CardTitle>
                <CardDesc>{service.desc}</CardDesc>
                <CardCTA href="#contact">Get a Quote →</CardCTA>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Inner>
    </ServicesWrapper>
  )
}
