import Image from 'next/image';

const testimonials = [
  { name: 'Ananya', role: 'University Student', quote: 'KAPment helped me stay consistent with my study. The KAP Score keeps me motivated like never before.', photo: '/images/screenshots/avatar1.jpg' },
  { name: 'Ravi', role: 'Physics Tutor', quote: 'The workshops feature makes it so easy to connect with students, both locally and globally.', photo: '/images/screenshots/avatar2.jpg' },
  { name: 'Sarah', role: 'Study Partner & Mentor', quote: 'Our study group found a home on KAPment — it feels safe, collaborative, and fun.', photo: '/images/screenshots/avatar3.jpg' }
];

export default function Testimonials() {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Trusted by Learners and Educators Worldwide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
            <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border border-slate-700 mb-4">
              <Image src={t.photo} alt={t.name} width={80} height={80} className="object-cover" />
            </div>
            <blockquote className="text-slate-200 italic">“{t.quote}”</blockquote>
            <div className="mt-4">
              <div className="font-semibold">{t.name}</div>
              <div className="text-slate-400 text-sm">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
