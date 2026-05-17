import { MessageCircle, Users, CalendarCheck } from "lucide-react";
import { WaIcon } from "./icons";

const WA_URL =
  "https://wa.me/6282221626313?text=Halo%20Mili!%20Saya%20ingin%20memulai%20layanan%20perawatan%20hewan.";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Hubungi Kami",
    body: "Chat via WhatsApp, ceritakan tentang hewanmu, dan kita atur jadwal yang paling cocok untukmu.",
    delay: 0,
  },
  {
    num: "02",
    icon: Users,
    title: "Kenalan Dulu",
    body: "Sebelum memulai, kami luangkan waktu untuk berkenalan dengan hewanmu — biar dia nyaman dan percaya dulu.",
    delay: 150,
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Perawatan Rutin",
    body: "Setelah cocok, kami hadir secara rutin sesuai jadwal yang telah disepakati. Kamu tinggal santai.",
    delay: 300,
  },
];

function Connector() {
  return (
    <div
      className="hidden lg:flex items-center flex-none w-[60px]"
      style={{ marginTop: "6.5rem" }}
    >
      <div
        style={{
          width: "100%",
          height: "2px",
          borderTop: "2px dashed rgba(255,255,255,0.2)",
        }}
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-14 md:py-24" style={{ background: "#245879" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16" data-animate>
          <span className="text-xs font-bold tracking-widest uppercase text-white/60">
            Mulai dari Sini
          </span>
          <h2
            className="font-display font-bold text-white mt-2 mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Cara Kerjanya Sederhana
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Tidak perlu ribet. Dalam tiga langkah mudah, hewan peliharaanmu
            sudah dalam perawatan terbaik.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-start">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <>
                <div
                  key={step.num}
                  className="flex-1 relative text-center lg:text-center px-4 lg:px-6 step-mobile-wrap"
                  data-animate
                  data-delay={step.delay}
                >
                  <div className="relative inline-block mb-6">
                    <span
                      className="font-display font-bold text-white/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none"
                      style={{ fontSize: "5rem", lineHeight: 1 }}
                    >
                      {step.num}
                    </span>
                    <div className="relative z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mt-7">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg lg:text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">{step.body}</p>
                </div>
                {i < steps.length - 1 && <Connector key={`conn-${i}`} />}
              </>
            );
          })}
        </div>

        <div className="text-center mt-14" data-animate>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <WaIcon size={18} />
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
