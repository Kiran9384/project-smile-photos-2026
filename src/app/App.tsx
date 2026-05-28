import { useState, useEffect } from 'react';
import { Camera, Award, Users, Star, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Menu, X } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';

function SmileLogo({ isScrolled, lightBg = false }: { isScrolled?: boolean; lightBg?: boolean }) {
  const textColor = lightBg 
    ? 'text-black' 
    : (isScrolled ? 'text-black' : 'text-white');

  return (
    <div className={`flex items-center select-none ${textColor} transition-colors duration-300`}>
      {/* Brand Name Column */}
      <div className="flex flex-col items-start leading-none pr-1">
        <div className="relative h-10 flex items-end">
          <span 
            className="text-4xl md:text-5xl font-normal leading-[0.5] select-none"
            style={{ 
              fontFamily: "'Herr Von Muellerhoff', 'Alex Brush', cursive",
              letterSpacing: "1px",
              transform: "translateY(-6px)"
            }}
          >
            Smile
          </span>
        </div>
        <span 
          className="text-[9px] font-bold tracking-[0.22em] uppercase select-none"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Photography
        </span>
      </div>

      {/* Stylized Thin Horizontal Connecting Line (as in reference image) */}
      <div className="h-[1px] w-6 md:w-8 bg-current opacity-30 self-end mb-2.5 mx-1" />

      {/* Camera Icon with Smile Emoji Lens */}
      <div className="flex items-center self-end mb-0.5 ml-1">
        <svg className="w-11 h-8 md:w-13 md:h-9.5 fill-current" viewBox="0 0 100 70">
          {/* Pro Camera Body Outline */}
          <path d="M12 24h10l3.5-5.5h49l3.5 5.5h10a5 5 0 0 1 5 5v26a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V29a5 5 0 0 1 5-5z" />
          {/* Shutter Button */}
          <rect x="76" y="20" width="8" height="4" rx="1" fill="#facc15" />
          {/* Dial detail */}
          <rect x="18" y="20" width="6" height="4" rx="1" fill="currentColor" opacity="0.6" />
          {/* Outer Lens white ring */}
          <circle cx="50" cy="40" r="19" className="fill-white stroke-current stroke-2" />
          {/* Inner Lens black chamber */}
          <circle cx="50" cy="40" r="15" className="fill-current" />
          {/* Smiley emoji element inside the lens */}
          <circle cx="50" cy="40" r="12.5" fill="#facc15" />
          {/* Eyes */}
          <circle cx="45.5" cy="36.5" r="1.5" fill="black" />
          <circle cx="54.5" cy="36.5" r="1.5" fill="black" />
          {/* Smiley Smile Mouth */}
          <path d="M43 42c1.5 3 5.5 3 7 0" stroke="black" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          {/* Highlight shine */}
          <circle cx="55.5" cy="33.5" r="0.8" fill="white" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activePricingFilter, setActivePricingFilter] = useState('standard');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Camera,
      title: 'Wedding Photography',
      description: 'Capture your special day with timeless elegance and emotion, preserving memories that last forever.'
    },
    {
      icon: Users,
      title: 'Fashion Photography',
      description: 'High-end editorial and commercial fashion shoots that showcase style, sophistication, and artistry.'
    },
    {
      icon: Award,
      title: 'Commercial Shoots',
      description: 'Professional brand photography for businesses, products, and corporate events with creative vision.'
    },
    {
      icon: Star,
      title: 'Event Coverage',
      description: 'Comprehensive event documentation from corporate gatherings to private celebrations.'
    }
  ];

  const portfolioImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1769650795970-89690d0f535a?w=600', category: 'fashion', title: 'Elegance Redefined' },
    { id: 2, url: 'https://images.unsplash.com/photo-1767358536907-f46dffc92492?w=600', category: 'events', title: 'Evening Soirée' },
    { id: 3, url: 'https://images.unsplash.com/photo-1763454640516-fe10924d1c3c?w=600', category: 'fashion', title: 'Natural Grace' },
    { id: 4, url: 'https://images.unsplash.com/photo-1762522930348-070b98229e9b?w=600', category: 'fashion', title: 'Bold Expression' },
    { id: 5, url: 'https://images.unsplash.com/photo-1770062423022-faf4141573e3?w=600', category: 'weddings', title: 'Timeless Beauty' },
    { id: 6, url: 'https://images.unsplash.com/photo-1776111885208-c7f243c0c9dc?w=600', category: 'fashion', title: 'Movement & Flow' },
    { id: 7, url: 'https://images.unsplash.com/photo-1768479619271-e0ff666a14f1?w=600', category: 'fashion', title: 'Mystique' },
    { id: 8, url: 'https://images.unsplash.com/photo-1763677594421-f58e50cce64d?w=600', category: 'fashion', title: 'Dramatic Light' },
    { id: 9, url: 'https://images.unsplash.com/photo-1768609956943-9eee60a23d59?w=600', category: 'events', title: 'Fire & Passion' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rating: 5,
      text: 'Absolutely stunning work! They captured every moment of our wedding day with such artistry and emotion. We couldn\'t be happier.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 5,
      text: 'Professional, creative, and exceptional quality. Our corporate event photos exceeded all expectations.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Fashion Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      rating: 5,
      text: 'A true artist with the camera. Their fashion photography brought my collection to life in ways I never imagined.'
    }
  ];

  const standardPlans = [
    {
      name: 'Silver',
      price: '₹11,999',
      features: [
        'Premium Album',
        'Unlimited Soft Copy',
        'One Photo Frame',
        'Mini Baby Frame',
        'E-Invitation'
      ],
      recommended: false
    },
    {
      name: 'Gold',
      price: '₹16,999',
      features: [
        'Premium Album',
        'Candid Photo',
        'Unlimited Soft Copy',
        'One Photo Frame',
        'Mini Baby Frame',
        'E-Invitation'
      ],
      recommended: true
    },
    {
      name: 'Platinum',
      price: '₹26,999',
      features: [
        'Premium Album',
        'Candid Photo',
        'Candid Video',
        'Mini Baby Frame',
        'Unlimited Soft Copy',
        '3 Photo Frame',
        'Mini Baby Frame',
        'E-Invitation'
      ],
      recommended: false
    }
  ];

  const weddingPlans = [
    {
      name: 'Basic',
      price: '₹40,000',
      features: [
        'One Traditional Photo',
        'One Traditional Video',
        'Unlimited Color Graded Pictures In Customized Link',
        '2 High Quality Album (Each 200 Photos)',
        '2 Full Length HD Video',
        '3 Photo Frame'
      ],
      recommended: false
    },
    {
      name: 'Gold',
      price: '₹55,000',
      features: [
        'One Traditional Photo',
        'One Candid Photo',
        'One Traditional Video',
        'Unlimited Color Graded Pictures In Customized Link',
        '2 High Quality Album (Each 200 Photos)',
        '2 Full Length HD Video',
        '3 Photo Frame'
      ],
      recommended: true
    },
    {
      name: 'Premium',
      price: '₹75,000',
      features: [
        'One Traditional Photo',
        'One Candid Photo',
        'One Traditional Video',
        'One Candid Video',
        'Unlimited Color Graded Pictures In Customized Link',
        '2 High Quality Album (Each 250 Photos)',
        'Cinematic Wedding Film',
        '2 Full Length HD Video',
        '3 Photo Frame'
      ],
      recommended: false
    }
  ];

  const pricingPlans = activePricingFilter === 'standard' ? standardPlans : weddingPlans;

  const filteredImages = activeFilter === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-200/50 text-black'
            : 'bg-transparent py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Holder */}
          <a href="#" className="flex items-center group">
            <SmileLogo isScrolled={isScrolled} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a
              href="#about"
              className={`transition-colors duration-300 hover:text-[#facc15] ${
                isScrolled ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`transition-colors duration-300 hover:text-[#facc15] ${
                isScrolled ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`transition-colors duration-300 hover:text-[#facc15] ${
                isScrolled ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className={`transition-colors duration-300 hover:text-[#facc15] ${
                isScrolled ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`transition-colors duration-300 hover:text-[#facc15] ${
                isScrolled ? 'text-gray-800' : 'text-gray-200'
              }`}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="bg-[#facc15] text-black px-5 py-2.5 rounded-xl font-bold hover:bg-black hover:text-[#facc15] transition-all duration-300 shadow-md"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? 'hover:bg-gray-100 text-black' : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl py-6 px-6 flex flex-col gap-4 text-black">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-[#facc15] transition-colors py-2 border-b border-gray-100"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-[#facc15] transition-colors py-2 border-b border-gray-100"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-[#facc15] transition-colors py-2 border-b border-gray-100"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-[#facc15] transition-colors py-2 border-b border-gray-100"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-[#facc15] transition-colors py-2"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#facc15] text-black text-center py-3.5 rounded-xl font-bold hover:bg-black hover:text-[#facc15] transition-all duration-300 mt-2 shadow-md"
            >
              Book Now
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769650795970-89690d0f535a?w=1920"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white leading-none">
            Candid Emotion,<br/>Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Premium luxury photography specializing in breathtaking weddings, editorial fashion, high-end commercial brands, and private event coverages.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="#portfolio"
              className="bg-[#facc15] text-black px-8 py-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl font-bold flex items-center justify-center"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-[#facc15] hover:text-black hover:border-[#facc15] transition-all duration-300 font-bold flex items-center justify-center"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=700"
                alt="Photographer"
                className="rounded-3xl w-full h-[600px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#facc15] text-black p-8 rounded-2xl shadow-2xl">
                <div className="text-5xl font-bold">15+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-6 text-black">
                About Our Studio
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                We are a luxury photography studio dedicated to creating stunning visual narratives that transcend time. With over 15 years of experience, our team has mastered the art of capturing genuine emotion and timeless elegance.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our work has been recognized internationally, winning numerous awards including the International Photography Awards and featured in prestigious publications worldwide.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-200">
                  <Award className="w-10 h-10 text-black mb-3" />
                  <div className="text-2xl font-bold mb-1 text-black">50+</div>
                  <div className="text-gray-500">Awards Won</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-gray-200">
                  <Users className="w-10 h-10 text-black mb-3" />
                  <div className="text-2xl font-bold mb-1 text-black">1000+</div>
                  <div className="text-gray-500">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-black">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive photography services tailored to capture your most important moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-8 rounded-3xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#facc15] group"
              >
                <service.icon className="w-14 h-14 text-[#facc15] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-24 px-6 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-black">Our Portfolio</h2>
            <p className="text-gray-500 text-lg mb-8">
              Explore our latest work across different photography styles
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              {['all', 'weddings', 'fashion', 'events'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    if (filter === 'weddings') {
                      setActivePricingFilter('wedding');
                    } else {
                      setActivePricingFilter('standard');
                    }
                  }}
                  className={`px-6 py-3 rounded-xl capitalize transition-all duration-300 font-medium ${
                    activeFilter === filter
                      ? 'bg-[#facc15] text-black'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <Masonry columnsCount={3} gutter="1.5rem">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-black">Client Testimonials</h2>
            <p className="text-gray-600 text-lg">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-8 rounded-3xl border border-gray-200 hover:border-[#facc15] transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#facc15] text-[#facc15]" />
                  ))}
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-black">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-black">Pricing Packages</h2>
            <p className="text-gray-500 text-lg mb-8">
              Choose the perfect package for your photography needs
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              {[
                { id: 'standard', label: 'Standard Packages' },
                { id: 'wedding', label: 'Wedding Packages' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActivePricingFilter(category.id)}
                  className={`px-6 py-3 rounded-xl capitalize transition-all duration-300 font-medium ${
                    activePricingFilter === category.id
                      ? 'bg-[#facc15] text-black shadow-sm'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col ${
                  plan.recommended
                    ? 'bg-[#facc15] text-black scale-105 shadow-2xl border border-[#facc15]'
                    : 'bg-neutral-50 border border-gray-200 text-black hover:border-black'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
                    RECOMMENDED
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.recommended ? 'text-black/70' : 'text-gray-500'}>/package</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.recommended ? 'fill-black text-black' : 'fill-[#facc15] text-[#facc15]'
                      }`} />
                      <span className={plan.recommended ? 'text-black/90' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-4 rounded-xl font-bold mt-auto transition-all duration-300 bg-black text-white hover:bg-neutral-800">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white text-black scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-black">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Ready to capture your special moments? Contact us today to discuss your photography needs and schedule a consultation.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="bg-[#facc15] p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-lg text-black font-medium">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#facc15] p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg text-black font-medium">hello@luxuryphoto.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#facc15] p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Studio Address</div>
                    <div className="text-lg text-black font-medium">123 Creative Ave, New York, NY 10001</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="bg-neutral-100 text-black p-4 rounded-xl hover:bg-[#facc15] hover:text-black transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-neutral-100 text-black p-4 rounded-xl hover:bg-[#facc15] hover:text-black transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="bg-neutral-100 text-black p-4 rounded-xl hover:bg-[#facc15] hover:text-black transition-all duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-3xl border border-gray-200">
              <form onS
              ubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#facc15] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#facc15] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#facc15] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#facc15] text-black py-4 rounded-xl font-bold hover:bg-[#eab308] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
          <SmileLogo lightBg={true} />
          <p className="text-gray-500 text-sm mt-2">&copy; 2026 Smile Photography Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
