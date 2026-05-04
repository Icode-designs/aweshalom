'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Phone, MapPin, Globe, Clock } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
import { theme } from '@/lib/theme'
import { fadeInUp } from '@/lib/animations'

const FooterWrapper = styled.footer`
  background: ${theme.colors.primaryDark};
  padding: 5rem 2rem 0;
`

const Grid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ColTitle = styled.h4`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 1.25rem;
`

const BrandLogo = styled.div`
  font-family: ${theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 800;
  color: ${theme.colors.textLight};
  margin-bottom: 0.75rem;
  line-height: 1.2;
`

const BrandTagline = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 240px;
`

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.25s, border-color 0.25s, background 0.25s;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.textLight};
    border-color: ${theme.colors.primaryLight};
    background: rgba(37, 99, 235, 0.25);
  }
`

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`

const FooterLink = styled.a`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.textLight};
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  margin-bottom: 0.85rem;
`

const ContactText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
`

const ContactLink = styled.a`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const BottomBar = styled.div`
  max-width: 1280px;
  margin: 3rem auto 0;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
`

const Copyright = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
`

const iconColor = 'rgba(255,255,255,0.5)'

export default function Footer() {
  return (
    <FooterWrapper>
      <Grid>
        {/* Col 1 — Brand */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BrandLogo>Aweshalom Cleaning Service</BrandLogo>
          <BrandTagline>Cleaner Spaces. Better Living.</BrandTagline>
          <SocialRow>
            <SocialIcon
              href="https://www.instagram.com/ags.ng/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon
              href="https://m.facebook.com/aweshalomgs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FacebookIcon />
            </SocialIcon>
          </SocialRow>
        </motion.div>

        {/* Col 2 — Services */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
        >
          <ColTitle>Services</ColTitle>
          <LinkList>
            {[
              'Home Cleaning',
              'Office Cleaning',
              'Pest Control',
              'Post-Construction',
              'Carpet & Upholstery',
              'Exterior Cleaning',
            ].map((s) => (
              <li key={s}>
                <FooterLink href="#services">{s}</FooterLink>
              </li>
            ))}
          </LinkList>
        </motion.div>

        {/* Col 3 — Company */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={2}
        >
          <ColTitle>Company</ColTitle>
          <LinkList>
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Service Areas', href: '#areas' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <li key={item.label}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </LinkList>
        </motion.div>

        {/* Col 4 — Contact */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={3}
        >
          <ColTitle>Contact</ColTitle>
          <address style={{ fontStyle: 'normal' }}>
            <ContactItem>
              <Phone size={15} color={iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
              <ContactLink href="tel:+2348056074310">0805 607 4310</ContactLink>
            </ContactItem>
            <ContactItem>
              <MapPin size={15} color={iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
              <ContactText>
                314 Herbert Macaulay Way, Sabo Yaba, Lagos
              </ContactText>
            </ContactItem>
            <ContactItem>
              <Clock size={15} color={iconColor} style={{ marginTop: '2px', flexShrink: 0 }} />
              <ContactText>Mon–Sat, 9AM–6PM</ContactText>
            </ContactItem>
          </address>
        </motion.div>
      </Grid>

      <BottomBar>
        <Copyright>
          © 2025 Aweshalom Cleaning Service. All rights reserved.
        </Copyright>
      </BottomBar>
    </FooterWrapper>
  )
}
