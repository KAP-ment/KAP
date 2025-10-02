"use client";

import Image from "next/image";

export default function Showcase() {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Platform of Choice for Learners Everywhere
          </h2>
          <p className="text-lg text-zinc-400">
            Showcasing how learners and communities thrive with KAPment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Student Stories */}
          <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col">
            <div className="relative w-full h-44 bg-zinc-800 rounded mb-4">
              <Image
                src="/images/screenshots/student-stories.png"
                alt="Student Stories"
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="font-semibold text-white">Student Stories</h3>
            <p className="text-zinc-400 mt-2 text-sm">
              From preparing for exams to mastering new skills — learners trust
              KAPment to stay ahead.
            </p>
          </article>

          {/* Tutor Highlights */}
          <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col">
            <div className="relative w-full h-44 bg-zinc-800 rounded mb-4">
              <Image
                src="/images/screenshots/tutor-highlights.png"
                alt="Tutor Highlights"
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="font-semibold text-white">Tutor Highlights</h3>
            <p className="text-zinc-400 mt-2 text-sm">
              Local and global tutors bring knowledge directly to learners.
            </p>
          </article>

          {/* Community Events */}
          <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col">
            <div className="relative w-full h-44 bg-zinc-800 rounded mb-4">
              <Image
                src="/images/screenshots/community-events.png"
                alt="Community Events"
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="font-semibold text-white">Community Events</h3>
            <p className="text-zinc-400 mt-2 text-sm">
              Smart support to make learning faster and simpler.
            </p>
          </article>

          {/* KAPment Feed */}
          <article className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col">
            <div className="relative w-full h-44 bg-zinc-800 rounded mb-4">
              <Image
                src="/images/screenshots/community-feed.png"
                alt="KAPment Feed"
                fill
                className="object-contain p-2"
              />
            </div>
            <h3 className="font-semibold text-white">KAPment Feed</h3>
            <p className="text-zinc-400 mt-2 text-sm">
              Share notes, short videos, and achievements with peers. Stay
              motivated, inspired, and connected.
            </p>
          </article>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="/explore"
            className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            View the KAPment Showcase
          </a>
        </div>
      </div>
    </section>
  );
}
