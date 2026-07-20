import { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./RevenueChart.css";

const revenueData = [
  { month: "10月", value: 9602 },
  { month: "11月", value: 194622 },
  { month: "12月", value: 231452 },
  { month: "1月", value: 405839 },
  { month: "2月", value: 291022 },
  { month: "3月", value: 615406 },
  { month: "4月", value: 680205 },
  { month: "5月", value: 500155 },
  { month: "6月", value: 532623 },
];

const W = 720, H = 420;
const PAD = { top: 36, right: 20, bottom: 44, left: 68 };
const CW = W - PAD.left - PAD.right;
const CH = H - PAD.top - PAD.bottom;
const MAX = 720000;

function x(i) { return PAD.left + (i / (revenueData.length - 1)) * CW; }
function y(v) { return PAD.top + (1 - v / MAX) * CH; }

const pathD = revenueData.map((d, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(d.value)}`).join(" ");
const areaD = pathD + ` L ${x(revenueData.length - 1)} ${PAD.top + CH} L ${x(0)} ${PAD.top + CH} Z`;

const total = revenueData.reduce((s, d) => s + d.value, 0);

function countUp(from, to, duration, setter) {
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 2);
    setter(Math.round(from + (to - from) * eased));
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}



function StatBox({ label, value, delay }) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => countUp(0, value, 1200, setNum), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return (
    <div className="chart-stat">
      <span className="chart-stat-label">{label}</span>
      <span className="chart-stat-value">${num.toLocaleString()}</span>
    </div>
  );
}

export default function RevenueChart() {
  const gridlines = [0, 180000, 360000, 540000, 720000];
  return (
    <div className="revenue-chart-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} className="revenue-chart-svg">
        {gridlines.map(g => (
          <g key={g}>
            <line x1={PAD.left} y1={y(g)} x2={W - PAD.right} y2={y(g)} stroke="#e4e4e8" strokeWidth={1} />
            <text x={PAD.left - 8} y={y(g) + 4} textAnchor="end" className="chart-axis-label">${(g / 1000).toFixed(0)}k</text>
          </g>
        ))}
        {revenueData.map((d, i) => (
          <text key={i} x={x(i)} y={H - PAD.bottom + 18} textAnchor="middle" className="chart-axis-label">{d.month}</text>
        ))}

        <defs>
          <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#002FA7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#002FA7" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path d={areaD} fill="url(#rg)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />

        <motion.path d={pathD} fill="none" stroke="#002FA7" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: "easeInOut" }} />

        {(() => {
          const midY = PAD.top + CH * 0.40;
          return revenueData.map((d, i) => {
            const dotY = y(d.value);
            const above = dotY >= midY;
            const bgW = d.value >= 100000 ? 86 : 70;
            const rectH = 18;
            const rectY = above ? dotY - 5 - rectH : dotY + 5;
            const textY = rectY + 13;
            return (
              <g key={i}>
                <motion.circle cx={x(i)} cy={dotY} r={5} fill="#002FA7" stroke="#fff" strokeWidth={2}
                  initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.1, duration: 0.25 }} />

              </g>
            );
          });
        })()}
      </svg>

      <div className="chart-stats-row">
        <StatBox label="总营收" value={total} delay={600} />
        <StatBox label="月均营收" value={Math.round(total / revenueData.length)} delay={800} />
        <StatBox label="最高月" value={Math.max(...revenueData.map(d => d.value))} delay={1000} />
        <StatBox label="最高涨幅" value={Math.max(...revenueData.slice(1).map((d, i) => d.value - revenueData[i].value))} delay={1200} />
      </div>
    </div>
  );
}
