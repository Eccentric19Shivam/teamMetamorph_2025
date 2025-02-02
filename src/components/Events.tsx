function App() {
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
    <div id= 'events' className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nimbus Events</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div 
            key={index}
            className="group relative h-[400px] overflow-hidden rounded-2xl"
          >
            {/* Image with zoom effect */}
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Overlay with details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-white/90 mb-1">
                    <span className="text-blue-400">Date:</span> {event.date}
                  </p>
                  <p className="text-white/90">
                    <span className="text-blue-400">Venue:</span> {event.venue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;