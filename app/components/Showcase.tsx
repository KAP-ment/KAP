"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Student Stories",
    image: "/images/screenshots/student-stories.png",
    description:
      "From preparing for exams to mastering new skills — learners trust KAPment to stay ahead.",
  },
  {
    id: 2,
    title: "Tutor Highlights",
    image: "/images/screenshots/tutor-highlights.png",
    description:
      "Local and global tutors bring knowledge directly to learners.",
  },
  {
    id: 3,
    title: "Community Events",
    image: "/images/screenshots/community-events.png",
    description:
      "Smart support makes learning faster, simpler, and more social.",
  },
  {
    id: 4,
    title: "KAPment Feed",
    image: "/images/screenshots/community-feed.png",
    description:
      "Share notes, short videos, and achievements with peers. Stay motivated, inspired, and connected.",
  },
];

export default function Showcase() {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Platform of Choice for Learners Everywhere
          </h2>
          <p className="text-lg text-gray-400">
            Showcasing how learners and communities thrive with KAPment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-56">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 flex-1">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
