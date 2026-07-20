import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play } from "lucide-react";
import "./BrandContentGallery.css";

const tabs = [
  { id: "poster", label: "品牌海报" },
  { id: "product", label: "产品视觉" },
  { id: "team", label: "团队风采" },
  { id: "video", label: "视频展示" }
];

const brandItems = [
  { tab: "poster", src: "/brand-content/代理世界地图.png", title: "代理世界地图", type: "image" },
  { tab: "poster", src: "/brand-content/kv海报系列2.jpg", title: "kv海报系列2", type: "image" },
  { tab: "poster", src: "/brand-content/代理招募海报.png", title: "代理招募海报", type: "image" },
  { tab: "poster", src: "/brand-content/全家族最新版.png", title: "全家族最新版", type: "image" },
  { tab: "poster", src: "/brand-content/公司系列1-1.jpg", title: "公司系列1-1", type: "image" },
  { tab: "poster", src: "/brand-content/劳动节海报EN.png", title: "劳动节海报EN", type: "image" },
  { tab: "poster", src: "/brand-content/尼加拉瓜广告.png", title: "尼加拉瓜广告", type: "image" },
  { tab: "poster", src: "/brand-content/质量 防刺海报.png", title: "质量 防刺海报", type: "image" },
  { tab: "product", src: "/brand-content/产品-传音一屏通用海报.png", title: "传音一屏通用海报", type: "image" },
  { tab: "product", src: "/brand-content/品牌-益众屏幕海报ES.png", title: "益众屏幕海报ES", type: "image" },
  { tab: "product", src: "/brand-content/品牌-益众电池海报EN.jpg", title: "益众电池海报EN", type: "image" },
  { tab: "product", src: "/brand-content/产品-跑诊断海报.png", title: "跑诊断海报", type: "image" },
  { tab: "team", src: "/brand-content/先锋队 Sales Dept..png", title: "先锋队", type: "image" },
  { tab: "team", src: "/brand-content/奔跑队 Sales Dept..png", title: "奔跑队", type: "image" },
  { tab: "team", src: "/brand-content/总裁队 Sales Dept..png", title: "总裁队", type: "image" },
  { tab: "team", src: "/brand-content/火箭队 Sales Dept..png", title: "火箭队", type: "image" },
  { tab: "team", src: "/brand-content/飞虎队 Sales Dept..png", title: "飞虎队", type: "image" },
  { tab: "video", src: "/brand-content/IP 16PM Glass.mp4", title: "IP 16PM Glass", type: "video" },
  { tab: "video", src: "/brand-content/SM S21U oled 防水性能.mp4", title: "SM S21U oled 防水性能", type: "video" },
  { tab: "video", src: "/brand-content/YEZONE品牌的秘密.mp4", title: "YEZONE品牌的秘密", type: "video" },
  { tab: "video", src: "/brand-content/代理签约仪式.mp4", title: "代理签约仪式", type: "video" },
  { tab: "video", src: "/brand-content/办公室KOL采访ES .mp4", title: "办公室KOL采访ES ", type: "video" },
  { tab: "video", src: "/brand-content/客户门店视频.mp4", title: "客户门店视频", type: "video" },
  { tab: "video", src: "/brand-content/屏幕防水性能.mov", title: "屏幕防水性能", type: "video" }
];

export default function BrandContentGallery({ onClose }) {
  const [activeTab, setActiveTab] = useState("poster");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const filtered = brandItems.filter((item) => item.tab === activeTab);

  return (
    <div className="bcg-wrap">
      <div className="bcg-header">
        <div className="bcg-header-left">
          <span className="bcg-title">品牌内容输出</span>
          <span className="bcg-subtitle">每月产出品牌信任内容30+条，涵盖社媒内容、产品视觉、团队文化建设</span>
        </div>
        <button className="gallery-close-btn" onClick={onClose} aria-label="??">
          <X size={20} strokeWidth={2} />
        </button>
      </div>

      <div className="bcg-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={"bcg-tab" + (activeTab === t.id ? " bcg-tab--active" : "")}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === "team" && <div className="bcg-tab-subtitle">企业形象照拍摄制作</div>}
      {activeTab === "video" && <div className="bcg-tab-subtitle">涵盖个人IP口播，产品展示，公司实力展示，客户拜访等</div>}
      

      

      

      <div className="bcg-grid">
      {filtered.map((item, i) => (
          <motion.div
            key={i}
            className={"bcg-card" + (item.type === "video" ? " bcg-card--video" : "")}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.2 }}
            onClick={() => {
              if (item.type === "video") setPlayingVideo(item);
              else setSelectedMedia(item);
            }}
          >
            {item.type === "video" ? (
              <>
                <video className="bcg-video-thumb" src={item.src} muted preload="metadata" />
                <div className="bcg-play-overlay">
                  <Play size={32} fill="#fff" strokeWidth={1.5} />
                </div>
              </>
            ) : (
              <img className="bcg-img" src={item.src} alt={item.title} loading="lazy" />
            )}
            <div className="bcg-card-label">{item.title}</div>
          </motion.div>
        ))}
      </div>

                              <AnimatePresence>
        {playingVideo && (
          <motion.div className="bcg-overlay bcg-overlay--dark" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => { setPlayingVideo(null); }}>
            <motion.div className="bcg-full-card"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2, ease: [0.16,1,0.3,1] }}
              onClick={(e) => e.stopPropagation()}>
              <button className="bcg-full-close" onClick={() => setPlayingVideo(null)}>
                <X size={24} strokeWidth={2} />
              </button>
              <div className="bcg-full-content">
                <video className="bcg-video-player" src={playingVideo.src} controls autoPlay playsInline />
              </div>
              <div className="bcg-full-header">
                <span className="bcg-full-title">{playingVideo.title}</span>
                <button className="bcg-full-close" onClick={() => setPlayingVideo(null)}>
                  <X size={24} strokeWidth={2} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
