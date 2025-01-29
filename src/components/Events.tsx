import React from 'react';

const Events = () => {
  const events = [
    {
      title: "Material Testing Competition",
      date: "March 25, 2024",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80",
      description: "Test your knowledge of material properties and analysis techniques."
    },
    {
      title: "Advanced Composites Workshop",
      date: "March 26, 2024",
      image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&q=80",
      description: "Hands-on workshop on composite materials and their applications."
    },
    {
      title: "Innovation Challenge",
      date: "March 27, 2024",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80",
      description: "Present your innovative solutions to real-world material science challenges."
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nimbus Events</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-blue-400 mb-4">{event.date}</p>
                <p className="text-gray-400 mb-6">{event.description}</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;