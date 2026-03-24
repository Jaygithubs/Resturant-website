"use client";

import ScrollAnimation from "./ScrollAnimation";
import { Star } from "lucide-react";

const specials = [
  {
    name: "Tandoori Platter",
    description: "Assorted grilled delicacies marinated in aromatic spices",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3",
    tag: "Chef's Special",
  },
  {
    name: "Butter Chicken",
    description: "Creamy tomato curry with tender chicken pieces",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3",
    tag: "Popular",
  },
  {
    name: "Biryani",
    description: "Fragrant rice cooked with saffron and choice of meat",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3",
    tag: "Signature",
  },
];

const Specials = () => {
  return (
    <section id="specials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-gray-800 mb-4">
              Today's Specials
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our chef's curated selection of seasonal specialties
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <div className="group relative overflow-hidden rounded-lg shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {item.tag && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.tag}
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold">{item.name}</h3>
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-400">
                        {item.price}
                      </span>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700 transition-colors">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;