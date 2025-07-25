'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  Twitter,
} from 'lucide-react'
import Image from 'next/image'

// Social media links
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/sage', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/sage', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/sage', label: 'YouTube' },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/sage',
    label: 'LinkedIn',
  },
]

// Footer navigation links
const footerLinks = {
  quickLinks: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Visit Saudi', href: '/visit-saudi' },
    { label: 'News & Events', href: '/news' },
    { label: 'Careers', href: '/careers' },
  ],
  services: [
    { label: 'For Individuals', href: '/services/individuals' },
    { label: 'For Businesses', href: '/services/businesses' },
    { label: 'For Organizations', href: '/services/organizations' },
  ],
  resources: [
    { label: 'Guides', href: '/resources/guides' },
    { label: 'Case Studies', href: '/resources/case-studies' },
    { label: 'Webinars', href: '/resources/webinars' },
    { label: 'Certifications', href: '/resources/certifications' },
    { label: 'FAQs', href: '/resources/faqs' },
  ],
  exploreMore: [
    { label: 'CSR Initiatives', href: '/csr' },
    { label: 'Access Referral', href: '/referral' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Our Network', href: '/our-network' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form
    setEmail('')
    setIsSubmitting(false)

    // You can add toast notification here
    alert('Successfully subscribed to updates!')
  }

  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-[#CAF48E]">
        <div className="px-[60px] py-[60px]">
          <div className="container-custom mx-auto">
            <div className="flex items-center justify-between">
              <div className="max-w-[560px] space-y-2">
                <h2 className="text-black font-bold text-[18px] leading-[1.5]">
                  Subscribe to Updates
                </h2>
                <p className="text-black text-base leading-[1.5]">
                  Stay informed about our services and healthcare insights.
                </p>
              </div>

              <div className="space-y-3">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-4 items-center"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="bg-white border border-[#f0f0ee] rounded-xl px-3 py-2 h-12 w-[352px] text-base text-[#626262] focus:outline-none focus:ring-2 focus:ring-[#025850]"
                  />
                  <button
                    type="submit"
                    className="bg-[#025850] text-white px-6 py-2 h-12 w-[116px] rounded-full font-medium text-base hover:bg-[#024440] transition-colors"
                  >
                    Join
                  </button>
                </form>
                <p className="text-[#1e1e1e] text-[12px] leading-[1.5]">
                  We respect your privacy. Read our{' '}
                  <span className="text-[#025850]">Privacy Policy.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#025850]">
        <div className="px-[60px] py-[100px]">
          <div className="container-custom mx-auto">
            <div className="flex justify-between mb-20">
              {/* Logo */}
              <div className="w-[253px] h-[55px] relative">
                <Image
                  fill
                  src="/images/company-logo.webp"
                  alt="Sage Logo"
                  className="object-contain"
                />
              </div>

              {/* Footer Links */}
              <div className="grid grid-cols-5 gap-16 flex-1 max-w-4xl">
                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    {[
                      'About Us',
                      'Contact Us',
                      'Visit Saudi',
                      'News & Events',
                      'Careers',
                    ].map((link) => (
                      <div key={link} className="py-2">
                        <a
                          href="#"
                          className="text-white text-sm hover:text-gray-300 transition-colors"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Services */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base">Services</h3>
                  <div className="space-y-2">
                    {[
                      'For Individuals',
                      'For Businesses',
                      'For Organizations',
                    ].map((link) => (
                      <div key={link} className="py-2">
                        <a
                          href="#"
                          className="text-white text-sm hover:text-gray-300 transition-colors"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Resources */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base">Resources</h3>
                  <div className="space-y-2">
                    {[
                      'Guides',
                      'Case Studies',
                      'Webinars',
                      'Certifications',
                      'FAQs',
                    ].map((link) => (
                      <div key={link} className="py-2">
                        <a
                          href="#"
                          className="text-white text-sm hover:text-gray-300 transition-colors"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Explore More */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base">
                    Explore More
                  </h3>
                  <div className="space-y-2">
                    {[
                      'CSR Initiatives',
                      'Access Referral',
                      'Blog',
                      'Careers',
                      'Our Network',
                    ].map((link) => (
                      <div key={link} className="py-2">
                        <a
                          href="#"
                          className="text-white text-sm hover:text-gray-300 transition-colors"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Legal Links */}
                <div className="space-y-4">
                  <h3 className="text-white font-bold text-base">
                    Legal Links
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Privacy Policy',
                      'Terms and Conditions',
                      'Cookie Policy',
                    ].map((link) => (
                      <div key={link} className="py-2">
                        <a
                          href="#"
                          className="text-white text-sm hover:text-gray-300 transition-colors"
                        >
                          {link}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-[#013530] px-[60px] py-2.5">
        <div className="container-custom mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-white text-sm">
              © 2025 Sage. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone
                  size={24}
                  className="text-white rotate-180 scale-y-[-1]"
                />
                <span className="text-white text-sm">+966 55 123 4567</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail
                  size={24}
                  className="text-white rotate-180 scale-y-[-1]"
                />
                <span className="text-white text-sm">Info@sage.com</span>
              </div>
              <Facebook
                size={24}
                className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              />
              <Instagram
                size={24}
                className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              />
              <Twitter
                size={24}
                className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              />
              <Linkedin
                size={24}
                className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              />
              <Youtube
                size={24}
                className="text-white hover:text-gray-300 cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white hidden">
        {/* Newsletter Section */}
        <section className="bg-Primary-Spring py-[60px] px-[60px]">
          <div className="container-custom mx-auto">
            <div className="flex items-center justify-between">
              <div className="max-w-[560px]">
                <h3 className="text-black text-[18px] font-bold leading-[1.5] mb-2">
                  Subscribe to Updates
                </h3>
                <p className="text-black text-[16px] leading-[1.5]">
                  Stay informed about our services and healthcare insights.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-4 items-center"
                >
                  <div className="bg-white border border-[#f0f0ee] rounded-xl px-3 py-2 h-12 w-[352px] flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      className="bg-transparent text-[#626262] text-[16px] leading-[1.5] w-full outline-none"
                    />
                  </div>
                  <button className="bg-[#025850] text-white px-6 py-2 h-12 rounded-[100px] text-[16px] font-medium hover:bg-[#013530] transition-colors duration-200 w-[116px]">
                    Join
                  </button>
                </form>
                <p className="text-[#1e1e1e] text-[12px] leading-[1.5]">
                  We respect your privacy. Read our{' '}
                  <span className="text-[#025850]">Privacy Policy.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-Primary-Spring py-16 hidden">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex flex-col items-center justify-between gap-8 lg:flex-row">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  Subscribe to Updates
                </h2>
                <p className="max-w-md text-lg text-gray-700">
                  Stay informed about our services and healthcare insights.
                </p>
              </div>

              {/* Right Content - Newsletter Form */}
              <div className="w-full lg:w-auto">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex max-w-md flex-col gap-4 sm:flex-row lg:max-w-none"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  <Button type="submit" loading={isSubmitting}>
                    Join
                  </Button>
                </form>
                <p className="mt-3 text-center text-sm text-gray-600 lg:text-left">
                  We respect your privacy. Read our{' '}
                  <Link
                    href="/privacy"
                    className="font-medium text-Primary-Palm hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="bg-green-800 py-16 text-white">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
              {/* Logo Section */}
              <div className="lg:col-span-1">
                <div className="mb-6 flex items-center space-x-2">
                  <div className="text-2xl font-bold">
                    <div className="text-xs uppercase leading-tight tracking-wider text-green-200">
                      HEALTHCARE CONCIERGE
                    </div>
                    <div className="mt-1 text-3xl font-bold text-white">
                      sage.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-6 font-semibold text-green-200">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white transition-colors duration-200 hover:text-green-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-6 font-semibold text-green-200">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white transition-colors duration-200 hover:text-green-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="mb-6 font-semibold text-green-200">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white transition-colors duration-200 hover:text-green-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore More */}
              <div>
                <h3 className="mb-6 font-semibold text-green-200">
                  Explore More
                </h3>
                <ul className="space-y-3">
                  {footerLinks.exploreMore.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white transition-colors duration-200 hover:text-green-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="mb-6 font-semibold text-green-200">
                  Legal Links
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white transition-colors duration-200 hover:text-green-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-green-900 py-4 text-white">
          <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* Copyright */}
              <div className="text-sm text-green-200">
                © 2025 Sage. All rights reserved.
              </div>

              {/* Contact Info & Social Links */}
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                {/* Contact Information */}
                <div className="flex items-center gap-6 text-sm">
                  <a
                    href="tel:+966551234567"
                    className="flex items-center gap-2 text-green-200 transition-colors duration-200 hover:text-white"
                  >
                    <Phone size={16} />
                    +966 55 123 4567
                  </a>
                  <a
                    href="mailto:info@sage.com"
                    className="flex items-center gap-2 text-green-200 transition-colors duration-200 hover:text-white"
                  >
                    <Mail size={16} />
                    info@sage.com
                  </a>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-green-800 transition-colors duration-200 hover:bg-green-700"
                        aria-label={social.label}
                      >
                        <Icon size={16} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
