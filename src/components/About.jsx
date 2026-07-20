import useRipple from "../hooks/useRipple.jsx";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import React, { useState, useEffect, useCallback } from "react";
import "./About.css";

const carouselImages = [
  "/homie-photo.png",
  "/carousel-1.jpg",
  "/carousel-2.jpg",
  "/carousel-3.jpg",
  "/carousel-4.jpg",
];

const stats = [
  { value: "6+", label: "年运营经验" },
  { value: "$3M", label: "半年B2B转化GMV" },
  { value: "100M+", label: "社媒曝光量" },
  { value: "19", label: "最高ROI" },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [currentIndex, isTransitioning]
  );

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % carouselImages.length;
    goTo(next);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    goTo(prev);
  }, [currentIndex, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [goNext]);

  const { addRipple, rippleElements } = useRipple();

  return (
    <section id="about" className="about" onClick={addRipple}>
      <div className="about-bg-pattern"></div>
      <div className="container">
        <div className="about-inner">
          <div className="about-left">
            <Reveal animation="fade-right" delay={0.05}>
              <img
                src="/Homie/hello.png"
                alt="Hello I'm"
                className="about-hello-img"
              />
            </Reveal>
            <Reveal animation="fade-up" delay={0.1}>
              <h2 className="about-name">邓洪敏 Homie</h2>
            </Reveal>
            <Reveal animation="fade-left" delay={0.15}>
              <p className="about-role">
                海外品牌运营负责人 · 跨境DTC全链路操盘
              </p>
            </Reveal>
            <Reveal animation="fade-up" delay={0.2}>
              <p className="about-bio">
                6年+全链路运营经验，深耕跨境DTC自有品牌从0到1搭建与海外社媒增长。操盘3C数码品类出海品牌全链路落地，半年GMV 300w美金，具备品效合一的运营思维与多项目管控能力。
              </p>
            </Reveal>
            <Reveal animation="blur-in" delay={0.25}>
              <p className="about-bio">
                主导跨境自有品牌从0到1完整搭建，半年涨粉26w，精通Facebook、Instagram、TikTok三大海外社媒矩阵运营，覆盖账号冷启动、内容策划、红人营销到引流转化全流程。
              </p>
            </Reveal>
            <div className="about-stats">
              {stats.map((s, i) => (
                <Reveal key={i} animation="scale-in" delay={0.1 * i}>
                  <SpotlightCard className="stat-item">
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="about-right">
            <Reveal animation="fade-left" delay={0.3}>
              <div className="about-photo-frame carousel">
                <div className="carousel-viewport">
                  {carouselImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Homie ${i + 1}`}
                      className={`carousel-slide ${i === currentIndex ? "active" : ""}`}
                    />
                  ))}
                </div>

                <button
                  className="carousel-btn carousel-btn-prev"
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  aria-label="上一张"
                >
                  ‹
                </button>
                <button
                  className="carousel-btn carousel-btn-next"
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  aria-label="下一张"
                >
                  ›
                </button>

                <div className="carousel-dots">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
                      onClick={(e) => { e.stopPropagation(); goTo(i); }}
                      aria-label={`第 ${i + 1} 张照片`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      {rippleElements}
    </section>
  );
}
