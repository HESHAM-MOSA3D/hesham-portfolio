const projects = [
  {
    gradient:"linear-gradient(135deg,#6c63ff,#38bdf8)",
    icon:<i className="fa-solid fa-microchip project-real-icon"></i>,
    tags:[{c:"tag-blue",i:<i className="fa-solid fa-microchip"></i>,l:"VHDL"},{c:"tag-amber",i:<i className="fa-solid fa-memory"></i>,l:"Hardware"},{c:"tag-purple",i:<i className="fa-solid fa-cpu"></i>,l:"CPU"}],
    title:"MIPS Processor Design",
    desc:"تصميم معالج MIPS 16-bit كامل بنمط Single-Cycle و Pipeline.",
    url:"https://github.com/HESHAM-MOSA3D/MIPS-Processor-Design"
  },
  {
    gradient:"linear-gradient(135deg,#dd3145,#f59e0b)",
    icon:<i className="devicon-angularjs-plain colored project-real-icon"></i>,
    tags:[{c:"tag-pink",i:<i className="devicon-angularjs-plain"></i>,l:"Angular"},{c:"tag-blue",i:<i className="devicon-typescript-plain"></i>,l:"TypeScript"}],
    title:"Angular Labs",
    desc:"تطبيقات Angular تغطي Components و Routing و Services.",
    url:"https://github.com/HESHAM-MOSA3D/Angular_labs"
  },
  {
    gradient:"linear-gradient(135deg,#6c63ff,#43e97b)",
    icon:<i className="devicon-angularjs-plain colored project-real-icon"></i>,
    tags:[{c:"tag-pink",i:<i className="devicon-angularjs-plain"></i>,l:"Angular"},{c:"tag-blue",i:<i className="devicon-typescript-plain"></i>,l:"TypeScript"},{c:"tag-green",i:<i className="fa-solid fa-layer-group"></i>,l:"SPA"}],
    title:"Angular App",
    desc:"تطبيق Angular احترافي مع Routing وواجهة حديثة.",
    url:"https://github.com/HESHAM-MOSA3D/angular-app"
  },
  {
    gradient:"linear-gradient(135deg,#1877f2,#42b2fb)",
    icon:<i className="fa-brands fa-facebook project-real-icon"></i>,
    tags:[{c:"tag-amber",i:<i className="devicon-html5-plain"></i>,l:"HTML"},{c:"tag-blue",i:<i className="devicon-css3-plain"></i>,l:"CSS"},{c:"tag-green",i:<i className="devicon-javascript-plain"></i>,l:"JavaScript"}],
    title:"Mini Facebook",
    desc:"واجهة مستوحاة من Facebook باستخدام HTML و CSS و JavaScript.",
    url:"https://github.com/HESHAM-MOSA3D/MiniFacebook"
  },
  {
    gradient:"linear-gradient(135deg,#7c3aed,#c026d3)",
    icon:<i className="fa-solid fa-code project-real-icon"></i>,
    tags:[{c:"tag-purple",i:<i className="devicon-csharp-plain"></i>,l:"C#"},{c:"tag-blue",i:<i className="devicon-dotnetcore-plain"></i>,l:".NET"},{c:"tag-amber",i:<i className="fa-solid fa-desktop"></i>,l:"Desktop"}],
    title:"BinViewer",
    desc:"تطبيق Desktop يعرض الملفات بصيغة Binary لمطوري Low-Level.",
    url:"https://github.com/HESHAM-MOSA3D/BinViewer"
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header reveal">
        <p className="section-label">مشاريعي على GitHub</p>
        <h2 className="section-title">أعمال حقيقية من الكود</h2>
      </div>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.title} className="project-card reveal">
            <div className="project-thumb">
              <div className="project-thumb-bg" style={{background:p.gradient}}></div>
              {p.icon}
              <div className="project-overlay">
                <a href={p.url} target="_blank" onClick={e=>e.stopPropagation()}>
                  <i className="fa-brands fa-github"></i> فتح المشروع
                </a>
              </div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                {p.tags.map(t=>(
                  <span key={t.l} className={`tag ${t.c}`}>{t.i} {t.l}</span>
                ))}
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{textAlign:'center',marginTop:'3rem'}} className="reveal">
        <a href="https://github.com/HESHAM-MOSA3D" target="_blank" className="btn-outline">
          <i className="fa-brands fa-github"></i> شوف كل المشاريع على GitHub
        </a>
      </div>
    </section>
  );
}
