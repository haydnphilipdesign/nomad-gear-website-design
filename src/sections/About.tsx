import { useEffect, useRef, useState } from 'react';
import { Award, Users, Leaf, Shield } from 'lucide-react';

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Campers' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Leaf, value: '100%', label: 'Eco-Friendly' },
  { icon: Shield, value: '99%', label: 'Satisfaction Rate' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 custom-expo ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image with Morphing Mask */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-card">
                <img
                  src="/about-campsite.jpg"
                  alt="Campers enjoying their outdoor adventure"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-sage text-cream rounded-2xl p-6 shadow-lg animate-float">
                <div className="text-center">
                  <span className="text-3xl font-bold block">5+</span>
                  <span className="text-sm opacity-90">Years of Adventure</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-sage/20 rounded-2xl" />
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-tan/20 rounded-[2rem]" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 custom-expo ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-sm font-medium rounded-full mb-4">
              About Nomad Gear
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-dark mb-6 leading-tight">
              The best camping gear for every adventure
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that everyone deserves to experience the magic of the outdoors. 
              That's why we've curated a collection of premium camping equipment that 
              combines reliability, comfort, and sustainability. From weekend getaways 
              to extended expeditions, we've got you covered.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our mission is simple: make outdoor adventures accessible to all. 
              By offering high-quality rental gear at affordable prices, we help 
              you create unforgettable memories without breaking the bank.
            </p>

            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sage text-cream font-semibold rounded-full transition-all duration-300 hover:bg-sage-dark hover:shadow-lg hover:scale-105"
            >
              Explore Our Gear
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-sage/10 transition-all duration-1000 custom-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-sage/10 rounded-2xl mb-4 group-hover:bg-sage group-hover:text-cream transition-all duration-300">
                <stat.icon className="w-6 h-6 text-sage group-hover:text-cream" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-sage-dark mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
