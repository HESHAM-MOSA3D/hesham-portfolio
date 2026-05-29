import { useEffect, useRef } from "react";

const skills = [
  { icon: <><i className="devicon-angularjs-plain colored"></i></>, name:"Angular & TypeScript", desc:"بناء تطبيقات ويب احترافية باستخدام Angular مع كود TypeScript منظم وقابل للتوسع.", level:85 },
  { icon: <><i className="devicon-html5-plain colored"></i><i className="devicon-css3-plain colored"></i></>, name:"HTML & CSS", desc:"تصميم واجهات حديثة ومتجاوبة باستخدام HTML5 و CSS3 مع اهتمام بالتفاصيل.", level:90 },
  { icon: <><i className="devicon-csharp-plain colored"></i><i className="devicon-dotnetcore-plain colored"></i></>, name:"C# & .NET", desc:"تطوير تطبيقات Desktop وأنظمة قوية باستخدام C# و .NET Framework.", level:80 },
  { icon: <><i className="fa-solid fa-microchip"></i></>, name:"VHDL & Hardware", desc:"تصميم المعالجات والدوائر الرقمية مثل MIPS Processor باستخدام VHDL.", level:75 },
  { icon: <><i className="devicon-python-plain colored"></i></>, name:"Python", desc:"أتمتة المهام وتطوير Scripts وبرامج مختلفة باستخدام Python.", level:70 },
  { icon: <><i className="fa-solid fa-database"></i><i className="fa-solid fa-plug"></i></>, name:"Databases & APIs", desc:"تصميم قواعد البيانات والتعامل مع REST APIs والتكامل بين الأنظمة.", level:72 },
];

function SkillCard({ icon, name, desc, level }) {
  const barRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && barRef.current) barRef.current.style.width = level + '%';
    }, { threshold: 0.5 });
    if (barRef.current) obs.observe(barRef.current.parentElement);
    return () => obs.disconnect();
  }, [level]);
  return (
    <div className="skill-card reveal">
      <span className="skill-icon">{icon}</span>
      <div className="skill-name">{name}</div>
      <div className="skill-desc">{desc}</div>
      <div className="skill-bar-wrap">
        <div ref={barRef} className="skill-bar"/>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-header reveal">
        <p className="section-label">مهاراتي وخدماتي</p>
        <h2 className="section-title">ماذا أقدم لك؟</h2>
      </div>
      <div className="skills-grid">
        {skills.map(s => <SkillCard key={s.name} {...s}/>)}
      </div>
    </section>
  );
}
