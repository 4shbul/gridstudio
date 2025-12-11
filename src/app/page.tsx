'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  PenTool, 
  Image as ImageIcon, 
  Video,
  Code,
  Cpu,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("it-engineering")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const services = {
    itEngineering: [
      {
        icon: <Code className="w-8 h-8" />,
        title: "Custom Software Development",
        description: "Pengembangan perangkat lunak tailor-made sesuai kebutuhan bisnis Anda dengan teknologi terkini",
        features: ["Web Application", "Mobile Apps", "API Development", "System Integration"]
      },
      {
        icon: <Database className="w-8 h-8" />,
        title: "Database Management",
        description: "Optimasi dan manajemen database untuk performa maksimal dan keamanan data",
        features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"]
      },
      {
        icon: <Cloud className="w-8 h-8" />,
        title: "Cloud Solutions",
        description: "Migrasi dan manajemen infrastruktur cloud yang aman dan scalable",
        features: ["Cloud Migration", "DevOps", "Serverless Architecture", "Microservices"]
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Cybersecurity",
        description: "Perlindungan sistem dan data dari ancaman digital dengan keamanan berlapis",
        features: ["Security Audit", "Penetration Testing", "Compliance", "Security Training"]
      },
      {
        icon: <Monitor className="w-8 h-8" />,
        title: "IT Infrastructure",
        description: "Perancangan dan maintenance infrastruktur IT yang handal dan efisien",
        features: ["Network Setup", "Server Management", "IT Support", "System Monitoring"]
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Development",
        description: "Aplikasi mobile iOS dan Android yang user-friendly dan performa tinggi",
        features: ["Native Apps", "Cross-Platform", "App Store Optimization", "Maintenance"]
      }
    ],
    graphicDesign: [
      {
        icon: <Palette className="w-8 h-8" />,
        title: "Brand Identity",
        description: "Desain logo dan identitas visual yang memorable dan profesional",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
      },
      {
        icon: <PenTool className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Desain interface yang intuitif dan user experience yang optimal",
        features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
      },
      {
        icon: <ImageIcon className="w-8 h-8" />,
        title: "Graphic Design",
        description: "Desain grafis untuk marketing materials dan keperluan bisnis",
        features: ["Print Design", "Digital Graphics", "Marketing Materials", "Infographics"]
      },
      {
        icon: <Video className="w-8 h-8" />,
        title: "Video Production",
        description: "Produksi video promosi dan konten visual yang menarik",
        features: ["Corporate Videos", "Product Demos", "Social Media Content", "Video Editing"]
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Web Design",
        description: "Desain website yang responsive dan visually appealing",
        features: ["Responsive Design", "Landing Pages", "E-commerce Design", "CMS Integration"]
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Motion Graphics",
        description: "Animasi dan motion graphics untuk kebutuhan digital marketing",
        features: ["2D Animation", "3D Graphics", "Interactive Animations", "Visual Effects"]
      }
    ]
  }

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "IT Engineering",
      description: "Platform e-commerce lengkap dengan payment gateway integration dan inventory management",
      image: "/api/placeholder/400/300",
      alt: "E-Commerce Platform project showcase",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Brand Redesign",
      category: "Graphic Design",
      description: "Complete brand identity redesign untuk startup teknologi dengan modern approach",
      image: "/api/placeholder/400/300",
      alt: "Brand Redesign project showcase",
      technologies: ["Figma", "Adobe Creative Suite", "Brand Guidelines"],
      link: "#"
    },
    {
      title: "Mobile Banking App",
      category: "IT Engineering",
      description: "Aplikasi mobile banking dengan security tingkat enterprise dan user-friendly interface",
      image: "/api/placeholder/400/300",
      alt: "Mobile Banking App project showcase",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      link: "#"
    },
    {
      title: "Marketing Campaign",
      category: "Graphic Design",
      description: "Desain campaign untuk product launch nasional dengan multi-channel approach",
      image: "/api/placeholder/400/300",
      alt: "Marketing Campaign project showcase",
      technologies: ["Social Media", "Print Design", "Video Content"],
      link: "#"
    }
  ]

  const team = [
    {
      name: "Budi Santoso",
      role: "CEO & Lead Engineer",
      description: "15+ tahun pengalaman di IT industry dengan spesialisasi dalam system architecture",
      expertise: ["System Architecture", "Cloud Computing", "DevOps"],
      linkedin: "#",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Siti Nurhaliza",
      role: "Creative Director",
      description: "Spesialis brand identity dan UI/UX design dengan portfolio international clients",
      expertise: ["Brand Strategy", "UI/UX Design", "Creative Direction"],
      linkedin: "#",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Ahmad Fauzi",
      role: "Senior Developer",
      description: "Expert di web dan mobile development dengan passion untuk clean code",
      expertise: ["Full Stack Development", "Mobile Apps", "API Design"],
      linkedin: "#",
      avatar: "/api/placeholder/150/150"
    },
    {
      name: "Maya Putri",
      role: "Lead Designer",
      description: "Passionate tentang visual storytelling dan user-centered design",
      expertise: ["Visual Design", "Motion Graphics", "Brand Design"],
      linkedin: "#",
      avatar: "/api/placeholder/150/150"
    }
  ]

  const testimonials = [
    {
      name: "John Doe",
      company: "Tech Startup XYZ",
      role: "CEO",
      content: "Grid Studio membantu kami mengembangkan platform yang mengubah cara kami berbisnis. Sangat profesional dan hasilnya melampaui ekspektasi.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Retail Company ABC",
      role: "Marketing Director",
      content: "Brand identity yang diciptakan Grid Studio sangat tepat sasaran dan meningkatkan brand awareness kami secara signifikan.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Fintech Company",
      role: "CTO",
      content: "Tim engineering Grid Studio sangat kompeten dalam mengembangkan solusi fintech yang aman dan scalable.",
      rating: 5
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitMessage('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const validateForm = () => {
    return formData.name && formData.email && formData.subject && formData.message
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/grid-studio-logo.png" 
                  alt="Grid Studio Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Grid Studio
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Kontak</button>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Konsultasi Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100">Layanan</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100">Portfolio</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100">Tentang</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 rounded-lg hover:bg-slate-100">Kontak</button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                Konsultasi Gratis
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                IT Engineering & Creative Design
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Solusi Digital
                <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Terstruktur untuk Bisnis Modern
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Grid Studio menghadirkan kombinasi sempurna antara IT engineering yang handal 
                dan desain kreatif yang memukau untuk membangun fondasi digital yang kuat bagi bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                  Mulai Proyek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Portfolio
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-slate-900">150+</div>
                  <div className="text-sm text-slate-600">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Klien Puas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">8+</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Code className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="font-semibold text-slate-900">Web Development</h3>
                    <p className="text-sm text-slate-600 mt-2">Modern & Responsive</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Palette className="w-12 h-12 text-teal-600 mb-4" />
                    <h3 className="font-semibold text-slate-900">UI/UX Design</h3>
                    <p className="text-sm text-slate-600 mt-2">User-Centered Approach</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Cloud className="w-12 h-12 text-sky-600 mb-4" />
                    <h3 className="font-semibold text-slate-900">Cloud Solutions</h3>
                    <p className="text-sm text-slate-600 mt-2">Scalable & Secure</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Smartphone className="w-12 h-12 text-emerald-600 mb-4" />
                    <h3 className="font-semibold text-slate-900">Mobile Apps</h3>
                    <p className="text-sm text-slate-600 mt-2">iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Star className="w-4 h-4 mr-2" />
              Layanan Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Solusi Komprehensif untuk
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Transformasi Digital Anda
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami menawarkan layanan IT engineering dan creative design yang terintegrasi 
              untuk memberikan solusi end-to-end yang terstruktur dan scalable bagi bisnis Anda.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="it-engineering" className="text-base py-3">
                <Cpu className="w-5 h-5 mr-2" />
                IT Engineering
              </TabsTrigger>
              <TabsTrigger value="graphic-design" className="text-base py-3">
                <Palette className="w-5 h-5 mr-2" />
                Creative Design
              </TabsTrigger>
            </TabsList>

            <TabsContent value="it-engineering" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.itEngineering.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                        <div className="text-blue-600">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="graphic-design" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.graphicDesign.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                        <div className="text-teal-600">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Award className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proyek-Proyek
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Terbaik Kami
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Lihat bagaimana kami telah membantu klien kami mencapai kesuksesan melalui solusi digital yang inovatif.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolio.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <Badge className="absolute top-4 left-4 bg-white/90 text-slate-800">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">{item.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    View Project
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0 hover:from-blue-700 hover:to-teal-700">
              Lihat Semua Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Users className="w-4 h-4 mr-2" />
              Tentang Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tim Grid Studio
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Siap Membangun Solusi Digital Anda
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami adalah tim profesional yang berdedikasi untuk memberikan solusi digital terstruktur dan inovatif bagi bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">{member.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="ghost" className="w-full">
                    LinkedIn Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">95%</h3>
              <p className="text-slate-600">Kepuasan Klien</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">15+</h3>
              <p className="text-slate-600">Penghargaan</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">24/7</h3>
              <p className="text-slate-600">Dukungan Teknis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Star className="w-4 h-4 mr-2" />
              Testimoni Klien
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Apa Kata Klien
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Tentang Grid Studio
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan tentang pengalaman bekerja dengan Grid Studio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-base mb-4 italic">
                  "{testimonial.content}"
                </CardDescription>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Kontak Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mari Diskusikan
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Proyek Anda
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Siap untuk memulai proyek Anda? Hubungi kami hari ini untuk konsultasi gratis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Hubungi Kami Langsung</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Telepon</div>
                      <div className="text-slate-600">+62 21 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-slate-600">info@grid-studio.id</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Alamat</div>
                      <div className="text-slate-600">Jakarta, Indonesia</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Mengapa Memilih Ninja Tech?</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Tim profesional dengan pengalaman lebih dari 8 tahun</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Solusi komprehensif IT engineering dan graphic design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Harga kompetitif dengan kualitas terbaik</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">Dukungan teknis 24/7 untuk semua klien</span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan kami akan segera menghubungi Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subjek</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Konsultasi Proyek"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Ceritakan tentang proyek Anda..."
                      required
                    ></textarea>
                  </div>
                  {submitMessage && (
                    <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                      {submitMessage}
                    </div>
                  )}
                  <Button 
                    size="lg" 
                    type="submit"
                    disabled={!validateForm() || isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="/grid-studio-logo.png" 
                    alt="Grid Studio Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">Grid Studio</span>
              </div>
              <p className="text-slate-400">
                Solusi digital terstruktur untuk IT engineering dan creative design.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button className="hover:text-white transition-colors">IT Engineering</button></li>
                <li><button className="hover:text-white transition-colors">Creative Design</button></li>
                <li><button className="hover:text-white transition-colors">Cloud Solutions</button></li>
                <li><button className="hover:text-white transition-colors">Mobile Development</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button className="hover:text-white transition-colors">Tentang Kami</button></li>
                <li><button className="hover:text-white transition-colors">Portfolio</button></li>
                <li><button className="hover:text-white transition-colors">Karir</button></li>
                <li><button className="hover:text-white transition-colors">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li>+62 21 1234 5678</li>
                <li>info@ninja-tech.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Grid Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}