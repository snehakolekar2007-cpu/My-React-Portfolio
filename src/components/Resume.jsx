
function Resume() {
  return (
    <section id="resume" className="section">
      <h2>My Resume</h2>

      <p>
        Want to know more about my education,
        technical skills and projects?
        Download my resume below.
      </p>

      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
