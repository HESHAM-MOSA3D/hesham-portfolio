export default function About() {
  return (
    <section id="about" className="reveal">
      <div>
        <div className="about-img-frame">
          <img src="https://avatars.githubusercontent.com/u/169579862?v=4" alt="هشام مسعد"
            onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}/>
          <div className="avatar-fallback" style={{display:'none'}}>👨‍💻</div>
          <div className="about-corner tl"></div>
          <div className="about-corner br"></div>
        </div>
      </div>
      <div>
        <p className="section-label">عن نفسي</p>
        <h2 className="section-title">مطور شغوف<br/>بصنع الفرق</h2>
        <p style={{color:'var(--text2)',marginBottom:'1rem',fontSize:'0.95rem'}}>
          مطور برمجيات متخصص في تطوير الواجهات الأمامية وتطبيقات سطح المكتب. خبرة في Angular، TypeScript، C#، وتصميم المعالجات. أحب بناء أشياء تشتغل فعلاً وتبان حلوة.
        </p>
        <p style={{color:'var(--text2)',fontSize:'0.95rem'}}>
          من بناء معالج MIPS كامل بالـ VHDL، لتطبيقات Angular متكاملة، لبرامج C# — أنا بحب التحدي في كل مشروع.
        </p>
        <div className="about-stats">
          <div className="stat-card"><span className="stat-num">11</span><span className="stat-label">مشروع على GitHub</span></div>
          <div className="stat-card"><span className="stat-num">4+</span><span className="stat-label">تقنيات مختلفة</span></div>
          <div className="stat-card"><span className="stat-num">CS</span><span className="stat-label">كلية الحاسبات و المعلومات</span></div>
          <div className="stat-card"><span className="stat-num">100%</span><span className="stat-label">كود بـ passion</span></div>
        </div>
      </div>
    </section>
  );
}
