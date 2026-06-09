'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText,
  Send,
  MessageSquare,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react'
import { creator } from '@/lib/data/creator'

const contactMethods = [
  { 
    id: 'email', 
    name: 'Email Me', 
    icon: Mail, 
    color: '#7c3aed',
    href: 'mailto:jsnovawebstudio@gmail.com',
    position: { x: 85, y: 25 }
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: Linkedin, 
    color: '#0077b5',
    href: 'https://www.linkedin.com/in/jacob-randolf-salayo-216893361?',
    position: { x: 90, y: 50 }
  },
  { 
    id: 'github', 
    name: 'GitHub', 
    icon: Github, 
    color: '#333',
    href: 'https://github.com/Sugarplum1827',
    position: { x: 85, y: 75 }
  },
  { 
    id: 'resume', 
    name: 'Resume', 
    icon: FileText, 
    color: '#22d3ee',
    href: '/cv.pdf',
    position: { x: 75, y: 90 }
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            SUMMON THE <span className="gradient-cosmic-text">CREATOR</span>
          </h1>
          <p className="text-muted-foreground text-lg">Let&apos;s Build Something Legendary</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* AI Guide */}
            <div className="glass rounded-xl p-4 border border-cosmic-purple/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cosmic-purple/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-cosmic-purple" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">AI Guide</span>
                  <p className="text-sm mt-1">
                    State your purpose, traveler. I shall respond.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-6 border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cosmic-purple/50 focus:ring-2 focus:ring-cosmic-purple/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cosmic-purple/50 focus:ring-2 focus:ring-cosmic-purple/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Purpose / Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cosmic-purple/50 focus:ring-2 focus:ring-cosmic-purple/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cosmic-purple rounded-lg text-white font-medium hover:bg-cosmic-purple/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="glass rounded-xl p-4 border border-white/5">
              <h3 className="text-sm font-medium mb-4 text-muted-foreground uppercase tracking-wider">
                Or the Old Ways
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:jsnovawebstudio@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-cosmic-purple transition-colors"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>jsnovawebstudio@gmail.com</span>
                </a>
                <a
                  href="tel:+91123456789"
                  className="flex items-center gap-3 text-sm hover:text-cosmic-purple transition-colors"
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+63 995-385-6248</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Earth, Milky Way</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Summoning Circle with Contact Crystals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center"
          >
            {/* Summoning Circle */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-cosmic-purple/30"
              />
              
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-cosmic-blue/30"
              />
              
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-cosmic-cyan/30"
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-cosmic-purple/30 to-cosmic-cyan/30 blur-xl"
                />
              </div>

              {/* Magical runes/symbols on the circle */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={angle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                  className="absolute w-2 h-2 rounded-full bg-cosmic-purple"
                  style={{
                    left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                    top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}

              {/* Center form info placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <div className="w-20 h-20 rounded-full glass border border-cosmic-purple/30 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-cosmic-purple" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ready to receive your message
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Contact Crystals - positioned around the circle */}
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.id}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute group"
                  style={{
                    right: `${100 - method.position.x}%`,
                    top: `${method.position.y}%`,
                    transform: 'translate(50%, -50%)'
                  }}
                >
                  {/* Crystal glow */}
                  <div
                    className="absolute inset-0 blur-lg opacity-50 group-hover:opacity-100 transition-opacity rounded-lg"
                    style={{ backgroundColor: method.color }}
                  />
                  
                  {/* Crystal */}
                  <div
                    className="relative w-14 h-14 rounded-xl glass border flex items-center justify-center"
                    style={{ borderColor: `${method.color}50` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: method.color }} />
                  </div>
                  
                  {/* Label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-medium" style={{ color: method.color }}>
                      {method.name}
                    </span>
                  </div>
                </motion.a>
              )
            })}

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-cosmic-purple/50"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
