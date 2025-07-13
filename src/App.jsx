import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Leaf, 
  Zap, 
  Wind, 
  Sun, 
  Globe, 
  Shield, 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Building2,
  Cpu,
  Lock,
  ExternalLink
} from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from './assets/hero_background.jpg'
import solarImage from './assets/solar_energy.jpg'
import windImage from './assets/wind_energy.jpg'
import sustainabilityImage from './assets/sustainability.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [currentPage, setCurrentPage] = useState('home')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    if (sectionId === 'bolivian-green') {
      setCurrentPage('bolivian-green')
      return
    }
    setCurrentPage('home')
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    setIsMenuOpen(false)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing! We will keep you updated on our progress.')
    setEmail('')
  }

  if (currentPage === 'bolivian-green') {
    return <BolivianGreenPage onBack={() => setCurrentPage('home')} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Steinbock Digital</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Our Projects</button>
              <button onClick={() => scrollToSection('technology')} className="text-gray-700 hover:text-blue-600 transition-colors">Technology</button>
              <button onClick={() => scrollToSection('sustainability')} className="text-gray-700 hover:text-blue-600 transition-colors">Sustainability</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700">
                Get Involved
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</button>
                <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Our Projects</button>
                <button onClick={() => scrollToSection('technology')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Technology</button>
                <button onClick={() => scrollToSection('sustainability')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sustainability</button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroImage} 
            alt="Sustainable Technology Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            The Future of <span className="text-blue-400">Digital</span> Infrastructure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Pioneering sustainable technology solutions across data centers, renewable energy, and digital mining
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              Discover Our Vision
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('projects')}
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              View Our Projects
            </Button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Digital Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steinbock Digital represents a groundbreaking approach to technology infrastructure development, 
              combining cutting-edge innovation with environmental stewardship across global markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Globe, title: "Global Reach", desc: "Strategic operations across Americas and emerging markets" },
              { icon: Leaf, title: "100% Sustainable", desc: "Powered entirely by renewable energy sources" },
              { icon: Shield, title: "Enterprise Grade", desc: "Institutional-quality infrastructure and security" },
              { icon: TrendingUp, title: "Scalable Growth", desc: "Designed for rapid expansion and market leadership" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500MW", label: "Total Capacity" },
              { number: "2025", label: "Global Expansion" },
              { number: "0%", label: "Carbon Emissions" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of innovative technology infrastructure projects 
              spanning data centers, renewable energy, and digital mining operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* EcoData Brasil Project */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src={heroImage} 
                    alt="EcoData Brasil Data Center" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">Active</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Leaf className="h-6 w-6 text-green-600 mr-2" />
                    EcoData Brasil
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Brazil's first carbon-neutral data center powered entirely by renewable energy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-green-600">50MW</div>
                        <div className="text-sm text-gray-600">Total Capacity</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">2024</div>
                        <div className="text-sm text-gray-600">Launch Year</div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Revolutionary data center infrastructure in the heart of Brazil, 
                      combining enterprise-grade performance with environmental sustainability.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Solar Power</Badge>
                      <Badge variant="secondary">Wind Energy</Badge>
                      <Badge variant="secondary">Carbon Neutral</Badge>
                      <Badge variant="secondary">Tier III+</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Bolivian Green Project */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-2 border-blue-200">
                <div className="relative h-64 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Cpu className="h-16 w-16 mx-auto mb-4" />
                    <div className="text-2xl font-bold">Bolivian Green</div>
                    <div className="text-blue-100">Renewable Bitcoin Mining</div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">Development</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Zap className="h-6 w-6 text-blue-600 mr-2" />
                    Project Bolivian Green
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Ultra-low cost renewable Bitcoin mining operation in Bolivia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">500MW</div>
                        <div className="text-sm text-gray-600">Target Capacity</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">$20-30</div>
                        <div className="text-sm text-gray-600">Energy Cost/MWh</div>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      Revolutionary Bitcoin mining project leveraging Bolivia's abundant renewable 
                      hydropower at unprecedented energy costs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Hydropower</Badge>
                      <Badge variant="secondary">Ultra-low Cost</Badge>
                      <Badge variant="secondary">65% IRR</Badge>
                      <Badge variant="secondary">Confidential</Badge>
                    </div>
                    <Button 
                      onClick={() => scrollToSection('bolivian-green')}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Lock className="h-4 w-4 mr-2" />
                      Access Project Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powered by <span className="text-blue-600">Clean Energy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative renewable energy infrastructure ensures sustainable operations 
              while delivering world-class performance and reliability.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={solarImage} 
                alt="Solar Energy Installation" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Solar Power</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art solar installations harness abundant sunshine across our global operations, 
                generating clean electricity with advanced photovoltaic technology and smart grid integration.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">250MW+</Badge>
                  <span className="text-gray-700">Global Solar Capacity</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">40%</Badge>
                  <span className="text-gray-700">Energy Efficiency Gain</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">24/7</Badge>
                  <span className="text-gray-700">Battery Storage Systems</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center mb-4">
                <Wind className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Renewable Energy</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Complementing our solar infrastructure, we leverage wind, hydro, and other renewable sources 
                to ensure reliable clean energy generation around the clock across all our operations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">250MW+</Badge>
                  <span className="text-gray-700">Renewable Generation</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">85%+</Badge>
                  <span className="text-gray-700">Average Capacity Factor</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-3">25+</Badge>
                  <span className="text-gray-700">Years Operational Life</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <img 
                src={windImage} 
                alt="Renewable Energy Installation" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to <span className="text-green-600">Sustainability</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond carbon neutrality, we're pioneering regenerative practices that give back 
              to local environments and communities across all our global operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={sustainabilityImage} 
                alt="Sustainable Technology Integration" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Environmental Innovation</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Carbon Negative by 2026",
                    desc: "Advanced carbon capture technology will make our operations carbon negative across all projects."
                  },
                  {
                    title: "Biodiversity Protection",
                    desc: "Our facility designs preserve local ecosystems and create wildlife corridors in every region."
                  },
                  {
                    title: "Water Conservation",
                    desc: "Innovative cooling systems reduce water usage by 90% compared to traditional infrastructure."
                  },
                  {
                    title: "Community Investment",
                    desc: "Local job creation and educational programs support sustainable development globally."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-4 border-green-500 pl-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-blue-400">Digital Revolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of the future of sustainable technology. Explore investment opportunities, 
              partnerships, or learn more about our groundbreaking projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <span>contact@steinbock.digital</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <span>+41 44 123 4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <span>Zurich, Switzerland</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                >
                  Investment Opportunities
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 w-full"
                >
                  Partnership Inquiry
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Stay Updated</CardTitle>
                  <CardDescription className="text-gray-300">
                    Subscribe to receive the latest updates on our projects and sustainability initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Textarea
                      placeholder="Tell us about your interest (optional)"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Subscribe to Updates
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-bold">Steinbock Digital</span>
              </div>
              <p className="text-gray-400">
                Pioneering sustainable technology infrastructure globally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')}>About</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Our Projects</button></li>
                <li><button onClick={() => scrollToSection('technology')}>Technology</button></li>
                <li><button onClick={() => scrollToSection('sustainability')}>Sustainability</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Opportunities</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Investment</li>
                <li>Partnerships</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Environmental Impact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Steinbock Digital. All rights reserved. Building a sustainable digital future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Bolivian Green Password Protected Page Component
function BolivianGreenPage({ onBack }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'teamsteinbock' && password === 'green2025') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid credentials. Please try again.')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-900 flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Lock className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Project Bolivian Green</CardTitle>
              <CardDescription>
                This section contains confidential information. Please enter your credentials to access.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && (
                  <div className="text-red-600 text-sm text-center">{error}</div>
                )}
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Access Project
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onBack}
                  className="w-full"
                >
                  Back to Home
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Cpu className="h-8 w-8 mr-3" />
              <div>
                <h1 className="text-3xl font-bold">Project Bolivian Green</h1>
                <p className="text-blue-100">Renewable and Affordable Swiss Bitcoin Mining</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              onClick={onBack}
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Confidential Notice */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-red-500 mr-2" />
            <p className="text-red-700 font-medium">
              Private and Confidential - This information is intended solely for authorized personnel. 
              Unauthorized use, disclosure, or distribution is prohibited.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Investment Opportunity</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                BTC Mining Project with Unparalleled Economics
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Asymmetric opportunity to invest in low-cost power BTC mining projects in Bolivia. 
                Steinbock Financial Group is positioned to secure a 5-year contract with Bolivia's 
                state electricity provider at unprecedented energy costs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Badge className="bg-green-600 text-white mr-3">Phase I</Badge>
                  <span>200 MW deployment, $173M capex, 11-month payback, 65% IRR</span>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-blue-600 text-white mr-3">Phase II</Badge>
                  <span>300 MW expansion, $213M equity, 9-month payback, 65% IRR</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500MW</div>
                  <div className="text-gray-600">Total Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">$20-30</div>
                  <div className="text-gray-600">Energy Cost/MWh</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">65%</div>
                  <div className="text-gray-600">Target IRR</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">$11,765</div>
                  <div className="text-gray-600">Cost per Bitcoin</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bolivia */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Bolivia?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Ultra-Low Energy Costs",
                desc: "Target energy cost of $20-30/MWh vs industry average of $35-52/MWh",
                icon: Zap
              },
              {
                title: "Renewable Hydropower",
                desc: "100% green energy from currently idle hydropower resources",
                icon: Leaf
              },
              {
                title: "Strategic Locations",
                desc: "Cochabamba and Santa Cruz regions with optimal grid connectivity",
                icon: MapPin
              },
              {
                title: "Tax Advantages",
                desc: "Multi-year tax exemption with <10% corporate tax rate",
                icon: TrendingUp
              },
              {
                title: "FX Benefits",
                desc: "37% discount between official and parallel exchange rates",
                icon: Globe
              },
              {
                title: "Experienced Team",
                desc: "20+ years of strategic relationships across Bolivia and Americas",
                icon: Shield
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Competitive Advantage</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Steinbock vs. Publicly Traded Miners
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="pb-4 text-gray-600">Metric</th>
                    <th className="pb-4 text-center">Industry Average</th>
                    <th className="pb-4 text-center text-blue-600">Steinbock Phase I</th>
                    <th className="pb-4 text-center text-green-600">Steinbock Phase II</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b">
                    <td className="py-4 font-medium">Electricity Price ($/MWh)</td>
                    <td className="py-4 text-center">$35-52</td>
                    <td className="py-4 text-center text-blue-600 font-bold">$20-30</td>
                    <td className="py-4 text-center text-green-600 font-bold">$20-30</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 font-medium">Cost to mine 1 BTC</td>
                    <td className="py-4 text-center">$35,376-$52,400</td>
                    <td className="py-4 text-center text-blue-600 font-bold">$11,765</td>
                    <td className="py-4 text-center text-green-600 font-bold">$11,765</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 font-medium">Corporate Tax Rate</td>
                    <td className="py-4 text-center">17-38%</td>
                    <td className="py-4 text-center text-blue-600 font-bold">&lt;10%</td>
                    <td className="py-4 text-center text-green-600 font-bold">&lt;10%</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">BTC Mined per Year</td>
                    <td className="py-4 text-center">2,812-8,280</td>
                    <td className="py-4 text-center text-blue-600 font-bold">1,406</td>
                    <td className="py-4 text-center text-green-600 font-bold">2,429</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Timeline & Next Steps */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Project Timeline</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Phase I - 200MW</CardTitle>
                <CardDescription>Initial deployment and operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Target Launch:</span>
                    <span className="font-semibold">Early 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capex Investment:</span>
                    <span className="font-semibold">$173M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payback Period:</span>
                    <span className="font-semibold">11 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected IRR:</span>
                    <span className="font-semibold text-blue-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">Phase II - 300MW</CardTitle>
                <CardDescription>Expansion and scale operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Target Launch:</span>
                    <span className="font-semibold">2H 2027</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equity Investment:</span>
                    <span className="font-semibold">$213M</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payback Period:</span>
                    <span className="font-semibold">9 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected IRR:</span>
                    <span className="font-semibold text-green-600">65%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-xl text-blue-100 mb-6">
              Contact our team to discuss this exclusive investment opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Schedule a Meeting
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Request Full Deck
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

