'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { MapPin } from 'lucide-react'
import { theme } from '@/lib/theme'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const ServiceAreasWrapper = styled.section`
  background: ${theme.colors.background};
  padding: 6rem 2rem;
`

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2.5rem;
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

const BodyText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  color: ${theme.colors.textMuted};
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.75;
`

const PillsRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin: 2.5rem 0;
`

const Pill = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1.1rem;
  border: 1.5px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.button};
  color: ${theme.colors.primary};
  background: ${theme.colors.surface};
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: default;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.textLight};
  }
`

const MapContainer = styled(motion.div)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${theme.shadows.card};
  width: 100%;
  height: 400px;
`

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`

const areas = [
  'Lagos Island',
  'Lagos Mainland',
  'Yaba',
  'Lekki',
  'Victoria Island',
  'Surulere',
  'Ikoyi',
  'Ajah',
  'Ikeja',
  'Festac',
  'Ogun State',
  'Benin City',
]

export default function ServiceAreas() {
  return (
    <ServiceAreasWrapper id="areas">
      <Inner>
        <SectionHeader
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Eyebrow>Coverage</Eyebrow>
          <Title>Proudly Serving Lagos & Surrounding Areas</Title>
          <BodyText>
            We provide premium cleaning and pest control services across Lagos Island,
            Mainland, Yaba, Lekki, Victoria Island, Surulere, Ikoyi, Ogun State, and
            Benin City. Wherever you are in Lagos, we come to you.
          </BodyText>
        </SectionHeader>

        <PillsRow
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {areas.map((area) => (
            <Pill key={area} variants={fadeInUp}>
              <MapPin size={13} />
              {area}
            </Pill>
          ))}
        </PillsRow>

        <MapContainer
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <MapFrame
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5221634536073!2d3.3790081749090007!3d6.509503024016736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d2e7e0dbad3%3A0xa6b0f82ed8e7c2b0!2s314%20Herbert%20Macaulay%20Way%2C%20Yaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1714900000000!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aweshalom Cleaning Service location — 314 Herbert Macaulay Way, Sabo Yaba, Lagos"
          />
        </MapContainer>
      </Inner>
    </ServiceAreasWrapper>
  )
}
