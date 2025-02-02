import React from 'react';

const Events = () => {
  const events = [
    {
      title: "Canva Workshop",
      date: "Date: January 24, 2025",
      image: "/events/canva.jpg",
      venue: "Venue: LH S3"
    },
    {
      title: "Tinkercad Workshop",
      date: "Date: January 31, 2025",
      image: "/events/circuit.jpg",
      venue : "Venue: LH S3"
    },
    {
      title: "Reaction Speed",
      date: "Date: Innovission",
      image: "/events/reaction.png",
      venue: "Time: 12:00 PM onwards"
    },
    {
      title: "Lattice Race",
      date: "Date: To be announced.",
      image: "/events/lattice.png",
      venue: "Venue: To be announced."
    },
    {
      title: "Geo Guesser",
      date: "Date: To be announced.",
      image: "/events/geo.jpg",
      venue: "Venue: To be announced."
    },
    {
      title: "Guest Lecture",
      date: "Date: To be announced.",
      image: "/events/guest.jpg",
      venue: "Venue: To be announced."
    },
    {
      title: "Queen's Gambit",
      date: "Date: To be announced.",
      image: "/events/quuen.png",
      venue: "Venue: To be announced."
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
                <p className="text-gray-400 mb-6">{event.venue}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;