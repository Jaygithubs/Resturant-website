"use client";

import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

const menuCategories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "mains", name: "Main Course" },
  { id: "breads", name: "Breads & Rice" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = {
  appetizers: [
    { name: "Vegetable Samosa", description: "Crispy pastry filled with spiced potatoes and peas", price: "$6.99" },
    { name: "Paneer Tikka", description: "Grilled cottage cheese marinated in yogurt and spices", price: "$12.99" },
    { name: "Chicken 65", description: "Spicy fried chicken with curry leaves", price: "$11.99" },
    { name: "Onion Bhaji", description: "Crispy onion fritters with mint chutney", price: "$7.99" },
  ],
  mains: [
    { name: "Chicken Tikka Masala", description: "Grilled chicken in creamy tomato sauce", price: "$18.99" },
    { name: "Lamb Rogan Josh", description: "Tender lamb cooked in Kashmiri spices", price: "$21.99" },
    { name: "Palak Paneer", description: "Spinach with cottage cheese cubes", price: "$15.99" },
    { name: "Fish Curry", description: "Fresh fish in coconut curry sauce", price: "$19.99" },
  ],
  breads: [
    { name: "Garlic Naan", description: "Leavened flatbread with garlic butter", price: "$3.99" },
    { name: "Butter Naan", description: "Soft naan brushed with butter", price: "$2.99" },
    { name: "Jeera Rice", description: "Basmati rice tempered with cumin", price: "$4.99" },
    { name: "Biryani", description: "Fragrant rice with saffron and spices", price: "$16.99" },
  ],
  desserts: [
    { name: "Gulab Jamun", description: "Milk solids dumplings in sugar syrup", price: "$5.99" },
    { name: "Kulfi", description: "Traditional Indian ice cream", price: "$4.99" },
    { name: "Rasmalai", description: "Cottage cheese patties in sweet milk", price: "$6.99" },
    { name: "Gajar Ka Halwa", description: "Carrot pudding with nuts", price: "$5.99" },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-gray-800 mb-4">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our carefully crafted dishes that celebrate the diversity of Indian cuisine
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-orange-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;