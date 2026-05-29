export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <div className="contact-box">
        <p className="section-label">تواصل معي</p>
        <h2 className="contact-title">لنبني شيئاً <br/>مميزاً معاً</h2>
        <p className="contact-sub">هل لديك مشروع في ذهنك؟ أو تريد التعاون؟ — لا تتردد في التواصل.</p>
        <a href="mailto:heshamelnjar@gmail.com" className="contact-email">heshamelnjar@gmail.com</a>
        <div className="social-links">
          <a href="https://github.com/HESHAM-MOSA3D" target="_blank" className="social-btn github">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/hesham-najjar/" target="_blank" className="social-btn linkedin">
            <i className="fab fa-linkedin-in"></i> LinkedIn
          </a>
          <a href="https://wa.me/201015873407" target="_blank" className="social-btn whatsapp">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
