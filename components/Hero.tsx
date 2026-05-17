import { WaIcon } from "./icons";

const WA_URL =
  "https://wa.me/6282221626313?text=Halo%20Mili!%20Saya%20ingin%20tanya%20tentang%20layanan%20perawatan%20hewan.";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left: copy */}
          <div className="flex-1 text-center md:text-left" data-animate>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-slate mb-4 bg-slate/10 px-4 py-1.5 rounded-full">
              Perawatan Hewan Peliharaan
            </span>
            <h1
              className="font-display font-bold text-navy mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)" }}
            >
              Setiap Langkah,
              <br />
              <span className="italic text-slate">Sepenuh Hati.</span>
            </h1>
            <p className="text-slate font-body text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Mili hadir untuk menemani hewan kesayanganmu — sabar, teliti, dan
              penuh kasih sayang. Karena setiap hewan punya ritme tersendiri
              yang layak untuk dihormati.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                <WaIcon size={18} />
                Hubungi via WhatsApp
              </a>
              <a
                href="#layanan"
                className="btn-ghost w-full sm:w-auto justify-center"
              >
                Lihat Layanan
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="trust-badge">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                100+ Pelanggan
              </span>
              <span className="trust-badge">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Berpengalaman
              </span>
              <span className="trust-badge">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Respon Cepat
              </span>
            </div>
          </div>

          {/* Right: CSS illustration */}
          <div
            className="flex-1 flex justify-center items-center"
            data-animate
            data-delay="200"
          >
            <div className="relative sm:overflow-visible overflow-hidden rounded-full">
              <div className="paw-circle float-paw">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity="0.25">
                  <ellipse cx="60" cy="80" rx="30" ry="26" fill="#245879" />
                  <ellipse cx="35" cy="52" rx="14" ry="19" fill="#245879" transform="rotate(-20 35 52)" />
                  <ellipse cx="85" cy="52" rx="14" ry="19" fill="#245879" transform="rotate(20 85 52)" />
                  <ellipse cx="18" cy="76" rx="11" ry="14" fill="#245879" transform="rotate(-15 18 76)" />
                  <ellipse cx="102" cy="76" rx="11" ry="14" fill="#245879" transform="rotate(15 102 76)" />
                </svg>
              </div>

              {/* Floating chips */}
              <div
                className="float-chip float-c1"
                style={{ top: "10%", right: "-20%", transform: "rotate(3deg)" }}
              >
                <svg width="14" height="14" fill="none" stroke="#245879" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Grooming
              </div>
              <div
                className="float-chip float-c2"
                style={{ bottom: "15%", left: "-18%", transform: "rotate(-4deg)" }}
              >
                <svg width="14" height="14" fill="none" stroke="#245879" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
                Jalan-jalan
              </div>
              <div
                className="float-chip float-c3"
                style={{ bottom: "-5%", right: "5%", transform: "rotate(2deg)" }}
              >
                <svg width="14" height="14" fill="none" stroke="#245879" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Penitipan
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
