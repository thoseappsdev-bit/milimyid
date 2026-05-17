import { WaIcon } from "./icons";

const WA_URL =
  "https://wa.me/6282221626313?text=Halo%20Mili!%20Saya%20ingin%20konsultasi%20tentang%20perawatan%20hewan%20saya.";

export default function CTABanner() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "linear-gradient(135deg, #245879 0%, #1a3f5c 100%)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center" data-animate>
        <h2
          className="font-display font-bold text-white mb-4"
          style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
        >
          Siap untuk mulai?
        </h2>
        <p className="text-white/70 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
          Hewan kesayanganmu menunggu perawatan terbaik. Chat kami sekarang —
          konsultasi gratis, tanpa kewajiban.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-base px-8 py-4 mb-6 w-full sm:w-auto justify-center"
        >
          <WaIcon size={20} />
          Hubungi via WhatsApp
        </a>
        <p className="text-white/50 text-sm mt-6">
          Atau email kami di{" "}
          <a
            href="mailto:hallo@mili.my.id"
            className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
          >
            hallo@mili.my.id
          </a>
        </p>
      </div>
    </section>
  );
}
