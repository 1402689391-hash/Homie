import useRipple from "../hooks/useRipple.jsx";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import "./Strengths.css";

const strengths = [
  {
    title: "跨境品牌全链路操盘",
    desc: "主导跨境DTC自有品牌从0到1完整搭建，精通Facebook/Instagram/TikTok三大海外社媒矩阵运营，覆盖账号冷启动、内容策划、红人营销到引流转化全流程。",
  },
  {
    title: "海外社媒矩阵运营",
    desc: "独立搭建Facebook/Instagram/TikTok社媒矩阵，精通账号冷启动与垂直品类内容体系搭建。视频新号3个月内破百万播放，覆盖欧美、拉美多区域市场。",
  },
  {
    title: "数据驱动业务增长",
    desc: "敏锐的数据洞察力，擅长搭建数据可视化看板、输出市场分析报告指导策略迭代。曾助力团队拿下北美百万级订单，单场活动ROI突破1900%。",
  },
  {
    title: "复合工具与创作能力",
    desc: "具备内容策划、平面/音视频创作、商务洽谈的综合能力。熟练使用Excel、Power BI、Photoshop、DaVinci、Capcut等工具，可独立完成从内容生产到项目落地的全环节。",
  },
];

export default function Strengths() {
  const { addRipple, rippleElements } = useRipple();

  return (
    <section id="strengths" className="strengths" onClick={addRipple}>
      <div className="container">
        <Reveal animation="fade-up" delay={0.05}>
          <div className="section-header">
            <span className="section-number">03</span>
            <div className="section-header-text">
              <span className="section-en">Strengths</span>
              <h2 className="section-cn">核心优势</h2>
            </div>
          </div>
        </Reveal>
        <div className="strengths-grid">
          {strengths.map((s, i) => (
            <Reveal key={i} animation="scale-in" delay={0.08 * i}>
              <SpotlightCard className="strength-card">
                <span className="strength-number">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="strength-title">{s.title}</h3>
                <p className="strength-desc">{s.desc}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
      {rippleElements}
    </section>
  );
}
