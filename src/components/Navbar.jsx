export default function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo-wrap">
        <div className="logo-container">
          <svg className="logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="14" fill="url(#paint0_linear)"/>
            <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" stroke="rgba(255,255,255,0.15)"/>
            <path d="M12 14V34M12 24H21M21 14V34" stroke="white" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M27 34V14L34 24L41 14V34" stroke="white" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6c63ff"/>
                <stop offset="1" stopColor="#ff6584"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="nav-logo-text">
          <span className="nav-logo-name">هشام مسعد</span>
          <span className="nav-logo-sub">SOFTWARE ENGINEER</span>
        </div>
      </a>

      <ul className="nav-links">
        <li><a href="#about">عني</a></li>
        <li><a href="#skills">المهارات</a></li>
        <li><a href="#projects">المشاريع</a></li>
        <li><a href="#contact">تواصل</a></li>
      </ul>

      <a href="#contact" className="nav-cta">
        <i className="fa-solid fa-paper-plane"></i>
        تواصل معي
      </a>
    </nav>
  );
}
