import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight } from "lucide-react";
import "./Projects.css";
import CircularGallery from "./CircularGallery";
import RevenueChart from "./RevenueChart";
import BrandContentGallery from "./BrandContentGallery";
import TrafficAd from "./TrafficAd";
import SocialMatrix from "./SocialMatrix";
const projects = [
  {
    n: "01",
    title: "YEZONE 跨境DTC品牌搭建",
    company: "广州市益众电子有限公司 · 2025",
    tags: ["品牌0到1搭建", "社媒矩阵", "渠道规范"],
    desc: "主导跨境DTC自有品牌从0到1全链路落地，输出品牌定位与视觉识别体系，独立搭建Facebook/Instagram/TikTok海外社媒矩阵，覆盖欧美、拉美核心市场，每月产出品牌信任内容30+条。",
    side: "left",
    highlights: [
      "主导品牌从0到1，完成完整视觉识别体系",
      "搭建Facebook/Instagram/TikTok三平台社媒矩阵",
      "覆盖北美、拉美、欧洲核心市场",
      "每月产出品牌信任内容30+条",
    ],
  },
  {
    n: "02",
    title: "新品推广 ROI 1900% 策略",
    company: "广州市行动者科技 · 2022-2023",
    tags: ["KOL营销", "私域运营", "转化增长"],
    desc: "策划线上线下联动活动,国外展ROI 突破19% 综合投入活动成本5w美金 收获约100万美金订单",
    side: "right",
    highlights: [
      "联系40+KOL以产品置换达成合作，新品销售额破百万",
      "策划线上线下联动活动，国外展ROI突破19%，综合投入活动成本5w美金收获约100万美金订单",
      "聚拢2000+高粘性用户，5个粉丝群均超400人",
    ],
  },
  {
    n: "03",
    title: "CRM体系与工作流搭建",
    company: "商伴（广东）国际管理 · 2023-2024",
    tags: ["CRM搭建", "流程优化", "团队管理"],
    desc: "设计官网结构与全新工作流，从0搭建CRM平台，实现前端后端信息匹配，提升人效。三人团队月销售额达40w元，Q1-Q2公司盈利140w+。首月触达精准客户70+，转化率55%。",
    side: "left",
    highlights: [
      "从0搭建CRM平台，实现前后端信息匹配",
      "三人团队月销售额达40w，Q1-Q2盈利140w+",
      "首月触达精准客户70+，转化率55%",
    ],
  },
  {
    n: "04",
    title: "3C品类海外社媒矩阵增长",
    company: "跨品类运营经验 · 2022-至今",
    tags: ["内容策划", "数据分析", "品牌增长"],
    desc: "精通Facebook/Instagram/TikTok三大社媒运营，覆盖账号冷启动到引流转化全流程。视频新号3个月内破百万播放量，内容赋能亚马逊/速卖通等多平台销售，协助拿下北美百万级订单。",
    side: "right",
    highlights: [
      "视频新号3个月内破百万播放量",
      "内容赋能亚马逊/速卖通等多平台销售",
      "协助拿下北美百万级订单",
    ],
  },
];

const card01Actions = [
  { label: "品牌VIS升级", key: "gallery" },
  { label: "半年业绩看板", key: "chart" },
  { label: "品牌内容输出", key: "brandContent" },
  { label: "流量广告投放", key: "trafficAd" },
  { label: "海外社媒矩阵", key: "socialMatrix" },
  { label: "部门团队", key: "teamDepartment" },
];

const card02Actions = [
  { label: "活动现场", key: "eventSite" },
  { label: "新品上市", key: "newProduct" },
  { label: "品牌洞察", key: "brandInsight" },
  { label: "营销方案", key: "marketingPlan" },
  { label: "数据分析", key: "dataAnalysis" },
  { label: "独立站搭建", key: "independentSite" },
];

const card03Actions = [
  { label: "官网搭建", key: "websiteBuild" },
  { label: "工作流搭建", key: "crmWorkflow" },
];


const brandVisItems = [
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_04.png", text: "VI 转曲 04" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_07.png", text: "VI 转曲 07" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_08.png", text: "VI 转曲 08" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_09.png", text: "VI 转曲 09" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_10.png", text: "VI 转曲 10" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_14.png", text: "VI 转曲 14" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_15.png", text: "VI 转曲 15" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_16.png", text: "VI 转曲 16" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_17.png", text: "VI 转曲 17" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_18.png", text: "VI 转曲 18" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_19.png", text: "VI 转曲 19" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_20.png", text: "VI 转曲 20" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_21.png", text: "VI 转曲 21" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_22.png", text: "VI 转曲 22" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_23.png", text: "VI 转曲 23" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_24.png", text: "VI 转曲 24" },
  { image: "/brand-vis/YEZONE_VIS_Presentation_250316转曲_25.png", text: "VI 转曲 25" },
  { image: "/brand-vis/YEZONE包装盒10个装_250327_02.png", text: "包装盒 10个装" },
  { image: "/brand-vis/YEZONE包装盒10个装_250327_03.png", text: "包装盒 10个装 03" },
  { image: "/brand-vis/YEZONE电池包装盒设计_250703_02.png", text: "电池包装盒设计 02" },
  { image: "/brand-vis/YEZONE电池包装盒设计_250703_03.png", text: "电池包装盒设计 03" },
  { image: "/brand-vis/YEZONE系列包装单盒&包装袋转曲_250910(1)_02.png", text: "系列包装袋 02" },
  { image: "/brand-vis/YEZONE系列包装单盒&包装袋转曲_250910(1)_03.png", text: "系列包装袋 03" },
];

export default function Projects() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [visFullImage, setVisFullImage] = useState(null);

  const openModal = (key) => setActiveModal(key);
  const closeModal = () => {
    setActiveModal(null);
    setVisFullImage(null);
  };

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

        <div className="timeline-wrapper">
          <div className="timeline-line" />
          <div className="timeline-cards">
            {projects.map((p, i) => {
              const isFirst = i === 0;
              const isSecond = i === 1;
              const isThird = i === 2;
              return (
                <div key={i} className={"timeline-card timeline-card--" + p.side + (isFirst ? " card-01-body" : "")}>
                  <div className="timeline-dot">
                    <div className="timeline-dot-inner" />
                  </div>
                  {isFirst ? (
                    <div className="timeline-card-body card-01-body">
                      <div className="timeline-card-main">
                        <div className="project-meta">
                          <span className="project-number">{p.n}</span>
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
                      <div className="card-01-actions">
                        {card01Actions.map((a) => (
                          <button key={a.key} className="card-01-btn" onClick={() => openModal(a.key)}>
                            <span className="card-01-btn-text">{a.label}</span>
                            <span className="card-01-btn-arrow"><ChevronRight size={14} strokeWidth={2.5} /></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : isSecond ? (
                    <div className="timeline-card-body">
                      <div className="timeline-card-main">
                        <div className="project-meta">
                          <span className="project-number">{p.n}</span>
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
                      <div className="card-01-actions">
                        {card02Actions.map((a) => (
                          <button key={a.key} className="card-01-btn" onClick={() => openModal(a.key)}>
                            <span className="card-01-btn-text">{a.label}</span>
                            <span className="card-01-btn-arrow"><ChevronRight size={14} strokeWidth={2.5} /></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : isThird ? (
                    <div className="timeline-card-body">
                      <div className="timeline-card-main">
                        <div className="project-meta">
                          <span className="project-number">{p.n}</span>
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
                      <div className="card-01-actions">
                        {card03Actions.map((a) => (
                          <button key={a.key} className="card-01-btn" onClick={() => openModal(a.key)}>
                            <span className="card-01-btn-text">{a.label}</span>
                            <span className="card-01-btn-arrow"><ChevronRight size={14} strokeWidth={2.5} /></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="timeline-card-body">
                      <div className="timeline-card-main">
                        <div className="project-meta">
                          <span className="project-number">{p.n}</span>
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
                      <button className="timeline-card-trigger" onClick={() => setSelectedCard(p)}>
                        <span className="trigger-label">查看详情</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card detail modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="project-modal-header">
                <div>
                  <span className="project-modal-number">{selectedCard.n}</span>
                  <h3 className="project-modal-title">{selectedCard.title}</h3>
                  <span className="project-modal-company">{selectedCard.company}</span>
                </div>
                <button className="project-modal-close" onClick={() => setSelectedCard(null)} aria-label="关闭">
                  <X size={18} strokeWidth={2} />
                </button>
              </div>
              <div className="project-modal-body">
                <p className="project-modal-desc">{selectedCard.desc}</p>
                <div className="project-modal-divider" />
                <h4 className="project-modal-subtitle">关键成果</h4>
                <ul className="project-modal-list">
                  {selectedCard.highlights.map((h, j) => (
                    <li key={j} className="project-modal-item">
                      <span className="project-modal-bullet" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Department Team */}
      <AnimatePresence>
        {activeModal === "teamDepartment" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>部门团队</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/team-department/惠芬-投流询盘.png", name:"惠芬 - 投流询盘" },
                  { src:"/team-department/淑琪-平台运营.jpg", name:"淑琪 - 平台运营" },
                  { src:"/team-department/琦琦-内容运营.jpg", name:"琦琦 - 内容运营" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" style={{ aspectRatio: "1 / 1" }} onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand VIS 3D Gallery */}
      <AnimatePresence>
        {activeModal === "gallery" && (
          <motion.div className="project-modal-overlay gallery-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="gallery-container" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize: "1rem" }}>品牌VIS升级 — YEZONE</span>
                <button className="gallery-close-btn" onClick={closeModal} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {brandVisItems.map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage(item)}>
                    <img src={item.image} alt={item.text} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Full image viewer */}
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Revenue Chart */}
      <AnimatePresence>
        {activeModal === "chart" && (
          <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div className="chart-modal" initial={{ opacity: 0, scale: 0.92, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 16 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} onClick={(e) => e.stopPropagation()}>
              <div className="chart-modal-header">
                <span className="project-modal-title" style={{ fontSize: "1rem" }}>半年业绩看板 — YEZONE</span>
                <button className="gallery-close-btn" onClick={closeModal} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="chart-modal-body">
                <RevenueChart />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Content Gallery */}
      <AnimatePresence>
        {activeModal === "brandContent" && (
          <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <BrandContentGallery onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Traffic Ad */}
      <AnimatePresence>
        {activeModal === "trafficAd" && <TrafficAd onClose={closeModal} />}
      </AnimatePresence>

      {/* Social Matrix */}
      <AnimatePresence>
        {activeModal === "socialMatrix" && (
          <motion.div className="project-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="gallery-container" initial={{ opacity: 0, scale: 0.92, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 16 }} transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }} onClick={(e) => e.stopPropagation()}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize: "1rem" }}>社媒矩阵 — YEZONE</span>
                <button className="gallery-close-btn" onClick={closeModal} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <SocialMatrix />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Event Site */}
      <AnimatePresence>
        {activeModal === "eventSite" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>活动现场</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/event-site/1 (1).jpg", name:"活动现场 1" },
                  { src:"/event-site/1 (2).jpg", name:"活动现场 2" },
                  { src:"/event-site/1 (3).jpg", name:"活动现场 3" },
                  { src:"/event-site/1 (4).jpg", name:"活动现场 4" },
                  { src:"/event-site/1 (5).jpg", name:"活动现场 5" },
                  { src:"/event-site/1 (6).jpg", name:"活动现场 6" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* New Product */}
      <AnimatePresence>
        {activeModal === "newProduct" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>新品上市</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/new-product/M20T (1).jpg", name:"M20T 01" },
                  { src:"/new-product/M20T (2).jpg", name:"M20T 02" },
                  { src:"/new-product/M20T (3).jpg", name:"M20T 03" },
                  { src:"/new-product/M20T (4).jpg", name:"M20T 04" },
                  { src:"/new-product/M20T (5).jpg", name:"M20T 05" },
                  { src:"/new-product/M20T (6).jpg", name:"M20T 06" },
                  { src:"/new-product/亚马逊详情图.png", name:"亚马逊详情图" },

                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => {
                    if (item.src.includes(".mp4")) {
                      // For videos, could open video or just do nothing
                      setVisFullImage({image: item.src, text: item.name});
                    } else {
                      setVisFullImage({image: item.src, text: item.name});
                    }
                  }}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Insight */}
      <AnimatePresence>
        {activeModal === "brandInsight" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>品牌洞察</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/brand-insight/1.jpg", name:"满意度 1" },
                  { src:"/brand-insight/2.jpg", name:"满意度 2" },
                  { src:"/brand-insight/3.jpg", name:"满意度 3" },
                  { src:"/brand-insight/4.jpg", name:"满意度 4" },
                  { src:"/brand-insight/5.jpg", name:"满意度 5" },
                  { src:"/brand-insight/6.jpg", name:"满意度 6" },
                  { src:"/brand-insight/7.jpg", name:"满意度 7" },
                  { src:"/brand-insight/8.jpg", name:"满意度 8" },
                  { src:"/brand-insight/9.jpg", name:"满意度 9" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marketing Plan */}
      <AnimatePresence>
        {activeModal === "marketingPlan" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>营销方案</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/marketing-plan/A (1).jpg", name:"营销方案 A1" },
                  { src:"/marketing-plan/A (2).jpg", name:"营销方案 A2" },
                  { src:"/marketing-plan/A (3).jpg", name:"营销方案 A3" },
                  { src:"/marketing-plan/A (4).jpg", name:"营销方案 A4" },
                  { src:"/marketing-plan/A (5).jpg", name:"营销方案 A5" },
                  { src:"/marketing-plan/A (6).jpg", name:"营销方案 A6" },
                  { src:"/marketing-plan/A (7).jpg", name:"营销方案 A7" },
                  { src:"/marketing-plan/A (8).jpg", name:"营销方案 A8" },
                  { src:"/marketing-plan/A (9).jpg", name:"营销方案 A9" },
                  { src:"/marketing-plan/A (10).jpg", name:"营销方案 A10" },
                  { src:"/marketing-plan/A (11).jpg", name:"营销方案 A11" },
                  { src:"/marketing-plan/A (12).jpg", name:"营销方案 A12" },
                  { src:"/marketing-plan/A (13).jpg", name:"营销方案 A13" },
                  { src:"/marketing-plan/A (14).jpg", name:"营销方案 A14" },
                  { src:"/marketing-plan/A (15).jpg", name:"营销方案 A15" },
                  { src:"/marketing-plan/A (16).jpg", name:"营销方案 A16" },
                  { src:"/marketing-plan/A (17).jpg", name:"营销方案 A17" },
                  { src:"/marketing-plan/A (18).jpg", name:"营销方案 A18" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Data Analysis */}
      <AnimatePresence>
        {activeModal === "dataAnalysis" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>数据分析</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/data-analysis/可视化 (1).jpg", name:"可视化 1" },
                  { src:"/data-analysis/可视化 (2).jpg", name:"可视化 2" },
                  { src:"/data-analysis/可视化 (3).jpg", name:"可视化 3" },
                  { src:"/data-analysis/可视化 (4).jpg", name:"可视化 4" },
                  { src:"/data-analysis/可视化 (5).jpg", name:"可视化 5" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Independent Site */}
      <AnimatePresence>
        {activeModal === "independentSite" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>独立站搭建</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/independent-site/独立站搭建.png", name:"独立站搭建" },
                  { src:"/independent-site/独立站详情.png", name:"独立站详情" },
                  { src:"/independent-site/独立站截图.png", name:"独立站截图" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Website Build */}
      <AnimatePresence>
        {activeModal === "websiteBuild" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>官网搭建</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/website-build/1.jpg", name:"官网搭建 1" },
                  { src:"/website-build/2.jpg", name:"官网搭建 2" },
                  { src:"/website-build/3.jpg", name:"官网搭建 3" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CRM Workflow */}
      <AnimatePresence>
        {activeModal === "crmWorkflow" && (
          <motion.div className="project-modal-overlay" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            <motion.div className="gallery-container" initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.25, ease:[0.16,1,0.3,1] }}>
              <div className="gallery-header">
                <span className="project-modal-title" style={{ fontSize:"1rem" }}>工作流搭建</span>
                <button className="gallery-close-btn" onClick={() => setActiveModal(null)} aria-label="关闭">
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div className="vis-gallery-grid">
                {[
                  { src:"/crm-workflow/1.jpg", name:"工作流 1" },
                  { src:"/crm-workflow/2.jpg", name:"工作流 2" },
                ].map((item, i) => (
                  <div key={i} className="vis-gallery-grid-item" onClick={() => setVisFullImage({image: item.src, text: item.name})}>
                    <img src={item.src} alt={item.name} className="vis-gallery-grid-img" loading="lazy" />
                    <span className="vis-gallery-grid-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Full Image Viewer - for all grids */}
<AnimatePresence>
              {visFullImage && (
                <motion.div
                  className="bcg-overlay"
                  style={{ position: "fixed", inset: 0, zIndex: 10001, background: "rgba(255,255,255,0.96)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setVisFullImage(null)}
                >
                  <motion.div
                    style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "90vw", maxHeight: "90vh" }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="gallery-close-btn"
                      style={{ position: "absolute", top: -40, right: 0, zIndex: 10, background: "rgba(0,0,0,0.1)", color: "#333" }}
                      onClick={() => setVisFullImage(null)}>
                      <X size={20} strokeWidth={2} />
                    </button>
                    <img src={visFullImage.image} alt={visFullImage.text}
                      style={{ maxWidth: "100%", maxHeight: "80vh", width: "auto", height: "auto", objectFit: "contain", borderRadius: 6, display: "block" }} />
                    <span style={{ marginTop: 10, fontSize: "0.85rem", color: "#1a1a2e", fontWeight: 500 }}>{visFullImage.text}</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
</section>
  );
}
