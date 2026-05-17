export default function About() {
  return (
    <section id="tentang" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="flex-1" data-animate>
            <span className="text-xs font-bold tracking-widest uppercase text-slate">
              Tentang Kami
            </span>
            <h2
              className="font-display font-bold text-navy mt-3 mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
            >
              Kenapa Kami
              <br />
              Bernama Mili?
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              Mili berasal dari kata <em>&ldquo;mili&rdquo;</em> — kecil, tapi
              penuh makna. Kami percaya bahwa perawatan terbaik bukan yang
              paling mewah atau yang paling cepat, tapi yang paling tulus.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              Setiap hewan peliharaan berhak mendapat perhatian yang disesuaikan
              dengan kebutuhannya sendiri — tanpa terburu-buru, tanpa stres.
              Itulah mengapa setiap sesi kami selalu dimulai dengan mendengarkan
              dan memahami ritme mereka.
            </p>
            <blockquote className="pull-quote">
              &ldquo;Care, at the right pace.&rdquo;
            </blockquote>
          </div>

          {/* CSS illustration */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            data-animate
            data-delay="150"
          >
            <div className="relative w-72 h-72">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at 35% 35%, #e8f0f7, #f5e6c8)",
                  boxShadow: "0 20px 60px rgba(36,88,121,0.12)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                  <ellipse cx="60" cy="80" rx="30" ry="26" fill="#245879" opacity="0.18" />
                  <ellipse cx="35" cy="52" rx="14" ry="19" fill="#245879" opacity="0.14" transform="rotate(-20 35 52)" />
                  <ellipse cx="85" cy="52" rx="14" ry="19" fill="#245879" opacity="0.14" transform="rotate(20 85 52)" />
                  <ellipse cx="18" cy="76" rx="11" ry="14" fill="#245879" opacity="0.12" transform="rotate(-15 18 76)" />
                  <ellipse cx="102" cy="76" rx="11" ry="14" fill="#245879" opacity="0.12" transform="rotate(15 102 76)" />
                </svg>
              </div>
              <div className="absolute top-4 right-8 w-3 h-3 rounded-full float-c1" style={{ background: "rgba(249,185,159,0.6)" }} />
              <div className="absolute bottom-8 left-4 w-4 h-4 rounded-full float-c2" style={{ background: "rgba(106,132,166,0.3)" }} />
              <div className="absolute top-1/2 right-3 w-2 h-2 rounded-full float-c3" style={{ background: "rgba(36,88,121,0.2)" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
