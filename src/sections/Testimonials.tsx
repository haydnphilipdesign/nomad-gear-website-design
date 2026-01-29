import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Weekend Explorer',
    avatar: '/avatar-sarah.jpg',
    content: 'Nomad Gear made our anniversary camping trip absolutely perfect. The equipment was top-notch and the booking process was seamless. We\'ll definitely be coming back for all our outdoor adventures!',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Peterson',
    role: 'Solo Adventurer',
    avatar: '/avatar-john.jpg',
    content: 'As someone who camps solo frequently, having reliable gear is crucial. Nomad Gear\'s Solo Adventure kit has everything I need without the bulk. Lightweight, durable, and affordable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mike Thompson',
    role: 'Family Camper',
    avatar: '/avatar-mike.jpg',
    content: 'Took the family on our first camping trip with gear from Nomad. The kids had a blast and everything worked perfectly. The tent was spacious and the sleeping bags kept everyone warm.',
    rating: 5,
  },
];

const Testimonials = () => {
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
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-sage/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 custom-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-dark mb-4">
            What our customers say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of happy campers who trust Nomad Gear for their outdoor adventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative transition-all duration-700 custom-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-soft h-full card-lift">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-sage rounded-2xl flex items-center justify-center">
                  <Quote className="w-5 h-5 text-cream" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-tan fill-tan" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-sage/20"
                  />
                  <div>
                    <h4 className="font-bold text-sage-dark">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-sage/10 transition-all duration-1000 custom-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-dark">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-sage/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-dark">2,500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="w-px h-12 bg-sage/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-sage-dark">98%</div>
            <div className="text-sm text-muted-foreground">Would Recommend</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
