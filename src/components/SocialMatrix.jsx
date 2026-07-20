 import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
 import "./SocialMatrix.css";
 
 const platformData = [
   {
     id: "FB",
     name: "Facebook",
     image: "/Homie/social-media/fb-page.png",
     color: "#1877F2",
     data: [
       { month: "1月", value: 182069 },
       { month: "2月", value: 190008 },
       { month: "3月", value: 192858 },
       { month: "4月", value: 193138 },
       { month: "5月", value: 399856 },
       { month: "6月", value: 433196 },
     ],
     followers: "433K",
     growth: "+138%",
   },
   {
     id: "INS",
     name: "Instagram",
     image: "/Homie/social-media/ins-page.png",
     color: "#E4405F",
     data: [
       { month: "1月", value: 22674 },
       { month: "2月", value: 24247 },
       { month: "3月", value: 26901 },
       { month: "4月", value: 28058 },
       { month: "5月", value: 29002 },
       { month: "6月", value: 30091 },
     ],
     followers: "30K",
     growth: "+33%",
   },
   {
     id: "TK",
     name: "TikTok",
     image: "/Homie/social-media/tk-page.png",
     color: "#000000",
     data: [
       { month: "1月", value: 20700 },
       { month: "2月", value: 28200 },
       { month: "3月", value: 37000 },
       { month: "4月", value: 80000 },
       { month: "5月", value: 170000 },
       { month: "6月", value: 234000 },
     ],
     followers: "234K",
     growth: "+1,031%",
   },
 ];
 
 const W = 720, H = 400;
 const PAD = { top: 32, right: 20, bottom: 40, left: 72 };
 const CW = W - PAD.left - PAD.right;
 const CH = H - PAD.top - PAD.bottom;
 const MAX_Y = 500000;
 
 function xPos(i) {
   const count = platformData[0].data.length;
   return PAD.left + (i / (count - 1)) * CW;
 }
 function yPos(v) {
   return PAD.top + (1 - v / MAX_Y) * CH;
 }
 
 function StatCard({ label, value }) {
   return (
     <div className="sm-stat">
       <span className="sm-stat-label">{label}</span>
       <span className="sm-stat-value">{value}</span>
     </div>
   );
 }
 
 export default function SocialMatrix() {
  const [fullImage, setFullImage] = useState(null);
   const months = platformData[0].data.length;
   const totalFollowers = platformData.reduce((s, p) => s + p.data[months - 1].value, 0);
   const totalGrowth = platformData.reduce((s, p) => s + p.data[months - 1].value - p.data[0].value, 0);
   const avgMonthlyGrowth = Math.round(totalGrowth / months);
   const fastest = [...platformData].sort((a, b) => {
     const ra = (a.data[months - 1].value - a.data[0].value) / a.data[0].value;
     const rb = (b.data[months - 1].value - b.data[0].value) / b.data[0].value;
     return rb - ra;
   })[0];
 
   const gridValues = [0, 100000, 200000, 300000, 400000, 500000];
   const gridLabels = ["0", "100K", "200K", "300K", "400K", "500K"];
 
   function buildPath(data) {
     return data.map((d, i) => `${i === 0 ? "M" : "L"} ${xPos(i)} ${yPos(d.value)}`).join(" ");
   }
 
   return (
    <>
     <div className="sm-wrap">
       <div className="sm-cards">
         {platformData.map((p) => (
           <div key={p.id} className="sm-card" style={{ "--accent": p.color }}>
             <div className="sm-card-image" style={{cursor:"pointer"}} onClick={() => setFullImage(p.image)}>
               <img src={p.image} alt={p.name} />
             </div>
             <div className="sm-card-info">
               <span className="sm-card-name">{p.name}</span>
               <span className="sm-card-id">@{p.id.toLowerCase()}</span>
               <div className="sm-card-stats">
                 <span className="sm-card-followers-label">粉丝数</span>
                 <span className="sm-card-followers">{p.followers}</span>
                 <span className="sm-card-growth">{p.growth}</span>
               </div>
             </div>
           </div>
         ))}
       </div>
 
       <div className="sm-chart-section">
         <span className="sm-chart-title">涨粉趋势 · 2026年1月–6月</span>
         <svg viewBox={`0 0 ${W} ${H}`} className="sm-chart-svg">
           {gridValues.map((g, i) => (
             <g key={g}>
               <line x1={PAD.left} y1={yPos(g)} x2={W - PAD.right} y2={yPos(g)} stroke="#e4e4e8" strokeWidth={1} />
               <text x={PAD.left - 8} y={yPos(g) + 4} textAnchor="end" className="sm-axis-label">{gridLabels[i]}</text>
             </g>
           ))}
           {platformData[0].data.map((d, i) => (
             <text key={i} x={xPos(i)} y={H - PAD.bottom + 16} textAnchor="middle" className="sm-axis-label">{d.month}</text>
           ))}
 
           <defs>
             {platformData.map((p) => (
               <linearGradient key={p.id} id={`sm-bg-${p.id}`} x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor={p.color} stopOpacity="0.15" />
                 <stop offset="100%" stopColor={p.color} stopOpacity="0" />
               </linearGradient>
             ))}
           </defs>
 
           {platformData.map((p, pi) => {
             const baseLine = `L ${xPos(p.data.length - 1)} ${PAD.top + CH} L ${xPos(0)} ${PAD.top + CH} Z`;
             return (
               <motion.path key={p.id} d={buildPath(p.data) + baseLine} fill={`url(#sm-bg-${p.id})`}
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                 transition={{ duration: 0.6, delay: 0.3 + pi * 0.1 }}
               />
             );
           })}
 
           {platformData.map((p, pi) => (
             <motion.path key={p.id} d={buildPath(p.data)} fill="none" stroke={p.color} strokeWidth={2.5}
               strokeLinecap="round" strokeLinejoin="round"
               initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
               transition={{ duration: 1.4, delay: 0.1 + pi * 0.15, ease: "easeInOut" }}
             />
           ))}
 
           {platformData.map((p, pi) =>
             p.data.map((d, i) => (
               <motion.circle key={`${p.id}-${i}`} cx={xPos(i)} cy={yPos(d.value)} r={4}
                 fill={p.color} stroke="#fff" strokeWidth={2}
                 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.2 + pi * 0.15 + i * 0.08, duration: 0.25 }}
               />
             ))
           )}
         </svg>
 
         <div className="sm-legend">
           {platformData.map((p) => (
             <div key={p.id} className="sm-legend-item">
               <span className="sm-legend-dot" style={{ background: p.color }} />
               <span className="sm-legend-label">{p.name}</span>
             </div>
           ))}
         </div>
       </div>
 
       <div className="sm-stats-row">
         <StatCard label="总粉丝" value={totalFollowers.toLocaleString()} />
         <StatCard label="半年总增长" value={`+${totalGrowth.toLocaleString()}`} />
         <StatCard label="月均增长" value={`+${avgMonthlyGrowth.toLocaleString()}`} />
         <StatCard label="增长最快" value={fastest.name} />
       </div>
     </div>
  
      <AnimatePresence>
        {fullImage && (
          <div className="sm-full-image-overlay" onClick={() => setFullImage(null)}>
            <div className="sm-full-image-wrap" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-close-btn" onClick={() => setFullImage(null)} style={{position:"absolute",top:12,right:12,zIndex:10}}>
                <X size={20} strokeWidth={2} />
              </button>
              <img src={fullImage} alt="full" className="sm-full-image-img" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}