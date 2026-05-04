'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import styled, { css } from 'styled-components'
import { Menu, X } from 'lucide-react'
import { theme } from '@/lib/theme'
import { fadeInUp, drawerVariants } from '@/lib/animations'

const NavbarWrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? css`
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: ${theme.shadows.navbar};
        `
      : css`
          background: transparent;
          box-shadow: none;
        `}
`

const NavInner = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a<{ $scrolled: boolean }>`
  font-family: ${theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ $scrolled }) => ($scrolled ? theme.colors.primary : theme.colors.textLight)};
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`

const NavLink = styled.a<{ $scrolled: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ $scrolled }) => ($scrolled ? theme.colors.textDark : 'rgba(255,255,255,0.85)')};
  text-decoration: none;
  transition: color 0.25s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.button};
  text-decoration: none;
  transition: background 0.25s;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.accentHover};
  }
`

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: inherit;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.textLight};
  }
`

const MobileDrawer = styled(motion.div)`
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  background: ${theme.colors.primary};
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  z-index: 999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`

const MobileNavLink = styled.a`
  font-family: ${theme.fonts.body};
  font-size: 1.05rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.accent};
  }
`

const MobileCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.accent};
  color: ${theme.colors.textLight};
  font-family: ${theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${theme.borderRadius.button};
  text-decoration: none;
  margin-top: 0.5rem;
  transition: background 0.25s;

  &:hover {
    background: ${theme.colors.accentHover};
  }
`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 80)
  })

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <NavbarWrapper $scrolled={scrolled}>
        <NavInner>
          <Logo href="#hero" $scrolled={scrolled}>
            Aweshalom Cleaning Service
          </Logo>

          <NavLinks>
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} $scrolled={scrolled}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <CTAButton
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Quote
            </CTAButton>
          </NavLinks>

          <HamburgerBtn
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            style={{ color: scrolled ? theme.colors.textDark : theme.colors.textLight }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </HamburgerBtn>
        </NavInner>
      </NavbarWrapper>

      <AnimatePresence>
        {mobileOpen && (
          <MobileDrawer
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.href} variants={fadeInUp} custom={i}>
                <MobileNavLink
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              </motion.div>
            ))}
            <MobileCTA href="#contact" onClick={() => setMobileOpen(false)}>
              Get a Free Quote
            </MobileCTA>
          </MobileDrawer>
        )}
      </AnimatePresence>
    </>
  )
}
