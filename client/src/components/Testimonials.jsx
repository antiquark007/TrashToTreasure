import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const people = [
  {
    name: "John Doe",
    role: "Software Engineer",
    testimonial: "The attention to detail and professional support is unmatched. A game-changing experience!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Jane Smith",
    role: "Product Designer",
    testimonial: "This service transformed our workflow completely. The results exceeded our expectations!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Director",
    testimonial: "Highly recommended! The team's expertise and dedication made all the difference.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Michael Brown",
    role: "CEO",
    testimonial: "Exceptional quality and outstanding service. They truly understand client needs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "Sarah Davis",
    role: "Tech Lead",
    testimonial: "The results have been transformative for our team's productivity and efficiency.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
  },
  {
    name: "David Wilson",
    role: "Startup Founder",
    testimonial: "Outstanding experience from start to finish. Couldn't be happier with the outcome!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto w-full">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">What People Say</h2>
        <p className="text-blue-600 text-lg">Trusted by professionals worldwide</p>
      </div>
      
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 scroll-smooth pb-8 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {people.map((person, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 bg-white rounded-2xl shadow-xl shadow-blue-100 p-6 transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
                  <img
                    src={person.image}
                    alt={`${person.name}'s avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-blue-900">{person.name}</h3>
                  <p className="text-blue-500">{person.role}</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="w-8 h-8 text-blue-200 absolute -left-2 -top-2 transform -scale-x-100" />
                <p className="text-blue-700 leading-relaxed pl-6">{person.testimonial}</p>
              </div>
            </div>
          ))}
        </div>

        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg shadow-blue-100 hover:bg-blue-50 transition-colors duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
        )}
        
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg shadow-blue-100 hover:bg-blue-50 transition-colors duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        )}
      </div>
    </div>
  );
}