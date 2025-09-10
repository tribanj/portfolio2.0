import React, { useState, useRef, useEffect } from "react";
import {
    Rocket,
    TrendingUp,
    Users,
    Globe,
    Award,
    BarChart3,
    Heart,
    Zap,
    Target,
    ChevronRight,
    ChevronLeft,
    Play,
    CheckCircle,
    X,
    Instagram,
    Facebook,
    Youtube,
    Linkedin,
    Twitter
} from "lucide-react";
import event from '../../assets/desigen/event.png'
import event2 from '../../assets/desigen/event2.png'
import event3 from '../../assets/desigen/event3.png'
import fbcover from '../../assets/desigen/fbcover (1).png'
import insta from '../../assets/desigen/insta.png'
import insta2 from '../../assets/desigen/insta2.png'
import interior from '../../assets/desigen/interier.png'
import logo1 from '../../assets/desigen/logo1.png'
import logo2 from '../../assets/desigen/logo2.png'
import logo3 from '../../assets/desigen/logo3.png'
import motivation from '../../assets/desigen/motivational.png'
import realestate from '../../assets/desigen/realestate.png'
import summersale from '../../assets/desigen/summersale.png'
import webbanner from '../../assets/desigen/webbanner.png'
import youtube from '../../assets/desigen/youtube.png'

function SMMWork() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const scrollContainerRef = useRef(null);

    const services = [
        {
            title: "Brand Awareness Campaigns",
            desc: "Create eye-catching posts and ads that make your brand unforgettable on all platforms.",
            icon: <Rocket size={40} />,
            stats: "Avg. 3.5x increase in brand recognition"
        },
        {
            title: "Performance Marketing",
            desc: "Data-driven ad strategies to maximize ROI and get measurable results.",
            icon: <TrendingUp size={40} />,
            stats: "Average 28% higher conversion rates"
        },
        {
            title: "Community Building",
            desc: "Engage and grow your online community with impactful content & interactions.",
            icon: <Users size={40} />,
            stats: "89% client satisfaction rate"
        },
        {
            title: "Global Reach",
            desc: "Expand your business visibility worldwide with smart social campaigns.",
            icon: <Globe size={40} />,
            stats: "Campaigns in 100+ Indian Cities"
        },
    ];

    // Design gallery items
    const designItems = [
        {
            id: 1,
            category: "logo",
            title: "EcoGadgets Logo Design",
            description: "Modern, eco-friendly logo with leaf symbolism",
            platform: "Brand Identity",
            image: logo1
        },
        {
            id: 2,
            category: "poster",
            title: "Summer Sale Poster",
            description: "Vibrant promotional poster for seasonal sale",
            platform: "Print & Digital",
            image: summersale
        },
        {
            id: 3,
            category: "banner",
            title: "Website Header Banner",
            description: "Eye-catching banner for website header",
            platform: "Web",
            image: webbanner
        },
        {
            id: 4,
            category: "instagram",
            title: "Instagram Carousel Post",
            description: "Engaging carousel post about product features",
            platform: "Instagram",
            image:insta
        },
        {
            id: 5,
            category: "logo",
            title: "TechSolutions Logo",
            description: "Sleek, modern logo for tech company",
            platform: "Brand Identity",
            image: logo3
        },
        {
            id: 6,
            category: "instagram",
            title: "Instagram Story Ad",
            description: "Vertical format ad for Instagram stories",
            platform: "Instagram",
            image: insta2
        },
        {
            id: 13,
            category: "instagram",
            title: "Instagram Story Ad",
            description: "Vertical format ad for Instagram stories",
            platform: "Instagram",
            image: event2
        },
        {
            id: 1,
            category: "instagram",
            title: "Instagram Story Ad",
            description: "Vertical format ad for Instagram stories",
            platform: "Instagram",
            image:event3
        },
        {
            id: 7,
            category: "banner",
            title: "Social Media Cover",
            description: "Facebook cover photo with brand messaging",
            platform: "Facebook",
            image: fbcover
        },
        {
            id: 8,
            category: "poster",
            title: "Event Promotion Poster",
            description: "Poster for annual company conference",
            platform: "Print & Digital",
            image: event
        },
        {
            id: 9,
            category: "instagram",
            title: "Interior designing poster",
            description: "Grid post for new product announcement",
            platform: "Instagram",
            image: interior
        },
        {
            id: 10,
            category: "banner",
            title: "YouTube Channel Art",
            description: "Custom banner for YouTube channel",
            platform: "YouTube",
            image: youtube
        },
        {
            id: 11,
            category: "logo",
            title: "Real Estate Logo",
            description: "Elegant logo for Real Estate Company",
            platform: "Brand Identity",
            image:logo2
        },
        {
            id: 12,
            category: "poster",
            title: "Motivational Quote Graphic",
            description: "Inspirational quote for social media sharing",
            platform: "Instagram/Facebook",
            image: motivation
        }
    ];

    const categories = [
        { id: "all", name: "All Designs", icon: <Heart size={16} /> },
        { id: "logo", name: "Logos", icon: <Award size={16} /> },
        { id: "poster", name: "Posters", icon: <BarChart3 size={16} /> },
        { id: "banner", name: "Banners", icon: <Target size={16} /> },
        { id: "instagram", name: "Instagram", icon: <Instagram size={16} /> }
    ];

    const filteredDesigns = selectedCategory === "all"
        ? designItems
        : designItems.filter(item => item.category === selectedCategory);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev === filteredDesigns.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? filteredDesigns.length - 1 : prev - 1));
    };

    // Scroll functions for horizontal scrolling
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 md:px-16 lg:px-32">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-orange-500/10 px-4 py-2 rounded-full mb-6">
                    <Zap size={20} className="text-orange-500 mr-2" />
                    <span className="text-orange-500 font-medium">Award-Winning Social Media Designs</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
                        Creative Design Gallery
                    </span>
                    <br />
                    That Captivates Audiences
                </h1>

                <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl">
                    Explore our portfolio of stunning social media designs, logos, posters, and banners
                    that have helped brands stand out and drive engagement.
                </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500">500+</div>
                    <div className="text-gray-400">Designs Created</div>
                </div>
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500">42%</div>
                    <div className="text-gray-400">Avg. Engagement Increase</div>
                </div>
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500">98%</div>
                    <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500">24h</div>
                    <div className="text-gray-400">Avg. Turnaround Time</div>
                </div>
            </div>

            {/* Design Gallery Section */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Design Portfolio</h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Browse through our collection of creative work that has helped brands increase their visibility and engagement
                </p>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center px-5 py-2 rounded-full transition-all ${selectedCategory === category.id ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Design Display Area */}
                {selectedCategory === "all" ? (
                    // Horizontal scroll for "All Designs"
                    <div className="relative">
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full hidden md:block"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-6"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {filteredDesigns.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="flex-shrink-0 w-80 bg-gray-800/40 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center text-sm text-orange-500 mb-1">
                                            {item.platform}
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 p-2 rounded-full hidden md:block"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Scroll indicator for mobile */}
                        <div className="text-center mt-4 text-gray-500 text-sm md:hidden">
                            ← Scroll horizontally to view more →
                        </div>
                    </div>
                ) : (
                    // Grid layout for filtered categories
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredDesigns.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-gray-800/40 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center text-sm text-orange-500 mb-1">
                                        {item.platform}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 z-10"
                    >
                        <X size={24} />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 z-10"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 z-10"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="max-w-4xl w-full">
                        <img
                            src={filteredDesigns[currentImage].image}
                            alt={filteredDesigns[currentImage].title}
                            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                        />
                        <div className="text-center mt-4 text-white">
                            <h3 className="text-xl font-bold">{filteredDesigns[currentImage].title}</h3>
                            <p className="text-gray-300">{filteredDesigns[currentImage].description}</p>
                            <div className="text-orange-500 mt-2">{filteredDesigns[currentImage].platform}</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Services Section */}
            <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Design Services</h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Comprehensive design solutions tailored to your brand identity and marketing goals
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/40 border border-gray-700 shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-orange-500/20 group"
                        >
                            <div className="flex justify-center mb-4 text-orange-500 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-400 mb-4">{service.desc}</p>
                            <div className="text-sm text-orange-500 font-medium">{service.stats}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-orange-500/10 to-yellow-400/10 p-10 rounded-2xl border border-orange-500/20">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand's Visual Identity?</h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Let's create stunning designs that will make your brand stand out and connect with your audience.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-lg font-semibold transition duration-300 shadow-md flex items-center justify-center">
                        <Rocket className="mr-2" /> Start Your Project
                    </button>
                    <button className="px-8 py-4 rounded-xl bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 text-lg font-semibold transition duration-300 flex items-center justify-center">
                        <Play className="mr-2" /> View More Work
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SMMWork;