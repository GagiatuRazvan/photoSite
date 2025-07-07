import { Camera, MapPin, Clock, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Camera, number: '2K+', label: 'Photos Captured' },
    { icon: MapPin, number: '15+', label: 'Cities Explored' },
    { icon: Clock, number: '3+', label: 'Years Experience' },
    { icon: Eye, number: '50K+', label: 'Story Views' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              The Story Behind
              <span className="text-orange-500 block">The Lens</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              What started as a fascination with the urban landscape has evolved into a passion for 
              capturing the authentic moments that define city life. I find beauty in the contrast 
              between human emotion and industrial architecture, between the sleek lines of a 
              motorcycle and the gritty texture of concrete.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              My photography focuses on two main subjects: the people who bring cities to life 
              through candid urban portraits, and the machines that define modern culture through 
              automotive and motorcycle photography. Each image tells a story of connection, 
              movement, and the raw energy that pulses through urban environments.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-6"></div>
            <img 
              src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Photographer with camera"
              className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20">
              <div className="text-sm text-gray-600 mb-1">Currently shooting in</div>
              <div className="text-xl font-bold text-gray-900">Downtown LA</div>
              <div className="text-orange-500 text-sm font-medium">📍 Live location</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;