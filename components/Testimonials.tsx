"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    initials: "RD",
    name: "Ratna Dewi",
    location: "Jakarta Selatan · Kocheng, Persia 3 thn",
    avatarBg: "bg-navy",
    shortText:
      "\"Kucing saya, Kocheng, tadinya susah banget kalau mau dimandiin — selalu kabur dan garuk-garuk. Tapi sama Mili, dia anteng banget. Sekarang grooming udah jadi hal yang dia tunggu-tunggu!\"",
    fullText:
      "\"Kucing saya, Kocheng, tadinya susah banget kalau mau dimandiin — selalu kabur dan garuk-garuk. Tapi sama Mili, dia anteng banget. Kayaknya Kocheng ngerti kalau dia lagi diurusin sama orang yang sabar. Sekarang grooming udah jadi hal yang dia tunggu-tunggu!\"",
  },
  {
    initials: "BP",
    name: "Bagas Prasetyo",
    location: "Bandung · Brownie, Labrador 2 thn",
    avatarBg: "bg-slate",
    shortText:
      "\"Mili mau repot-repot kenalan dulu sama Brownie sebelum mulai jalan bareng. Sekarang kalau liat Mili dateng, Brownie udah loncat-loncat duluan!\"",
    fullText:
      "\"Brownie tipe anjing yang super energik dan susah diajak jalan sama orang asing. Mili mau repot-repot kenalan dulu sama dia beberapa kali sebelum mulai jalan bareng. Sekarang kalau liat Mili dateng, Brownie udah loncat-loncat duluan!\"",
  },
  {
    initials: "SM",
    name: "Sinta Maharani",
    location: "Depok · Mochi, Shih Tzu 5 thn",
    avatarBg: "bg-blush",
    shortText:
      "\"Setiap hari mereka kirim foto dan update kondisi Mochi. Pulang-pulang Mochi sehat, wangi, dan tampak senang. Tidak akan titip ke tempat lain lagi!\"",
    fullText:
      "\"Waktu saya harus keluar kota 5 hari, saya titip Mochi sama Mili. Setiap hari mereka kirim foto dan update kondisi Mochi. Pulang-pulang Mochi sehat, wangi, dan tampak senang. Tidak akan titip ke tempat lain lagi!\"",
  },
];

function Stars() {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

function Card({
  t,
  text,
  className = "",
}: {
  t: (typeof testimonials)[0];
  text: string;
  className?: string;
}) {
  return (
    <div className={`testimonial-card p-7 ${className}`}>
      <Stars />
      <p className="text-navy/80 text-sm leading-relaxed mb-6 font-display italic">
        {text}
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-navy text-sm">{t.name}</p>
          <p className="text-slate text-xs">{t.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="testimoni" className="py-14 md:py-20" style={{ background: "#f0f6fb" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-animate>
          <span className="text-xs font-bold tracking-widest uppercase text-slate">
            Kata Mereka
          </span>
          <h2
            className="font-display font-bold text-navy mt-2 mb-4"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Pemilik Hewan Bicara
          </h2>
          <p className="text-slate max-w-xl mx-auto">
            Kepercayaan mereka adalah motivasi terbesar kami untuk terus
            memberikan yang terbaik.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div key={t.name} data-animate data-delay={i * 100}>
              <Card t={t} text={t.fullText} />
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touchStart;
              if (dx < -40) next();
              if (dx > 40) prev();
            }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <Card
                  key={t.name}
                  t={t}
                  text={t.shortText}
                  className="min-w-full"
                />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === i ? "bg-navy w-6" : "bg-navy/30 w-2.5"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-navy/20 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
