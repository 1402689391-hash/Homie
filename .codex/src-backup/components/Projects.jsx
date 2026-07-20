import { useRef, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "YEZONE 跨境DTC品牌搭建",
    company: "广州市益众电子有限公司 · 2025",
    tags: ["品牌0到1搭建", "社媒矩阵", "渠道规范"],
    desc: "主导跨境DTC自有品牌从0到1全链路落地，输出品牌定位与视觉识别体系，独立搭建Facebook/Instagram/TikTok海外社媒矩阵，覆盖欧美、拉美核心市场，每月产出品牌信任内容30+条。",
    color: "#000",
  },
  {
    title: "新品推广 ROI 1900% 策略",
    company: "广州市行动者科技 · 2022-2023",
    tags: ["KOL营销", "私域运营", "转化增长"],
    desc: "联系10名百万博主与30名十万级KOL，以产品置换达成合作，新品销售额破百万。建军节福利特购活动ROI突破1900%。为品牌聚集2000+高粘性用户，5个粉丝群均超400人。",
    color: "#444",
  },
  {
    title: "CRM体系与工作流搭建",
    company: "商伴（广东）国际管理 · 2023-2024",
    tags: ["CRM搭建", "流程优化", "团队管理"],
    desc: "设计官网结构与全新工作流，从0搭建CRM平台，实现前端后端信息匹配，提升人效。三人团队月销售额达40w元，Q1-Q2公司盈利140w+。首月触达精准客户70+，转化率55%。",
    color: "#666",
  },
  {
    title: "3C品类海外社媒矩阵增长",
    company: "跨品类运营经验 · 2022-至今",
    tags: ["内容策划", "数据分析", "品牌增长"],
    desc: "精通Facebook/Instagram/TikTok三大社媒运营，覆盖账号冷启动到引流转化全流程。视频新号3个月内破百万播放量，内容赋能亚马逊/速卖通等多平台销售，协助拿下北美百万级订单。",
    color: "#888",
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
      card.style.setProperty("--glow-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--glow-y", `${(y / rect.height) * 100}%`);
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
    <div ref={cardRef} className="project-card magic-bento-card--border-glow">
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02</span>
          <div className="section-header-text">
            <span className="section-en">Projects</span>
            <h2 className="section-cn">项目经验</h2>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <GlowCard key={i}>
              <div className="project-bar" style={{ background: p.color }} />
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">0{i + 1}</span>
                  <span className="project-company">{p.company}</span>
                </div>
                <div className="project-tags">
                  {p.tags.map((t, j) => (
                    <span key={j} className="project-tag">{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
