import { PawLogo, WaIcon } from "./icons";

export default function Footer() {
  return (
    <footer style={{ background: "#1a3f5c" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawLogo size={28} color="white" opacity1={0.8} opacity2={0.6} opacity3={0.5} />
              <span className="font-display font-bold text-xl text-white">mili.</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-3">
              Perawatan hewan peliharaan yang sabar, teliti, dan penuh kasih sayang.
            </p>
            <p className="text-white/40 text-xs italic font-display">
              &ldquo;Care, at the right pace.&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#layanan", label: "Layanan" },
                { href: "#cara-kerja", label: "Cara Kerja" },
                { href: "#testimoni", label: "Testimoni" },
                { href: "#tentang", label: "Tentang Kami" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <WaIcon size={16} className="mt-0.5 flex-shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/6282221626313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  +62 822 2162 6313
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  opacity="0.6"
                  className="mt-0.5 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:hallo@mili.my.id"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  hallo@mili.my.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © 2025 Mili Animal Care. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            Dibuat dengan ❤️ untuk para pecinta hewan.
          </p>
        </div>
      </div>
    </footer>
  );
}
