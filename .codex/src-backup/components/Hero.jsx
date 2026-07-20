import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X } from "lucide-react";
import "./Hero.css";

const ease = [0.16, 1, 0.3, 1];

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
      <circle cx="2" cy="2" r="1.5" fill="#fff" />
      <circle cx="10" cy="2" r="1.5" fill="#fff" />
      <circle cx="2" cy="10" r="1.5" fill="#fff" />
      <circle cx="10" cy="10" r="1.5" fill="#fff" />
    </svg>
  );
}

export default function Hero() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="home" className="hero-section">
      {/* Background Video */}
      <div className="hero-video-wrapper">
        <motion.video
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease }}
          autoPlay muted playsInline loop
          className="hero-video"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4" type="video/mp4" />
        </motion.video>
      </div>

      {/* Navbar */}
      <motion.nav
        className="hero-nav"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="hero-nav-inner">
          <div className="hero-nav-left">
            <a href="/" className="hero-logo">
              <img src="/hm-logo.png" alt="HM" className="hero-logo-img" />
              <span className="hero-brand-text">Homie Portfolio</span>
            </a>
            <a href="#projects" className="hero-menu-btn">
              <div className="hero-menu-circle">
                <Plus size={12} strokeWidth={3} color="#000" />
              </div>
              <span className="hero-menu-label">Main</span>
            </a>
            <div className="hero-tags hero-tags--nav">
              <a href="#about" className="hero-tag">About</a>
              <a href="#projects" className="hero-tag">Project</a>
              <a href="#strengths" className="hero-tag">Strengths</a>
            </div>
          </div>
          <div className="hero-nav-right">
            <button
              className="hero-adaptive-pill"
              onClick={() => setShowQR(true)}
              style={{ border: "none", cursor: "pointer" }}
            >
              <div className="hero-adaptive-circle">
                <GridIcon />
              </div>
              <span className="hero-adaptive-label">Contact</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="qr-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              className="qr-modal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="qr-close-btn"
                onClick={() => setShowQR(false)}
                aria-label="关闭"
              >
                <X size={18} strokeWidth={2} />
              </button>
              <img src="/qrcode.jpg" alt="微信二维码" className="qr-image" />
              <p className="qr-hint">扫码添加微信</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Content */}
      <motion.div
        className="hero-footer-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease }}
      >
        <div className="hero-footer-inner">
          <div className="hero-footer-left">
            <motion.div
              className="hero-subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
            >
              <span className="hero-dot" />
              <span>@Best digital card 2026</span>
            </motion.div>

            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
            >
              Deng Hongmin<br />把品牌的故事讲给世界听.
            </motion.h1>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease }}
            >
              <a href="#projects" className="hero-btn hero-btn--primary">查看案例</a>
              <a href="#about" className="hero-btn hero-btn--outline">品牌·运营·企划</a>
            </motion.div>
          </div>

          <div className="hero-footer-right">
            <div className="hero-tags hero-tags--footer">
              <span className="hero-tag">Brand</span>
              <span className="hero-tag">Operation</span>
              <span className="hero-tag">Planning</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
