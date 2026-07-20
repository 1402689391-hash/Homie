import './About.css';

const stats = [
  { value: '6+', label: '年运营经验' },
  { value: '$3M', label: '半年B2B转化GMV' },
  { value: '100M+', label: '社媒曝光量' },
  { value: '1900%', label: '最高ROI' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <div className="section-header-text">
            <span className="section-en">About</span>
            <h2 className="section-cn">关于我</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <img src="/avatar.jpg" alt="Homie" className="about-avatar" />
            <h3 className="about-name">邓洪敏 Homie</h3>
            <p className="about-role">海外品牌运营负责人 · 跨境DTC全链路操盘</p>
            <div className="about-contact">
              <div className="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>1402689391@qq.com</span>
              </div>
              <div className="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>广东广州</span>
              </div>
              <div className="contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                <span>15976631627</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <p className="about-bio">
              6年+全链路运营经验，深耕跨境DTC自有品牌从0到1搭建与海外社媒增长。
              操盘3C数码品类出海品牌全链路落地，具备品效合一的运营思维与多项目管控能力，
              高度适配高速增长型跨境企业的品牌扩张需求。
            </p>
            <p className="about-bio">
              主导跨境自有品牌从0到1完整搭建，精通Facebook、Instagram、TikTok三大海外
              主流社媒矩阵运营，覆盖账号冷启动、内容策划、红人营销、用户社群到引流转化
              全流程，可独立完成垂直品类品牌海外市场落地，适配欧美、拉美等多区域市场。
            </p>
            <div className="about-edu">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.7 3 3 6 3s6-1.3 6-3v-5"/></svg>
              <span>佛山大学 · 车辆工程 本科 | 2017-2021</span>
            </div>
            <div className="about-tags">
              <span>跨境DTC品牌搭建</span>
              <span>海外社媒矩阵</span>
              <span>内容营销策划</span>
              <span>数据分析</span>
              <span>全链路增长</span>
              <span>CRM体系搭建</span>
              <span>红人营销</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
