import { useEffect, useRef, useState } from 'react';

interface Category {
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  { name: 'Tents', image: '/category-tents.jpg', count: 24 },
  { name: 'Sleeping Bags', image: '/category-sleepingbags.jpg', count: 18 },
  { name: 'Backpacks', image: '/category-backpacks.jpg', count: 32 },
  { name: 'Accessories', image: '/category-accessories.jpg', count: 45 },
];

const Categories = () => {
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
      id="categories"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tan/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 custom-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-sage/10 text-sage text-sm font-medium rounded-full mb-4">
            Explore Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-dark mb-4">
            Browse by category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find everything you need for your outdoor adventure, from shelters to sleep systems.
          </p>
        </div>

        {/* Categories Grid - Staggered Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`transition-all duration-700 custom-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                marginTop: index % 2 === 1 ? '40px' : '0' 
              }}
            >
              <a
                href="#products"
                className="group block tilt-card"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-soft card-lift">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden image-zoom">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-sage-dark/0 group-hover:bg-sage-dark/20 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-sage-dark group-hover:text-sage transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.count} products
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage group-hover:text-cream transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-sage group-hover:text-cream"
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
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
