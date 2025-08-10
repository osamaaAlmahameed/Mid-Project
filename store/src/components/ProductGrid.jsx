import React from 'react';
import { Link } from 'react-router-dom';

import imageBox1 from '../assets/Laptop.jpg';
import imageBox2 from '../assets/clothes.jpg';
import imageBox3 from '../assets/womenClothing.jpg';
import imageBox4 from '../assets/jewelery.jpg';

const CategoryCard = ({ title, slug, image }) => {
  // use encodeURIComponent to create safe URL (handles spaces/apostrophes)
  const to = `/products/${encodeURIComponent(slug)}`;

  return (
    <Link to={to} className="block">
      <div className="bg-[#11112a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#505DD4] cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

const ProductGrid = () => {
  const categories = [
    { title: 'Electronics', slug: 'electronics', image: imageBox1 },
    { title: "Men's Clothing", slug: "men's clothing", image: imageBox2 },
    { title: "Women's Clothing", slug: "women's clothing", image: imageBox3 },
    { title: 'Jewelery', slug: 'jewelery', image: imageBox4 },
  ];

  return (
    <section
      id="Product"
      className="bg-gradient-to-b from-[#06143D] via-[#0B0F1B] border border-blue-600 text-white py-12 px-6 border-t border-[#505DD4]"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Product Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((c) => (
          <CategoryCard key={c.slug} title={c.title} slug={c.slug} image={c.image} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
