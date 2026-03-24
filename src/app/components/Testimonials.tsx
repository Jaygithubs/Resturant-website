"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3",
    text: "Absolutely incredible dining experience! The butter chicken was the best I've ever had. The ambiance and service were impeccable.",
    rating: 5,
    date: "March 2024",
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    text: "Authentic flavors that transport you straight to India. The tandoori platter is a must-try! Will definitely be coming back.",
    rating: 5,
    date: "February 2024",
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
    text: "Amazing vegetarian options! The palak paneer was divine. Great service and beautiful atmosphere.",
    rating: 5,
    date: "January 2024",
  },
  {
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
    text: "Best Indian restaurant in town! The biryani is exceptional and the staff is incredibly welcoming.",
    rating: 4,
    date: "March 2024",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-gray-800 mb-4">
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our valued customers
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-orange-600"
                />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <h3 className="text-2xl font-bold text-gray-800">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-500">{testimonials[currentIndex].date}</p>
              </div>
            </div>
          </ScrollAnimation>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 md:-ml-8 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 md:-mr-8 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-orange-600"
                  : "bg-gray-300 hover:bg-orange-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;