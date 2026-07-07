import { useState, useEffect } from 'react';
import { Camera, Award, Users, Star, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Menu, X, PhoneCall } from 'lucide-react';
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
    { id: 5, url: '/photos/wedding/A1 (1).jpg', category: 'weddings', alt: 'Smile Photography Kancheepuram Wedding Photography ', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (2).jpg', category: 'weddings', alt: 'Smile Photography Kancheepuram Wedding Photography', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (3).jpg', category: 'weddings', alt: 'Smile Photography Kancheepuram Wedding Photography', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (4).jpg', category: 'weddings', alt: 'Smile Photography Kancheepuram Wedding Photography', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (5).jpg', category: 'weddings', alt: 'Smile Photography Kancheepuram Wedding Photography', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (6).jpg', category: 'weddings', alt: 'Smile Photography Kancheepuram Wedding Photography', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (7).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (8).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (9).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (10).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (11).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (12).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (13).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (14).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (15).jpg', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (16).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (2).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (3).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (4).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (5).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (6).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (7).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (8).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (9).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (10).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (11).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (12).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (13).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (14).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (15).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (17).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (18).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (19).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (20).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (21).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (22).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (23).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 5, url: '/photos/wedding/A1 (24).webp', category: 'weddings', title: 'Timeless Beauty' },
    { id: 3, url: '/photos/birthday/a1 (7).webp', category: 'birthday', title: 'Natural Grace' },
    { id: 3, url: '/photos/birthday/a1 (6).webp', category: 'birthday', title: 'Natural Grace' },
    { id: 3, url: '/photos/birthday/a1 (1).webp', category: 'birthday', title: 'Natural Grace' },
    { id: 4, url: '/photos/birthday/a1 (8).webp', category: 'birthday', title: 'Bold Expression' },
    { id: 6, url: '/photos/birthday/a1 (9).webp', category: 'birthday', title: 'Movement & Flow' },
    { id: 9, url: '/photos/babyshower/s1 (1).webp', category: 'baby shower', title: 'Fire & Passion' },
    { id: 9, url: '/photos/babyshower/s1 (2).webp', category: 'baby shower', title: 'Fire & Passion' },
    { id: 9, url: '/photos/babyshower/s1 (4).webp', category: 'baby shower', title: 'Fire & Passion' },
    { id: 9, url: '/photos/babyshower/s1 (5).webp', category: 'baby shower', title: 'Fire & Passion' },
    { id: 9, url: '/photos/babyshower/s1 (6).webp', category: 'baby shower', title: 'Fire & Passion' },

    

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

  const handleChoosePlan = (planName: string, planPrice: string, isWedding: boolean) => {
    const sessionType = isWedding ? 'wedding' : 'birthday';
    const message = `Hi Smile Photography! I saw your website and was impressed. I want to book a ${sessionType} photography session. I have selected the ${planName} package (Price: ${planPrice}). Please let me know your availability! Thanks.`;
    const whatsappUrl = `https://wa.me/916379453688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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
              className={`transition-colors duration-300 hover:text-[#facc15] ${isScrolled ? 'text-gray-800' : 'text-gray-200'
                }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`transition-colors duration-300 hover:text-[#facc15] ${isScrolled ? 'text-gray-800' : 'text-gray-200'
                }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`transition-colors duration-300 hover:text-[#facc15] ${isScrolled ? 'text-gray-800' : 'text-gray-200'
                }`}
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className={`transition-colors duration-300 hover:text-[#facc15] ${isScrolled ? 'text-gray-800' : 'text-gray-200'
                }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`transition-colors duration-300 hover:text-[#facc15] ${isScrolled ? 'text-gray-800' : 'text-gray-200'
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
            className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'hover:bg-gray-100 text-black' : 'hover:bg-white/10 text-white'
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
            Candid Emotion,<br />Timeless Elegance
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
              {['all', 'weddings', 'birthday', 'baby shower'].map((filter) => (
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
                  className={`px-6 py-3 rounded-xl capitalize transition-all duration-300 font-medium ${activeFilter === filter
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
                <div >
                  
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
                { id: 'standard', label: 'Birthday Packages' },
                { id: 'wedding', label: 'Wedding Packages' }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActivePricingFilter(category.id)}
                  className={`px-6 py-3 rounded-xl capitalize transition-all duration-300 font-medium ${activePricingFilter === category.id
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
                className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col ${plan.recommended
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
                      <Star className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.recommended ? 'fill-black text-black' : 'fill-[#facc15] text-[#facc15]'
                        }`} />
                      <span className={plan.recommended ? 'text-black/90' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleChoosePlan(plan.name, plan.price, activePricingFilter === 'wedding')}
                  className="w-full py-4 rounded-xl font-bold mt-auto transition-all duration-300 bg-black text-white hover:bg-neutral-800"
                >
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
                    <div className="text-lg text-black font-medium">+91 6379453688</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#facc15] p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg text-black font-medium">smilephotography81@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#facc15] p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Studio Address</div>
                    <div className="text-lg text-black font-medium">Kanchipuram, Tamil Nadu</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.instagram.com/smile_photography_official_?igsh=MW1rY3FvNDJydTNwOA%3D%3D" className="bg-neutral-100 text-black p-4 rounded-xl hover:bg-[#facc15] hover:text-black transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="bg-neutral-100 text-black p-4 rounded-xl hover:bg-[#facc15] hover:text-black transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="tel:6379453688" className="bg-neutral-100 text-black p-4 rounded-xl hover:bg-[#facc15] hover:text-black transition-all duration-300">
                  <PhoneCall className="w-6 h-6" />
                </a>
                
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-3xl border border-gray-200">
              <form action="https://formsubmit.co/smilephotography81@gmail.com" method="POST"className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#facc15] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    name="email"
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
                    name="message"
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
          <p className="text-gray-500 text-sm mt-2">Created by Kanchipuram Web Solutions.</p>
          <p className="text-gray-500 text-sm mt-2"> Email : [kanchipuramwebsolutions@gmail.com]</p>


        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/916379453688?text=${encodeURIComponent("Hi Smile Photography! I saw your website and was impressed. I would like to inquire about booking a photography session. Please let me know your availability! Thanks.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964C16.587 1.91 14.139.887 11.53.887c-5.444 0-9.866 4.418-9.87 9.865-.001 1.77.464 3.506 1.346 5.045L1.93 21.03l5.378-1.411c.002-.001.002-.001.002-.001zM17.52 14.33c-.302-.15-1.786-.88-2.057-.98-.27-.1-.468-.15-.663.15-.195.3-.757.98-.928 1.18-.17.2-.34.22-.64.07-1.125-.56-1.923-1.024-2.69-2.337-.2-.34-.04-.52.11-.67.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.663-1.6-.909-2.193-.24-.58-.5-.5-.663-.51-.17-.01-.366-.01-.561-.01-.195 0-.51.07-.777.36-.266.29-1.02.99-1.02 2.42 0 1.43 1.04 2.81 1.185 3 0 .19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.7.22 1.33.19 1.83.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.21-.57-.36z"/>
        </svg>
        <span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Message us on WhatsApp
        </span>
      </a>
    </div>
  );
}
