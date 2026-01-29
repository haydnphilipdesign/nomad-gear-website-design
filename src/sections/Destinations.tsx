import { useEffect, useRef, useState } from 'react';
import { MapPin, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Alpine Lake',
    location: 'Sierra Nevada, CA',
    rating: 4.9,
    image: '/dest-alpine.jpg',
    description: 'Crystal clear waters surrounded by majestic peaks',
  },
  {
    id: 2,
    name: 'Redwood Grove',
    location: 'Northern California',
    rating: 4.8,
    image: '/dest-redwoods.jpg',
    description: 'Camp among the world\'s tallest trees',
  },
  {
    id: 3,
    name: 'Coastal Cliffs',
    location: 'Big Sur, CA',
    rating: 4.9,
    image: '/dest-coastal.jpg',
    description: 'Dramatic ocean views and stunning sunsets',
  },
  {
    id: 4,
    name: 'Desert Oasis',
    location: 'Joshua Tree, CA',
    rating: 4.7,
    image: '/dest-desert.jpg',
    description: 'Unique rock formations and starry nights',
  },
  {
    id: 5,
    name: 'Mountain Meadow',
    location: 'Rocky Mountains, CO',
    rating: 4.8,
    image: '/dest-meadow.jpg',
    description: 'Wildflower fields and babbling brooks',
  },
  {
    id: 6,
    name: 'Lakeside Haven',
    location: 'Lake Tahoe, CA/NV',
    rating: 4.9,
    image: '/dest-lakeside.jpg',
    description: 'Pristine waters and alpine beauty',
  },
];

const Destinations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className="py-24 md:py-32 bg-sage-dark relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 transition-all duration-1000 custom-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-cream text-sm font-medium rounded-full mb-4">
              Inspiration
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream">
              Destination Ideas
            </h2>
            <p className="text-cream/70 mt-4 max-w-lg">
              Discover breathtaking campsites recommended by our community of adventurers.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 border-cream/30 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'text-cream hover:bg-cream hover:text-sage-dark'
                  : 'text-cream/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 border-cream/30 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'text-cream hover:bg-cream hover:text-sage-dark'
                  : 'text-cream/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Polaroid Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 px-6 scrollbar-hide horizontal-scroll"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`flex-shrink-0 w-72 transition-all duration-700 custom-expo ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <a href="#" className="block group">
              {/* Polaroid Frame */}
              <div className="polaroid rounded-sm rotate-0 hover:rotate-1 transition-transform duration-300">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-tan fill-tan" />
                    <span className="text-sm font-semibold text-sage-dark">{destination.rating}</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 pt-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs">{destination.location}</span>
                  </div>
                  <h3 className="font-bold text-sage-dark text-lg group-hover:text-sage transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {destination.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Hide scrollbar style */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Destinations;
