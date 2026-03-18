import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const stagger = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}
const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(165deg, #0F0A2E 0%, #1E1B4B 25%, #3730A3 50%, #4F46E5 75%, #6366F1 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "-10%",
          width: "60%",
          height: "70%",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-15%",
          width: "50%",
          height: "60%",
          background:
            "radial-gradient(ellipse, rgba(20,184,166,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Center spotlight behind content */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          width: "80%",
          height: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Dot grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 24px 40px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Dept badge */}
        <motion.div variants={fadeUp}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34D399",
                boxShadow: "0 0 8px rgba(52,211,153,0.6)",
              }}
            />
            <span
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              ICE Department &middot; NSTU
            </span>
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          variants={fadeUp}
          style={{ marginBottom: 28, position: "relative" }}
        >
          {/* Glow ring behind logo */}
          <div
            style={{
              position: "absolute",
              inset: -16,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.12)",
              border: "2px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.3), inset 0 0 30px rgba(255,255,255,0.05), 0 0 60px rgba(99,102,241,0.15)",
              position: "relative",
            }}
          >
            <img
              src="/nstu-icon.png"
              alt="NSTU"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "50%",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(30px, 8vw, 44px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: 14,
          }}
        >
          Cover Page
          <br />
          <span style={{ color: "#A78BFA" }}>Generator</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: 340,
            marginBottom: 40,
          }}
        >
          Generate assignment, and lab report cover pages — instantly,
          beautifully.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={fadeUp}
          style={{
            width: "100%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {/* Active card */}
          <button
            onClick={() => navigate("/cover-page")}
            style={{
              width: "100%",
              padding: "20px 22px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.16)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 16,
              textAlign: "left",
              transition: "all 0.22s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.16)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.25)";
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg, #6366F1, #A78BFA)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 3,
                }}
              >
                Cover Page
              </div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)" }}>
                Assignment &amp; lab report covers
              </div>
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Coming soon card */}
          <div
            style={{
              width: "100%",
              padding: "20px 22px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 16,
              textAlign: "left",
              opacity: 0.5,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 3,
                }}
              >
                Lab Individual
              </div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.3)" }}>
                Individual experiment sheets
              </div>
            </div>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 99,
                background: "rgba(52,211,153,0.15)",
                border: "1px solid rgba(52,211,153,0.25)",
                color: "#6EE7B7",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              coming Soon
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "16px 24px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.04em",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Dept. of Information &amp; Communication Engineering
        </p>
        <p
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.04em",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          © MD. Saidul Islam{" "}
        </p>
      </div>
    </motion.div>
  );
}
