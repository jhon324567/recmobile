import { useEffect, useRef } from "react";
import "@/App.css";

const WHATSAPP = "5562995282327";

const buildWhats = (msg) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const LINKS = [
  {
    id: "orcamento",
    label: "Quero um orçamento de vídeo",
    icon: "🎥",
    href: buildWhats(
      "Olá Jhonnatan! Quero um orçamento de vídeo profissional. Pode me passar mais detalhes?"
    ),
    testid: "btn-orcamento-video",
    external: true,
  },
  {
    id: "mentoria-estrategia",
    label: "Mentoria de Estratégia de Negócios",
    icon: "🧠",
    href: buildWhats(
      "Olá Jhonnatan! Tenho interesse na Mentoria de Estratégia de Negócios. Como funciona?"
    ),
    testid: "btn-mentoria-estrategia",
    external: true,
  },
  {
    id: "mentoria-video",
    label: "Mentoria de Vídeo com Celular",
    icon: "🎬",
    href: buildWhats(
      "Olá Jhonnatan! Quero saber mais sobre a Mentoria de Vídeo com Celular."
    ),
    testid: "btn-mentoria-video",
    external: true,
  },
  {
    id: "portfolio",
    label: "Ver portfólio",
    icon: "💼",
    href: "https://www.instagram.com/recmobilepro?igsh=ZWN5ZzhtZGNvc3F4&utm_source=qr",
    testid: "btn-portfolio",
    external: true,
  },
];

const COVER_IMAGE =
  "https://customer-assets.emergentagent.com/job_fd159628-2c8e-45e5-98f0-b8ab9c5a40a3/artifacts/13qmtp2o_ChatGPT%20Image%202%20de%20mai.%20de%202026%2C%2019_58_19.png";

// Animated gold diagonal shimmer lines on canvas
function ShimmerCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w = 0,
      h = 0;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Diagonal "comet" lines that sweep across
    const angle = -Math.PI / 7; // gentle downward diagonal
    const lines = Array.from({ length: 14 }).map((_, i) => ({
      y: Math.random() * h,
      speed: 0.25 + Math.random() * 0.8,
      length: 160 + Math.random() * 260,
      offset: Math.random() * w * 1.8,
      opacity: 0.25 + Math.random() * 0.55,
      thick: Math.random() < 0.5 ? 1 : 1.6,
      hueShift: Math.random() * 10,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // soft vignette glow
      const grad = ctx.createRadialGradient(
        w * 0.5,
        h * 0.35,
        0,
        w * 0.5,
        h * 0.35,
        Math.max(w, h) * 0.7
      );
      grad.addColorStop(0, "rgba(20, 40, 78, 0.35)");
      grad.addColorStop(1, "rgba(5, 10, 22, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      lines.forEach((l) => {
        l.offset += l.speed;
        const x = ((l.offset) % (w + l.length * 2)) - l.length;
        const dx = Math.cos(angle) * l.length;
        const dy = Math.sin(angle) * l.length;

        const gradient = ctx.createLinearGradient(
          x,
          l.y,
          x + dx,
          l.y + dy
        );
        gradient.addColorStop(0, "rgba(201, 169, 97, 0)");
        gradient.addColorStop(
          0.5,
          `rgba(230, 201, 133, ${l.opacity})`
        );
        gradient.addColorStop(1, "rgba(201, 169, 97, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = l.thick;
        ctx.shadowColor = "rgba(230, 201, 133, 0.65)";
        ctx.shadowBlur = 14;

        ctx.beginPath();
        ctx.moveTo(x, l.y);
        ctx.lineTo(x + dx, l.y + dy);
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="shimmer-canvas"
      data-testid="shimmer-canvas"
      aria-hidden="true"
    />
  );
}

function LinkButton({ label, icon, href, testid }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="gold-btn group"
      data-testid={testid}
    >
      <span className="gold-btn-sheen" aria-hidden="true" />
      <span className="gold-btn-border" aria-hidden="true" />
      <span className="gold-btn-content">
        <span className="gold-btn-icon">{icon}</span>
        <span className="gold-btn-label">{label}</span>
        <svg
          className="gold-btn-arrow"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </span>
    </a>
  );
}

export default function App() {
  return (
    <div className="lux-root" data-testid="landing-page">
      <ShimmerCanvas />
      <div className="lux-noise" aria-hidden="true" />

      <main className="lux-container" data-testid="landing-container">
        {/* Cover */}
        <section className="cover-wrap" data-testid="cover-section">
          <div className="cover-glow" aria-hidden="true" />
          <div className="cover-frame">
            <img
              src={COVER_IMAGE}
              alt="Jhonnatan - Estrategista Digital"
              className="cover-img"
              data-testid="cover-image"
              loading="eager"
            />
            <span className="cover-corner tl" aria-hidden="true" />
            <span className="cover-corner tr" aria-hidden="true" />
            <span className="cover-corner bl" aria-hidden="true" />
            <span className="cover-corner br" aria-hidden="true" />
          </div>
        </section>

        {/* Title */}
        <header className="hero" data-testid="hero-section">
          <h1 className="hero-title" data-testid="hero-title">
            <span className="hero-title-name">Jhonnatan</span>
            <span className="hero-title-sep" aria-hidden="true">
              |
            </span>
            <span className="hero-title-role">Estrategista Digital</span>
          </h1>
          <div className="hero-divider" aria-hidden="true">
            <span className="hero-divider-dot" />
          </div>
          <p className="hero-sub" data-testid="hero-subtitle">
            <span>Vídeos</span>
            <em aria-hidden="true">•</em>
            <span>Branding</span>
            <em aria-hidden="true">•</em>
            <span>Anúncios</span>
            <em aria-hidden="true">•</em>
            <span>Resultados</span>
          </p>
        </header>

        {/* Buttons */}
        <nav className="links" data-testid="links-section">
          {LINKS.map((l) => (
            <LinkButton key={l.id} {...l} />
          ))}
        </nav>

        {/* Footer */}
        <footer className="lux-footer" data-testid="footer-section">
          <div className="footer-line" aria-hidden="true" />
          <p className="footer-phrase" data-testid="footer-phrase">
            Resultado não é sorte. É <span>estratégia aplicada</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}
