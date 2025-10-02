"use client";

import Image from "next/image";

export default function Showcase() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          The Platform of Choice for Learners Everywhere
        </h2>
        <p className="mt-3 text-slate-400">
          Showcasing how learners and communities thrive with KAPment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Student Stories */}
        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="relative w-full h-40 bg-slate-800 rounded mb-3">
            <Image
              src="/images/screenshots/student-stories.png"
              alt="Student Stories"
              fill
              className="object-contain p-2"
            />
          </div>
          <h3 className="font-semibold">Student Stories</h3>
          <p className="text-slate-400 mt-2">
            From preparing for exams to mastering new skills — learners trust
            KAPment to stay ahead.
          </p>
        </article>

        {/* Tutor Highlights */}
        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="relative w-full h-40 bg-slate-800 rounded mb-3">
            <Image
              src="/images/screenshots/tutor-highlights.png"
              alt="Tutor Highlights"
              fill
              className="object-contain p-2"
            />
          </div>
          <h3 className="font-semibold">Tutor Highlights</h3>
          <p className="text-slate-400 mt-2">
            Local and global tutors bring knowledge directly to learners.
          </p>
        </article>

        {/* Community Events */}
        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="relative w-full h-40 bg-slate-800 rounded mb-3">
            <Image
              src="/images/screenshots/community-events.png"
              alt="Community Events"
              fill
              className="object-contain p-2"
            />
          </div>
          <h3 className="font-semibold">Community Events</h3>
          <p className="text-slate-400 mt-2">
            Smart support to make learning faster and simpler.
          </p>
        </article>

        {/* KAPment Feed */}
        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="relative w-full h-40 bg-slate-800 rounded mb-3">
            <Image
              src="/images/screenshots/community-feed.png"
              alt="KAPment Feed"
              fill
              className="object-contain p-2"
            />
          </div>
          <h3 className="font-semibold">KAPment Feed</h3>
          <p className="text-slate-400 mt-2">
            Share notes, short videos, and achievements with peers. Stay
            motivated, inspired, and connected.
          </p>
        </article>
      </div>

      <div className="text-center mt-8">
        <a
          href="/explore"
          className="px-8 py-3 rounded-lg bg-white text-black font-semibold"
        >
          View the KAPment Showcase
        </a>
      </div>
    </div>
  );
}
