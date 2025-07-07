import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Camera, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you within 24 hours to discuss your project.');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call/Text',
      value: '(555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Available 9AM-8PM PST'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@urbanlensstudio.com',
      link: 'mailto:hello@urbanlensstudio.com',
      description: 'Response within 24hrs'
    },
    {
      icon: MapPin,
      label: 'Based in',
      value: 'Los Angeles, CA',
      link: '#',
      description: 'Available for travel'
    },
    {
      icon: Instagram,
      label: 'Follow',
      value: '@urbanlensstudio',
      link: '#',
      description: 'Daily photo stories'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to capture your story in the urban landscape? Whether it's portraits, 
            automotive photography, or a creative collaboration, I'm here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">{info.label}</div>
                    <a 
                      href={info.link}
                      className="text-white hover:text-orange-400 transition-colors duration-300 text-lg font-semibold"
                    >
                      {info.value}
                    </a>
                    <div className="text-sm text-gray-400 mt-1">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 text-orange-400 mr-3" />
                Quick Response Promise
              </h4>
              <p className="text-gray-300 leading-relaxed">
                I understand that timing matters for your projects. I guarantee a personal response 
                to all inquiries within 24 hours, often much sooner. Let's discuss your vision and 
                make it happen!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Camera className="w-7 h-7 text-orange-500 mr-3" />
              Start Your Project
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    <option value="urban-portrait">Urban Portrait Session</option>
                    <option value="automotive">Car Photography</option>
                    <option value="motorcycle">Motorcycle Shoot</option>
                    <option value="street-tour">Street Photography Tour</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="150-250">$150 - $250</option>
                  <option value="250-400">$250 - $400</option>
                  <option value="400-600">$400 - $600</option>
                  <option value="600+">$600+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell me about your vision *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Describe your project, style preferences, location ideas, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Project Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;