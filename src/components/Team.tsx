import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';
import { teamData } from '../../assets/team';

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const cardsPerView = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
  };

  const handleCardInteraction = (index: number) => {
    if (window.matchMedia('(hover: none)').matches) {
      // For touch devices
      setSelectedCard(selectedCard === index ? null : index);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${(currentIndex * 100) / cardsPerView.xl}%`
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut"
            }}
          >
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
                onClick={() => handleCardInteraction(index)}
              >
                <motion.div
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <motion.div
                      className="aspect-[4/5] relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={member["png format pic"].replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?export=view&id=').replace('/view?usp=drivesdk', '')}
                        alt={member.Name}
                        className="w-full h-full object-cover"
                      />
                      {(isHovered === index || selectedCard === index) && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute top-4 left-4 flex gap-3"
                        >
                          {member["linked in url"] && (
                            <motion.a
                              href={member["linked in url"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white p-2 rounded-full hover:bg-gray-100"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Linkedin className="w-5 h-5 text-blue-600" />
                            </motion.a>
                          )}
                          {member["insta url"] && (
                            <motion.a
                              href={member["insta url"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white p-2 rounded-full hover:bg-gray-100"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Instagram className="w-5 h-5 text-pink-600" />
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                  <div className="p-4">
                    {(isHovered === index || selectedCard === index) ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2"
                      >
                        <p className="text-gray-600 italic text-sm">
                          "{member["life motto"]}"
                        </p>
                        <div className="pt-2 border-t border-gray-100">
                          <h3 className="font-bold text-gray-900">
                            {member.Name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {member.Post}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {member.Name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {member.Post}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(teamData.length / cardsPerView.xl) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView.xl)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / cardsPerView.xl)
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;