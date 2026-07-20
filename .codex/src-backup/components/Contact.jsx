import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-content">
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-number">04</span>
          <div className="section-header-text">
            <span className="section-en">Contact</span>
            <h2 className="section-cn">一起聊聊品牌出海</h2>
          </div>
        </div>
        <p className="contact-subtitle">
          无论是跨境品牌从0到1搭建、海外社媒增长，还是全链路运营策略，<br />
          期待和你一起把品牌故事讲给世界听。
        </p>

        <div className="contact-cards">
          <a href="mailto:1402689391@qq.com" className="contact-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>1402689391@qq.com</span>
          </a>
          <a href="tel:15976631627" className="contact-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <span>15976631627</span>
          </a>
          <div className="contact-card">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>广东广州</span>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span className="footer-text">© 2026 邓洪敏 Homie</span>
          <span className="footer-text" style={{ color: 'var(--text-muted)' }}>跨境品牌 · 社媒运营 · 全链路增长</span>
        </div>
      </div>
    </section>
  );
}
