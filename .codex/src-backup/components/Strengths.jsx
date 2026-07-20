import { useRef, useEffect } from "react";
import "./Strengths.css";

const strengths = [
  {
    title: "跨境品牌全链路操盘",
    desc: "主导跨境DTC自有品牌从0到1完整搭建，精通Facebook/Instagram/TikTok三大海外社媒矩阵运营，覆盖账号冷启动、内容策划、红人营销到引流转化全流程。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "海外社媒矩阵运营",
    desc: "独立搭建Facebook/Instagram/TikTok社媒矩阵，精通账号冷启动与垂直品类内容体系搭建。视频新号3个月内破百万播放，覆盖欧美、拉美多区域市场。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: "数据驱动业务增长",
    desc: "敏锐的数据洞察力，擅长搭建数据可视化看板、输出市场分析报告指导策略迭代。曾助力团队拿下北美百万级订单，单场活动ROI突破1900%，实现品牌声量与销售双提升。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: "复合工具与创作能力",
    desc: "具备内容策划、平面/音视频创作、商务洽谈的综合能力。熟练使用Excel、Power BI、Photoshop、DaVinci、Capcut等工具，可独立完成从内容生产到项目落地的全环节。",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
];

function GlowCard({ children }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const relX = (x / rect.width) * 100;
      const relY = (y / rect.height) * 100;
      card.style.setProperty("--glow-x", `${relX}%`);
      card.style.setProperty("--glow-y", `${relY}%`);
      card.style.setProperty("--glow-intensity", "1");
    };

    const handleMouseLeave = () => {
      card.style.setProperty("--glow-intensity", "0");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="strength-card magic-bento-card--border-glow">
      {children}
    </div>
  );
}

export default function Strengths() {
  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <div className="section-header-text">
            <span className="section-en">Strengths</span>
            <h2 className="section-cn">核心优势</h2>
          </div>
        </div>
        <div className="strengths-grid">
          {strengths.map((s, i) => (
            <GlowCard key={i}>
              <div className="strength-icon">{s.icon}</div>
              <h3 className="strength-title">{s.title}</h3>
              <p className="strength-desc">{s.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
