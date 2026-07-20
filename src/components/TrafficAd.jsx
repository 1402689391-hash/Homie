import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import "./TrafficAd.css";

const ease = [0.16, 1, 0.3, 1];

export default function TrafficAd({ onClose }) {
  const [viewImg, setViewImg] = useState(null);
  return (
    <motion.div
      className="ta-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease }}
      onClick={onClose}
    >
      <motion.div
        className="ta-modal"
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.25, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ta-header">
          <div className="ta-header-left">
            <span className="ta-title">流量广告投放</span>
            <span className="ta-subtitle">Meta Ads</span>
          </div>
          <button className="ta-close-btn" onClick={onClose} aria-label="关闭">
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="ta-desc-wrap">
          <p className="ta-desc">
            精通 Meta Ads（Facebook / Instagram）广告投放策略，
            建立从建站、选品、测款到放量的完整投放链路。
            通过精准人群定向与创意迭代持续降低获客成本，
            ROI 提升 200%，协助团队拿下北美百万级订单。
          </p>
        </div>

        <div className="ta-visuals-single">
          <div className="ta-visual-card">
            <span className="ta-visual-label">投流金额增长趋势</span>
            <div className="ta-visual-img-wrap">
              <img src="/tousu-chart-01.png" alt="投流金额增长趋势" className="ta-visual-img" style={{cursor:'pointer'}} onClick={() => setViewImg('/tousu-chart-01.png')} />
            </div>
          </div>
          <div className="ta-visual-card">
            <span className="ta-visual-label">投放效果数据看板</span>
            <div className="ta-visual-img-wrap">
              <img src="/tousu-chart-02.png" alt="投放效果数据看板" className="ta-visual-img" style={{cursor:'pointer'}} onClick={() => setViewImg('/tousu-chart-02.png')} />
            </div>
          </div>
        </div>
      </motion.div>
    

      <AnimatePresence>
        {viewImg && (
          <motion.div
            className="ta-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setViewImg(null)}
            style={{ zIndex: 10001 }}
          >
            <motion.div
              style={{ position:"relative", background:"#fff", borderRadius:10, boxShadow:"0 20px 60px rgba(0,0,0,0.12)", display:"flex", flexDirection:"column", alignItems:"center", maxWidth:"90vw", maxHeight:"90vh", overflow:"hidden" }}
              initial={{ opacity:0, scale:0.92 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.92 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 20px", borderBottom:"1px solid #eee", width:"100%", boxSizing:"border-box" }}>
                <span style={{ fontSize:"0.9rem", fontWeight:600, color:"#1a1a2e" }}>{viewImg === "/tousu-chart-01.png" ? "投流金额增长趋势" : "投放效果数据看板"}</span>
                <button onClick={() => setViewImg(null)} style={{ width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center", border:"none", background:"#e0e0e6", borderRadius:"50%", cursor:"pointer", color:"#333" }}>
                  <X size={20} strokeWidth={2} />
                </button>
              </div>
              <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
                <img src={viewImg} alt="" style={{ maxWidth:"100%", maxHeight:"75vh", objectFit:"contain", display:"block" }} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
