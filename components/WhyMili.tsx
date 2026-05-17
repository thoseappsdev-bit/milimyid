import { Heart, ShieldCheck, Eye } from "lucide-react";

const cards = [
  {
    icon: Heart,
    title: "Sabar & Telaten",
    body: "Kami tidak terburu-buru. Setiap hewan punya ritme tersendiri, dan kami mengikutinya dengan penuh kesabaran dan perhatian.",
    delay: 0,
  },
  {
    icon: ShieldCheck,
    title: "Terpercaya",
    body: "Lebih dari 100 keluarga sudah menitipkan hewan peliharaan mereka kepada kami. Kepercayaan itu kami jaga setiap harinya.",
    delay: 100,
  },
  {
    icon: Eye,
    title: "Perhatian Penuh",
    body: "Setiap sesi dicatat, setiap perubahan dilaporkan. Kamu selalu tahu kondisi terkini hewan kesayanganmu.",
    delay: 200,
  },
];

export default function WhyMili() {
  return (
    <section id="kenapa-mili" className="py-14 md:py-20 bg-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-animate>
          <span className="text-xs font-bold tracking-widest uppercase text-slate">
            Nilai Kami
          </span>
          <h2
            className="font-display font-bold text-navy mt-2 mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Kenapa Pilih Mili?
          </h2>
          <p className="text-slate max-w-xl mx-auto">
            Kami percaya perawatan terbaik adalah perawatan yang paling tulus —
            bukan yang tercepat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map(({ icon: Icon, title, body, delay }) => (
            <div
              key={title}
              className="glass-card p-8"
              data-animate
              data-delay={delay}
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-display font-semibold text-navy text-xl mb-3">
                {title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
