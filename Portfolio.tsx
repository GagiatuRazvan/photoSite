import React, { useState } from 'react';
import { Calendar, MapPin, Camera, Heart } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'portraits', label: 'Urban Portraits' },
    { id: 'automotive', label: 'Cars & Bikes' },
    { id: 'street', label: 'Street Life' }
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'portraits',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Faces of the City: Downtown Portraits',
      excerpt: 'Exploring the diverse stories written in the faces of urban dwellers during golden hour.',
      date: '2024-01-15',
      location: 'Downtown LA',
      readTime: '5 min read',
      likes: 127
    },
    {
      id: 2,
      category: 'automotive',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Chrome and Concrete: Motorcycle Series',
      excerpt: 'The relationship between machine and environment in urban motorcycle photography.',
      date: '2024-01-12',
      location: 'Industrial District',
      readTime: '7 min read',
      likes: 203
    },
    {
      id: 3,
      category: 'street',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Rush Hour Rhythms',
      excerpt: 'Capturing the choreographed chaos of city life during peak commuting hours.',
      date: '2024-01-10',
      location: 'Metro Station',
      readTime: '4 min read',
      likes: 89
    },
    {
      id: 4,
      category: 'automotive',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Classic Cars in Modern Spaces',
      excerpt: 'How vintage automobiles create striking contrasts against contemporary architecture.',
      date: '2024-01-08',
      location: 'Arts District',
      readTime: '6 min read',
      likes: 156
    },
    {
      id: 5,
      category: 'portraits',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Night Shift: After Dark Portraits',
      excerpt: 'Using neon lights and urban glow to create dramatic portrait photography.',
      date: '2024-01-05',
      location: 'Neon District',
      readTime: '8 min read',
      likes: 234
    },
    {
      id: 6,
      category: 'street',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Urban Geometry: Lines and Shadows',
      excerpt: 'Finding abstract beauty in the architectural elements that define city landscapes.',
      date: '2024-01-03',
      location: 'Financial District',
      readTime: '5 min read',
      likes: 98
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each photograph tells a story. Dive into my latest urban adventures, 
            behind-the-scenes insights, and the stories that unfold through my lens.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {post.location}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Camera className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-2" />
                    {post.likes}
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gray-900 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                  Read Story
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;