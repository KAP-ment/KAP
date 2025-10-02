import Image from 'next/image'

export default function Showcase() {
  return (
    <div className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">The Platform of Choice for Learners Everywhere</h2>
        <p className="mt-3 text-[#bfc6cb]">Showcasing how learners and communities thrive with KAPment.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="kap-card">
          <Image src="/images/screenshots/student-stories.png" alt="Student Stories" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 font-semibold">Student Stories</h3>
          <p className="text-[#9aa0a6] mt-2">From preparing for exams to mastering new skills — learners trust KAPment to stay ahead.</p>
        </div>

        <div className="kap-card">
          <Image src="/images/screenshots/tutor-highlights.png" alt="Tutor Highlights" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 font-semibold">Tutor Highlights</h3>
          <p className="text-[#9aa0a6] mt-2">Local and global tutors bring knowledge directly to learners.</p>
        </div>

        <div className="kap-card">
          <Image src="/images/screenshots/community-events.png" alt="Community Events" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 font-semibold">Community Events</h3>
          <p className="text-[#9aa0a6] mt-2">Smart support to make learning faster and simpler.</p>
        </div>

        <div className="kap-card">
          <Image src="/images/screenshots/community-feed.png" alt="KAP Score Showcase" width={400} height={240} className="rounded-md" />
          <h3 className="mt-4 font-semibold">Community Showcase</h3>
          <p className="text-[#9aa0a6] mt-2">Share notes, short videos, and achievements with peers. Stay motivated, inspired, and connected — all in one feed.</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/explore" className="px-8 py-3 rounded-full bg-white text-black font-semibold">View the KAPment Showcase</a>
      </div>
    </div>
  )
}
