import { User, Car, Camera, Zap, Clock, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Urban Portrait Sessions',
      description: 'Authentic street portraits that capture personality against the urban backdrop.',
      price: 'Starting at $200',
      duration: '1-2 hours',
      features: ['Location scouting', 'Natural lighting', '30+ edited photos', 'Style consultation']
    },
    {
      icon: Car,
      title: 'Automotive Photography',
      description: 'Professional car photography showcasing vehicles in their urban environment.',
      price: 'Starting at $300',
      duration: '2-3 hours',
      features: ['Multiple angles', 'Detail shots', '40+ edited photos', 'Location flexibility']
    },
    {
      icon: Zap,
      title: 'Motorcycle Shoots',
      description: 'Dynamic motorcycle photography emphasizing power, style, and urban aesthetics.',
      price: 'Starting at $250',
      duration: '1.5-2 hours',
      features: ['Action shots', 'Static poses', '35+ edited photos', 'Rider portraits']
    },
    {
      icon: Camera,
      title: 'Street Photography Tours',
      description: 'Join me for a photography walk through the city\'s most photogenic locations.',
      price: 'Starting at $150',
      duration: '3-4 hours',
      features: ['Photography tips', 'Location insights', 'Technique sharing', 'Small groups']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, style preferences, and specific requirements for the shoot.'
    },
    {
      step: '02',
      title: 'Location Planning',
      description: 'I scout and suggest the perfect urban locations that match your aesthetic goals.'
    },
    {
      step: '03',
      title: 'The Shoot',
      description: 'Professional photography session with guidance on posing and natural interaction.'
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Careful editing and color grading to enhance the urban atmosphere and mood.'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'High-resolution images delivered through a private online gallery within 48-72 hours.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized urban photography services focusing on authentic portraits and 
            automotive photography that captures the energy of city life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-orange-500">{service.price}</div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 text-orange-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-900 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Process</h3>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's collaborate to capture your story in the urban landscape. Every shoot is unique, 
              and I'm here to bring your vision to life.
            </p>
            <button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-10 py-4 rounded-lg transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;