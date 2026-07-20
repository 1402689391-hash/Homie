import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import useRipple from "../hooks/useRipple.jsx";
import Reveal from "./Reveal";
import "./Hero.css";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const [showQR, setShowQR] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const { addRipple, rippleElements } = useRipple();

  return (
    <section id="home" className="hero-section" onClick={addRipple}>
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
        <div className="hero-video-overlay" />
      </div>

      <motion.nav
        className={'hero-nav' + (scrolled ? ' hero-nav--scrolled' : '')}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="hero-nav-inner">
          <div className="hero-nav-left">
            <a href="/" className="hero-logo">
              <img src="/hm-logo.png" alt="HM" className="hero-logo-img" />
              <span className="hero-brand-text">Homie</span>
            </a>
            <div className="hero-tags hero-tags--nav">
              <a href="#about" className="hero-tag">About</a>
              <a href="#projects" className="hero-tag">Project</a>
              <a href="#strengths" className="hero-tag">Strengths</a>
            </div>
          </div>
          <div className="hero-nav-right">
            <button
              className="hero-btn hero-btn--contact"
              onClick={(e) => { e.stopPropagation(); setShowQR(true); }}
            >
              微信
            </button>
          </div>
        </div>
      </motion.nav>

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

      <div className="hairline" />

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
              <span className="hero-accent-bar" />
              <span>Deng Hongmin · Brand Portfolio · 2026</span>
            </motion.div>

            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
            >
              把品牌的故事<br />讲给世界听
            </motion.h1>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease }}
            >
              <a href="#projects" className="hero-btn hero-btn--primary">查看案例</a>
              <a href="#about" className="hero-btn hero-btn--outline">Brand · Operation · Planning</a>
            </motion.div>
          </div>

          <div className="hero-footer-right">
            <Reveal animation="scale-in" delay={0.1}>
              <span className="hero-folio">01 — 04</span>
            </Reveal>
          </div>
        </div>
      </motion.div>
      {rippleElements}
    </section>
  );
}
