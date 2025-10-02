export default function Showcase() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">The Platform of Choice for Learners Everywhere</h2>
        <p className="mt-3 text-slate-400">Showcasing how learners and communities thrive with KAPment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="h-40 bg-white rounded p-3 mb-3" />
          <h3 className="font-semibold">Student Stories</h3>
          <p className="text-slate-400 mt-2">From preparing for exams to mastering new skills — learners trust KAPment to stay ahead.</p>
        </article>

        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="h-40 bg-slate-800 rounded mb-3" />
          <h3 className="font-semibold">Tutor Highlights</h3>
          <p className="text-slate-400 mt-2">Local and global tutors bring knowledge directly to learners.</p>
        </article>

        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="h-40 bg-slate-800 rounded mb-3" />
          <h3 className="font-semibold">Community Events</h3>
          <p className="text-slate-400 mt-2">Smart support to make learning faster and simpler.</p>
        </article>

        <article className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
          <div className="h-40 bg-slate-800 rounded mb-3" />
          <h3 className="font-semibold">Leaderboard / KAP Score Showcase</h3>
          <p className="text-slate-400 mt-2">Progress is visible, motivating, and worth celebrating.</p>
        </article>
      </div>

      <div className="text-center mt-8">
        <a href="/explore" className="px-8 py-3 rounded-lg bg-white text-black font-semibold">View the KAPment Showcase</a>
      </div>
    </div>
  );
}
