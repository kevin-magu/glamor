import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { 
  Smartphone, 
  Palette, 
  Image, 
  Video, 
  Code, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Globe
} from 'lucide-react';
import glamorLogo from './assets/glamorlogo.png';



export default function App() {
  const services = [
    {
      icon: Smartphone,
      title: "Social Media Management",
      description: "Elevate your brand presence across all social platforms with strategic content creation and community management."
    },
    {
      icon: Palette,
      title: "Company Branding",
      description: "Create a cohesive brand identity that resonates with your audience and sets you apart from the competition."
    },
    {
      icon: Image,
      title: "Visuals (Posters & Logos)",
      description: "Professional graphic design services for eye-catching posters, memorable logos, and stunning visual assets."
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Transform raw footage into compelling stories with professional video editing and motion graphics."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Build modern, responsive websites that engage users and drive business growth."
    },
    {
      icon: Code,
      title: "Business Software Development",
      description: "Build tailored software solutions that streamline operations, improve efficiency, and solve unique business challenges."
    }
  ];

const portfolioImages = [
  "/src/assets/portfolio/img1.jpeg",
  "/src/assets/portfolio/img2.jpeg",
  "/src/assets/portfolio/img3.jpeg",
  "/src/assets/portfolio/img4.jpeg",
  "/src/assets/portfolio/img5.jpeg",
  "/src/assets/portfolio/img6.jpeg",
  "/src/assets/portfolio/img7.jpeg",
  "/src/assets/portfolio/img8.png",
];

  const websiteProjects = [
    {
      name: "Green Globe Realisation",
      url: "https://greengloberealisation.org",
      domain: "greengloberealisation.org",
      description: "Environmental sustainability platform with modern design and user-friendly interface"
    },
    {
      name: "Tri-Spark Aviation",
      url: "https://tri-sparkaviation.com",
      domain: "tri-sparkaviation.com",
      description: "Professional aviation services website with dynamic content and booking system"
    },
    {
      name: "FutureSoft",
      url: "https://futuresoft.co.ke",
      domain: "futuresoft.co.ke",
      description: "Tech solutions company website featuring responsive design and portfolio showcase"
    }
  ];

  const testimonials = [
    {
      quote: "Glamor LLC transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. Our social media engagement has increased by 300% since working with them.",
      author: "Allan Migwan",
      position: "CEO of Tri-spark Aviation"
    },
    {
      quote: "The team at Glamor LLC delivered exceptional results for our rebranding project. Their professional approach and innovative solutions helped us establish a strong market presence.",
      author: "Farah Ali",
      position: "CEO of Green Globe Realisation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={glamorLogo} alt="Glamor LLC" className="h-8 w-8" />
              <span className="text-xl font-medium text-gray-900">Glamor LLC</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#ff69b4] transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#ff69b4] transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-[#ff69b4] transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-[#ff69b4] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img src={glamorLogo} alt="Glamor LLC" className="h-24 w-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
            Welcome to <span className="text-[#ff69b4]">Glamor LLC</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Elevating brands through creative excellence and digital innovation
          </p>
          <Button 
            className="bg-[#ff69b4] hover:bg-[#ff1493] text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            size="lg"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">About Glamor LLC</h2>
            <div className="w-24 h-1 bg-[#ff69b4] mx-auto mb-8"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Glamor LLC, we believe that exceptional design has the power to transform businesses and create lasting connections with audiences. Founded on the principles of creativity, innovation, and excellence, we specialize in delivering comprehensive digital solutions that elevate your brand to new heights.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to empower businesses with stunning visuals, strategic digital presence, and cutting-edge web solutions. We combine artistic vision with technical expertise to create memorable experiences that drive growth and success for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-[#ff69b4] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social media strategy to web development, we offer comprehensive solutions to grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#ff69b4]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ff69b4]/20 transition-colors">
                    <service.icon className="w-10 h-10 text-[#ff69b4]" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Our Portfolio</h2>
            <div className="w-24 h-1 bg-[#ff69b4] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses achieve their goals
            </p>
          </div>
          
          {/* Website Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Live Websites</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {websiteProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-[#ff69b4]/10 rounded-full flex items-center justify-center group-hover:bg-[#ff69b4]/20 transition-colors">
                        <Globe className="w-8 h-8 text-[#ff69b4]" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#ff69b4] transition-colors" />
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-3">{project.name}</h4>
                    <p className="text-[#ff69b4] font-medium mb-3">{project.domain}</p>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Design Portfolio */}
          <div>
      <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">
        Design Work
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <ImageWithFallback
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-[#ff69b4] mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-10">
                  <div className="text-4xl text-[#ff69b4] mb-6">"</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#ff69b4]/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-[#ff69b4] font-medium">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-[#ff69b4] mx-auto mb-8"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-none shadow-lg rounded-3xl">
              <CardContent className="p-10">
                <h3 className="text-xl font-medium text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="mt-2 rounded-xl border-gray-200 focus:border-[#ff69b4] focus:ring-[#ff69b4]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="mt-2 rounded-xl border-gray-200 focus:border-[#ff69b4] focus:ring-[#ff69b4]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="mt-2 rounded-xl border-gray-200 focus:border-[#ff69b4] focus:ring-[#ff69b4]"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#ff69b4] hover:bg-[#ff1493] text-white rounded-xl py-3 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg rounded-3xl">
                <CardContent className="p-10">
                  <h3 className="text-xl font-medium text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#ff69b4]/10 rounded-full flex items-center justify-center mr-4">
                        <Mail className="w-6 h-6 text-[#ff69b4]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">glamorllc@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#ff69b4]/10 rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-6 h-6 text-[#ff69b4]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+254 797 692 537</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#ff69b4]/10 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-[#ff69b4]" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">Virtual</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={glamorLogo} alt="Glamor LLC" className="h-8 w-8" />
                <span className="text-xl font-medium">Glamor LLC</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Elevating brands through creative excellence and digital innovation. 
                We create memorable experiences that drive growth and success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff69b4] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff69b4] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff69b4] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#ff69b4] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-[#ff69b4] transition-colors">Social Media Management</a></li>
                <li><a href="#services" className="hover:text-[#ff69b4] transition-colors">Company Branding</a></li>
                <li><a href="#services" className="hover:text-[#ff69b4] transition-colors">Visuals & Logos</a></li>
                <li><a href="#services" className="hover:text-[#ff69b4] transition-colors">Video Editing</a></li>
                <li><a href="#services" className="hover:text-[#ff69b4] transition-colors">Web Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-[#ff69b4] transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-[#ff69b4] transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-[#ff69b4] transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-[#ff69b4] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Glamor LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}