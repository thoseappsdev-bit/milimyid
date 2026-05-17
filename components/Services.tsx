import { Footprints, Scissors, Home, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Footprints,
    title: "Jalan-jalan",
    body: "Sesi jalan santai untuk menjaga kesehatan fisik dan mental anjingmu, dengan pemandu yang sabar dan berpengalaman. Setiap langkah disesuaikan dengan energi dan kenyamanannya.",
    waText: "Halo%20Mili!%20Saya%20tertarik%20dengan%20layanan%20jalan-jalan%20untuk%20anjing%20saya.",
    delay: 0,
  },
  {
    icon: Scissors,
    title: "Grooming",
    body: "Mandi, potong bulu, trimming kuku, dan perawatan telinga — semua dalam satu sesi yang nyaman dan tidak menegangkan, dilakukan dengan penuh kehati-hatian.",
    waText: "Halo%20Mili!%20Saya%20tertarik%20dengan%20layanan%20grooming%20untuk%20hewan%20saya.",
    delay: 100,
  },
  {
    icon: Home,
    title: "Penitipan",
    body: "Ketika kamu pergi, hewan kesayanganmu tetap mendapat perhatian penuh di lingkungan yang aman dan nyaman. Kami kirim update harian agar kamu tenang di mana pun berada.",
    waText: "Halo%20Mili!%20Saya%20tertarik%20dengan%20layanan%20penitipan%20hewan%20saya.",
    delay: 200,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-animate>
          <span className="text-xs font-bold tracking-widest uppercase text-slate">
            Apa yang Kami Tawarkan
          </span>
          <h2
            className="font-display font-bold text-navy mt-2 mb-3"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Layanan Kami
          </h2>
          <div className="w-12 h-1 bg-blush rounded-full mx-auto mb-4" />
          <p className="text-slate max-w-xl mx-auto">
            Setiap layanan dirancang untuk kenyamanan hewan kesayanganmu — bukan
            sekadar menyelesaikan tugas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, body, waText, delay }) => (
            <div
              key={title}
              className="service-card p-8 flex flex-col"
              data-animate
              data-delay={delay}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(36,88,121,0.08)" }}
              >
                <Icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display font-semibold text-navy text-xl mb-3">
                {title}
              </h3>
              <p className="text-slate text-sm leading-relaxed flex-1">{body}</p>
              <a
                href={`https://wa.me/6282221626313?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-navy font-semibold text-sm hover:gap-3 transition-all"
              >
                Tanya Harga <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
