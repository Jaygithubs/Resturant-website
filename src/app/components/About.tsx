"use client";

import ScrollAnimation from "./ScrollAnimation";
import { Utensils, Coffee, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations, prepared with authentic spices and techniques.",
    },
    {
      icon: <Coffee className="h-8 w-8 text-orange-600" />,
      title: "Fresh Ingredients",
      description: "We source only the finest, freshest ingredients from local farmers and trusted suppliers.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Expert Chefs",
      description: "Our master chefs bring years of experience and passion to every dish they create.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2010, we've been serving authentic Indian cuisine with a modern twist,
              creating memorable dining experiences for our guests.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimation direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600 rounded-lg -z-10" />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.2}>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
                Where Tradition Meets Innovation
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Saffron & Spice, we believe that great food brings people together. 
                Our journey began with a simple dream: to share the rich, diverse flavors 
                of Indian cuisine with the world while adding our own contemporary touch.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Every dish tells a story - from the aromatic biryanis of Hyderabad to 
                the butter chicken of Delhi, each recipe has been carefully curated and 
                perfected to delight your palate.
              </p>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
                Discover Our Journey
              </button>
            </div>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;