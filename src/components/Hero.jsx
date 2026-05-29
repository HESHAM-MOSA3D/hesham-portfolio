export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          مطور برمجيات · Full Stack Developer
        </div>
        <h1 className="hero-name">
          أهلاً <br/>أنا <span className="highlight">هشام مسعد</span>
        </h1>
        <p className="hero-desc">
          مطور برمجيات شغوف ببناء تطبيقات الويب والأنظمة الحديثة باستخدام Angular و .NET و Python مع اهتمام قوي بتجربة المستخدم والأداء.
        </p>
        <div className="github-badge-hero">
          <div className="github-icon">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="github-info">
            <span className="github-title-text">GitHub Profile</span>
            <a href="https://github.com/HESHAM-MOSA3D" target="_blank">github.com/HESHAM-MOSA3D</a>
          </div>
        </div>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            <i className="fa-solid fa-code"></i> شوف أعمالي
          </a>
          <a href="https://github.com/HESHAM-MOSA3D" target="_blank" className="btn-outline">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>اسكرول</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
